
import React,{Component} from "react";
import {Link} from "react-router";
//组件
import SearchHead from "../../containers/search/head";

export default class Search extends Component{
    render(){
        const {searches} = this.props;
        console.log(searches);
        return (
            <div className="search">
               <SearchHead/>
               <div className="searchmain">
                <ul>
                    {
                        
                        searches.map((item,index)=>{
                            var src = decodeURIComponent(item.cover);
                            src = src.split("/agent/")[1];
                            if(index<20){
                            return(
        
                                <Link key={index} to={"/detail/"+item._id}>
                                    <li style={{animationDelay:index*.2+"s"}}>
                                        <img src={src}/>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <p>
                                                {item.latelyFollower}人气 | {item.retentionRatio}%读者留存 | {item.author}著
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            )}
                        })
                    }
                </ul>
               </div>
            </div>
        )
    }
}