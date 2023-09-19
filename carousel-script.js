let btn = document.getElementsByClassName("button");
let i;
let allSlides = document.getElementsByClassName("slides");

    let slideIndex = 1;
    slideShow(slideIndex);

    btn[0].addEventListener('click', function() {slidePlus(-1)});
    btn[1].addEventListener('click', function() {slidePlus(1)});

    function slidePlus(n) {
      slideShow(slideIndex += n);
    }

    function slideShow(n) {
      for(i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
      }

      if(n > allSlides.length) {slideIndex = 1}
      if(n < 1) {slideIndex = allSlides.length}

      allSlides[slideIndex - 1].style.display = "block";
    }
    