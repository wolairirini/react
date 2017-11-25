
import React,{Component} from "react";
import {Link,browserHistory} from "react-router";
import { Menu, Dropdown, Icon } from 'antd';
import {search} from "../../actions";

//组件
const menu =(
    <Menu selectable>
        <Menu.Item key="0"><span>全部</span></Menu.Item>
        <Menu.Item key="1"><span>Vip</span></Menu.Item>
        <Menu.Divider />
    </Menu>
)

export default class SearchHead extends Component{
    search=()=>{
        const {dispatch} = this.props;
        var msg = this.refs.msg.value;
        dispatch(search(msg,dispatch))
    }
    render(){
        return (
            <div className="searchhead">
                <div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                    全部<Icon type="down" />
                    </a>
                </Dropdown>
                <input ref="msg" onInput={this.search} placeholder="书名、作者、分类"/>
                </div>
                <button onClick={()=>browserHistory.goBack()}>
                    取消
                </button>
            </div>
        )
    }
}