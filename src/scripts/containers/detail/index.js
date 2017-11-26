import Detail from "../../uicomponents/detail";

import {connect} from "react-redux";
import {getdetail} from "../../actions";
const mapStateToProps = (state)=>{
    return {
        detail:state.detail,
        advs:state.advs,
        likes:state.likes,
        lists:state.lists,
        url:state.url
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
        getdetail(){
            dispatch(getdetail);
        },
        getadvs(){
            dispatch(getadvs());
        },
        getlike(){
            dispatch(getlike);
        },
        getlists(){
            dispatch(getlists());
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)