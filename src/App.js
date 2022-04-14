import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Welcome from './Welcome';
import ReadingList from './ReadingList';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      createShow: false,
      isResult: null,
      bookToReadingList: null
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

  getSearchResults = (booksArr) => {
    this.setState({ booksArr });
  };

  getSearchResultArr = (keyword) => {
    const test = new RegExp(keyword, 'i');
    const resultArr = this.state.booksArr.filter(
      (book) =>
        book.title.match(test) ||
        book.author.match(test) ||
        book.description.match(test)
    );
    this.setState({ searchResultArr: resultArr, isResult: true });
    console.log(resultArr);
  };

  changeResult = () => {
    this.setState({ isResult: false });
  };


  addToReadingList = async (bookToReadingList) => {
    console.log(bookToReadingList);
    this.setState({ bookToReadingList })
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      console.log("res", res);
      const jwt = res.__raw;
      console.log('token: ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'post',
        data: this.state.bookToReadingList,
        baseURL: `${process.env.REACT_APP_COB}`,
        url: '/reading'
      }
      const booksResponse = await axios(config, this.state.bookToReadingList);
      console.log("Books from DB: ", booksResponse.data);
    }
  }


  render() {
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            onLogout={this.logoutHandler}
            showCreateModal={this.showCreateModal}
            getSearchResultArr={this.getSearchResultArr}
            changeResult={this.changeResult}
          />
          {this.state.isResult && <Redirect to='/Search' />}
          <Switch>
            <Route exact path='/'>
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {!this.props.auth0.isAuthenticated ?
                <Welcome />
                :
                <BestBooks
                  hideCreateModal={this.hideCreateModal}
                  showCreateModal={this.showCreateModal}
                  createShow={this.state.createShow}
                  getSearchResults={this.getSearchResults}
                  changeResult={this.changeResult}
                  addToReadingList={this.addToReadingList}
                />}
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path='/About'>
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <About
                changeResult={this.changeResult}
              />
            </Route>
            <Route exact path='/Search'>
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <Search
                searchResultArr={this.state.searchResultArr}
              />
            </Route>
            <Route exact path='/ReadingList'>
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <ReadingList
                changeResult={this.changeResult}
                bookToReadingList={this.state.bookToReadingList}
              />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
