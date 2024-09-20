import React from "react";
import './hello.css';

const hello = () => {
  return (
    <div>
      <header>
        <div className="masthead-elements-row-1">
          <div className="element-left"></div>
          <div className="element-middle">
            <img className="logo" src="./1.jpg" alt="Fix" />
            <br />
            <span className="logo-text">Fine Coffee Kits</span>
          </div>
          <div className="element-right"></div>
        </div>

        <div className="masthead-elements-row-2">
          <div className="element-middle">
            <a className="btn btn-default" href="#">
              Browse Kits
            </a>
            <a className="btn btn-trans" href="#">
              Browse Products
            </a>
          </div>
        </div>
      </header>

      <section className="textured-section">
        <h1>Curated Coffee Components</h1>
        <ul className="products">
          <li>
            <img className="product-image" src="images/products/071715_Heroku_3270-.jpg" alt="" />
            <h3 className="product-name">AeroPress Coffee Maker</h3>
            <div className="product-price">$29.99</div>
            <div className="product-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="product-image" src="images/products/071715_Heroku_3263-.jpg" alt="" />
            <h3 className="product-name">MSR Reactor 2.5L Stove System</h3>
            <div className="product-price">$159.99</div>
            <div className="product-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="product-image" src="images/products/071715_Heroku_3209-.jpg" alt="" />
            <h3 className="product-name">Bunum Wo AA, Papua New Guinea</h3>
            <div className="product-price">$21.99</div>
            <div className="product-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="product-image" src="images/products/071715_Heroku_3302.jpg" alt="" />
            <h3 className="product-name">Chemex Classic 6-cup Coffee Maker</h3>
            <div className="product-price">$39.99</div>
            <div className="product-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h1>Complete Brewing Kits</h1>
        <ul className="kits">
          <li>
            <img className="kit-image" src="images/kits/071715_Heroku_3338-Edit-.jpg" alt="" />
            <h3 className="kit-name">The Chemex Kit</h3>
            <div className="kit-price">$396.96</div>
            <div className="kit-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="kit-image" src="images/kits/071715_Heroku_3353-Edit-.jpg" alt="" />
            <h3 className="kit-name">The Pour Over Kit</h3>
            <div className="kit-price">$171.96</div>
            <div className="kit-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="kit-image" src="images/kits/071715_Heroku_3346-.jpg" alt="" />
            <h3 className="kit-name">The Camper’s Kit</h3>
            <div className="kit-price">$272.95</div>
            <div className="kit-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="kit-image" src="images/kits/071715_Heroku_3376-Edit-.jpg" alt="" />
            <h3 className="kit-name">The French Press Kit</h3>
            <div className="kit-price">$219.94</div>
            <div className="kit-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
          <li>
            <img className="kit-image" src="images/kits/071715_Heroku_3385-.jpg" alt="" />
            <h3 className="kit-name">The Cold Brew Kit</h3>
            <div className="kit-price">$133.96</div>
            <div className="kit-button">
              <a className="btn btn-hot" href="#">
                Add to Cart
              </a>
            </div>
          </li>
        </ul>
      </section>

      <footer>
        <div className="trailer-logo">
          <img className="logo" src="./1.jpg" alt="Fix" />
          <br />
          <span className="logo-text">Fine Coffee Kits</span>
        </div>

        <div className="trailer-links">
          <ul className="internal-links">
            <li>
              <a href="https://heroku.github.io/fix">About</a>
            </li>
            <li>
              <a href="https://heroku.github.io/fix">Support</a>
            </li>
            <li>
              <a href="https://heroku.github.io/fix">Contact Us</a>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="#">
                <img className="social-logo" src="images/social/twitter.png" alt="" />
                <span className="social-verb">Follow on</span>
                <span className="social-name">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img className="social-logo" src="images/social/facebook.png" alt="" />
                <span className="social-verb">Like Us on</span>
                <span className="social-name">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img className="social-logo" src="images/social/instagram.png" alt="" />
                <span className="social-verb">Follow on</span>
                <span className="social-name">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default hello;
