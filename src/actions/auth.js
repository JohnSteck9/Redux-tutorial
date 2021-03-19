import { AUTH_IN_PROGRESS, AUTH_SUCCESS } from "../actions/types";

// Каррирование, Декоратори // action login
const login = (login, password) => (dispatch) => {
    dispatch({
        type: AUTH_IN_PROGRESS,
    })

    setTimeout(() =>{
        dispatch({
            type: AUTH_SUCCESS,
            payload: {      // redux profile
                profile: {
                    name: 'Vasya'
                }
            }
        })
    }, 1500)

    console.log(login, password)
}

export {login}