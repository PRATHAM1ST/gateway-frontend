import React from "react";
import Lottie from "lottie-react";
import { useState } from "react";
import { Modal, Button } from 'antd';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCardBody,
  MDBCard,
} from "mdb-react-ui-kit";
import signInpage from "../assets/signInpage.json";
import { useContext } from "react";
import signincontext from "../context/signin/signinContext";
const HomePage = () => {
  const { userSignUp, setUserSignUp, userAuthenticate ,otp,setotp,handleOk,handleCancel,isModalVisible,
    loginInformation,
    setloginInformation,
    showModal,
    validateOtpAndLogin
  } =
    useContext(signincontext);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
  
  if(isUseronSignup){
    setUserSignUp((prevUserSignUp) => ({
      ...prevUserSignUp,
      [id]: value,
    }));
  }
  else{
    setloginInformation((prevUserSignUp) => ({
      ...prevUserSignUp,
      [id]: value,
    }));
  }
  };
  const handleotp = (e) =>{
    const newOtp = e.target.value;
    setotp(newOtp);
  }
  const [isUseronSignup, setisUseronSignup] = useState(true);

const footer = (
  <div>
     <Button key="back" onClick={validateOtpAndLogin}>
        Validate
      </Button>
      <Button key="submit" type="primary" onClick={handleCancel}>
        Cancel
      </Button>
  </div>
)

  return (
    <>

<div>
   
      <Modal
        title="Enter Otp to continue"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
      >
        <input
        name="otp"
        id="otp"
        value={otp}
        onChange={handleotp}
        style={{width:"100%"}}
        />
      </Modal>
    </div>
      <div className="brand-name" style={{ backgroundColor: "#222222" }}>
        <main class="textcontainer">
          <div>Schedule your meeting </div>
          <section class="animation">
            <div class="first">
              <div className="animated-text">With Dominators</div>
            </div>
            <div class="second">
              <div className="animated-text">As per your requirements</div>
            </div>
            <div class="third">
              <div className="animated-text">With chat bot</div>
            </div>
          </section>
        </main>
      </div>
      <div className="container">
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            <MDBCol col="10" md="6">
              <Lottie animationData={signInpage} style={{ width: "80%" }} />
            </MDBCol>

            <MDBCol md="6" className="position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>
              <MDBCard className="my-5 bg-glass" style={{ width: "70%" }}>
                <MDBCardBody className="p-5">
                  <MDBRow>
                    <MDBCol col="6">
               {isUseronSignup?
                      <MDBInput
                      wrapperClass="mb-4"
                      label="Name"
                      id="name"
                      type="text"
                      value={userSignUp.name}
                      onChange={handleInputChange}
                    />:""}
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    value={isUseronSignup?userSignUp.email:loginInformation.email}
                    onChange={handleInputChange}
                  />
                       <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="password"
                      type="password"
                      value={isUseronSignup?userSignUp.password:loginInformation.password}
                      onChange={handleInputChange}
                    />
               
                  {isUseronSignup ? (
                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={userAuthenticate}
                    >
                      sign up
                    </MDBBtn>
                  ) : (
                    " "
                  )}
                  <hr />
                  {!isUseronSignup ? (
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ textAlign: "center", width: "100%" }}
                      onClick={showModal}
                    >
                      Log in
                    </button>
                  ) : (
                    ""
                  )}
                  {isUseronSignup ? (
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{ textAlign: "center", width: "100%" }}
                      onClick={() => {
                        setisUseronSignup(false);
                      }}
                    >
                      Or Log in
                    </button>
                  ) : (
                    ""
                  )}
                  <hr />
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};
export default HomePage;
