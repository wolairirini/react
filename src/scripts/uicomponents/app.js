import React,{Component} from "react";

//组件
import Head from "../containers/head";
import Zhuishu from "../containers/zhuishu";
import Shequ from "../containers/shequ";
import Faxian from "../containers/faxian";
import Swipe from "../utils/swiper-3.3.1.min.js";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            mySwiper:null
        }
    }
    componentDidMount(){
        var that = this;
        var mySwiper = new Swiper('.swiper-container', {
            pagination : '.swiper-pagination',
            autoHeight: true,
            onSlideChangeStart: function(swiper){
                const {changeswipe} = that.props;
                changeswipe(swiper.activeIndex)
            }
        })
        this.setState({
            mySwiper
        })
    }
    render(){ 
        const{swipeindex} = this.props;
        if(this.state.mySwiper){
        this.state.mySwiper.slideTo(swipeindex,1000,false);
        }
        return (
            <div className="mainbox">
                <Head/>
                <div className="main">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    <Zhuishu className="swiper-slide"/>
                    <Shequ className="swiper-slide"/>
                    <Faxian className="swiper-slide"/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}