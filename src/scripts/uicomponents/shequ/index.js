import React,{Component} from "react";

//组件

import Gonggongbankuai from "../../containers/shequ/gonggongbankuai"
import Shujishequ from "../../containers/shequ/shujishequ";

export default class Shequ extends Component{
    render(){
        return (
            <div className="shequ swiper-slide">
                <Gonggongbankuai/>
                <Shujishequ/>
            </div>
        )
    }
}