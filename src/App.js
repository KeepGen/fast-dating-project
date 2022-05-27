import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import UserPage from "./components/userPage";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/page/üsersId?" component={UserPage} />
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
};

export default App;
