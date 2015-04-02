var genreId = null;
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
                    return '<a href="/movie/' + data.value + '">View<a>';
                }
            }
        ],
        attr: {
            "class": "table table-bordered table-condensed"
        },
        paramsDefault: { genreId: genreId},
        sorter: "bootstrap",
        pager: "bootstrap"
    });
});

