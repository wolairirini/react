import React,{Component} from "react";
import {getmulu} from "../../actions";
import {Link,browserHistory} from "react-router";
import { Pagination } from 'antd';

//组件

export default class Mulu extends Component{
    constructor(){
        super();
        this.state={
            pageNumber:1
        }
    }
    componentWillMount(){
        const {dispatch} = this.props;
        const {muluid} = this.props.params;
        dispatch(getmulu(muluid,dispatch));
    }
    onChange=(pageNumber)=>{
        console.log('Page: ', pageNumber);
        this.setState({
            pageNumber:pageNumber
        })
      }
    render(){
        const {muluid} = this.props.params;
        const {mulu} = this.props;
        var {pageNumber} = this.state;
        // var src = decodeURIComponent(detail.cover);
        // src = src.split("/agent/")[1];
        // var score = detail.rating?Number(detail.rating.score).toFixed(1):"";
        // var arr = [];
        var pages = Math.ceil(mulu.length/20);
        console.log(mulu.length)
        console.log(pages)
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
                   {muluid=="error"?"未找到书籍源！":"共 "+mulu.length+" 章"}
                   
               </nav>
               <div className="pages">
               <Pagination showQuickJumper defaultCurrent={1} total={pages*10} onChange={this.onChange} />
               
               </div>
               <main>
                   <ul>
                       {
                           mulu.map((item,index)=>{
                               if(index<pageNumber*20&&index>(pageNumber-1)*20){
                               return(
                                   <Link key={index} to={"/content/"+muluid+"/"+index}>
                                   <li>
                                    <h5>{item.title}</h5>
                                   </li>
                                   </Link>
                               )
                                }
                           })
                       }
                   </ul>
               </main>
           </div>
        )
    }
}