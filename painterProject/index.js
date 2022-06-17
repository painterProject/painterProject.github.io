
const open = document.querySelector('#open'),
      close = document.querySelector('#close'),
      menu = document.querySelector('.menu');
open.addEventListener('click', ()=>{
    menu.style.top = `0px`;
});
close.addEventListener('click', ()=>{
    menu.style.top = `-300px`;
});