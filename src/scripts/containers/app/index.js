import App from "../../uicomponents/app";

import {connect} from "react-redux";
import {changeswipe} from "../../actions";
const mapStateToProps = (state)=>{
    return {
        swipeindex:state.swipeindex
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
        changeswipe:(index)=>{
            dispatch(changeswipe(index));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)