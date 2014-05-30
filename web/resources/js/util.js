var TableUtil = {
    renderItems: function(selector, cols, items)
    {
        var $table = $(selector).empty();
        if (!items) return;

        $.each(items, function(idx, item) {
            var $tr = $('<tr></tr>').appendTo($table).data('item', item);
            $.each(cols, function(idx, col) {
                $('<td></td>').text(item[col]).appendTo($tr);
            });
        });
    }
};