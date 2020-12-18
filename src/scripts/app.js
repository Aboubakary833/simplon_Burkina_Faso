
//Intersection observer

let ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  const AppIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
        } else {console.log('Invissible');}
    });
  }
 const observer = new IntersectionObserver(AppIntersection, options);
 document.querySelectorAll('.reveal-hidden').forEach(el => {
    observer.observe(el);
 });