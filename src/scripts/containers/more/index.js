import More from "../../uicomponents/more";

import {connect} from "react-redux";
import {togglemore} from "../../actions";

const mapStateToProps = (state)=>{
    return {
        morename:state.morename
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        togglemore:()=>{
            dispatch(togglemore())
        },
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(More)