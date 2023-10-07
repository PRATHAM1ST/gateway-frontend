import { MDBBtn, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

const NewTeams = () => {
    return (
        <>
            <div className='w-25 mx-auto text-center mt-4'>
                <h1>Create a new Team</h1>
                <small>Create a new team to collaborate with users.</small>
            </div>
            <MDBCardBody className='w-25 mx-auto'>
                <p className='mt-4'>STEP 1 of 2</p>
                <form>
                    <MDBRow>
                        <label>
                            Team Name:
                        </label>
                        <MDBInput type="text" name="TeamName" />
                    </MDBRow>
                    <MDBRow>
                        <label>
                            Team Desc:
                        </label>
                        <MDBInput type="text" name="TeamDesc" />
                    </MDBRow>
                    <MDBRow className="mt-4 mx-auto">
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
    )
}

export default NewTeams