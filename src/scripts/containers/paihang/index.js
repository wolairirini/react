import Paihang from "../../uicomponents/paihang";

import {connect} from "react-redux";
const mapStateToProps = (state)=>{
    return {
        paihang:state.paihang,
        paihangs:state.paihangs,
        paihangid:state.paihangid
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Paihang)