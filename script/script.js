document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.btn-mobile');
    const nav = document.querySelector('.nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}