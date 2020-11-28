document.addEventListener('DOMContentLoaded', () => {
    
   class Popup {
       constructor(data) {
           const {targetSelector, popupSelector, displayPopup, popupTransition, autocloseTime, closeBtnSelector, closeOnMiss, closeOnKeys} = data;
           
           this.targetSelector = targetSelector;
           this.popupSelector = popupSelector;
           this.displayPopup = displayPopup;
           this.popupTransition = popupTransition;
           this.autocloseTime = autocloseTime;
           this.closeBtnSelector = closeBtnSelector;
           this.closeOnMiss = closeOnMiss;
           this.closeOnKeys = closeOnKeys;
           
           this.popupTrigger = document.querySelector(`${this.targetSelector}`);
           this.popupWindow = document.querySelector(`${this.popupSelector}`);
           this.closeBtn = document.querySelector(`${this.closeBtnSelector}`);
           
           this.init();
       }
          
       init(){
           this.popupWindow.style.transition = this.popupTransition;    
           this.popupWindow.style.display = 'none';   
           
           this.popupWindow.style.opacity = 0;           
                
           this.popupTrigger.addEventListener('click', this.appearance.bind(this));
           this.popupTrigger.addEventListener('touchstart', this.appearance.bind(this));
           
           this.closeBtn.addEventListener('click', this.disappearance.bind(this));
           this.closeBtn.addEventListener('touchstart', this.disappearance.bind(this));
           
           this.popupWindow.addEventListener('transitionend', ()=>{
               if(this.popupWindow.style.display != 'none' && this.popupWindow.style.opacity == 0){
                   this.popupWindow.style.display = 'none';
               } 
           });
           
       }
       
       
       appearance(){
           this.popupWindow.style.display = this.displayPopup;   
           setTimeout(()=>{this.popupWindow.style.opacity = 1},1);  //найти более элегантное решение на Тостере
           
           if(this.autocloseTime){
               setTimeout(()=>{
                   this.disappearance();  
               }, this.autocloseTime)
           }
       }
       
       
       disappearance(){
           this.popupWindow.style.opacity = 0;   
           
       }
              
   } 
    
    const popup = new Popup({
        targetSelector: '.popup-trigger',
        popupSelector: '.popup',
        closeBtnSelector: '.popup__close',
        displayPopup: 'flex',
        popupTransition: 'all 1s linear',
        
        //autocloseTime: 10000, //ms
        closeOnMiss: true,
        closeOnKeys: ''
        });
});