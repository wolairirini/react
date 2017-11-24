import Gonggongbankuai from "../../../uicomponents/shequ/gonggongbankuai";

import {connect} from "react-redux";
import {getshequ} from "../../../actions"
const mapStateToProps = (state)=>{
    return {
        shequs:state.shequs
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
        getshequ(){
            dispatch(getshequ())
        }
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gonggongbankuai)