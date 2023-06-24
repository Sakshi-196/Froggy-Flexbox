const buttonElement=document.querySelector('button');

function addcss(){
    const textareaElement=document.querySelector('textarea')
    const css=textareaElement.value
    const foreFront=document.querySelector('#forefront')
    foreFront.style.cssText=css
    console.log(foreFront)
 
 
 }

buttonElement.addEventListener('click',addcss)