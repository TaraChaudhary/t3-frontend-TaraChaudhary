import React from "react";
import { MDBContainer,  MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
     
    <MDBFooter className="font-small pt-4 mt-4 bg-info" id="footer">
           <div className="footer-copyright text-center py-1" >
        <MDBContainer >
          &copy; {new Date().getFullYear()} TRAFFIC QUIZ AND SIGN  <Link className="text-dark "> Tara Chaudhary</Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;