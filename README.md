# Intersection Observer Photo Gallery

Simple showcase of intersection observer to lazy load images and to add animations to both entering into new photos and leaving them. An observer is placed on all the images. 

## Used

* Vanilla Javascript
* HTML5
* CSS3

## Note

The observer could be destroyed when the image loads but is kept in this example in order to be able to animate leaving the image and having it appear again. (For lazy loading width and height must be designated for element. img tag in this case)

```javascript
// intersectionObserver callback
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
```

* As of Dec 2020 Safari has still not implemented browser level lazy loading.
```html
<img src="images\crater-lake-277123_1920.jpg" alt="" loading="lazy" width="1920" height="1080" >
```

## License
[MIT](https://choosealicense.com/licenses/mit/)