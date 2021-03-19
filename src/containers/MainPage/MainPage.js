// import PropTypes from 'prop-types';
import React from 'react'
import logo from './logo.svg';
import './MainPage.css';
import {connect} from "react-redux";
import {login as loginAction} from "../../actions/auth";



function MainPage(props) {
    const {my_status, userName } = props;


    const handlerClick = (event) => {
        console.log(props)
        console.log("handlerClick")
        const { login } = props;
        login ('Henry', 'qwerty')
        console.log(props)
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/Index.js</code> and save to reload.
                </p>
                <p>{my_status} {userName}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button type="button" onClick={handlerClick}>Click me!</button>
            </header>

        </div>
    );
}


// get data from REDUX_STORE
const mapStateToProps = state => ({
    my_status: state.auth.status,
    userName: state.auth.profile.name,
});

// change data from REDUX_STORE
const mapDispatchToProps = dispatch => ({
    login: (login, password) => dispatch(loginAction(login, password))      // Каррирование, Декоратори
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

// export default MainPage;
