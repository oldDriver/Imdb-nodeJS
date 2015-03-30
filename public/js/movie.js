$(document).ready( function() {

    $('#datagrid').datagrid({
        url: "/ajax/movie",
        col: [
            {
                field: "year",
                title: "Year",
                sortable: true
            },
            {
                field: "title",
                title: "Title",
                sortable: true
            },
            {
                field: 'id',
                title: 'View',
                render: function(data) {
                    return '<a href="/movie/' + data.value + '">Edit<a>';
                }
            }
        ],
        attr: {
            "class": "table table-bordered table-condensed"
        },
        sorter: "bootstrap",
        pager: "bootstrap"
    });
});

