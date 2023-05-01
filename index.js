function toggleClass(elem, classes){
  return elem.classList.toggle(classes);
}

document.querySelector('#side-opener').addEventListener('click', () =>{
  toggleClass(event.currentTarget, 'opened');
})


$( document ).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        draggable: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false
              }
            }
        ]
      });

      $('.blogs-slick-slider').slick({
        infinite: false,
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          }
        ]
      });
});