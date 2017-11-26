import React,{Component} from "react";
import {IndexRedirect,IndexRoute,Router,Route,browserHistory} from "react-router";



//组件
import CssTransitionGroup from "react-addons-css-transition-group";
import App from "./containers/app";
import Guide from "./containers/guide";
import Zhuishu from "./containers/zhuishu";
import Faxian from "./containers/faxian";
import Shequ from "./containers/shequ";
import Login from "./containers/login";
import Detail from "./containers/detail";
import Search from "./containers/search";
import QueueAnim from 'rc-queue-anim';
import Paihang from "./containers/paihang";
import Mulu from "./containers/mulu";
import Content from "./containers/content";

export default class MyRouter extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/login" component={Login}></Route>
                <Route path="/guide" component={Guide}/>
                <Route path="/search" component={Search}/>
                <Route path="/paihang" component={Paihang}/>
                <Route path="/mulu/:muluid" component={Mulu}/>
                <Route path="/detail/:bookid" component={Detail}></Route>
                <Route path="/content/:muluid/:i" component={Content}/>
                
            </Router>
        )
    }
}
