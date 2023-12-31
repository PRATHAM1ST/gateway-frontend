import { MDBBtn, MDBCardBody, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow } from 'mdb-react-ui-kit';
import { React, useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'

const OnboardTeamMember = () => {

    const [users, setUsers] = useState([])

    const userData = () => {
        fetch(process.env.REACT_APP_BACKEND_URL)
            .then((res) => res.json())
            .then((json) => {
                setUsers(json.data)
            }
            );
    };
    useEffect(() => {
        userData();
        const interval = setInterval(() => { userData(); }, 30000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='w-25 mx-auto text-center mt-4'>
                <h1>Add team members</h1>
                <small>Invite others to join your team.</small>
            </div>
            <MDBCardBody className='w-25 mx-auto'>
                <p className='mt-4'>STEP 2 of 2</p>
                    <MDBRow>
                        user details who has created a team
                    </MDBRow>
                    <MDBRow className='my-4'>
                        <MDBDropdown group>
                            <MDBDropdownToggle color='success'>Add Members</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                {users?.map((user) => <MDBDropdownItem>{user.name}</MDBDropdownItem>)}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtn>Publish team</MDBBtn>
                    </MDBRow>
            </MDBCardBody>
        </>
    )
}

export default OnboardTeamMember