import {
	MDBBtn,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBInput,
	MDBRow,
} from "mdb-react-ui-kit";
import React from "react";

const NewTeams = () => {
	return (
		<>
			<div className="w-25 mx-auto text-center mt-24">
				<h1>Create a new Team</h1>
				<small>Create a new team to collaborate with users.</small>
			</div>
			<MDBCardBody className="w-25 mx-auto">
				<p className="mt-4">STEP 1 of 2</p>
				<form>
					<MDBRow>
						<MDBInput 
                            type="text"
                            name="TeamName"
                            wrapperClass="mb-4"
                            label="Team Name"
                            id="form1"
                        />
					</MDBRow>
					<MDBRow>
						<MDBInput
							type="text"
							name="TeamDesc"
							wrapperClass="mb-4"
							label="Team Description"
							id="form2"
						/>
					</MDBRow>
					<MDBRow>
						<MDBCol>
							<MDBBtn>Cancel</MDBBtn>
						</MDBCol>
						<MDBCol>
							<MDBBtn>Continue</MDBBtn>
						</MDBCol>
					</MDBRow>
				</form>
			</MDBCardBody>
		</>
	);
};

export default NewTeams;
