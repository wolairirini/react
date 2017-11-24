import React,{Component} from "react";

//组件

export default class Shujishequ extends Component{
    render(){
        return (
            <div className="shujishequ">
                <h1>Shujishequ Page</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}