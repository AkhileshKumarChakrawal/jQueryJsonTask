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


$(document).ready(function(){
    $.getJSON('employee.json', function(data) {
        console.log(data.employee);
        var temp = "";
        data.employee.forEach((u)=> {
            console.log(u.ename+" "+u.type);
        preptable(u.eid , u.ename , u.type , u.dob , u.exp , u.doj);
    });
    });
});

$('#bt8').click(function () {
    $('form').show();
    $('#tbldiv').toggle();
    $('#bt8').toggle();
});
//var arr = [];
$('#bt').click(function () {
    rege();
    $('form').toggle();
    $('#tbldiv').toggle();
    $('#bt8').toggle();
});
function rege(){

    var empid = document.myform.eid.value;
    var empname = document.myform.ename.value;
    var emptype = document.myform.type.value;
    var empdob = document.myform.dob.value;
    var empexp = document.myform.exp.value;
    var empdoj = document.myform.doj.value;

    console.log(empid+" "+empname+" "+emptype+" "+empdob+" "+empexp+" "+empdoj);
    var obj = {eid : empid, ename: empname, type : emptype, dob : empdob, exp : empexp, doj : empdoj};
    console.log(obj);
    localStorage.std = JSON.stringify(obj);
    console.log(localStorage.std);
    init(localStorage.std);
}

function init(detail){
    if(localStorage.std){
        stdarr = JSON.parse(localStorage.std);
        var id = stdarr.eid;
        var name = stdarr.ename;
        var type = stdarr.type;
        var dob = stdarr.dob;
        var exp = stdarr.exp;
        var doj = stdarr.doj;
        // console.log(user+" "+pass);
        preptable(id , name , type , dob , exp , doj);

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
    td1.innerHTML = id;
    td2.innerHTML = name;
    td3.innerHTML = type;
    td4.innerHTML = dob;
    td5.innerHTML = exp;
    td6.innerHTML = doj;
    td7.innerHTML = '<button class = "deltrow" type="button">delete</button>';
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    tr1.append(td4);
    tr1.append(td5);
    tr1.append(td6);
    tr1.append(td7);
    document.getElementById('tb').append(tr1);
}

$(document).on('click','.deltrow',function () {
    $(this).parents('tr').remove();
});