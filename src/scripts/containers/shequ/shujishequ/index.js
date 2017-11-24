import Shujishequ from "../../../uicomponents/shequ/shujishequ";

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
)(Shujishequ)