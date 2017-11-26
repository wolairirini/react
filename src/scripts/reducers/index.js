var initState = {
    morename:false,
    subtitle:"",
    books:[],
    advs:[],
    detail:{},
    swipeindex:0,
    likes:[],
    lists:[],
    shequs:[],
    books2:[],
    searches:[],
    paihang:{},
    paihangs:[],
    paihangid:"54d42d92321052167dfb75e3",
    url:[],
    mulu:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case "0":
            break;
        case "geturl":
            state.url=action.preload.data;
            return {...state}
            break;
        
        case "getmulu":
            state.mulu=action.preload.data.chapters;
            return {...state}
            break;
        
        case "getpaihang":
            state.paihang=action.preload.data;
            return {...state}
            break;
        case "getshequ":
            state.shequs=action.preload.data;
            return {...state}
            break;
        case "changeswipe":
            state.swipeindex = action.swipeindex;
            return {...state};
            break;
        case "togglemore":
            state.morename=!state.morename;
            return {...state};
            break;
        case "getsubtitle":
            var str = action.preload.message.postLink.split(" ")[1];
            str = str.split("]")[0]
            state.subtitle = str;
            return {...state}
            break;
        case "getbooks":
            state.books=action.preload.data.ranking.books;
            return {...state}
            break;
        case "search":
            state.searches=action.preload.data.books;
            return {...state}
            break;
        case "getbooks2":
            state.books2=action.preload.data.ranking.books;
            return {...state}
            break;
        case "getadvs":
            state.advs = action.preload.adverts;
            return {...state};
            break;
        case "getlists":
            state.lists = action.preload.bookLists;
            return {...state};
            break;
        case "getdetail":
            state.detail = action.preload.data;
            return {...state};
        case "getlike":
            state.likes = action.preload.data.books;
            return {...state};
            
        case "getpaihangs":
            state.paihangs=action.preload.data.ranking.books;
            return {...state}
            break;
        case "changepaihangid":
            state.paihangid=action.paihangid;
            return {...state}
            break;
        
        default:
            return {...state};
            break;
    }
}