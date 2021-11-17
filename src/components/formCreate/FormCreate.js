import cl from "./FormCreate.module.css";
import MyButton from "../UI/myButton/MyButton";
import FormUser from "../formUser/FormUser";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createNewUser, deleteUserById, updateUser, updateUserById} from "../../services";

export default function FormCreate(props) {
    const [validForm, setValidForm] = useState(true);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const pathname = props.location.pathname;
    const id = props.match.params.id;

    const checkForm = (status) => {
        setValidForm(status)
    };
    const getUser = (userForm) => {
        setUser(userForm)
    };
    const createUser = () => {
        dispatch(createNewUser(user));
        props.history.push("/");
    };
    const deleteUser = () => {
        dispatch(deleteUserById(id));
        props.history.push("/");
    };
    const saveUser = () => {
        dispatch(updateUserById(user, id));
        props.history.push("/");
    };

    return (
        <div className={cl.formCreate}>
            <div className={cl.contentDiv}>
                {
                    pathname.includes("create")
                    &&
                    <div className={cl.formHeader}>
                        <div className={cl.textDiv}>Create</div>
                        <div className={cl.closeDiv}/>
                    </div>
                }
                <div className={cl.formInputs}>
                    <FormUser
                        checkValidForm={checkForm}
                        getUser={getUser}
                        id={id}
                    />
                </div>
                {
                    pathname.includes("create")
                    &&
                    <div className={cl.formFooterCreate}>
                        <MyButton disabled={validForm} onClick={createUser}>Create</MyButton>
                    </div>
                }
                {
                    pathname.includes("edit")
                    &&
                    <div className={cl.formFooterEdit}>
                        <MyButton
                            style={{backgroundColor: "#F44682"}}
                            // disabled={validForm}
                            onClick={deleteUser}>
                            Delete
                        </MyButton>
                        <MyButton
                            // disabled={validForm}
                            onClick={saveUser}>
                            Save
                        </MyButton>
                    </div>
                }
            </div>
        </div>
    );
}
