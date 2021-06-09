import React from 'react';
import ReactDOM from 'react-dom';

export default class BusinessPage extends React.Component {
  render() {
    return (
      <div className='business-page'>
        <div className='menu-container'>
          <div className='top-row'>
            <a href=' '>
              <img alt='yelp logo' className='yelp-logo-menu' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1280px-Yelp_Logo.svg.png'></img>
            </a>
            <div className='input-container'>
              <form className='search-form bp-search-form'>
                <input type='text' name='type' id='type' placeholder="tacos, cheap dinner, Max's"></input>
                <input type='text' name='location' id='location' placeholder='Irvine, CA'></input>
                <button type='button' className='bp-search-button'>
                  <span><i class="fas fa-search bp-search"></i></span>
                </button>
              </form>
            </div>
            <div className='business-review-link-container'>
              <a className='for-businesses' href='#businessPage'>For Businesses</a>
              <a className='write-review' href='#businessPage'>Write a Review</a>
            </div>
            <div className='button-container'>
              <a className='bp-log-in' href='#businessPage'>Log In</a>
              <a className='bp-sign-up' href='#businessPage'>Sign Up</a>
            </div>
          </div>
          <div className='bottom-row'>
            <ul className='drop-down-list'>
              <li className='drop-down-item'>Restaurants <i class="fas fa-angle-down"></i></li>
              <li className='drop-down-item'>Home Services <i class="fas fa-angle-down"></i></li>
              <li className='drop-down-item'>Auto Services <i class="fas fa-angle-down"></i></li>
              <li className='drop-down-item'>More <i class="fas fa-angle-down"></i></li>
            </ul>
          </div>
        </div>
        <div className='business-page-content'>

        </div>
      </div>
    );
  }
}
