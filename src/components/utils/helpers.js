export const scrollToAction= (goTo)=>{
    document.querySelector('#'+ goTo).scrollIntoView({behavior: "smooth"});
};