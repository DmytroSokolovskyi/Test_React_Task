import cl from "./User.module.css"

export default function User({choseUser, user}) {
    const {username, first_name, last_name, email, user_type} = user;

    return (
        <div className={cl.userDiv} onClick={() => choseUser(user)}>
            <div>{username}</div>
            <div>{first_name}</div>
            <div>{last_name}</div>
            <div>{email}</div>
            <div>{user_type}</div>
        </div>
    );
}
