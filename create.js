function results(){
    var name = document.getElementById('name').value;
    var about = document.getElementById('about').value;
    var address = document.getElementById('address').value;
    var phoneno = document.getElementById('phoneno').value;
    var college = document.getElementById("college").value;
    var finals = "Name: "+ name+" " +"About: "+about+" " +"Address: "+address+" "+"Phone no: "+phoneno+" "+"College: "+college+" "
    document.getElementById('demos').textContent=finals;
}