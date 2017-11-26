import React,{Component} from "react";
import {getmulu} from "../../actions";
import {Link,browserHistory} from "react-router";

//组件

export default class Content extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        const {muluid} = this.props.params;
        dispatch(getmulu(muluid,dispatch));
    }
    render(){
        const {muluid,i} = this.props.params;
        const {mulu} = this.props;
        // var src = decodeURIComponent(detail.cover);
        // src = src.split("/agent/")[1];
        // var score = detail.rating?Number(detail.rating.score).toFixed(1):"";
        // var arr = [];
        console.log(muluid,i)
        return (
           <div className="content">
               <header>
                   <i onClick={()=>{browserHistory.goBack()}} className="iconfont icon-fanhui"></i>
                   <span>{ mulu.length>0?mulu[i].title:""}</span>
                   <Link to="/search">
                    <i className="iconfont icon-sousuo"></i>
                   </Link>
               </header>
               <main>
                   {/*  */}
                   <iframe src={ mulu.length>0?mulu[i].link:""}></iframe>
               </main>
           </div>
        )
    }
}