import SearchHead from "../../uicomponents/search/head";

import {connect} from "react-redux";
import { search } from "../../actions";
const mapStateToProps = (state)=>{
    return {
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch,
        search(){
            dispatch(search);
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchHead)