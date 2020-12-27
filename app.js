// is intersecting is simply 
// If this is true, then, the IntersectionObserverEntry describes a 
// transition into a state of intersection; if it's false, then you know the transition is from intersecting to not-intersecting.
// example 0 intersection -> .5 intersection (observer fires callback) isIntersecitn = true
// 1 intersectionRatio (whole element visible) keep scrolling till .5 is visible (callback fires) is Intersecting = false since we are transition from intersectin to non intersecting

const target = document.querySelector("#target");
const images = document.querySelectorAll(".container img");


// animate the h1 sliding in
const heading = document.querySelector("h1");
setTimeout(() => {
  heading.style.transform = "translateX(0px)"
  heading.style.opacity = 1;
  heading.st
},0)




// entries argument
let callback = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
    let currentY = entry.boundingClientRect.y;
    let currentRatio = entry.intersectionRatio;
    let isIntersecting = entry.isIntersecting
    
    if (isIntersecting) {
      if (currentRatio > 0) {
        entry.target.setAttribute('src', entry.target.dataset.src);
        entry.target.classList.add('appear');
      }
    } else {
      entry.target.classList.remove("appear");
    }    
  })
}



// intersection observer options
let options = {
  root: null, // this will default to the browser viewport 
  rootMargin: "0px",
  threshold: [.25] // this waits for about a quarter of the element to be visible
}


let observer = new IntersectionObserver(callback, options);
images.forEach(img => {
  // put an IntersectionObserver on all the images
  // When you instantiate an instance of the IntersectionObserver the callback 
  // will be fired immediately as well as when the intersection of given threshold is hit
  observer.observe(img);   
})

