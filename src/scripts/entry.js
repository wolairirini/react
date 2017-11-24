
import ReactDOM,{render} from "react-dom";
import React from "react";
import store from "./store";
import {Provider} from "react-redux";

import MyRouter from "./router.js";
var app = document.getElementById("app");

render(
    <Provider store={store}>
        <MyRouter/>
    </Provider>,
    app
)

