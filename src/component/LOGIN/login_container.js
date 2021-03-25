import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./login";

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(Login)