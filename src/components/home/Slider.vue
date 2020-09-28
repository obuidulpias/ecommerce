<template>
  <section class="banner pos-r p-0">
    <div class="banner-slider home-slide owl-carousel no-pb owl-2" data-dots="true" data-nav="false">
      <div class="item bg-pos-ct" id="slider-img1" data-bg-img="../../../static/assets/images/bg/01.jpg">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-7 col-md-12 custom-py-2 position-relative z-index-1">
              <h6 class="font-w-6 text-black animated3">New promotions!</h6>
              <h1 class="mb-4 animated3 text-black">Discounts up to <br>
                30%  in July.</h1>
              <div class="animated3"> <a class="btn bg-pink-btn rounded-0" href="#">Shop Now</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item bg-pos-ct" id="slider-img2" data-bg-img="../../../static/assets/images/bg/02.jpg">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-7 col-md-12 custom-py-2 position-relative z-index-1">
              <h6 class="font-w-6 text-black animated3">-20% off this week</h6>
              <h1 class="mb-4 animated3 text-black">Special Wedding <br> Collection</h1>
              <div class="animated3"> <a class="btn bg-aqua-btn rounded-0" href="#">View Collection</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item bg-pos-ct" id="slider-img3" data-bg-img="../../../static/assets/images/bg/03.jpg">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-7 col-md-12 custom-py-2 position-relative z-index-1">
              <h6 class="font-w-6 text-black animated3">Trending collection</h6>
              <h1 class="mb-4 animated3 text-black">Men's Festival<br> Collection</h1>
              <div class="animated3"> <a class="btn bg-orange-btn rounded-0" href="#">View Collection</a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    $('.banner-slider').each( function() {
      var $carousel = $(this);
      $carousel.owlCarousel({
          items:1,
          loop : true,
          dots : $carousel.data("dots"),
          nav : $carousel.data("nav"),
          margin : $carousel.data("margin"),
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          autoplay : true,
          autoplayTimeout : 6000,
          navText : [ '<span class="las la-arrow-left"><span>', '<span class="las la-arrow-right"></span>' ],
      });
    });
  }
}
</script>

<style>
#slider-img1{
  background-image: url("../../../static/assets/images/bg/01.jpg");
}
#slider-img2{
  background-image: url("../../../static/assets/images/bg/02.jpg");
}
#slider-img3{
  background-image: url("../../../static/assets/images/bg/03.jpg");
}
</style>

