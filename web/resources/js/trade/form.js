(function() {

    var dataStore = new DataStore('services/trades');
    var result;
    var $element;

    function show()
    {
        $('.form', $element).removeAttr('hidden');
        $('.form input:text', $element)
                .val('')
                .filter(':first').focus();

        return (result = $.Deferred()).promise();
    }

    function save()
    {
        var form = $('.form form', $element)[0];
        var item = {
            name: form.name.value,
            ports: form.ports.value
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

    function bindInputs()
    {
        $element.on('click', '.form .btn-save', save);
        $element.on('click', '.form .btn-cancel', cancel);
    }

    // make global
    window.TradeForm = {
        show: show
    };

    // page initializer
    $(function() {
        $element = $('#trade');
        bindInputs();
    });

})();