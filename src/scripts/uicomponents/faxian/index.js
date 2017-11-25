import React,{Component} from "react";
import {Link} from "react-router";
//组件

export default class Faxian extends Component{
    render(){
        return (
            <div className="faxian swiper-slide">
                <ul>
                    <li><img src={require("../../../assets/icon/images/faxian_01.jpg")}/><Link to="/">排行榜</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_02.jpg")}/><Link to="/">分类</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_03.jpg")}/><Link to="/">主题书单</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_04.jpg")}/><Link to="/">有声小说</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_05.jpg")}/><Link to="/">神秘功能</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_06.jpg")}/><Link to="/">漫画专区</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_07.jpg")}/><Link to="/">专属推荐</Link><i className="iconfont icon-jiantouyou"></i></li>
                    <li><img src={require("../../../assets/icon/images/faxian_08.jpg")}/><Link to="/">游戏中心</Link><i className="iconfont icon-jiantouyou"></i></li>
                </ul>
            </div>
        )
    }
}