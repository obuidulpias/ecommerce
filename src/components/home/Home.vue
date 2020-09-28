<template>
  <div>
    <slider></slider>
    <feature></feature>
    <new-product></new-product>
    <facilities></facilities>
    <feature-product></feature-product>
    <offer></offer>
    <blog></blog>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import Feature from './Feature.vue'
import NewProduct from './NewProduct.vue'
import Facilities from './Facilities.vue'
import FeatureProduct from './FeatureProduct.vue'
import Offer from './Offer.vue'
import Blog from './Blog.vue'

export default {
  components: {
    'slider': Slider,
    'feature': Feature,
    'new-product': NewProduct,
    'facilities': Facilities,
    'feature-product': FeatureProduct,
    'offer': Offer,
    'blog': Blog,
  }
}
</script>

<style>

</style>
