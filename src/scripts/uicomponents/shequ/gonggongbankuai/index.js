import React,{Component} from "react";

//组件

import ReactSwipe  from "react-swipe";

export default class Gonggongbankuai extends Component{
    constructor(props){
        super(props);
        this.state={
            //mySwiper2:null
        }
    }
    componentWillMount(){
        const {dispatch,getshequ} = this.props;
        dispatch(getshequ);
    }
    render(){
        const {shequs} = this.props;
        console.log(shequs)
        return (
            <div className="gonggongbankuai">
                <h1>Gonggongbankuai Page</h1>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                        <div>
                    {
                        shequs.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <img src={item.icon}/>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                </ReactSwipe>
            </div>
        )
    }
}