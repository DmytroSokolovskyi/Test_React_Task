import {setUser} from "../redux/actions";
import {axiosInstance} from "./config";
import {useFetch} from "../hooks";

export const createNewUser = (user) => (dispatch) => {
    axiosInstance.post('/users', user).then(data => console.log(data))



    dispatch(setUser(user));
};

// export const findChoseContact = (contacts, id) => (dispatch) => {
//     dispatch(choseChat(contacts.find(item => item.id === id)));
// };
//
// export const createMsg = (id, msg) => (dispatch) => {
//     const userMsg = {sender: false, time: moment().format(), value: msg};
//     dispatch(setMsg({id, userMsg}));
// };
