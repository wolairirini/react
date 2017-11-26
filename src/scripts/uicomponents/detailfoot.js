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
        var urlx = "";
        switch(url.length){
            case 7:
                urlx= url[6]._id;
                break;
            case 6:
                urlx= url[5]._id;
                break;
            case 5:
                urlx= url[4]._id;
                break;
            case 4:
                urlx= url[3]._id;
                break;
            case 3:
                urlx= url[2]._id;
                break;
            case 2:
                urlx= url[1]._id;
                break;
            case "1":
                urlx= url[0]._id;
                break;
            case 0:
                urlx="error"
                break;
            default:
                urlx="error"
                break;
        }
        if(url.length>7){
            urlx= url[7]._id;
        }
        return(
            <footer>
                <button className={this.state.flag?"buzhui":"zhui"} onTouchStart={this.toggle}>{this.state.flag?"-不追了":"+我要追"}</button>
                <Link to={"/mulu/"+urlx}>开始阅读</Link>
            </footer>
        )
    }
}