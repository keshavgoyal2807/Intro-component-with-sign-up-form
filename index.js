const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('Email');
const pass = document.getElementById('Password');
const button = document.getElementsByClassName('button')
var fn=false,ln=false,em=false,pa=false;

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

first_name.addEventListener('input',(e)=>{
    // console.log(e.target.value)
    first_name.placeholder=""
    if(e.target.value=="")
    {
        document.getElementsByClassName('errorfn')[0].style.display="block";
        document.getElementsByClassName('errorfn')[1].style.display="block";
        fn=false;
    }
    else{
        document.getElementsByClassName('errorfn')[0].style.display="none";
        document.getElementsByClassName('errorfn')[1].style.display="none";
        fn=true;
    }
})

last_name.addEventListener('input',(e)=>{
    // console.log(e.target.value)
    last_name.placeholder=""
    if(e.target.value=="")
    {
        document.getElementsByClassName('errorln')[0].style.display="block";
        document.getElementsByClassName('errorln')[1].style.display="block";
        ln=false;
    }
    else{
        document.getElementsByClassName('errorln')[0].style.display="none";
        document.getElementsByClassName('errorln')[1].style.display="none";
        ln=true;
    }
})

email.addEventListener('input',(e)=>{
    // console.log(e.target.value)
    email.placeholder=""
    if(e.target.value=="")
    {
        document.getElementsByClassName('errore')[0].style.display="block";
        document.getElementsByClassName('errore')[1].style.display="block";
        document.getElementsByClassName('errore')[2].style.display="block";
        em=false;
    }
    else if(!validateEmail(e.target.value))
    {
        document.getElementsByClassName('errore')[0].style.display="block";
        document.getElementsByClassName('errore')[1].style.display="block";
        document.getElementsByClassName('errore')[2].style.display="block";
        em=false;
    }
    else{
        document.getElementsByClassName('errore')[0].style.display="none";
        document.getElementsByClassName('errore')[1].style.display="none";
        document.getElementsByClassName('errore')[2].style.display="block";
        em=true;
    }
})

pass.addEventListener('input',(e)=>{
    // console.log(e.target.value)
    pass.placeholder=""
    if(e.target.value=="")
    {
        document.getElementsByClassName('errorpa')[0].style.display="block";
        document.getElementsByClassName('errorpa')[1].style.display="block";
        pa=false;
    }
    else{
        document.getElementsByClassName('errorpa')[0].style.display="none";
        document.getElementsByClassName('errorpa')[1].style.display="none";
        pa=true;
    }
})

button[0].addEventListener('click',(e)=>{

    e.preventDefault();

    first_name.placeholder=""
    last_name.placeholder=""
    email.placeholder=""
    pass.placeholder=""

    if(!fn)
    {
        document.getElementsByClassName('errorfn')[0].style.display="block";
        document.getElementsByClassName('errorfn')[1].style.display="block";   
    }
    if(!ln)
    {
        document.getElementsByClassName('errorln')[0].style.display="block";
        document.getElementsByClassName('errorln')[1].style.display="block";
    }
    if(!em)
    {

        document.getElementsByClassName('errore')[0].style.display="block";
        document.getElementsByClassName('errore')[1].style.display="block";
        document.getElementsByClassName('errore')[2].style.display="block";
    }
    if(!pa)
    {
        document.getElementsByClassName('errorpa')[0].style.display="block";
        document.getElementsByClassName('errorpa')[1].style.display="block";
    }
})
