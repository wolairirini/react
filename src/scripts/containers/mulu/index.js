import Mulu from "../../uicomponents/mulu";

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
)(Mulu)