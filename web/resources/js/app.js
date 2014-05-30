$(function() {
    
    $('#navbar a').click(onNavAnchorClicked);

    function onNavAnchorClicked(e)
    {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#content').load(href.substr(1));
    }

});