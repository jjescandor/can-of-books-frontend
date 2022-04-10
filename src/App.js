import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      createShow: false
    };
  }

  showCreateModal = () => {
    this.setState({ createShow: true });
  };

  hideCreateModal = () => {
    this.setState({ createShow: false });
  };

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            onLogout={this.logoutHandler}
            showCreateModal={this.showCreateModal}
          />
          <Switch>
            <Route exact path='/'>
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks
                hideCreateModal={this.hideCreateModal}
                showCreateModal={this.showCreateModal}
                createShow={this.state.createShow}
              />
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path='/About'>
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <About />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
