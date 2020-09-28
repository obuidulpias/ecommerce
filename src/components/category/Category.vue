<template>
<div>
<!--hero section start-->
<top-header></top-header>
<section>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-12 order-lg-1">
       <product-list></product-list>
      </div>
      <div class="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
        <div>
          <category-sidebar></category-sidebar>
          <price-list></price-list>
          <brand-list></brand-list>
          <color-list></color-list>
          <size-list></size-list>
          <side-banner></side-banner>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import TopHeader from '../includes/TopHeader.vue'
import CategorySidebar from '../includes/CategorySidebar.vue'
import PriceList from '../includes/PriceList.vue'
import BrandList from '../includes/BrandSidebar.vue'
import ColorList from '../includes/ColorSidebar.vue'
import SizeList from '../includes/SizeSidebar.vue'
import SideBanner from '../includes/SideBanner.vue'
import ProductList from './Product.vue'
export default {
 data () {
    return {
      header_title: 'Shop Category'
    }
  },
  components: {
    'top-header':TopHeader,
    'category-sidebar':CategorySidebar,
    'price-list':PriceList,
    'brand-list':BrandList,
    'color-list':ColorList,
    'size-list':SizeList,
    'side-banner':SideBanner,
    'product-list':ProductList,
  }
}
</script>

<style>

</style>>
