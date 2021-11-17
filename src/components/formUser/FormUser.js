import cl from "./FormUser.module.css"
import MyInput from "../UI/myInput/MyInput";
import {useInput} from "../../hooks";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function FormUser({checkValidForm, getUser, id}) {
    const {userReducer} = useSelector(state => state);
    const [choseUser, setChoseUser] = useState({});

    const userName = useInput("", {isEmpty: true, minLength: 8, maxLength: 30});
    const firstName = useInput("", {isEmpty: true, minLength: 3, maxLength: 30});
    const lastName = useInput("", {isEmpty: true, minLength: 3, maxLength: 30});
    const email = useInput("", {isEmpty: true, isEmail: true});
    const password = useInput("", {isEmpty: true, isPassword: true});
    const rPassword = useInput("", {isEmpty: true, isPassword: true, isPasswordMatched: password.value});
    const type = useInput("", {isEmpty: true, isIncludes: ["driver", "admin"]});

    useEffect(() => {
        if (userName.errorMessage || firstName.errorMessage || lastName.errorMessage || email.errorMessage || password.errorMessage || rPassword.errorMessage || type.errorMessage) {
            checkValidForm(true)
        } else {
            checkValidForm(false);
        }
    }, [checkValidForm, userName.errorMessage, firstName.errorMessage, lastName.errorMessage, email.errorMessage, password.errorMessage, rPassword.errorMessage, type.errorMessage]);

    useEffect(() => {
        setChoseUser(userReducer.choseUser)
    }, [id]);

    const createUser = () => {
        const newUser = {
            username: userName.value || choseUser.username,
            first_name: firstName.value || choseUser.first_name,
            last_name: lastName.value || choseUser.last_name,
            email: email.value || choseUser.email,
            password: password.value,
            user_type: type.value || choseUser.user_type
        };
        getUser(newUser)
    };

    return (
        <form className={cl.allInputs} autoComplete={"off"} onMouseLeave={createUser}>
            <MyInput children={'Username*'}
                     name={"username"}
                     type={"text"}
                     error={userName.isDirty ? userName.errorMessage : ''}
                     value={userName.value || choseUser.username}
                     onBlur={(e) => userName.onBlur(e)}
                     onChange={(e) => userName.onChange(e)}/>
            <MyInput children={"First name*"}
                     name={"firstName"}
                     type={"text"}
                     value={firstName.value || choseUser.first_name}
                     error={firstName.isDirty ? firstName.errorMessage : ''}
                     onBlur={(e) => firstName.onBlur(e)}
                     onInput={(e) => firstName.onChange(e)}/>
            <MyInput children={"Last name*"}
                     name={"lastName"}
                     type={"text"}
                     value={lastName.value || choseUser.last_name}
                     error={lastName.isDirty ? lastName.errorMessage : ''}
                     onBlur={(e) => lastName.onBlur(e)}
                     onInput={(e) => lastName.onChange(e)}/>
            <MyInput children={"Email*"}
                     name={"email"}
                     type={"email"}
                     value={email.value || choseUser.email}
                     error={email.isDirty ? email.errorMessage : ''}
                     onBlur={(e) => email.onBlur(e)}
                     onInput={(e) => email.onChange(e)}/>
            <MyInput children={"Type*"}
                     name={"type"}
                     value={type.value || choseUser.user_type}
                     list="type" className={'select'}
                     error={type.isDirty ? type.errorMessage : ''}
                     onBlur={(e) => type.onBlur(e)}
                     onInput={(e) => type.onChange(e)}/>
            <MyInput children={"Password*"}
                     name={"password"}
                     type={"password"}
                     value={password.value}
                     error={password.isDirty ? password.errorMessage : ''}
                     onBlur={(e) => password.onBlur(e)}
                     onInput={(e) => password.onChange(e)}/>
            <MyInput children={"Repeat password*"}
                     name={"rPassword"}
                     type={"password"}
                     value={rPassword.value}
                     error={rPassword.isDirty ? rPassword.errorMessage : ''}
                     onBlur={(e) => rPassword.onBlur(e)}
                     onInput={(e) => rPassword.onChange(e)}/>

            <datalist id="type">
                <option value="driver"/>
                <option value="admin"/>
            </datalist>
        </form>
    );
}
