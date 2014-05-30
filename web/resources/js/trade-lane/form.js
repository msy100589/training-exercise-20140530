(function() {

    var dataStore = new DataStore("services/tradelanes");
    var result;
    var $element;

    function show()
    {
        $('.form', $element).removeAttr('hidden');
        $('.form input:text', $element).val('');
        $('.form input:text:first', $element).focus();
        return (result = $.Deferred()).promise();
    }

    function save()
    {
        var item = {
            name: $('.form input[name=name]', $element).val(),
            originTradeName: $('.form input[name=originTradeName]', $element).val(),
            destTradeName: $('.form input[name=destTradeName]', $element).val()
        };

        dataStore.post(item).done(function() {
            $('.form', $element).attr('hidden', 'hidden');
            result.resolve(item);
        });
    }

    function cancel()
    {
        $('.form', $element).attr('hidden', 'hidden');
        result.reject();
    }

    function lookupOrigin()
    {
        TradeLookup.show().done(function(trade) {
            if (trade) {
                $('.form input[name=originTradeName]', $element).val(trade.name);
            }
        });
    }

    function lookupDest()
    {
        TradeLookup.show().done(function(trade) {
            if (trade) {
                $('.form input[name=destTradeName]', $element).val(trade.name);
            }
        });
    }

    function bindInputs()
    {
        $element.on('click', '.form .btn-save', save);
        $element.on('click', '.form .btn-cancel', cancel);
        $element.on('click', '.form .btn-search-origin', lookupOrigin);
        $element.on('click', '.form .btn-search-dest', lookupDest);
    }

    // make global
    window.TradeLaneForm = {
        show: show
    };

    // page initializer
    $(function() {
        $element = $('#trade-lane');
        bindInputs();
    });

})();