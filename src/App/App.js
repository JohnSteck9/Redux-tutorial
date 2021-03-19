import React from 'react'
import {Provider} from "react-redux";
import store from '../store';

import '../containers/MainPage/MainPage.css';
import MainPage from "../containers/MainPage/MainPage";
import ReduxExample from "../components/ReduxExample/ReduxExample";


function App() {
    return (
        <Provider store={store}>
            <MainPage/>
            <hr/>
            <ReduxExample/>

        </Provider>
    );
}

export default App;

/*
npm i redux
npm i redux-thunk
npm i react-redux
*/
