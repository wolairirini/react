import React,{Component} from "react";
import {Link} from "react-router";
import {getbooks2} from "../../../actions";

//组件

export default class Shujishequ extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getbooks2(dispatch));
    }
    render(){
        const {books2} = this.props;
        return (
            <div className="shujishequ">
                <h1>书籍社区</h1>
                <ul>
                    {
                        books2.map((item,index)=>{
                            var src = decodeURIComponent(item.cover);
                            src = src.split("/agent/")[1];
                            if(index<20){
                            return(
                                <li key={index}>
                                    <Link to={"/detail/"+item._id}>
                                        <img src={src}/>
                                        <h3>{item.title}</h3>
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