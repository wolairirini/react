import Zhuishu from "../../uicomponents/zhuishu";

import {connect} from "react-redux";
import {getsubtitle,getbooks,getadvs} from "../../actions";
const mapStateToProps = (state)=>{
    return { 
        subtitle:state.subtitle,
        books:state.books, 
        advs:state.advs
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
        getsubtitle(){
            dispatch(getsubtitle());
        },
        getbooks(){
            dispatch(getbooks());
        },
        getadvs(){
            dispatch(getadvs());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Zhuishu)