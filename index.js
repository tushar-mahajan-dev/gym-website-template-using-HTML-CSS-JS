const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');

menuToggle.addEventListener('click', ()=> {
    nav.classList.toggle('active');
});


const counters=document.querySelectorAll('.counter');
const speed=300;

counters.forEach(counter =>{
    const updateCount =() => {
        const target =+counter.getAttribute('data-target');
        const count= +counter.innerText;

        const inc=target/speed;

    if(count < target){
        counter.innerText=count+inc;

        setTimeout(updateCount, 1);
    }else{
        counter.innerText=target;
    }
}
    updateCount();
});

