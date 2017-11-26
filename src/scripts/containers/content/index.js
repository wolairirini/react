import Content from "../../uicomponents/content";

import {connect} from "react-redux";
import {getdetail} from "../../actions";
const mapStateToProps = (state)=>{
    return {
        mulu:state.mulu
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)