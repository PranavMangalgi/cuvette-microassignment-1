const button = document.querySelector('button');

const submit = document.querySelector('.submit-details');

const dissappear = document.querySelector('.details p:nth-of-type(2)');


button.addEventListener("click",()=>{
    dissappear.classList.toggle('disp',true);
    submit.innerHTML='<h1>Thank You!</h1>'; 
})