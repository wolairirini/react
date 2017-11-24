import Shequ from "../../uicomponents/shequ";

import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {

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
)(Shequ)