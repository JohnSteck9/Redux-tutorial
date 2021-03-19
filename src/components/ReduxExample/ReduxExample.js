import React, { useEffect } from 'react';
import './ReduxExample.css'
import thunk from 'redux-thunk'
// import {createStore} from './createStore.js'
import {createStore, applyMiddleware, compose} from 'redux'
import {rootReducer} from "./redux/rootReducer.js";
import {async_increment, changeTheme, decrement, increment} from "./redux/actions";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";




function ReduxExample() {
    useEffect(() => {
        // Оновлюємо заголовок документа, використовуючи API браузера
        const counter = document.getElementById('counter')
        const addBtn = document.getElementById('add')
        const subBtn = document.getElementById('sub')
        const asyncBtn = document.getElementById('async')
        const themeBtn = document.getElementById('theme')

        // -- Middleware - logger
        // function logger(state) {
        //     return function(next) {
        //         // замикання
        //         return function(action) {
        //             console.log('Prev State: ', state.getState())
        //             console.log('Action: ', action)
        //             const newState = next(action)
        //             console.log('New State: ', state.getState())
        //             return newState
        //
        //         }
        //     }
        // }


        // let state = 0
        // const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger))
        // const store = createStore(
        //     rootReducer,
        //     // 10,
        //     compose(applyMiddleware(thunk, logger),
        //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //     ))
        const store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk, logger)
            )
        )


        // function render() {
        //      counter.textContent = state.toString()
        // }

        addBtn.addEventListener('click', () => {
            // state++
            // render()
            store.dispatch(increment())
        })
        subBtn.addEventListener('click', () => {
            // state--
            // render()
            store.dispatch(decrement())
        })
        asyncBtn.addEventListener('click', () => {
            // setTimeout(() => {
            //     state++
            //     render()
            // }, 2000)
            store.dispatch(async_increment())
        })
        themeBtn.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('light')
            ? 'dark'
            : 'light'

            store.dispatch(changeTheme(newTheme))
            // document.body.classList.toggle('dark')
        })

        store.subscribe( () => {
            const state = store.getState()
            // console.log(state)
            counter.textContent = state.counter
            document.body.className = state.theme.value;

            [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
                btn.disabled = state.theme.disabled
            })
        })

        // render()
        store.dispatch({type: 'INIT_APPLICATION'})






    },[]);

    return (

        <div className="container pt-5">
            <div className="container pt-5">
                <h1 className="heading">
                    <span>Redux</span>
                    <button className="btn btn-info" id="theme">Сменить тему</button>
                </h1>
                <hr/>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Счетчик: <span id="counter"></span></h5>
                        <button className="btn btn-primary" id="add">Добавить</button>
                        <button className="btn btn-danger" id="sub">Убрать</button>
                        <button className="btn btn-success" id="async">Async</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ReduxExample;