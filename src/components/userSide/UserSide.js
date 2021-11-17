import cl from "./UserSide.module.css";
import {memo, useEffect} from "react";
import {getUsers} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import UserSideMenu from "../userSideMenu/UserSideMenu";
import User from "../user/User";
import {setChoseUser} from "../../redux/actions";
import {useHistory} from "react-router-dom";

export default memo(function UserSide(props) {
        const dispatch = useDispatch();
        const history = useHistory();
        const {userReducer} = useSelector(state => state);
        const {users} = userReducer;

        useEffect(() => {
            dispatch(getUsers());
        }, [dispatch]);

        const choseUser = (user) => {
            dispatch(setChoseUser(user));
            history.push(`/edit/${user.id}`)
        };

        return (
            <div className={cl.userSide}>
                <div className={cl.headerUserSide}>
                    <UserSideMenu/>
                </div>
                <div className={cl.usersSideDiv}>
                    {users && users.map(user => <User key={user.id} user={user} choseUser={choseUser}/>)}
                </div>
                <div className={cl.footerUserSide}/>
            </div>
        );
    }
);
