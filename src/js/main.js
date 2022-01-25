(function($) { // Begin jQuery

  /* Индекс слайда по умолчанию */
  var slideIndex = 1;
  showSlides(slideIndex);
  
  document.getElementById("slideIndex").addEventListener("click", plusSlide);
  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {
      showSlides(slideIndex += 1);
  }
  
  document.getElementById("slideIndex").addEventListener("click", minusSlide);
  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function minusSlide() {
      showSlides(slideIndex -= 1);  
  }
  
  /* Устанавливает текущий слайд */
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  /* Основная функция слайдера */
  function showSlides(n) {
      var i;
      var slides = document.getElementById("slideIndex").addEventListener("click", plusSlide);
      var slides =  document.getElementById("slideIndex").addEventListener("click", minusSlide);
      console.log(slides);
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      slides[slideIndex - 1].className += " active";
  }
  
  
  (() => {
      let $ = el => document.querySelector(el);
      
      $(".animenu__btn").addEventListener("click", function(){
        this.classList.toggle("animenu__btn--active")
        $(".animenu__nav").classList.toggle("animenu__nav--active")
      });
    })()
    
    
  
    $j(document).ready(function () {
      size_li = $j("#myList li").size();
      x=9;
      $j('#myList li:lt('+x+')').show();
      $j('#loadMore').click(function () {
          x= (x+3 <= size_li) ? x+3 : size_li;
          $j('#myList li:lt('+x+')').show();
      });
  });
  
  function openForm() {
      document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
      document.getElementById("myForm").style.display = "none";
  }
  
  
      $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
          $(this).siblings('.nav-dropdown').toggle();
          // Close one dropdown when selecting another
          $('.nav-dropdown').not($(this).siblings()).hide();
          e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
          $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
          $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
          this.classList.toggle('active');
        });
      }); // end DOM ready
    })(jQuery); // end jQuery