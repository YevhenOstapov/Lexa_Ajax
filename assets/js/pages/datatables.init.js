/*
  Name: Lexa - Admin & Dashboard  
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: andzukor@gmail.com
File: Datatables
*/



$(document).ready(function() {
    $('#datatable').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

    $(".dataTables_length select").addClass('form-select form-select-sm');


} );