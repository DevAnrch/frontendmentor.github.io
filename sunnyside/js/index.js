const buttonOfOpen = document.getElementById('bar')
const menu = document.getElementById('c-menuToggle')
const buttonOfClose = document.getElementById('menuButton__close')

buttonOfOpen.addEventListener('click', (e) => {
   
   buttonOfOpen.classList.add('disable-button') //remove click of button, for don't possible bug this button

   if(buttonOfClose.classList.contains('disable-button')) { //verify click of button, for don't possible bug this button
      buttonOfClose.classList.remove('disable-button')
   }

   menu.style.top = '0'
   showMenu(e.target,menu)

},false)

buttonOfClose.addEventListener('click', () => {

   setTimeout(() => {
      menu.style.top = '300px'
      verifyStateClassCss(menu,'show','hidden')
   }, 1000);
   
   buttonOfOpen.classList.remove('disable-button') //active button open click 
   buttonOfClose.classList.add('disable-button') //remove click of button, for don't possible bug this button

}, false)

function verifyStateClassCss(element,classOfDetect,classForAdd) {
   if(element.classList.contains(`${classOfDetect}`)) {
      element.classList.remove(classOfDetect)
      element.classList.add(classForAdd)
   }
   else if(element.classList.contains(`${classForAdd}`)) {
      element.classList.remove(classForAdd)
      element.classList.add(classOfDetect)
   }
}

function showMenu(clickElement,menuElement) {

   let buttonElement = clickElement
   let menu = menuElement

   verifyStateClassCss(menu,'hidden','show') 
}

const cards = document.querySelectorAll('.jsMixin_active')
const imgCard = document.querySelectorAll('.c-cardCreation__img')

cards.forEach((element,index) => {
 
})
