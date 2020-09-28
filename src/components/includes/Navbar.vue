<template>
  <header class="site-header header-1">
    <div class="header-top bg-dark-1 py-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12 d-flex align-items-center justify-content-between text-white">
            <div class="d-md-flex align-items-center call-info">
              <div class="d-flex align-items-center">
                <div class="text-white offer-text"><small><span>60%</span> discount on womens collection</small> </div>
                <div class="language-selection">
                  <div class="d-flex align-items-center justify-content-center justify-content-md-end">
                    <div class="ml-3 mr-3">
                      <select name="countries" class="custome_select">
                        <option value='USD' data-title="USD">USD</option>
                        <option value='EUR' data-title="EUR">EUR</option>
                        <option value='GBR' data-title="GBR">GBR</option>
                      </select>
                    </div>
                    <div class="lng_dropdown">
                      <select name="countries" class="custome_select">
                        <option value='en' data-image="../../../static/assets/images/eng.png" data-title="English">English</option>
                        <option value='fn' data-image="../../../static/assets/images/fn.png" data-title="France">France</option>
                        <option value='us' data-image="../../../static/assets/images/us.png" data-title="United States">United States</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-none d-md-flex align-items-center">
              <div class="social-icons">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item"><a class="text-white" href="#"><i class="lab la-facebook-f"></i></a> </li>
                  <li class="list-inline-item"><a class="text-white" href="#"><i class="lab la-twitter"></i></a> </li>
                  <li class="list-inline-item"><a class="text-white" href="#"><i class="lab la-linkedin-in"></i></a> </li>
                  <li class="list-inline-item"><a class="text-white" href="#"><i class="lab la-instagram"></i></a> </li>
                  <li class="list-inline-item"><a class="text-white" href="#"><i class="lab la-pinterest-p"></i></a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="header-wrap">
      <div class="container">
        <div class="row">
          <!--menu start-->
          <div class="col">
            <nav class="navbar navbar-expand-lg navbar-light position-static">
              <router-link class="navbar-brand logo" to="/">
                <img class="img-fluid" src="../../../static/assets/images/logo.png" alt="">
              </router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto mr-auto">
                  <li class="nav-item dropdown position-static"> <a class="nav-link dropdown-toggle" href="#">Man Fashion</a>
                    <div class="dropdown-menu w-100">
                      <!-- Tabs -->
                      <div class="container p-0">
                        <div class="row w-100 no-gutters">
                          <div class="col-lg-12 p-lg-3">
                            <div class="row">
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Clothing</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <router-link to="/category-product">Western Wear</router-link></li>
                                  <li> <a href="#">Fitness &amp; Outdoors</a></li>
                                  <li> <a href="#">Ethnic Wear</a></li>
                                  <li> <a href="#">Beach Clothing</a></li>
                                  <li> <a href="#">Swimsuits</a></li>
                                  <li> <a href="#">Casual Dresses</a></li>
                                  <li> <a href="#">Raincoats</a></li>
                                  <li> <a href="#">Maternity</a></li>
                                  <li> <a href="#">Lingerie</a></li>
                                  <li> <a href="#">Sleep &amp; Lounge Wear</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Accessories</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Caps &amp; Hats</a> </li>
                                  <li> <a href="#">Gloves &amp; Arm Warmers</a></li>
                                  <li> <a href="#">Earmuffs</a></li>
                                  <li> <a href="#">Handkerchiefs</a></li>
                                  <li> <a href="#">Shawls</a></li>
                                  <li> <a href="#">Belts</a></li>
                                  <li> <a href="#">Suspenders</a></li>
                                  <li> <a href="#">Wallets</a></li>
                                  <li> <a href="#">Pocket Squares</a></li>
                                  <li> <a href="#">Watches</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Jwellery</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Earrings</a> </li>
                                  <li> <a href="#">Chains &amp; Necklaces</a></li>
                                  <li> <a href="#">Bangles &amp; Bracelets</a></li>
                                  <li> <a href="#">Pendants</a></li>
                                  <li> <a href="#">Anklets</a></li>
                                  <li> <a href="#">Coins &amp; Bars</a></li>
                                  <li> <a href="#">Nose Rings &amp; Pins</a></li>
                                  <li> <a href="#">Beads &amp; Charms</a></li>
                                  <li> <a href="#">Shirt Accessories</a></li>
                                  <li> <a href="#">Chains</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Shoes</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-0">
                                  <li> <a href="#">Running Shoes</a> </li>
                                  <li> <a href="#">Sneakers</a></li>
                                  <li> <a href="#">Loafers &amp; Moccasins</a></li>
                                  <li> <a href="#">Boots</a></li>
                                  <li> <a href="#">Formal Shoes</a></li>
                                  <li> <a href="#">Hiking Footwear</a></li>
                                  <li> <a href="#">Casual Shoes</a></li>
                                  <li> <a href="#">Ethnic Footwear</a></li>
                                  <li> <a href="#">Fashion Slippers</a></li>
                                  <li> <a href="#">Ballet Flats</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown position-static"> <a class="nav-link dropdown-toggle" href="#">Women Fashion</a>
                    <div class="dropdown-menu w-100">
                      <!-- Tabs -->
                      <div class="container p-0">
                        <div class="row w-100 no-gutters">
                          <div class="col-lg-12 p-lg-3">
                            <div class="row">
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Clothing</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Accessories</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Caps &amp; Hats</a> </li>
                                  <li> <a href="#">Gloves &amp; Arm Warmers</a></li>
                                  <li> <a href="#">Earmuffs</a></li>
                                  <li> <a href="#">Handkerchiefs</a></li>
                                  <li> <a href="#">Shawls</a></li>
                                  <li> <a href="#">Belts</a></li>
                                  <li> <a href="#">Suspenders</a></li>
                                  <li> <a href="#">Wallets</a></li>
                                  <li> <a href="#">Pocket Squares</a></li>
                                  <li> <a href="#">Watches</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Jwellery</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Earrings</a> </li>
                                  <li> <a href="#">Chains &amp; Necklaces</a></li>
                                  <li> <a href="#">Bangles &amp; Bracelets</a></li>
                                  <li> <a href="#">Pendants</a></li>
                                  <li> <a href="#">Anklets</a></li>
                                  <li> <a href="#">Coins &amp; Bars</a></li>
                                  <li> <a href="#">Nose Rings &amp; Pins</a></li>
                                  <li> <a href="#">Beads &amp; Charms</a></li>
                                  <li> <a href="#">Shirt Accessories</a></li>
                                  <li> <a href="#">Chains</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Shoes</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-0">
                                  <li> <a href="#">Running Shoes</a> </li>
                                  <li> <a href="#">Sneakers</a></li>
                                  <li> <a href="#">Loafers &amp; Moccasins</a></li>
                                  <li> <a href="#">Boots</a></li>
                                  <li> <a href="#">Formal Shoes</a></li>
                                  <li> <a href="#">Hiking Footwear</a></li>
                                  <li> <a href="#">Casual Shoes</a></li>
                                  <li> <a href="#">Ethnic Footwear</a></li>
                                  <li> <a href="#">Fashion Slippers</a></li>
                                  <li> <a href="#">Ballet Flats</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown position-static"> <a class="nav-link dropdown-toggle" href="#">Kids Fashion</a>
                    <div class="dropdown-menu w-100">
                      <!-- Tabs -->
                      <div class="container p-0">
                        <div class="row w-100 no-gutters">
                          <div class="col-lg-12 p-lg-3">
                            <div class="row">
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Clothing</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Accessories</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Caps &amp; Hats</a> </li>
                                  <li> <a href="#">Gloves &amp; Arm Warmers</a></li>
                                  <li> <a href="#">Earmuffs</a></li>
                                  <li> <a href="#">Handkerchiefs</a></li>
                                  <li> <a href="#">Shawls</a></li>
                                  <li> <a href="#">Belts</a></li>
                                  <li> <a href="#">Suspenders</a></li>
                                  <li> <a href="#">Wallets</a></li>
                                  <li> <a href="#">Pocket Squares</a></li>
                                  <li> <a href="#">Watches</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Jwellery</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Earrings</a> </li>
                                  <li> <a href="#">Chains &amp; Necklaces</a></li>
                                  <li> <a href="#">Bangles &amp; Bracelets</a></li>
                                  <li> <a href="#">Pendants</a></li>
                                  <li> <a href="#">Anklets</a></li>
                                  <li> <a href="#">Coins &amp; Bars</a></li>
                                  <li> <a href="#">Nose Rings &amp; Pins</a></li>
                                  <li> <a href="#">Beads &amp; Charms</a></li>
                                  <li> <a href="#">Shirt Accessories</a></li>
                                  <li> <a href="#">Chains</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Shoes</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-0">
                                  <li> <a href="#">Running Shoes</a> </li>
                                  <li> <a href="#">Sneakers</a></li>
                                  <li> <a href="#">Loafers &amp; Moccasins</a></li>
                                  <li> <a href="#">Boots</a></li>
                                  <li> <a href="#">Formal Shoes</a></li>
                                  <li> <a href="#">Hiking Footwear</a></li>
                                  <li> <a href="#">Casual Shoes</a></li>
                                  <li> <a href="#">Ethnic Footwear</a></li>
                                  <li> <a href="#">Fashion Slippers</a></li>
                                  <li> <a href="#">Ballet Flats</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown position-static"> <a class="nav-link dropdown-toggle" href="#">Electronics</a>
                    <div class="dropdown-menu w-100">
                      <!-- Tabs -->
                      <div class="container p-0">
                        <div class="row w-100 no-gutters">
                          <div class="col-lg-12 p-lg-3">
                            <div class="row">
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Clothing</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                  <li><a href="#">Fitness &amp; Outdoors</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Accessories</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Caps &amp; Hats</a> </li>
                                  <li> <a href="#">Gloves &amp; Arm Warmers</a></li>
                                  <li> <a href="#">Earmuffs</a></li>
                                  <li> <a href="#">Handkerchiefs</a></li>
                                  <li> <a href="#">Shawls</a></li>
                                  <li> <a href="#">Belts</a></li>
                                  <li> <a href="#">Suspenders</a></li>
                                  <li> <a href="#">Wallets</a></li>
                                  <li> <a href="#">Pocket Squares</a></li>
                                  <li> <a href="#">Watches</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Jwellery</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-6 mb-md-0">
                                  <li> <a href="#">Earrings</a> </li>
                                  <li> <a href="#">Chains &amp; Necklaces</a></li>
                                  <li> <a href="#">Bangles &amp; Bracelets</a></li>
                                  <li> <a href="#">Pendants</a></li>
                                  <li> <a href="#">Anklets</a></li>
                                  <li> <a href="#">Coins &amp; Bars</a></li>
                                  <li> <a href="#">Nose Rings &amp; Pins</a></li>
                                  <li> <a href="#">Beads &amp; Charms</a></li>
                                  <li> <a href="#">Shirt Accessories</a></li>
                                  <li> <a href="#">Chains</a></li>
                                </ul>
                              </div>
                              <div class="col-12 col-md-3 col-sm-6">
                                <!-- Heading -->
                                <div class="mb-2 font-w-5 text-link text-center bg-info text-white py-2">Shoes</div>
                                <!-- Links -->
                                <ul class="list-unstyled mb-0">
                                  <li> <a href="#">Running Shoes</a> </li>
                                  <li> <a href="#">Sneakers</a></li>
                                  <li> <a href="#">Loafers &amp; Moccasins</a></li>
                                  <li> <a href="#">Boots</a></li>
                                  <li> <a href="#">Formal Shoes</a></li>
                                  <li> <a href="#">Hiking Footwear</a></li>
                                  <li> <a href="#">Casual Shoes</a></li>
                                  <li> <a href="#">Ethnic Footwear</a></li>
                                  <li> <a href="#">Fashion Slippers</a></li>
                                  <li> <a href="#">Ballet Flats</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="contact-us.html">All Categories</a> </li>
                </ul>
              </div>
              <div class="right-nav align-items-center d-flex justify-content-end">
                <div class="mr-1 mr-sm-3 search-block"> <a href="javascript:void(0);" class="search_trigger ml-3"><i class="las la-search"></i></a>
                  <div class="search_wrap container"> <span class="close-search"><i class="ion-ios-close-empty"></i></span>
                    <form>
                      <input type="text" placeholder="Search" class="form-control" id="search_input">
                      <button type="submit" class="search_icon"><i class="las la-search"></i></button>
                    </form>
                  </div>
                </div>
                <a class="mr-1 mr-sm-3" href="#"><i class="las la-user-alt"></i></a> <a class="mr-3 d-none d-sm-inline" href="#"><i class="lar la-heart"></i></a>
                <div class="dropdown cart_dropdown"> <a class="d-flex align-items-center" href="#"> <span class="bg-white pr-2 pl-0 py-1 rounded" data-cart-items="2"> <i class="las la-shopping-bag"></i> </span> </a>
                  <div class="cart_box dropdown-menu dropdown-menu-right">
                    <ul class="cart_list">
                      <li> <a href="#" class="item_remove"><i class="ion-ios-close-empty"></i></a> <a href="#"><img src="assets/images/product/p8.jpg" alt="cart_thumb1">Unpaired Running Shoes</a> <span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>78.00</span> </li>
                      <li> <a href="#" class="item_remove"><i class="ion-ios-close-empty"></i></a> <a href="#"><img src="assets/images/product/p12.jpg" alt="cart_thumb2">Unpaired Running Shoes</a> <span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>81.00</span> </li>
                    </ul>
                    <div class="cart_footer">
                      <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">$</span></span>159.00</p>
                      <p class="cart_buttons"><a href="#" class="btn btn-secondary view-cart ml-2 mr-2">View Cart</a><a href="#" class="btn btn-primary ml-2 mr-2 checkout">Checkout</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <!--menu end-->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    $('.custome_select').each( function() {
      $('.custome_select').msDropdown();
    });
  }
}
</script>

<style>
.list-style-none{
  list-style-type: none;
}
</style>
