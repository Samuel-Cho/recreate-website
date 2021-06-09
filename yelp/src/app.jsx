import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage';
import parseRoute from './lib/index';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(indow.location.hash)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    })
  }

  renderPage() {
    if (this.state.route.path === 'businessPage') {
      return <businessPage />
    } else {
      return <Homepage />
    }
  }

  render() {
    return {this.renderPage()};
  }
}
