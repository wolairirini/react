import Search from "../../uicomponents/search";

import {connect} from "react-redux";
import {} from "../../actions";
const mapStateToProps = (state)=>{
    return { 
        searches:state.searches
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
)(Search)