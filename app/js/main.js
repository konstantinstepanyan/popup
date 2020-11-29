document.addEventListener('DOMContentLoaded', () => {
    
   class Popup {
       constructor(data) {
           const {targetSelector, overlaySelector, windowSelector,
                  closeBtnSelector, displayPopup, 
                  popupHeight, popupWidth, 
                  transitionTime, transitionType,
                  autocloseTime, closeOnMiss, closeOnKeys} = data;
           
           this.targetSelector = targetSelector;
           this.overlaySelector = overlaySelector;
           this.windowSelector = windowSelector;
           this.closeBtnSelector = closeBtnSelector;
           this.displayPopup = displayPopup;
           this.popupHeight = popupHeight;
           this.popupWidth = popupWidth;
           this.transitionTime = transitionTime;
           this.transitionType = transitionType || 'ease';
           this.autocloseTime = autocloseTime;
           this.closeOnMiss = closeOnMiss;
           this.closeOnKeys = closeOnKeys;
           
           this.popupTrigger = document.querySelector(`${this.targetSelector}`);
           this.popupOverlay = document.querySelector(`${this.overlaySelector}`);
           this.popupWindow = document.querySelector(`${this.windowSelector}`);
           this.closeBtn = document.querySelector(`${this.closeBtnSelector}`);
           
           this.init();
       }
          
       init(){
           this.disappearance();
           
           this.popupTrigger.addEventListener('click', this.appearance.bind(this));
           this.popupTrigger.addEventListener('touchstart', this.appearance.bind(this));
           
           this.closeBtn.addEventListener('click', this.disappearance.bind(this));
           this.closeBtn.addEventListener('touchstart', this.disappearance.bind(this));
           
           if(this.closeOnMiss){
               this.popupOverlay.addEventListener('click', (e)=> { 
                   if(e.target.classList.contains(`${this.overlaySelector.slice(1)}`))
                   { 
                   this.disappearance();   
                   }
               });
               this.popupOverlay.addEventListener('touchstart', (e)=> { 
                   if(e.target.classList.contains(`${this.overlaySelector.slice(1)}`))
                   { 
                   this.disappearance();   
                   }
               });
           }
       }
       
       appearance(){
           this.popupOverlay.style.height = this.popupHeight;
           this.popupOverlay.style.width = this.popupWidth;
           this.popupOverlay.style.opacity = 1;
           this.popupOverlay.style.transition = `opacity ${this.transitionTime/1000}s ${this.transitionType}, height 0s ${this.transitionType} 0s`;
       }
         
       disappearance(){
           this.popupOverlay.style.height = 0;
           this.popupOverlay.style.opacity = 0;
           this.popupOverlay.style.transition = `opacity ${this.transitionTime/1000}s ${this.transitionType}, height 0s ${this.transitionType} ${this.transitionTime/1000}s`;
           
       }
               
   }  
     
    const popup = new Popup({
        targetSelector: '.popup-trigger',
        overlaySelector: '.popup',
        windowSelector: '.popup__window',
        closeBtnSelector: '.popup__close',
        displayPopup: 'flex',
        popupHeight: '100vh',
        popupWidth: '100%',
        transitionTime: 1000, //ms
        transitionType: 'linear', //default val: ease
        //autocloseTime: 10000, //ms
        closeOnMiss: true, 
        closeOnKeys: ''
        });
});