window.addEventListener("scroll",animeScrol)

const elements = document.querySelectorAll('[data-anime]');
const classAnime = "animate"

function animeScrol(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85);
    elements.forEach(element => {
        const position = element.offsetTop;
      if(windowTop > position){
          element.classList.add(classAnime);
      }else{
          element.classList.remove(classAnime)
      }
    })
}

setTimeout(()=>{
    animeScrol()
},300)
