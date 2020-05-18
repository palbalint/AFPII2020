import React from "react";

import {
    Button,
    Container,
    Row,
    Col
  } from "reactstrap";

import BasicNavBar from "components/Navbars/BasicNavBar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";

function LandingPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    return (
      <>
        <BasicNavBar />
        <LandingPageHeader />
        <div className="main">
          <div className="section text-center">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">You want a high quality garage door to your home?</h2>
                  <h5 className="description">
                    This is your place then! Search our offers for the newest designs. First register or if you already have an accaunt please login!
                  </h5>
                  <br />
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                  Our garage door offers
                  </Button>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
              </Row>
            </Container>
          </div>
        </div>
        <BasicFooter />
      </>
    );
  }
  
  export default LandingPage;
  