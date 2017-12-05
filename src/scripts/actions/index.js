import store from "../store";
import axios from "axios";
import $ from "jquery";
axios.defaults.baseURL="http://39.106.14.209:7777";
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

// 获取社区书籍
export function getbooks2(dispatch){
    return axios.get("http://novel.juhe.im/rank/550b836229cd462830ff4d1d")
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getbooks2",preload:json})
    })
}

//搜索
export function search(msg,dispatch){
    return axios.get("http://novel.juhe.im/search?keyword="+msg)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"search",preload:json})
    })
}


// 获取排行 
export function getpaihang(dispatch){
    return axios.get("http://novel.juhe.im/rank-category")
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getpaihang",preload:json})
    })
}

// 获取排行详情
export function getpaihangs(paihangid,dispatch){
    return axios.get("http://novel.juhe.im/rank/"+paihangid)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getpaihangs",preload:json})
    })
}


// 更改id
export function changepaihangid(paihangid){
    return {
        type:"changepaihangid",
        paihangid:paihangid
    }
}


// 获取书籍原
export function geturl(bookid,dispatch){
    return axios.get("http://novel.juhe.im/book-sources?view=summary&book="+bookid)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"geturl",preload:json})
    })
}


// 获取zhangjie
export function getmulu(muluid,dispatch){
    return axios.get("http://novel.juhe.im/book-chapters/"+muluid)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"getmulu",preload:json})
    })
}