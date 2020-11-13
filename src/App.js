import React from 'react';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Visitor from './components/Main/Visitor';
import User from './components/Main/User/User/User';
import {connect} from 'react-redux';

const App = ({loggedIn}) => {
  return (
    <React.Fragment>
      <Header/>
      {loggedIn? <User/>: <Visitor/>}         
      {/* <Footer/> */}
    </React.Fragment>
  );
};

const mapStateToProps=(state)=>{
  return{
      loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(App);