import cl from "./UserSide.module.css";
import {memo} from "react";

export default memo(function UserSide() {

        return (
            <div className={cl.userSide}>
                <div className={cl.contacts}>
                    Users
                </div>
            </div>
        );
    }
);
