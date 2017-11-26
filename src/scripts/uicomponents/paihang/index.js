import React,{Component} from "react";
import {getpaihang,getpaihangs,changepaihangid} from "../../actions";
import {Link,browserHistory} from "react-router";

//组件

export default class Zhuishu extends Component{
    constructor(props){
        super(props);
        this.state = {
            sex:true
        }
    }
    componentWillMount(){
        const {dispatch,paihangid} = this.props;
        //dispatch(getlike(bookid,dispatch))
        dispatch(getpaihang(dispatch));
        dispatch(getpaihangs(paihangid,dispatch));
        
    }
    changepaihangid(paihangid){
        const {dispatch} = this.props;
        dispatch(changepaihangid(paihangid));
        dispatch(getpaihangs(paihangid,dispatch));
    }
    render(){
        const {paihang,paihangs,paihangid} = this.props;
        var {sex} = this.state;
        console.log(paihang,paihangs,sex);
        console.log(paihangid)
        if(sex){
            var paihangx = paihang.male;
        }else{
            var paihangx = paihang.female;
        }
        return (
            <div className="paihang">
               <header>
                   <i onClick={()=>{browserHistory.goBack()}} className="iconfont icon-fanhui"></i>
                   <span>排行榜</span>
                   <Link to="/search">
                    <i className="iconfont icon-sousuo"></i>
                   </Link>
               </header>
               <nav>
                    <div className={sex?"active":""} onClick={()=>{this.setState({sex:true});this.changepaihangid("54d42d92321052167dfb75e3")}}>男生</div>
                    <div className={!sex?"active":""} onClick={()=>{this.setState({sex:false});this.changepaihangid("54d43437d47d13ff21cad58b")}}>女生</div>
               </nav>
               <main>
                   <ul className="nav">
                    {
                        (paihangx)?
                        paihangx.map((item,index)=>{
                            return(
                                <li className={paihangid==item._id?"active":""} onClick={()=>{
                                    this.changepaihangid(item._id);
                                }} key={index}>
                                    {item.title}
                                </li>
                            )
                        }):""
                    }
                   </ul>
                   <ul className="paihangs">
                    {
                        paihangs.map((item,index)=>{
                        var src = decodeURIComponent(item.cover);
                        src = src.split("/agent/")[1];
                        if(index<20){
                            return (
                                <li style={{animationDelay:index*0.2+'s'}} key={index}>
                                    <Link to={"/detail/"+item._id}>
                                        <img src={src}/>
                                        <div className="xxxs">
                                            <h2>{item.title}</h2>
                                            <p>{item.author}</p>
                                            <p>{item.shortIntro}</p>
                                            <div>
                                                <span>{item.latelyFollower}</span>人气 | <span>{item.retentionRatio}%</span>读者留存
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )}
                        })
                    }
                   </ul>
               </main>
            </div>
        )
    }
}