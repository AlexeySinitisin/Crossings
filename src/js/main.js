
// import popup from  "./modules/popup.js";
document.addEventListener("DOMContentLoaded", () => {
  'use strict';
  function popup(e){

    const btns = document.querySelectorAll('.btn-callBack'),
          popup = document.querySelector('.popup'),
          close = document.querySelector('.order__close');
         
    btns.forEach(item =>{
        item.addEventListener("click", () =>{
         
          popup.classList.add("flex");
          document.body.style.overflow = "hidden";
        });
    })
    close.addEventListener('click', (e)=>{
      popup.classList.remove('flex');
      document.body.style.overflow = "";
    })

    popup.addEventListener('click',(e) =>{
      if(e.target === popup){
        popup.classList.remove('flex');
        document.body.style.overflow = "";
        console.log(e.target);
      }
    })

  
  };
  

  function slides(){

    const contents = document.querySelectorAll('.park__slide-content'),
          btnsTabs = document.querySelectorAll('.park__btn'),
          right = document.querySelector('.park__right-btn'),
          left = document.querySelector('.park__left-btn');
    let index = 1;

    function setActiveIndex(n){
      contents.forEach(item =>{
        item.classList.remove('flex');
      });
      btnsTabs.forEach(item =>{
        item.classList.remove('yellow__border');
      })
      contents[n].classList.add('flex');
      btnsTabs[n].classList.add('yellow__border');
    }

    setActiveIndex(index);

    left.addEventListener('click', ()=>{
      setActiveIndex(index);
      index = index - 1;
      if(index < 0){
        index = (contents.length - 1);
      }
    
    setActiveIndex(index); 
    });

    right.addEventListener('click', ()=>{
      setActiveIndex(index);
      index = index + 1;
      if(index > (contents.length - 1)){
        index = 0;
      }
      setActiveIndex(index);
    });

    btnsTabs.forEach((item, i) =>{
      item.addEventListener('click', ()=>{
          index = i;
          setActiveIndex(i);
      });
    });

  
  }
  

  function readMore(){
    const btns = document.querySelectorAll('.review__btn-more'),
          dots = document.querySelectorAll('.dots'),
          more = document.querySelectorAll('.more');

    let index;

    btns.forEach((item, i) =>{
      item.addEventListener('click', ()=>{
        index = i;
        dots[index].classList.add('none');
        more[index].classList.add('inline');
        btns[index].classList.add('none');
      });
    });

  }
  function burger(){
    const burgerBtn = document.querySelector('.nav__burger'),
          menu = document.querySelector('.nav__menu'),
          links = document.querySelectorAll('.nav__link > li')
    burgerBtn.addEventListener('click', ()=>{
      burgerBtn.classList.toggle('nav__burger_active');
      menu.classList.toggle('nav__menu_mobile');
      if(burgerBtn.classList.contains('nav__burger_active')){
        document.body.style.overflow = "hidden";
      }else{
        document.body.style.overflow = "";
      }
    });

    links.forEach(item =>{
      item.addEventListener('click', () =>{
        burgerBtn.classList.remove('nav__burger_active');
        menu.classList.remove('nav__menu_mobile');
        document.body.style.overflow = "";
      });
    });
  }
  function showAll(selectorBtn, selectorItem, displayType){
    const btn = document.querySelector(selectorBtn),
          allItem = document.querySelectorAll(selectorItem);
    btn.addEventListener('click', () =>{
      allItem.forEach(item =>{
        item.style.display = `${displayType}`;
      });
      btn.remove();
    }); 
  }
  function consentCheck(selectorChekbox, selectorBtn){
    const checkbox = document.querySelector(selectorChekbox),
          btnPopup = document.querySelector(selectorBtn);

    checkbox.addEventListener('click', ()=>{
      if(checkbox.checked){
        btnPopup.disabled = false;
        btnPopup.classList.remove('btn__off');
      }else{
        btnPopup.disabled = true;
        btnPopup.classList.add('btn__off');
      }
    })

  }

  consentCheck('#checkbox', ".form__btn-popup");
  consentCheck('#checkbox-page', '.form__btn-pages');
  showAll(".cost__allItem", ".cost__item", "flex");
  showAll(".review__All-btn", ".review__item", "block");
  burger();
  popup();
  slides();
  readMore();
  consentCheck();
});
