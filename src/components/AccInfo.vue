<script>
    import '../assets/accInfo.css';
    export default {
            name: "#app"
        }
</script>
<template>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <div class="user-profile__avatar shadow-effect text-center">
        <img class="img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="...">
        John Doe
        <p class="text-muted">Project Manager</p>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          User Menu
        </div>
        <div class="panel-body">
          <ul>
            <li><a href="#"><i class="fa fa-user"></i> My Profile</a></li>
            <li><a href="#"><i class="fa fa-edit"></i> Edit Profile</a></li>
            <li><a href="#"><i class="fa fa-envelope-o"></i> Messages</a></li>
            <li><a href="#"><i class="fa fa-sign-out"></i> Sign Out</a></li>
          </ul>
        </div>
      </div>

    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-sm-6">
          
          <!-- User name -->
          <h3 class="user-profile__title">John Doe</h3>
          
          <!-- User description -->
          <p class="user-profile__desc">
            Talented designer and passionate narrator.
          </p>
          <!-- User URL -->
          <div class="user-profile__url">
            <a href="https://bootdey.com/">https://bootdey.com/</a>
          </div>
          <!-- User social links -->
          <div class="social">
            <ul class="list-inline">
              <li>
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          
          <!-- Profile info -->
          <ul class="user-profile__info">
            <li>
              <i class="fa fa-calendar-o"></i> Member for 180 days
            </li>
            <li>
              <i class="fa fa-clock-o"></i> Last seen 2 hours ago
            </li>
            <li>
              <i class="fa fa-eye"></i> 50 profile views
            </li>
          </ul>
        </div>
        <div class="col-sm-12">
          <div class="user-profile__tabs">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#user-profile__portfolio" aria-controls="user-profile__portfolio" role="tab" data-toggle="tab" aria-expanded="true">My Portfolio</a>
              </li>
              <li role="presentation" class="">
                <a href="#user-profile__shopping-cart" aria-controls="user-profile__shopping-cart" role="tab" data-toggle="tab" aria-expanded="false">My Shopping Cart</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade active in" id="user-profile__portfolio">             
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4">
                    <div class="portfolio__item">
                      <div class="portfolio-item__img">
                        <a href="portfolio-item.html">
                          <img src="https://www.bootdey.com/image/340x210/FF7F50/000000" class="img-responsive" alt="...">
                          <div class="portfolio-item__mask">
                            <div class="portfolio-item-mask__content">
                              <div class="portfolio-item-mask__title">
                                Image title
                              </div>
                              <div class="portfolio-item-mask__summary">
                                Pellentesque metus arcu, placerat nec porta in, ultricies id enim.
                              </div>
                            </div> <!-- / .portfolio-item-mask__content -->
                          </div> <!-- / .portfolio-item__mask -->
                        </a>
                      </div> <!-- / .portfolio-item__img -->
                    </div> <!-- / .portfolio__item -->
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4">
                    <div class="portfolio__item">
                      <div class="portfolio-item__img">
                        <a href="portfolio-item.html">
                          <img src="https://www.bootdey.com/image/340x210/6495ED/000000" class="img-responsive" alt="...">
                          <div class="portfolio-item__mask">
                            <div class="portfolio-item-mask__content">
                              <div class="portfolio-item-mask__title">
                                Image title
                              </div>
                              <div class="portfolio-item-mask__summary">
                                Pellentesque metus arcu, placerat nec porta in, ultricies id enim.
                              </div>
                            </div> <!-- / .portfolio-item-mask__content -->
                          </div> <!-- / .portfolio-item__mask -->
                        </a>
                      </div> <!-- / .portfolio-item__img -->
                    </div> <!-- / .portfolio__item -->
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4">
                    <div class="portfolio__item">
                      <div class="portfolio-item__img">
                        <a href="portfolio-item.html">
                          <img src="https://www.bootdey.com/image/340x210/9932CC/000000" class="img-responsive" alt="...">
                          <div class="portfolio-item__mask">
                            <div class="portfolio-item-mask__content">
                              <div class="portfolio-item-mask__title">
                                Image title
                              </div>
                              <div class="portfolio-item-mask__summary">
                                Pellentesque metus arcu, placerat nec porta in, ultricies id enim.
                              </div>
                            </div> <!-- / .portfolio-item-mask__content -->
                          </div> <!-- / .portfolio-item__mask -->
                        </a>
                      </div> <!-- / .portfolio-item__img -->
                    </div> <!-- / .portfolio__item -->
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4">
                    <div class="portfolio__item">
                      <div class="portfolio-item__img">
                        <a href="portfolio-item.html">
                          <img src="https://www.bootdey.com/image/340x210/FF1493/000000" class="img-responsive" alt="...">
                          <div class="portfolio-item__mask">
                            <div class="portfolio-item-mask__content">
                              <div class="portfolio-item-mask__title">
                                Image title
                              </div>
                              <div class="portfolio-item-mask__summary">
                                Pellentesque metus arcu, placerat nec porta in, ultricies id enim.
                              </div>
                            </div> <!-- / .portfolio-item-mask__content -->
                          </div> <!-- / .portfolio-item__mask -->
                        </a>
                      </div> <!-- / .portfolio-item__img -->
                    </div> <!-- / .portfolio__item -->

                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4">

                    <div class="portfolio__item">
                      <div class="portfolio-item__img">
                        <a href="portfolio-item.html">
                          <img src="https://www.bootdey.com/image/340x210/20B2AA/000000" class="img-responsive" alt="...">
                          <div class="portfolio-item__mask">
                            <div class="portfolio-item-mask__content">
                              <div class="portfolio-item-mask__title">
                                Image title
                              </div>
                              <div class="portfolio-item-mask__summary">
                                Pellentesque metus arcu, placerat nec porta in, ultricies id enim.
                              </div>
                            </div> <!-- / .portfolio-item-mask__content -->
                          </div> <!-- / .portfolio-item__mask -->
                        </a>
                      </div> <!-- / .portfolio-item__img -->
                    </div> <!-- / .portfolio__item -->

                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4">

                    <div class="portfolio__item">
                      <div class="portfolio-item__img">
                        <a href="portfolio-item.html">
                          <img src="https://www.bootdey.com/image/340x210/B0C4DE/000000" class="img-responsive" alt="...">
                          <div class="portfolio-item__mask">
                            <div class="portfolio-item-mask__content">
                              <div class="portfolio-item-mask__title">
                                Image title
                              </div>
                              <div class="portfolio-item-mask__summary">
                                Pellentesque metus arcu, placerat nec porta in, ultricies id enim.
                              </div>
                            </div> <!-- / .portfolio-item-mask__content -->
                          </div> <!-- / .portfolio-item__mask -->
                        </a>
                      </div> <!-- / .portfolio-item__img -->
                    </div> <!-- / .portfolio__item -->
                  </div>
                </div> <!-- / .row -->
              </div> <!-- / .tab-pane -->
              <div role="tabpanel" class="tab-pane fade" id="user-profile__shopping-cart">
                <div class="table-responsive">
                  <table class="table table-bordered shopping-cart__table">
                  <thead>
                    <tr>
                      <th>Preview</th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="js-shop__item">
                      <td>
                        <img class="img-responsive shopping-cart-item__img" src="https://www.bootdey.com/image/50x50/" alt="...">
                      </td>
                      <td>
                        <div class="shopping-cart-item__title">
                          Product Title
                        </div>
                        <div class="shopping-cart-item__desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt odio nec, placerat enim.
                        </div>
                      </td>
                      <td>$<span class="js-shop-item__price">59.99</span></td>
                      <td>
                        <input type="number" class="js-shop-item__quantity form-control" min="1" max="100" step="1" value="1">
                      </td>
                    </tr>
                    <tr class="js-shop__item">
                      <td>
                        <img class="img-responsive shopping-cart-item__img" src="https://www.bootdey.com/image/50x50/" alt="...">
                      </td>
                      <td>
                        <div class="shopping-cart-item__title">
                          Product Title
                        </div>
                        <div class="shopping-cart-item__desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt odio nec, placerat enim.
                        </div>
                      </td>
                      <td>$<span class="js-shop-item__price">59.99</span></td>
                      <td>
                        <input type="number" class="js-shop-item__quantity form-control" min="1" max="100" step="1" value="1">
                      </td>
                    </tr>
                    <tr class="js-shop__item">
                      <td>
                        <img class="img-responsive shopping-cart-item__img" src="https://www.bootdey.com/image/50x50/" alt="...">
                      </td>
                      <td>
                        <div class="shopping-cart-item__title">
                          Product Title
                        </div>
                        <div class="shopping-cart-item__desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt odio nec, placerat enim.
                        </div>
                      </td>
                      <td>$<span class="js-shop-item__price">59.99</span></td>
                      <td>
                        <input type="number" class="js-shop-item__quantity form-control" min="1" max="100" step="1" value="1">
                      </td>
                    </tr>
                  </tbody>
                  </table>
                </div> <!-- / .table-responsive -->
                <ul class="shopping-cart__checkout">
                  <li><strong>Total Price</strong>: $<span class="js-shop__total-price"></span></li>
                  <li><strong>Shipping</strong>: Free</li>
                  <li>
                    <a href="#" class="btn btn-secondary">Proceed to checkout</a>
                  </li>
                </ul>
              </div> <!-- / .tab-pane -->
            </div> <!-- / .tab-content -->
          </div>
        </div>
      </div> <!-- / .row -->
    </div>
  </div> <!-- / .row -->
</div>
</template>