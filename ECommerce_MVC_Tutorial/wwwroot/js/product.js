$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/product/getall' },
        "columns": [
            { data: 'title', "width": "20%" },
            { data: 'isbn', "width": "20%" },
            { data: 'listPrice', "width": "20%" },
            { data: 'author', "width": "20%" },
            { data: 'category.name', "width": "20%" },
            {
                data: 'id', 'render': function (data) {
                    return `
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                                <a href='/admin/product/upsert?id=${data}' class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    Edit
                                </a>
                                <a href='/admin/product/delete/${data}' class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    Delete
                                </a>
                            </div>
                    `
                }, 'width': '20%'
            }
        ]
    });
}

