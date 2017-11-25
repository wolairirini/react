import React,{Component} from "react";
import {Icon} from "antd";
import {Link,browserHistory} from "react-router";
export default class Login extends Component{
    login(e){
        e.preventDefault();
    }
    sendcheckcode(){

    }
    render(){
        return(
            <div className="loginbox">
                <div className="loginhead">
                    <img src={require("../../../assets/img/testhead.jpg")} alt="error"/>
                    <p>上次登陆方式：<i className="iconfont icon-qq"></i>QQ登陆</p>
                </div>
                <form className="body">
                    <button onClick={this.sendcheckcode}>获取验证码</button>
                    <input autoFocus name="number" type="text" placeholder="请输入手机号"/>
                    <input name="checkcode" type="text" placeholder="请输入验证码"/>
                    <input onTouchStart={this.login} type="submit" value="手机快捷登陆"/>
                </form>
                <div className="loginfoot">
                    <form>
                        <fieldset>
                            <legend>选择登陆方式</legend>
                            <div>
                                <span><i className="iconfont icon-qq"></i></span>
                                <span><i className="iconfont icon-weixin"></i></span>
                                <span><i className="iconfont icon-artboard22"></i></span>
                                <span><i className="iconfont icon-xiaomi"></i></span>
                            </div>
                            <p><Link to="/">点击登录即代表同意追书神器《用户协议》</Link></p>
                            <button onClick={()=>{browserHistory.push("/")}}>退出</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}