import {SET_AUTH, SET_CHAT, SET_CONTACT, SET_MSG, SET_STATE, SET_USER} from "../actions";

let initialState = { newUser: {}, chosenContact: '', auth: false};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_CONTACT: {
        //     return {
        //         ...state,
        //         contacts: [...state.contacts, action.payload],
        //         chosenContact: {...action.payload}
        //     };
        // }
        //
        // case SET_CHAT: {
        //     return {...state, chosenContact: {...action.payload}};
        // }

        // case SET_STATE: {
        //     return {...action.payload}
        // }

        case SET_USER: {
            return {...state, user: action.payload}
        }

        // case SET_AUTH: {
        //   return {...state, auth: action.payload}
        // }

        default:
            return state;
    }
};
