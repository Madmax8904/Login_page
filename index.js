function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email !='' && password !='')
     if(email =='akhil@gmail.com' && password =='123456')
        window.location.assign('home.html')
    else{
        alert('invalid user')
    }else{
        alert('please enter value')
    }
    
}