var initState = {
    morename:false,
    subtitle:"",
    books:[],
    advs:[],
    detail:{},
    swipeindex:0,
    likes:[],
    lists:[],
    shequs:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case "0":
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
        default:
            return {...state};
            break;
    }
}