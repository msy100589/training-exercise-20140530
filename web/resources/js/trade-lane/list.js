(function() {

    var dataStore = new DataStore("services/tradelanes");
    var $element;

    function addItem()
    {
        $('.items', $element).attr('hidden', 'hidden');
        TradeLaneForm.show()
                .always(function() {
                    showPage();
                })
                .done(function(item) {
                    refreshList();
                });
    }

    function refreshList()
    {
        dataStore.get().done(function(items) {
            var $list = $('.items .list', $element);
            TableUtil.renderItems($list, ['name', 'originTradeName', 'destTradeName'], items);
        });
    }

    function showPage()
    {
        $('.items', $element).removeAttr('hidden');
        refreshList();
    }

    function bindInputs()
    {
        $element.on('click', '.items .btn-add', addItem);
    }

    // initializer
    $(function() {
        $element = $('#trade-lane');
        bindInputs();
        showPage();
        refreshList();
    });

})();