import React,{Component} from "react";
import {Link,hashHistory} from "react-router";

export default class Header extends Component{
    render(){
        return(
            <header>
                <i onClick={()=>{hashHistory.goBack()}} className="iconfont icon-fanhui"></i>
                <p>
                    
                    <Link to="/"><i className="iconfont icon-pinglun"></i></Link>
                    <Link to="/"><i className="iconfont icon-xiazai"></i></Link>
                    <Link to="/"><i className="iconfont icon-fenxiang"></i></Link>
                </p>
            </header>
        )
    }
}