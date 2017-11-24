import React,{Component} from "react";
import {Link} from "react-router";
//组件

export default class Faxian extends Component{
    render(){
        return (
            <div className="faxian swiper-slide">
                <h1>Faxian Page</h1>
                <ul>
                    <li><Link to="/">排行榜</Link></li>
                    <li><Link to="/">分类</Link></li>
                    <li><Link to="/">主题书单</Link></li>
                    <li><Link to="/">有声小说</Link></li>
                    <li><Link to="/">神秘功能</Link></li>
                    <li><Link to="/">漫画专区</Link></li>
                    <li><Link to="/">专属推荐</Link></li>
                    <li><Link to="/">游戏中心</Link></li>
                </ul>
            </div>
        )
    }
}