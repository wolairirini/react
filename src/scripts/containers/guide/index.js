import Guide from "../../uicomponents/guide";

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
)(Guide)