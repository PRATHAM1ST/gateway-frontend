import React from "react";
import Lottie from "lottie-react";
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
import signInpage from "../../assets/signInpage.json";
const HomePage = () => {
  return (
    <>
      <div className="brand-name" style={{ backgroundColor: "#222222" }}>
        <main class="textcontainer">
          <p class="textforanimation" style={{ marginTop: "20px" }}>
            Schedule your Meeting
          </p>
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

              <MDBCard className="my-5 bg-glass" style={{width:"70%"}}>
                <MDBCardBody className="p-5">
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                  />


                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>

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
