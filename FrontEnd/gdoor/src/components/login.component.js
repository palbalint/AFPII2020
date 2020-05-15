import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import {
    Card,
    Form,
    Container,
    Row,
    Col
  } from "reactstrap";
  import BasicNavBar from "components/Navbars/BasicNavBar";

class Login extends Component {
    constructor() {
        super();

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to index
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/doors-list");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/doors-list"); // push user to car-list-page when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
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

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    }



    render() {
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
                                    <h3 className="title mx-auto">Login</h3>
                                    <Form className="register-form">
                                        <form onSubmit={this.onSubmit} id="create-car-form">
                                            <div className="form-group">
                                                <label>Email: </label>
                                                <input type="text"
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
                                                <input type="submit" value="Login" className="btn btn-primary" />
                                            </div>
                                        </form>
                                    </Form>
                                </Card>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);