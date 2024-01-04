import '../css/Category.css';

const CategoryComps = () => {
  return (
    <section class="products">
      <h2 className="garis-bawah">Kategori</h2>
      {/* <h2 className="garis-bawah"></h2> */}
      <div class="all-products">
        <div class="product gap-2">
          <img src="./assets/logo/science.png" />
          <div class="product-info">
            <h4 class="product-title">Science</h4>
          </div>
        </div>
        {/* <div class="product">
          <img src="./assets/logo/life.WebP" />
          <div class="product-info">
            <h4 class="product-title">Life Science</h4>
          </div>
        </div> */}
        <div class="product">
          <img src="./assets/logo/Envi.WebP" />
          <div class="product-info">
            <h4 class="product-title">Social</h4>
          </div>
        </div>
        {/* <div class="product">
          <img src="./assets/logo/Social.WebP" />
          <div class="product-info">
            <h4 class="product-title">Social Science</h4>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CategoryComps;
