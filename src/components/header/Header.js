import MyButton from "../UI/myButton/MyButton";
import {useHistory} from "react-router";

export default function Header () {
    const history = useHistory();

    return (
        <div>
            <MyButton onClick={() => history.push("/create") } >Create User</MyButton>
        </div>
    );
 }
