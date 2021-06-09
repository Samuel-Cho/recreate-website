import React from 'react';
import ReactDOM from 'react-dom';

export default class BusinessPage extends React.Component {
  render() {
    return (
      <div className='business-page'>
        <div className='menu-container'>
          <div className='top-row'>
            <img alt='yelp logo' className='yelp-logo-menu' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1280px-Yelp_Logo.svg.png'></img>
            <div className='input-container'>
              <form className='search-form'>
                <input type='text' name='find' id='find' placeholder='plumbers, delivery, takeout...'></input>
                <input type='text' name='near' id='near' placeholder='La Habra Heights, CA 90631'></input>
                <button type='button' className='search-button'>
                  <span><i class="fas fa-search"></i></span>
                </button>
              </form>
            </div>
          </div>
          <div className='bottom-row'>

          </div>
        </div>
        <div className='business-page-content'>

        </div>
      </div>
    );
  }
}
