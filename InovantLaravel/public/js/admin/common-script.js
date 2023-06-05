
$(document).ready(function() {

    var URL = window.location;
    var JSONurl = JSON.stringify(URL);
    var JSONurl = JSON.parse(JSONurl);
    var base_path = JSONurl.origin;
    var URLArray = JSONurl.pathname.split('/');

    // Navigation Link Active
    $('.sidebar .has-treeview').removeClass('menu-open');
    $('.sidebar .nav-link').removeClass('active');
    $('#'+URLArray[2]+'-dd').addClass('menu-open');
    $('#'+URLArray[2]).addClass('active');
    $('#'+URLArray[2]).next('ul.nav-treeview').find('a.'+URLArray[3]).addClass('active');
    // $('#'+URLArray[2]+'-dd').next().find('a.'+URLArray[3]).addClass('active');

    /** to close toast */
    window.setTimeout(function() {
        $("#alert-success").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
        $("#alert-danger").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 3000);

    /** dataTables */
    $(function () {
        $("#example1, .simple-dataTable").DataTable({
        "responsive": true,
        "autoWidth": false,
        "columnDefs": [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            }
        ],
        "order": [
            [1,'asc']
        ]
        });
    });

    /** delete modal */
    $('.deleteModalEditBtn').click(function(){
        $tr = $(this).closest('tr');
        var data = $(this).closest('table').DataTable().row($tr).data();
        var route = $(this).attr("data-route");

        $('#deleteModalHref').attr('href',base_path+route+data[0]);
    });

    $(function () {
        // Summernote
        $('.textarea-limited').summernote({
        height: 100, 
        })
    })
        
    $(function () {
        //Initialize Select2 Elements
        $('.related-prodect, .related-applications, .multiple-searchable-dropdown').select2({
        allowClear: true
        })

        //Initialize Select2 Elements
        // $('.select2bs4').select2({
        //   theme: 'bootstrap4'
        // })
    })
})