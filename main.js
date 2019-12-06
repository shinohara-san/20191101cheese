$(function () {
  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // -----------------------------
  
  //   トップ
  
  // ------------------------------
    $(function () {
    setInterval(function () {
      $('.top').toggleClass('top2')
    }, 2000);
  });

  $('.top p').addClass('spinning');

  // ----------------------------

  //   Top h1

  // ----------------------------

  $('#top_comment').on('mouseover', function () {
    $('#top_comment').fadeOut(3000);
    $('#hidden_h1').fadeIn(3000);
  });

  // const h1 = document.getElementById('top_comment');
  // let i = 0;
  // const top_comments = ['セカイを変えるチーズを作ろう', 'Make cheese that changes the world'];
  // function changeH1() {
  //   if (i === 1) {
  //     i = 0;
  //   }
  //   else {
  //     i++;
  //   }
  //   h1.textContent = top_comments[i];
    
  // };

  // setInterval(changeH1, 1000);



  // ----------------------------
    
  //   Top背景画像
  
  // ----------------------------

  const images = [
    'https://askul.c.yimg.jp/img/product/3L1/J693845_3L1.jpg',
    'https://www.yoshinoya.com/wp-content/uploads/2019/02/08141350/gyukarubi-cheese-don.jpg',
    'https://裏メニュー.com/wp-content/uploads/2017/05/80dfa97531bc639f2bab6989b6363115.jpg',
    'img/mainbg.png',
  ];

  let num = -1;
  const main = document.getElementById('back_to_top');
  const img = document.createElement('img');
  main.appendChild(img);

  function slideshow_timer() {
    if (num === 3) {
      num = 0;
    }
    else {
      num++;
    }
    img.src = images[num];
  }

  setInterval(slideshow_timer, 2000);
  
  

  // -------------------------
  
  //   モーダル
  
  // ---------------------------

    $('.bar').on('click', function () {
      $('#modal').fadeToggle(500);
    });

    $('#modal-btn').on('click', function () {
      $('#modal').fadeOut(500);
    });

    $(window).on('scroll', function () {
      $('#modal').fadeOut(500);
    });

    $(window).on('load scroll', function () {
      if ($(window).scrollTop() > 300) {
        $('.pagetop').fadeIn(500);
      } else {
        $('.pagetop').fadeOut(500);
      }
    });

   
  // ------------------------
  
  //   About

  // ------------------------
  
  $(function () {
    setInterval(function () {
      $('#about').toggleClass('spin');
    }, 100);
  });
  $(function () {
    setInterval(function () {
      $('.about-top').addClass('spin');
    }, 1000);
  });
  
    $('.about-sub').hide();
    $('#about').on('mouseover', function () {
      $('.about-sub').fadeIn(3000);
    });
    $('.about-container h3').on('mouseover', function () {
      $('.about-sub').fadeIn(3000);
    });
  
  // ----------------------
    
  //   Course
  
  // ----------------------

  $(function () {
    setInterval(function () {
      $('#course').toggleClass('spin');
    }, 100);
  });

    $('.course p').hide();
    $('#course').on('mouseover', function () {
      $('.course p').fadeIn(1000);
    });
  
  // ---------------------------

  //   News
  
  // ----------------------------

  $(function () {
    setInterval(function () {
      $('#news').toggleClass('spin');
    }, 100);
  });
  
    $('.news-container').hide();
    $('.news-title').on('mouseover', function () {
      $('.news-container').fadeIn(3000);
    });

  
  // --------------------------------
    
  //   Access
  
  // --------------------------------
  $(function () {
    setInterval(function () {
      $('#access').toggleClass('spin');
    }, 100);
  });

  // -------------------------------
  
  //   Contact
  
  // -------------------------------

  $(function () {
    setInterval(function () {
      $('.contact-top h2').toggleClass('spin');
    }, 100);
  });

    $('.contact-sub').hide();
    $('.contact-p').hide();
    $('.contact-top').on('mouseover', function () {
      $('.contact-sub').fadeIn(3000);
      $('.contact-p').fadeIn(3000);
    });

    $('.pic1').hide();
    $('.img-box-txt2').hide();
    $('.pic3').hide();

    $('.pic01').on('mouseover', function () {
      $('.pic1').fadeIn(3000);
    });
    $('.pic02').on('mouseover', function () {
      $('.img-box-txt2').fadeIn(3000);
    });
    $('.pic03').on('mouseover', function () {
      $('.pic3').fadeIn(3000);
    });
  
  $('#page_top').click(function () {
    $.scrollTo($("#about"));
  });


  
 
  });
