import React from 'react'

const NewTeams = () => {
    return (
        <>
            <div>
                <h1>Create a new Team</h1>
                <p>Create a new team to collaborate with users.</p>
                <span>step 1 of 2</span>
            </div>
            <div>
                <form>
                    <div>
                        <label>
                            Team Name:
                        </label>
                        <input type="text" name="TeamName" />
                    </div>
                    <div>
                        <button>Cancel</button>
                        <button>Continue</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewTeams