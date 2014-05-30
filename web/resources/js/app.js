$(function() {
    
    $('#navbar a').click(onNavAnchorClicked);

    function onNavAnchorClicked(e)
    {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#content').load(href.substr(1));
    }

    // define a global data store object
    window.DataStore = function(url)
    {
        this.post = function(data)
        {
            return $.ajax({
                url: url,
                data: data,
                type: 'POST'
            });
        };

        this.get = function(params)
        {
            return $.get(url, params);
        };
    };

});