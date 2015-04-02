var jobId = null;
$(document).ready( function() {

    $('#datagrid').datagrid({
        url: "/ajax/person",
        col: [
            {
                field: "name",
                title: "Name",
                sortable: true
            },
            {
                field: "birthAt",
                title: "Birth At",
                sortable: true
            },
            {
                field: 'id',
                title: 'View',
                render: function(data) {
                    return '<a href="/person/' + data.value + '">View<a>';
                }
            }
        ],
        attr: {
            "class": "table table-bordered table-condensed"
        },
        paramsDefault: { jobId: jobId},
        sorter: "bootstrap",
        pager: "bootstrap"
    });
});

