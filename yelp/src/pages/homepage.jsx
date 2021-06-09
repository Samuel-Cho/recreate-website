import React from 'react';
import ReactDom from 'react-dom';

export default class Homepage extends React.Component{
  render(){
    return (
      <div className='homepage'>
        <div className='row header-top-container'>
          <div className='header-top'>
            <div className='content top-content'>
              <div className='top-nav'>
                <div className='top-nav-link-container'>
                  <a className='top-nav-link' href=''>Write a Review</a>
                  <a className='top-nav-link' href=''>Events</a>
                  <a className='top-nav-link' href=''>Talk</a>
                </div>
                <div className='top-nav-log-container'>
                  <a className='log-in' href=''>Log In</a>
                  <a className='sign-up' href=''>Sign Up</a>
                </div>
              </div>
              <div className='search-row'>
                <div className='logo-container'>
                  <img alt='yelp logo' className='yelp-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1280px-Yelp_Logo.svg.png'></img>
                </div>
                <div className='search-container'>
                  <div className='input-container'>
                    <form className='search-form'>
                      <label className='find-label' for='find'>Find</label>
                      <input type='text' name='find' id='find' placeholder='plumbers, delivery, takeout...'></input>
                      <label className='near-label' for='near'>Near</label>
                      <input type='text' name='near' id='near' placeholder='La Habra Heights, CA 90631'></input>
                      <button type='button' className='search-button'>
                        <span><i class="fas fa-search"></i></span>
                      </button>
                    </form>
                  </div>
                  <div className='suggestion-list-container'>
                    <ul className='suggestion-list'>
                      <li className='suggestion'>
                        <a className='suggestion-link' href=''>
                          <i class="fas fa-faucet suggestion-icon"></i>
                          <p className='suggestion-text'>Plumbers</p>
                        </a>
                      </li>
                      <li className='suggestion'>
                        <a className='suggestion-link' href=''>
                          <i class="fas fa-utensils suggestion-icon"></i>
                          <p className='suggestion-text'>Restaurants</p>
                        </a>
                      </li>
                      <li className='suggestion'>
                        <a className='suggestion-link' href=''>
                          <i class="fas fa-home suggestion-icon"></i>
                          <p className='suggestion-text'>Home Services</p>
                        </a>
                      </li>
                      <li className='suggestion'>
                        <a className='suggestion-link' href=''>
                          <i class="fas fa-bicycle suggestion-icon"></i>
                          <p className='suggestion-text'>Delivery</p>
                        </a>
                      </li>
                      <li className='suggestion'>
                        <a className='suggestion-link' href=''>
                          <i class="fas fa-store suggestion-icon"></i>
                          <p className='suggestion-text'>Black Owned</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='photo-source'>
                <a className='photo-location' href=' '>Melbourne Food Porn Festival</a>
                <p className='photographer'><span className='photo-by'>Photo by</span> <a className='photographer-name' href=' '>Sharon H.</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row find-row'>
          <div className='content find-row-content'>
            <h3 className='find-best-business'>Find the Best Businesses in Town</h3>
            <div className='business-card-container'>
              <div className='business-card'>
                <img alt='dry cleaning' className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/dryclean@2x.yji-ff5b642fbbdf949c26c3ca19b6dfb4bb.jpg'></img>
                <p className='business-card-text'>Dry Cleaning</p>
              </div>
              <div className='business-card'>
                <img alt='phone repair' className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/mobilephonerepair@2x.yji-8d16cabd40520ed32733ee590e6bc5f4.jpg'></img>
                <p className='business-card-text'>Phone Repair</p>
              </div>
              <div className='business-card'>
                <img alt='hotel' className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/hotels@2x.yji-c49912c5d2a5bd098a87a5ebcf038fb2.jpg'></img>
                <p className='business-card-text'>Hotels</p>
              </div>
              <div className='business-card'>
                <img alt='massage' className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/massage@2x.yji-3e7134d3e9e5653059f073a41af7bbb7.jpg'></img>
                <p className='business-card-text'>Massage</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row yelp-sf-row'>
          <div className='content yelp-sf-content'>
            <h3 className='yelp-sf-header'>Yelp San Francisco</h3>
            <ul className='yelp-sf-city-list'>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>Irvine</a>
              </li>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>New York</a>
              </li>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>San Jose</a>
              </li>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>Los Angeles</a>
              </li>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>Chicago</a>
              </li>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>Palo Alto</a>
              </li>
              <li className='yelp-sf-city'>
                <a className='city' href=' '>
                  <i class="fas fa-search more-cities"></i>More Cities
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='row hot-and-new-row'>
          <div className='content hot-and-new-content'>
            <p className='hot-and-new-header'>Hot & New Businesses</p>
            <div className='hot-and-new-business-container'>
              <div className='hot-and-new-card'>
                <img alt='business image' className='hot-and-new-img' src='https://s3-media0.fl.yelpcdn.com/bphoto/ZaEu9zKutUsTKXdKRNtmYg/o.jpg'></img>
                <div className='business-details'>
                  <a href=' ' className='business-name'>Mutts</a>
                  <div className='rating-container'>
                    <img className='star-rating' alt='star rating' src='https://809y21tj4ca35taeseea1idm-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/yelp-stars_400.png'></img>
                    <p className='review-count'> 40 reviews</p>
                  </div>
                  <p className='bd'>Breakfast, Pizza, Sandwiches</p>
                  <p className='bd'>Newport Beach, CA</p>
                  <p className='bd'><span className='new'><i class="fas fa-fire-alt"></i> Opened 6 weeks ago</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='row browse-business-row'>
          <div className='content browse-business-content'>
            <h3 className='browse-business-header'>Browse Businesses by Category</h3>
            <div className='business-category-container'>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='restaurant' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'></img>
                  <p className='business-category'>Restaurant</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='shopping' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping@2x.yji-559f23226d9f9f651812ddc5d6e3d1b2.png'></img>
                  <p className='business-category'>Shopping</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='nightlife' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife@2x.yji-925cd32ac4c934d465c664f140c5b629.png'></img>
                  <p className='business-category'>Nightlife</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='active life' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_active_life@2x.yji-2df9fcd6a68eb739e68a026778dd7a3f.png'></img>
                  <p className='business-category'>Active Life</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='beauty and spas' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_beauty@2x.yji-3cfb4e602ac139443228f090ec71b84f.png'></img>
                  <p className='business-category'>Beauty & Spas</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='automotive' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_automotive@2x.yji-c73bd70791375ec60256243055745f63.png'></img>
                  <p className='business-category'>Automotive</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='home services' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_home_services@2x.yji-20723ad0e5ee302de563935be68c6638.png'></img>
                  <p className='business-category'>Home Services</p>
                </a>
              </div>
              <div className='business-category-card'>
                <a className='business-category-link' href=' '>
                  <img alt='more categories' className='business-category-img' src='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories@2x.yji-e7be9a50bf8cf4a2eea9f7d7e2b5f194.png'></img>
                  <p className='business-category'>More Categories</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row yelp-mobile-row'>
          <div className='content yelp-mobile-content'>
            <h3 className='yelp-mobile-header'>Yelp Mobile Apps</h3>
            <div className='mobile-container'>
              <div className='apple-apps-container'>
                <a className='mobile-app-link' href=' '>
                  <p className='apple-apps'>iPhone, iPad and <i class="fab fa-apple"></i> Watch</p>
                  <img className='apple-apps-img' alt="iphone and ipad" src='https://s3-media0.fl.yelpcdn.com/assets/public/pitch_ios@2x.yji-56ec6655a7ac925b080fa9833895e2a2.png'></img>
                </a>
              </div>
              <div className='android-apps-container'>
                <a className='mobile-app-link' href=' '>
                  <p className='android-apps'>Android</p>
                  <img className='android-apps-img' alt="android" src='https://s3-media0.fl.yelpcdn.com/assets/public/pitch_android@2x.yji-c0e32a3afc513227116910caefb3a994.png'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
