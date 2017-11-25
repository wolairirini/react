import React,{Component} from "react";
import {Link,activeClassName} from "react-router";
//import {changeswipe} from "../actions";

import More from "../containers/more";
export default class Head extends Component{
    changeidx=(index)=>{
        const {changeswipe} = this.props;
        changeswipe(index);
    }
    render(){
        const {togglemore,swipeindex} = this.props;
        return (
            <header>
                <More/>
                <div className="top">
                    <h1><img src={require("../../assets/icon/logo.jpg")}/></h1>
                    <ul>
                        <li><img src={require("../../assets/icon/images/headicon_03.jpg")}/></li>
                        <li><Link to="/search"><img src={require("../../assets/icon/images/headicon_05.jpg")}/></Link></li>
                        <li><img  onTouchStart={togglemore} src={require("../../assets/icon/images/headicon_07.jpg")}/></li>
                    </ul>
                </div>
                <ul className="nav ">
                    <li onClick={()=>{this.changeidx(0)}}><a className={swipeindex==0?"active":""}>追书</a></li>
                    <li onClick={()=>{this.changeidx(1)}}><a className={swipeindex==1?"active":""}>社区</a></li>
                    <li onClick={()=>{this.changeidx(2)}}><a className={swipeindex==2?"active":""}>发现</a></li>
                    {/* className={swipeindex==2?"active":""} */}
                </ul>
            </header>
        )
    }
}