$(document).ready(function() {
    $('#table').DataTable();
} );


function popup(){

    let htmlContent = document.createElement("div");
    htmlContent.innerHTML = "<span class='label'>Unit</span><br><input type='text' value='ex. \"lb\",\"item\",or \"bag\"'><br><span class='label'>Cost per Unit</span><br><input type='text' value='ex. 0.00'><br><span class='label'>Cost per Unit for Rush Orders</span><br><input type='text' value='ex. 0.00'><br><span class='label'>Driver Pay per Unit</span><br><input type='text' value='ex. 0.00'><br><span class='label'>Driver Pay per Unit for Rush Orders</span><br><input type='text' value='ex. 0.00'><br><p id='note'>Note: These changes will take effect only for orders created after the current date and time.</p>"
    swal({  
        title: 'New Global Price',
        content: htmlContent,
        buttons: ['Cancel', 'OK'],
        closeOnClickOutside: false
    })
        
}

