import cl from "./UsersPage.module.css";
import {Route, Switch} from "react-router-dom";
import UserSide from "../../components/userSide/UserSide";
import Header from "../../components/header/Header";
import {useHistory} from "react-router";
import FormCreate from "../../components/formCreate/FormCreate";

export default function UsersPage() {
    const history = useHistory();
const {location: {pathname}} = history;
    console.log(pathname)

    return (
        <div className={cl.mainDivPage}>
            <header>
                <Header/>
            </header>
            <main>
                <usersSide>
                    <UserSide/>
                </usersSide>

                <Switch>
                    <Route exact={true} path={"/create"} component={FormCreate}/>
                    {/*        <Route exact={true} path={"/edit/:id"} render={(props) => {*/}
                    {/*            return <div>edit</div>*/}
                    {/*            // <ChadSide {...props}/>;*/}
                    {/*        }}/>*/}
                </Switch>

            </main>
        </div>
    );
};
