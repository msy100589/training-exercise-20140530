(function() {

    var dataStore = new DataStore('services/trades');
    var $element;

    function addItem()
    {
        $('.items', $element).attr('hidden', 'hidden');
        TradeForm.show()
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
            TableUtil.renderItems($list, ['name', 'ports'], items);
        });
    }

    function showPage()
    {
        $('.items', $element).removeAttr('hidden');
    }

    function bindInputs()
    {
        $element.on('click', '.items .btn-add', addItem);
    }

    // initializer
    $(function() {
        $element = $('#trade');
        bindInputs();
        showPage();
        refreshList();
    });

})();