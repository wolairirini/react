import React,{Component} from "react";
import {getmulu} from "../../actions";
import {Link,browserHistory} from "react-router";

//组件

export default class Mulu extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        const {muluid} = this.props.params;
        dispatch(getmulu(muluid,dispatch));
    }
    render(){
        const {muluid} = this.props.params;
        const {mulu} = this.props;
        // var src = decodeURIComponent(detail.cover);
        // src = src.split("/agent/")[1];
        // var score = detail.rating?Number(detail.rating.score).toFixed(1):"";
        // var arr = [];
        
        return (
           <div className="mulu">
               <header>
                   <i onClick={()=>{browserHistory.goBack()}} className="iconfont icon-fanhui"></i>
                   <span>目录</span>
                   <Link to="/search">
                    <i className="iconfont icon-sousuo"></i>
                   </Link>
               </header>
               <nav>
                   共{mulu.length}章
               </nav>
               <main>
                   <ul>
                       {
                           mulu.map((item,index)=>{
                               return(
                                   <a key={index} href={item.link}>
                                   <li>
                                    <h5>{item.title}</h5>
                                   </li>
                                   </a>
                               )
                           })
                       }
                   </ul>
               </main>
           </div>
        )
    }
}