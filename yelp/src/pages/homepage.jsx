import React from 'react';
import ReactDom from 'react-dom';

export default class Homepage extends React.Component{
  render(){
    return (
      <div className='homepage'>
        <div className='row header-top'>
          <div className='content'>
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
            <div className='search-row'></div>
            <div className='photo-source'>
              <p className='photo-location'>Melbourne Food Porn Festival</p>
              <p className='photographer'><span className='photo-by'>Photo by</span> Sharon H.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
