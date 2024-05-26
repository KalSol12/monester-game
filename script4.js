


function checpassword() { 
    alert("helllo");
    console.log("jon");
        
    let message=document.getElementById('message').textContent;
        message.textContent="password much";
        message.style.backgroundColor=" #ffc400ec";
    let password=document.getElementById("pass").Value;
    let cnfrm_password=document.getElementById("confirmpass").Value;
    console.log(cnfrm_password,password);
    if (password==cnfrm_password) {
        message.textContent="password much";
        message.style.backgroundColor="#3ae374";
        
    }
    else{
        message.textContent="not  much  password";
        message.style.backgroundColor="#3ae374";
        
    }
alert("helllo");
    
  }
 /* alert("helllo");*/
