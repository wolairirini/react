import React,{Component} from "react";

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
        return(
            <footer>
                <button className={this.state.flag?"buzhui":"zhui"} onTouchStart={this.toggle}>{this.state.flag?"-不追了":"+我要追"}</button>
                <div>开始阅读</div>
            </footer>
        )
    }
}