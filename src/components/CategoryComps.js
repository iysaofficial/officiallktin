import "../css/Category.css";

const CategoryComps = () => {
  return (
    <section class="products">
      <h2>Our Category</h2>
      <div class="all-products">
        <div class="product gap-2">
          <img src="./assets/logo/Inovation.WebP" />
          <div class="product-info">
            <h4 class="product-title">Innovation science</h4>
            {/* <a class="product-btn" href="#">
              Buy Now
            </a> */}
          </div>
        </div>
        <div class="product">
          <img src="./assets/logo/life.WebP" />
          <div class="product-info">
            <h4 class="product-title">Life Science</h4>
            {/* <a class="product-btn" href="#">
              Buy Now
            </a> */}
          </div>
        </div>
        <div class="product">
          <img src="./assets/logo/Envi.WebP" />
          <div class="product-info">
            <h4 class="product-title"> Environmental science</h4>
            {/* <p class="product-price">$999</p>
            <a class="product-btn" href="#">
              Buy Now
            </a> */}
          </div>
        </div>
        <div class="product">
          <img src="./assets/logo/Social.WebP" />
          <div class="product-info">
            <h4 class="product-title">Social Science</h4>
            {/* <p class="product-price">$629*</p>
            <a class="product-btn" href="#">
              Buy Now
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryComps;
