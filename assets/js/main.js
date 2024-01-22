// lang url이동
$('#langBtn').click(function(){
  const url = $('#langList').val()
  window.open(url)
})

// sc-main-news 탭메뉴
$('.sc-main-news .title').click(function(){
  const tabName = $(this).data('slide')
  $(this).addClass('on').parent().siblings().find('.title').removeClass('on')
  $(tabName).addClass('on').parent().siblings().find('.swiper').removeClass('on')

  if ($(this).hasClass('control-news')) { //주요뉴스
    if (!$('.swiper-news').find('.btn-pause').hasClass('hide')) {
      swiperNews.autoplay.start()
    }
  }else{
    if (!$('.swiper-join').find('.btn-pause').hasClass('hide')) {
      swiperJoin.autoplay.start()
    }
  }
})

// swiper-news
const swiperNews = new Swiper('.swiper-news',{
  speed:1000,
  loop:true,
  navigation: {
    nextEl: ".swiper-news .btn-next",
    prevEl: ".swiper-news .btn-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  observer : true,
  observeParents : true,
  on:{
    'init':function(){
      let curr = this.realIndex + 1
      let total = this.slides.length
      $('.news-fraction').html(`${curr}/${total}`)
    },
    'slideChange':function(){
      let curr = this.realIndex + 1
      let total = this.slides.length
      $('.news-fraction').html(`${curr}/${total}`)
    }
  }
})

// swiper-join
const swiperJoin = new Swiper('.swiper-join',{
  speed:1000,
  loop:true,
  navigation: {
    nextEl: ".swiper-join .btn-next",
    prevEl: ".swiper-join .btn-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  observer : true,
  observeParents : true,
  on:{
    'init':function(){
      let curr = this.realIndex + 1
      let total = this.slides.length
      $('.join-fraction').html(`${curr}/${total}`)
    },
    'slideChange':function(){
      let curr = this.realIndex + 1
      let total = this.slides.length
      $('.join-fraction').html(`${curr}/${total}`)
    }
  }
})

// sc-main-news 스와이퍼 초기상태
if ($('.swiper-news').hasClass('on')) {
  swiperJoin.autoplay.stop()
} else{
  swiperJoin.autoplay.start()
}

// sc-main-news 탭메뉴클릭시 다른 스와이퍼 슬라이드이동
$('.control-news').click(function(){
  swiperJoin.slideTo(swiperJoin.realIndex[0])
})
$('.control-join').click(function(){
  swiperNews.slideTo(swiperNews.realIndex[0])
})

// swiper-banner
const swiperBanner = new Swiper('.swiper-banner',{
  speed:1000,
  slidesPerView:3,
  spaceBetween:43,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-banner .btn-next",
    prevEl: ".swiper-banner .btn-prev",
  },
  on:{
    'init':function(){
      let curr = this.realIndex + 1
      let total = this.slides.length
      $('.banner-fraction').html(`${curr}/${total}`)
    },
    'slideChange':function(){
      let curr = this.realIndex + 1
      let total = this.slides.length
      $('.banner-fraction').html(`${curr}/${total}`)
    }
  }
})

slideArr=[swiperNews ,swiperJoin ,swiperBanner]
$('.swiper .btn-pause').click(function(){
  idx=$(this).data('idx');

  slideArr[idx].autoplay.stop()
  $(this).addClass('hide').siblings().removeClass('hide')
})
$('.swiper .btn-play').click(function(){
  idx=$(this).data('idx');

  slideArr[idx].autoplay.start()
  $(this).addClass('hide').siblings().removeClass('hide')
})

// sc-relate .relate-sublist 열기
$('.sc-relate .btn-relate').click(function(){
  $(this).toggleClass('on').parent().siblings().find('.btn-relate').removeClass('on')
  $(this).parent().find('.relate-sublist').slideToggle()
  $(this).parent().siblings().find('.relate-sublist').slideUp()
})

// sc-relate 바깥영역클릭시 닫히게
$(document).click(function(e){
  const relateList = $('.relate-list')
  if (relateList.has(e.target).length===0) {
    $('.btn-relate').removeClass('on')
    $('.relate-sublist').slideUp()
  }
})

// sc-relate relate-sublist 쉬프트+탭/탭으로 닫기
$('.sc-relate .relate-subitem:first-child').keydown(function(e){
  const code = e.keyCode
  if (code === 9 && e.shiftKey) {
    $('.sc-relate .btn-relate').removeClass('on')
    $('.sc-relate .relate-sublist').slideUp()
  } 
})
$('.sc-relate .relate-subitem:last-child').keydown(function(e){
  const code = e.keyCode
  if (code === 9 && !e.shiftKey) {
    $('.sc-relate .btn-relate').removeClass('on')
    $('.sc-relate .relate-sublist').slideUp()
  } 
})