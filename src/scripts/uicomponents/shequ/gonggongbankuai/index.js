import React,{Component} from "react";
import {Link} from "react-router";
//组件
import { Carousel } from "antd"
import ReactSwipe  from "react-swipe";

export default class Gonggongbankuai extends Component{
    constructor(props){
        super(props);
        this.state={
            //mySwiper2:null
        }
    }
    componentWillMount(){
        const {dispatch,getshequ} = this.props;
        dispatch(getshequ);
    }
    render(){
        const {shequs} = this.props;
        console.log(shequs)
        return (
            <div className="gonggongbankuai">
                <h1>公共板块</h1>
                <Carousel>
                    <div className="s0">
                    {
                    shequs.map((item,index)=>{
                        if(index<8){
                            return(
                                <Link to={"/"} key={index}>
                                    <img src={item.icon}/>
                                    <p>{item.title}</p>
                                </Link>
                            )
                        }
                    })
                    }
                    </div>
                    <div  className="s0">
                    {
                    shequs.map((item,index)=>{
                        if(index>8){
                            return(
                                <Link to={"/"} key={index}>
                                    <img src={item.icon}/>
                                    <p>{item.title}</p>
                                </Link>
                            )
                        }
                    })
                    }
                    </div>
                </Carousel>
            </div>
        )
    }
}