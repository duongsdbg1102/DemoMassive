
// HEADER
window.onscroll = function () {
    //code taoj hieu ung truot header khi scroll
    
    var current = document.querySelector('headerfixed');

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10  ) {
        document.getElementById("headerfixed").classList.add("headerplus"); 
        // document.getElementById("headerfixed").style.height = " 60px";
        // document.getElementById("headerlogo").style.height = " 60px";
        // document.getElementById("headerlogo").style.lineHeight = " 60px";
       

    } else {
        document.getElementById("headerfixed").classList.remove("headerplus");
        // document.getElementById("headerfixed").style.height = " 100px";
        // document.getElementById("headerlogo").style.height = " 100px";
        // document.getElementById("headerlogo").style.lineHeight = " 100px";

    }
}

// SHOWCASE

// lay thẻ ul
var mainNav = document.getElementById("mainNav");
// lay các thẻ con li
var listNav = mainNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function () {
        var current = document.querySelector("#mainNav .active");
        // xoa active cua ther dang duoc gan
        current.className = current.className.replace("active", "");
        // them class active vao the dc click
        this.className += "active";

    });
}
//TEAM-OUWLCAROUSEL
$('.feedback-carousel').owlCarousel({
  margin:20,
    responsive: {
      0: {
        items: 1,
        loop: true,

        nav: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
      },
      480: {


        nav: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        items: 2,
      },
      787: {
        
        items: 3,
        autoplay: false,
        nav: false,
        loop: false,
      },
      1200: {
        loop: true,

        nav: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        items: 1

      }
    }
  })
  $('.logo-carousel').owlCarousel({


    responsive: {
      0: {
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        items: 1
      },
      480: {
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        items: 2
      },
      768: {
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        items: 3
      },
      1200: {
        loop: false,
        nav: false,
        mouseDrag: false,
        items: 6
      }
    }
  })
  // <!-- MAGNIFIC-JS -->
  $(document).ready(function () {
    $('.image-link').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }

    });

    $('.galary-img').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },

    });
    $('.galary-img1').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },

    });
  });