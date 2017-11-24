import Head from "../../uicomponents/head";

import {connect} from "react-redux";
import {togglemore, changeswipe} from "../../actions";

const mapStateToProps = (state)=>{
    return {
        swipeindex:state.swipeindex
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        togglemore:()=>{
            dispatch(togglemore())
        },
        changeswipe:(index)=>{
            dispatch(changeswipe(index));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Head)