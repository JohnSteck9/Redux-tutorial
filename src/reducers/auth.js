import update from 'immutability-helper';
import {AUTH_IN_PROGRESS, AUTH_SUCCESS} from "../actions/types";

const reducer = (state = initialState, action) => {
    const {type} = action;
    // let newState = null;
    switch (type) {
        case AUTH_IN_PROGRESS:
            // копіюємо state і вертаємо копію
            // newState = JSON.parse(JSON.stringify(state))
            // newState.status = 'in_progress'
            // return newState

            // копіюємо state і вертаємо копію
            return update(state, {
                status: { $set: 'in_progress' }
            })

        case AUTH_SUCCESS:
            // newState = JSON.parse(JSON.stringify(state))
            // newState.status = 'auth'
            // newState.profile = action.payload.profile;
            // return newState
            return update(state, {
                status: { $set: 'auth' },
                profile: { $set: action.payload.profile }
            })
        default:
            return state
    }
}

const initialState = {
    profile: {
        name: 'John',
    },
    token: null,
    status: 'guest',    // guest // in_progress // auth
};

export default reducer;


// let REDUX_STORE =
// {
//     auth: {
//         profile: {},
//         token: null,
//         status: 'guest',
//     }
//     blog: { ... }
// }