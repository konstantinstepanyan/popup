document.addEventListener('DOMContentLoaded', () => {
    
   class Popup {
       constructor(data) {
           const {targetSelector, popupSelector, 
                  displayPopup, popupHeight, popupWidth, 
                  popupTransition, autocloseTime,
                  closeBtnSelector, closeOnMiss, closeOnKeys} = data;
           
           this.targetSelector = targetSelector;
           this.popupSelector = popupSelector;
           this.displayPopup = displayPopup;
           this.popupHeight = popupHeight;
           this.popupWidth = popupWidth;
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
           this.disappearance();
           
           this.popupTrigger.addEventListener('click', this.appearance.bind(this));
           this.popupTrigger.addEventListener('touchstart', this.appearance.bind(this));
           
           this.closeBtn.addEventListener('click', this.disappearance.bind(this));
           this.closeBtn.addEventListener('touchstart', this.disappearance.bind(this));
           
       }
       
       
       appearance(){
           this.popupWindow.style.height = this.popupHeight;
           this.popupWindow.style.width = this.popupWidth;
           this.popupWindow.style.opacity = 1;
           this.popupWindow.style.transition = `opacity 2s ease, height 0s ease 0s`;
       }
       
       
       disappearance(){
           this.popupWindow.style.height = 0;
           this.popupWindow.style.opacity = 0;
           this.popupWindow.style.transition = `opacity 2s ease, height 0s ease 2s`;
       }
              
   } 
    
    const popup = new Popup({
        targetSelector: '.popup-trigger',
        popupSelector: '.popup',
        closeBtnSelector: '.popup__close',
        displayPopup: 'flex',
        popupHeight: '100vh',
        popupWidth: '100%',
        //autocloseTime: 10000, //ms
        closeOnMiss: true,
        closeOnKeys: ''
        });
});