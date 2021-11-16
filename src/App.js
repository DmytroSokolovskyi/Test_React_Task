import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {

    return (
        <BrowserRouter>
            <Router>
              <UsersPage/>
            </Router>
        </BrowserRouter>
    );
}

export default App;
