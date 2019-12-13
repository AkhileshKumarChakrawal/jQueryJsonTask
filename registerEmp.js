// Disable form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// fatching json data from employeee.json file
$(document).ready(function(){
    $.getJSON('employee.json', function(data) {
        var temp = "";
        data.employee.forEach((u)=> {
            //calling dynamically created table and passing all json data into dynamic table
        preptable(u.eid , u.ename , u.type , u.dob , u.exp , u.doj);
    });
    });
});

// hide and show form field and table after click the button
$('#bt8').click(function () {
    $('form').show();
    $('#tbldiv').toggle();
    $('#bt8').toggle();
});

$('#bt').click(function () {
    // calling function which has form data in json formate
    getdataFromForm();
    $('form').toggle();
    $('#tbldiv').toggle();
    $('#bt8').toggle();
});

function getdataFromForm(){
    var empid = document.myform.eid.value;
    var empname = document.myform.ename.value;
    var emptype = document.myform.type.value;
    var empdob = document.myform.dob.value;
    var empexp = document.myform.exp.value;
    var empdoj = document.myform.doj.value;

    // creating object for form data
    var obj = {eid : empid, ename: empname, type : emptype, dob : empdob, exp : empexp, doj : empdoj};

    // convert object in json formate and store in local storage
    localStorage.std = JSON.stringify(obj);

    //calling function which is store json data in dynamic table
    init(localStorage.std);
}

function init(detail){
    if(localStorage.std !=null){
        stdarr = JSON.parse(localStorage.std);

        //passing json data in dynamically created table
        preptable(stdarr.eid , stdarr.ename , stdarr.type , stdarr.dob , stdarr.exp , stdarr.doj);
    }
}

function preptable(id , name , type , dob , exp , doj){
    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    td1.innerHTML = id;td2.innerHTML = name;td3.innerHTML = type;td4.innerHTML = dob;
    td5.innerHTML = exp;td6.innerHTML = doj;
    td7.innerHTML = '<button class = "deltrow" type="button">delete</button>';
    tr1.append(td1);tr1.append(td2);tr1.append(td3); tr1.append(td4);tr1.append(td5);tr1.append(td6);tr1.append(td7);
    document.getElementById('tb').append(tr1);
}

//htis code is use for deleting one row at a time after click the button
$(document).on('click','.deltrow',function () {
    $(this).parents('tr').remove();
});