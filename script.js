function validate(){
    var username = document.getElementById("username");
    var passwd = document.getElementById("passwd");

    if(username.value != "" && passwd.value != ""){
        if(username.value == passwd.value){
            var text = document.getElementById("headerPTag");
            text.textContent = "Login Approved!";
            text.style.color = "green";
            text.style.fontSize = "30px";
            

        }
        else{
            var text = document.getElementById("headerPTag");
            text.textContent = "Login Denied!";
            text.style.color = "red";
            text.style.fontSize = "30px";
        };
    }
    else{
        var text = document.getElementById("headerPTag");
        text.textContent = "Emty Field!";
        text.style.color = "orange";
        text.style.fontSize = "30px";
        

    };

}

