const open = document.querySelector('#open'),
      close = document.querySelector('#close'),
      nav = document.querySelector('nav'),
      menu = document.querySelector('.menu');
open.addEventListener('click', ()=>{
    nav.style.top = `0px`;
    open.style.opacity = `0`;
    close.style.opacity = `1`;
    menu.style.height = `auto`;
});
close.addEventListener('click', ()=>{
    nav.style.top = `-300px`;
    open.style.opacity = `1`;
    close.style.opacity = `0`;
    menu.style.height = `0`;
});