import React,{Component} from "react";
import {Link,activeClassName} from "react-router";
import {Icon} from 'antd';
import CssTransitionGroup from "react-addons-css-transition-group";
var ifshow = "hide";
export default class More extends Component{
    componentWillUpdate(){
        const {morename} = this.props;
        if(!morename){
            ifshow="show"
        }else{
            ifshow="hide"
        }
    }
    showmore=(e)=>{
        const {togglemore} = this.props;
        if(e.target.tagName!="A"){
            togglemore();
        }
    }
    render(){
        return(
            
            <div onTouchEnd={this.showmore} className={"morebox "+ifshow}>
            <ul className="more">
                <li><Link to="/login"><Icon className="icon" type="user" />请登录</Link></li>
                <li><Link to="/"><Icon className="icon" type="bell" />我的消息</Link></li>
                <li><Link to="/"><Icon className="icon" type="cloud-upload" />同步书架</Link></li>
                <li><Link to="/"><Icon className="icon" type="camera" />扫描本地书籍</Link></li>
                <li><Link to="/"><Icon className="icon" type="wifi" />WIFI传书</Link></li>
                <li><Link to="/"><Icon className="icon" type="exclamation-circle" />意见反馈</Link></li>
                <li><Link to="/"><Icon className="icon" type="pushpin" />夜间模式</Link></li>
                <li><Link to="/"><Icon className="icon" type="setting" />设置</Link></li>
            </ul>
            </div>
        )
    }
}