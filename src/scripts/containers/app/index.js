import App from "../../uicomponents/app";

import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {
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
)(App)