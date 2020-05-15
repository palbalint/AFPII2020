import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from "reactstrap";
import { logoutUser } from "../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
  
  // core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import ContactHeader from "components/Headers/ContactHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";

const Door = props => (
    <tr>
        <td>{props.door.height}</td>
        <td>{props.door.width}</td>
        <td>{props.door.price}</td>
        <td>{props.door.currency}</td>
    </tr>    
)

class DoorList extends Component {
    constructor(props) {
        super(props);

        this.state = { doors: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/doors/all')
            .then(res => {
                this.setState({ doors: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    doorsList(){
        return this.state.doors.map(currentdoor => {
            return <Door door={currentdoor} key={currentdoor._id}/> 
        })
    }

    render() {
    return (
        <>
      <UserNavbar />
      <ContactHeader />
        <Container >
            <div style={{textAlign: "center"}}>
              <h3>Garage doors</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Height</th>
                            <th>Width</th>
                            <th>Price</th>
                            <th>Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.doorsList()}
                    </tbody>
                </table>
            </div>        
        <BasicFooter />
        </Container>
        </>
        )
    }
}
DoorList.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(DoorList);