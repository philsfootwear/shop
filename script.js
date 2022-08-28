//document.getElementById('submitButton').innerHTML = "Hello";
window.onload=function(){
    var name = '';
    var submitted = false;
    document.getElementById('submitButton').addEventListener('click', function(){
        document.getElementById('bgImgg').width = window.innerWidth;
        document.getElementById('bgImgg').height = window.innerHeight;
        if(submitted == false && !(document.getElementById('name').value == "")&& !(document.getElementById('email').value == "")&& !(document.getElementById('addy').value == "")){
            name = document.getElementById('name').value;
            alert(`THANK YOU ${name}`);
            submitted = true;
        }
        else if (submitted == true){
            alert('Reload to submit another form');
        }
        else {
            alert('Invalid Input');
        }
    });
}
