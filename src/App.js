import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/NavBar';
import { getCourses } from './courserData/coursers';
import CoursesList from './components/CoursesList';
import './App.css';
import CoursePage from './components/CoursePage';


class App extends Component {
  state = {
    Courses: getCourses()
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route path="/" exact >
              <Header />
              <CoursesList courses={this.state.Courses} />
            </Route>
            <Route path='/courses/:id' render={(props) => (<CoursePage {...props} courses={this.state.Courses} />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
