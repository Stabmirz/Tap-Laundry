$(document).ready(function() {
    $('#table').DataTable();
} );


function popup(){

    var htmlContent = document.createElement("div");
    htmlContent.innerHTML = "Unit:<br><input type='text' value='ex. \"lb\",\"item\",or \"bag\"'><br>Cost per Unit:<br><input type='text' value='0.00'><br>Cost per Unit for Rush Orders:<br><input type='text' value='0.00'><br>Driver Pay per Unit:<br><input type='text' value='0.00'><br><span>Driver Pay per Unit for Rush Orders:</span><br><input type='text' value='0.00'><br><p id='note'>Note:These changes will take effect only for orders created after the current date and time.</p>"
    swal({  
        title: 'New Global Price',
        content: htmlContent,
        buttons: ['Cancel', 'OK'],
    })
        
}
//     swal({  
//         title: 'New Global Price',
//         content: {
//         text: 'Unit',
//         element: 'input',
//         attributes: {
//             placeholder: 'ex. "lb","item",or "bag"',
//         },
//         },
//         content: {
//         text: 'Cost per Unit',
//         element: 'input',
//             attributes: {
//                 placeholder: 'ex. 0.00',
//             },
//         },
//         content: {
//         text: 'Cost per Unit for Rush Orders',
//         element: 'input',
//             attributes: {
//                 placeholder: 'ex. 0.00',
//             },
//         },
//         content: {
//         text: 'Driver Pay per Unit',
//         element: 'input',
//             attributes: {
//                 placeholder: 'ex. 0.00',
//             },
//         },
//         content: {
//         text: 'Driver Pay per Unit for Rush Orders',
//         element: 'input',
//             attributes: {
//                 placeholder: 'ex. 0.00',
//             },
//         },
//         buttons: ['Cancel', 'OK'],
//     })
        
// }
