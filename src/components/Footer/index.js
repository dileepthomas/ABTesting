import React from 'react';
import './Footer.css'

const footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="menu-footer-menu-container">
              <ul id="footer-menu" className=" footer-menu">
                <li
                  id="menu-item-387"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-387"
                >
                  <a href="https://themefisher.com/license/">License</a>
                </li>
                <li
                  id="menu-item-395"
                  className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-395"
                >
                  <a href="https://themefisher.com/blog/">Blog</a>
                </li>
                <li
                  id="menu-item-388"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-388"
                >
                  <a href="https://themefisher.com/contact/">Contact</a>
                </li>
                <li
                  id="menu-item-78795"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78795"
                >
                  <a href="https://themefisher.com/about/">About</a>
                </li>
                <li
                  id="menu-item-243506"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243506"
                >
                  <a href="https://themefisher.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>{' '}
            <ul className="social-media-icons">
              <li>
                <a className="fb" href="https://www.facebook.com/themefisher">
                  <i className="ti-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="https://twitter.com/themefisher">
                  <i className="ti-twitter-alt" />
                </a>
              </li>
              <li>
                <a
                  className="pinterest"
                  href="https://www.pinterest.com/themefisher/"
                >
                  <i className="ti-pinterest-alt" />
                </a>
              </li>
              <li>
                <a
                  className="dribbble"
                  href="https://www.dribbble.com/themefisher/"
                >
                  <i className="ti-dribbble" />
                </a>
              </li>
              <li>
                <a
                  className="dribbble"
                  href="https://www.github.com/themefisher/"
                >
                  <i className="ti-github" />
                </a>
              </li>
            </ul>
            <div className="copyright-text">
              <p>Copyright © 2019 Tesco</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
