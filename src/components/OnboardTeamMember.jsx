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
            <div>
                <h1>Add team members</h1>
                <p>Invite others to join your team.</p>
                <span>step 2 of 2</span>
            </div>
            <div>
                <form>
                    <div>
                        user details who has created a team
                    </div>
                    <div>
                        <Dropdown options={users?.map((user) => user.name)} placeholder="Add Members" />;
                    </div>
                    <div>
                        <button>Publish team</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OnboardTeamMember