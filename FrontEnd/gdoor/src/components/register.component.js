import React, { Component } from "react";
import { Link, withRouter  } from "react-router-dom";import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import {
    Card,
    Form,
    Container,
    Row,
    Col
} from "reactstrap";
import BasicNavBar from "components/Navbars/BasicNavBar";


class Register extends Component {
  constructor() {
    super();

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  }
componentDidMount(){
    if(this.props.auth.isAuthenticated){
        this.props.history.push("/doors-list");
    }
}

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChangeName(e) {
    this.setState({
        name: e.target.value
    })
}

onChangeEmail(e) {
    this.setState({
        email: e.target.value
    })
}

onChangePassword(e) {
    this.setState({
        password: e.target.value
    })
}

onChangePassword2(e) {
    this.setState({
        password2: e.target.value
    })
}


onSubmit(e) {
    e.preventDefault();

const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role: "User"
    };
    
    this.props.registerUser(newUser, this.props.history);
  };
  
render() {
    const { errors } = this.state;
return (

    <div>
        <div
        className=" section-image sectionsection-login"
        style={{
        backgroundImage: "url(" + require("assets/img/login_door.jpg") + ")"
        }}
        >
            <Container>
                <BasicNavBar />
                <Row>
                    <Col className="mx-auto" lg="4" md="6">
                        <Card className="card-register">
                            <h3 className="title mx-auto">Register</h3>
                            <Form className="register-form">
                                <form onSubmit={this.onSubmit} id="create-car-form">
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input type="email"
                                            required
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input type="password"
                                            required
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password again: </label>
                                        <input type="password"
                                            required
                                            className="form-control"
                                            value={this.state.password2}
                                            onChange={this.onChangePassword2}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Register" className="btn btn-primary" />
                                    </div>
                                </form>
                            </Form>
                        </Card>
                        <br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
  }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));