import Shujishequ from "../../../uicomponents/shequ/shujishequ";

import {connect} from "react-redux";

import {getbooks2} from "../../../actions";
const mapStateToProps = (state)=>{
    return {
        
        books2:state.books2, 
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
        getbooks2(){
            dispatch(getbooks());
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shujishequ)