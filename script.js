const navbar= document.querySelector('.navbar')
const hamburger=document.querySelector('.hamburger')
const navList=document.querySelector('.nav-list')
window.addEventListener('scroll',()=>{
    if(this.scrollY >= 100){
        navbar.classList.add('scrolled')
    } else{
        navbar.classList.remove('scrolled')
    }
})


hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('active')
    hamburger.classList.toggle('active')
})

const readmorebtn=document.getElementById('Rdm-btn');
const extracontent=document.querySelector('.ext-content');


readmorebtn.addEventListener('click',function(){
    if(extracontent.style.display==='none' || extracontent.style.display=== ''){
        extracontent.style.display='inline';
        readmorebtn.textContent='Read Less';
    }else{
        extracontent.style.display='none';
        readmorebtn.textContent='Read More';
    }
});