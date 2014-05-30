(function() {

    // do not re-define
    if (window.TradeLookup) {
        return;
    }

    var dataStore = new DataStore('services/trades');

    var result;
    var $element;

    function show()
    {
        loadPage();
        return (result = $.Deferred()).promise();
    }

    function selectItem()
    {
        var selected = $('.list tr.info', $element).data('item');
        $element.modal('hide');
        result.resolve(selected);
    }

    function loadPage()
    {
        var $elem = $('#trade-lookup');
        var contentLoaded = true;

        if ($elem.length === 0) {
            contentLoaded = $.Deferred(function(deferred) {
                $('<div></div>')
                        .appendTo('body')
                        .load('pages/trade/lookup.html', function() {
                            initLookup();
                            bindInputs();
                            deferred.resolve();
                        });
            }).promise();
        }

        $.when(contentLoaded).done(function() {
            $element.modal('show');
            loadList();
        });
    }

    function loadList()
    {
        dataStore.get().done(function(items) {
            var $list = $element.find('.list');
            TableUtil.renderItems($list, ['name', 'ports'], items);
        });
    }

    function bindInputs()
    {
        $element.on('click', '.btn-select', selectItem);
    }

    function initLookup()
    {
        $element = $('#trade-lookup');
        $element.on('click', '.list tr', function() {
            $(this).siblings('.info').removeClass('info');
            $(this).addClass('info');
        });
    }

    // invoke initLookup onDOMReady
    $(initLookup);

    window.TradeLookup = {
        show: show
    };

})();