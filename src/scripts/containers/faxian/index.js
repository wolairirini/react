import Faxian from "../../uicomponents/faxian";

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
)(Faxian)