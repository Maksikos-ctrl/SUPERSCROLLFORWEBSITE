// This work was done by Maxim Chernikov
// My email adress: maksikos973@gmail.com
// GitHub account: Maksikos-ctrl

const animItems = document.querySelector('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
     function animOnScroll(params) {
         for (let index = 0; index < animItems; index++) {
             const animItem = animItems[index];
             const animItemHeight = animItem.offsetHeight;
             const animItemOffset = offset( animItem).top;
             const animStart = 4;

             let animItemPoint = window.innerHeight - animItemHeight / animStart;
             if (animItemHeight > window.innerHeight){
                 animItemPoint = window.innerHeight - window.animItemHeight / animStart;
             }

             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                 animItem.classlist.add('_active');
             } else{
                 if (!animItem.classlist.contains('_anim-no-hide')){
                    animItem.classlist.remove('_active'); 
                 }
            }
         }
     }
     function offset(el) {
         const rect = el.getBoundingClientRect(),
             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }    
     }

     setTimeout(() => {
         animOnScroll();
     }, 300);
}