import React,{Component} from "react";
import {getdetail,getadvs,getlike,getlists,geturl} from "../../actions";
import {Link} from "react-router";

//组件
import Header from "../detailhead";
import Footer from "../detailfoot";

var stars=[false,false,false,false,false];
export default class Zhuishu extends Component{
    constructor(props){
        super(props)
        
    }
    componentWillMount(){
        const {dispatch} = this.props;
        const {bookid} = this.props.params;
        dispatch(getdetail(bookid,dispatch));
        dispatch(getadvs(dispatch));
        dispatch(getlists(dispatch));
        dispatch(getlike(bookid,dispatch));
        dispatch(geturl(bookid,dispatch));
    }
    render(){
        const {bookid} = this.props.params;
        const {detail,advs,likes,lists,url} = this.props;
        //http://api02u58f.zhuishushenqi.com
        //图片解码
        var src = decodeURIComponent(detail.cover);
        src = src.split("/agent/")[1];
        var score = detail.rating?Number(detail.rating.score).toFixed(1):"";
        var arr = [];
        if(score){
            stars.map((item,index)=>{
                var counts = Math.floor(score/2);
                if(index<counts){
                    arr.push(true);
                }else{
                    arr.push(false);
                }
            })
        }
        return (
            <div className="detail">
                <Header></Header>
                <div className="main">
                    <div className="top">
                        <div className="info">
                            <img src={src}/>
                            <div className="right">
                                <h3>{detail.title}</h3>
                                <p><span>{detail.author}</span> | {detail.majorCate}</p>
                                <div>
                                    <p>
                                    {
                                        arr.length!=0?arr.map((item,index)=>{
                                            return(
                                            <i key={index} className={"iconfont icon-star01 "+item}></i>
                                            )
                                        }):""
                                    }
                                    </p>
                                    <p>{score}分 {detail.rating?detail.rating.count:""}人评</p>
                                </div>
                                <p>{Math.ceil(detail.wordCount/10000)}万字 | {detail.isSerial?"连载中":"完结"}</p>
                                <span>人气 {detail.buytype}</span>
                            </div>
                        </div>
                        <div className="about">
                            <ul>
                                <li>
                                    <h5>追书人气</h5>
                                    <p>{detail.latelyFollower}</p>
                                </li>
                                <li>
                                    <h5>读者留存</h5>
                                    <p>{detail.retentionRatio}%</p>
                                </li>
                                <li>
                                    <h5>社区帖子</h5>
                                    <p>{detail.postCount}</p>
                                </li>
                            </ul>
                            <button className="pingfeng">
                                <span>看过</span>
                                <div>
                                <p>
                                    {
                                        arr.length!=0?arr.map((item,index)=>{
                                            return(
                                            <i key={index} className={"iconfont icon-star01 "+item}></i>
                                            )
                                        }):""
                                    }
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="longIntro">
                        <h2><span></span>简介</h2>
                        <p>{detail.longIntro}</p>
                    </div>
                    <div className="major">
                        <h2><span></span>标签</h2>
                        <div>
                        {
                            detail.tags?detail.tags.map((item,index)=>{
                                return(
                                    <span key={index}>{item}</span>
                                )
                            }):""
                        }
                        </div>
                    </div>
                    <div className="tuiguang">
                        <ul>
                            {
                                advs.map((item,index)=>{
                                    if(index<1){
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
                                    )}
                                })
                            }
                        </ul>
                    </div>
                    <div className="like">
                        <h2><span></span>你可能会喜欢<Link to={"/"}>更多</Link></h2>
                        <ul>
                        {
                            likes.map((item,index)=>{
                                if(index<6){
                                var src = decodeURIComponent(item.cover);
                                src = src.split("/agent/")[1];
                                return (
                                    <li key={index}>
                                        <a href={"/detail/"+item._id}>
                                        <img src={src}/>
                                        <span>{item.title}</span>
                                        </a>
                                    </li>
                                )}
                            })   
                        }
                        </ul>
                    </div>
                    <div className="shudan">
                        <h2><span></span>推荐书单<Link to={"/"}>更多</Link></h2>
                        <ul>
                        {
                            lists.map((item,index)=>{
                                if(index<2){
                                return (
                                    <li key={index}>
                                        <Link to={"/"}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <span>共{item.bookCount}本书 | {item.collectorCount}人收藏</span>
                                        </Link>
                                    </li>
                                )}
                            })   
                        }
                        </ul>
                    </div>
                </div>
                <Footer url={url}></Footer>
            </div>
        )
    }
}