import React,{Component} from "react";
import {getsubtitle,getbooks,getadvs} from "../../actions";
import {Link} from "react-router";
//组件

export default class Zhuishu extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getsubtitle(dispatch));
        dispatch(getbooks(dispatch));
        dispatch(getadvs(dispatch));
    }
    render(){
        const {subtitle,books,advs} = this.props;
        return (
            <div className="zhuishu swiper-slide">
                <h2>{subtitle}</h2>
                <ul>
                    {
                        advs.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a href={item.url}>
                                        <img src={"http://api02u58f.zhuishushenqi.com"+item.img}/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                        <img className="tuiguang" src={require("../../../assets/icon/tuiguang.jpg")}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                    {
                        books.map((item,index)=>{
                            var src = decodeURIComponent(item.cover);
                            src = src.split("/agent/")[1];
                            if(index<20){
                            return(
                                <li key={index}>
                                    <Link to={"/detail/"+item._id}>
                                        <img src={src}/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.author}</p>
                                            </div>
                                    </Link>
                                </li>
                            )}
                        })
                    }
                </ul>
            </div>
        )
    }
}