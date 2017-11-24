import store from "../store";
import axios from "axios";
import $ from "jquery";
axios.defaults.baseURL="http://localhost:7777";
export function togglemore(){
    return {
        type:"togglemore"
    }
} 
export function changeswipe(swipeindex){
    return {
        type:"changeswipe",
        swipeindex:swipeindex
    }
}
//副标题
export function getsubtitle(dispatch){
    return axios.get("/subtitle")
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getsubtitle",preload:json})
        })
}

// 获取书籍
export function getbooks(dispatch){
    return axios.get("http://novel.juhe.im/rank/54d42d92321052167dfb75e3")
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getbooks",preload:json})
    })
}

//获取社区
export function getshequ(dispatch){
    return axios.get("/shouye")
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return {type:"getshequ",preload:json}
    })
}
//广告
export function getadvs(dispatch){
    return axios.get("/guanggao")
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getadvs",preload:json})
        })
}

// 获取书籍详情
export function getdetail(bookid,dispatch){
    return axios.get("http://novel.juhe.im/book-info/"+bookid)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getdetail",preload:json})
    })
}

//获取相关推荐
export function getlike(bookid,dispatch){
    //http://novel.juhe.im/recommend/{_id};
    return axios.get("http://novel.juhe.im/recommend/"+bookid)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getlike",preload:json})
    })
}

//书单
export function getlists(dispatch){
    return axios.get("/book-list")
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getlists",preload:json})
        })
}