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
                  <img className='yelp-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1280px-Yelp_Logo.svg.png'></img>
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
                <p className='photo-location'>Melbourne Food Porn Festival</p>
                <p className='photographer'><span className='photo-by'>Photo by</span> Sharon H.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row find-row'>
          <div className='content find-row-content'>
            <h3 className='find-best-business'>Find the Best Businesses in Town</h3>
            <div className='business-card-container'>
              <div className='business-card'>
                <img className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/dryclean@2x.yji-ff5b642fbbdf949c26c3ca19b6dfb4bb.jpg'></img>
                <p className='business-card-text'>Dry Cleaning</p>
              </div>
              <div className='business-card'>
                <img className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/mobilephonerepair@2x.yji-8d16cabd40520ed32733ee590e6bc5f4.jpg'></img>
                <p className='business-card-text'>Phone Repair</p>
              </div>
              <div className='business-card'>
                <img className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/hotels@2x.yji-c49912c5d2a5bd098a87a5ebcf038fb2.jpg'></img>
                <p className='business-card-text'>Hotels</p>
              </div>
              <div className='business-card'>
                <img className='business-card-image' src='https://s3-media0.fl.yelpcdn.com/assets/public/massage@2x.yji-3e7134d3e9e5653059f073a41af7bbb7.jpg'></img>
                <p className='business-card-text'>Massage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
