<template>
    <section class="bg-pos-ct bg-xs-none hot-deal-1 bg-light-4 section-image" data-bg-img="../../../static/assets/images/bg/05.jpg">
      <div class="container position-relative">
        <div class="row">
          <div class="col-lg-6 col-md-10">
            <div>
              <h6 class="text-pink mb-4 font-w-5 border-bottom-pink"> Limited Time Offer </h6>
              <h2 class="font-w-6">Casual with pockets</h2>
              <div class="color-availblity">Colors : <span class="yellow-round"></span> <span class="purple-round"></span> <span class="green-round"></span></div>
              <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien.</p>
              <h7>Only $29.99</h7>
            </div>
            <ul class="countdown list-inline d-flex mt-5 mb-0 p-0" data-countdown="2022/09/23">
            </ul>
          </div>
          <div class="myDIV"><a href="product-left-image.html"><i class="las la-plus"></i></a></div>
          <div class="hide">
            <div class="card product-card card--default"> <a class="card-img-hover d-block" href="product-left-image.html"> <img class="card-img-top card-img-back" src="../../../static/assets/images/product/p3.jpg" alt="..."> </a>
              <div class="card-info">
                <div class="card-body pb-0">
                  <div class="product-title font-w-5"><a class="link-title" href="product-left-image.html">Unpaired Running Shoes</a> </div>
                  <div class="mt-1"> <span class="product-price text-pink"><del class="text-muted">$35.00</del> $25.00</span>
                    <div class="star-rating"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  mounted(){
      $('.countdown').each(function () {
        var $this = $(this),
          finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
          $(this).html(event.strftime('<li><span>%-D</span><p>d</p></li>' + '<li><span>%-H</span><p>h</p></li>' + '<li><span>%-M</span><p>m</p></li>' + '<li><span>%S</span><p>s</p></li>'));
        });
      });
  }
}
</script>

<style>
  .section-image{
    background-image: url("../../../static/assets/images/bg/05.jpg");
  }
</style>

