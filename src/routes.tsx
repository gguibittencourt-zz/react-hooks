import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/home";
import Tasks from "./pages/tasks";

const Routes: React.FC = () => {
    return <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tasks" exact component={Tasks}/>
    </Switch>;
}

export default Routes;