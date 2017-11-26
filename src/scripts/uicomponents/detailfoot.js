import React,{Component} from "react";
import {Link} from "react-router";
export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            flag:true
        }
    }
    toggle=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    render(){
        const {url} = this.props;
        var urlx = url.length>0?url[7]._id:0
        return(
            <footer>
                <button className={this.state.flag?"buzhui":"zhui"} onTouchStart={this.toggle}>{this.state.flag?"-不追了":"+我要追"}</button>
                <Link to={"/mulu/"+urlx}>开始阅读</Link>
            </footer>
        )
    }
}