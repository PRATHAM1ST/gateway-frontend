import React from "react";
import Signincontext from "./signinContext";
import { useState } from "react";
import Swal from 'sweetalert2';
const SigninState = (props) => {
    const [userSignUp, setUserSignUp] = useState({
        name:"",
        email:"",
        password:""
    });
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [loginInformation, setloginInformation] = useState({
        email:"",
        password:""
      })
      const [otp, setotp] = useState();
    const apiBaseUrl =  "https://dominators-backend.vercel.app"
    async function validateOtpAndLogin() {
		try {
			const requestBody = {

				email: userSignUp.email,
                password:userSignUp.password,
                otp:otp
			};
			const response = await fetch(
				`${apiBaseUrl}/auth/signin`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						authorization: `Token ${window.localStorage.getItem('token')}`,
					},
					body: JSON.stringify(requestBody),
				}
			);
			const data = await response.json();
			if (data.success == true) {
                Swal.fire({
                    title: 'You have logged in succesfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                //   showModal();
            }
            else{
                Swal.fire({
                    title: 'Some error occured',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
            }
		} catch (error) {
			console.log('Some Server side error occured: ', error.message);
		}
	}
    async function userAuthenticate() {
		try {
			const requestBody = {
				name: userSignUp.name,
				email: userSignUp.email,
                password:userSignUp.password
			};
			const response = await fetch(
				`${apiBaseUrl}/auth/signup`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						authorization: `Token ${window.localStorage.getItem('token')}`,
					},
					body: JSON.stringify(requestBody),
				}
			);
			const data = await response.json();
			if (data.success == true) {
                Swal.fire({
                    title: 'The User Has been created',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                //   showModal();
            }
            else{
                Swal.fire({
                    title: 'Some error occured',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
            }
		} catch (error) {
			console.log('Some Server side error occured: ', error.message);
		}
	}
    return (
        <Signincontext.Provider value={{userSignUp,setUserSignUp,userAuthenticate,showModal,handleOk,handleCancel,isModalVisible
        ,otp,setotp,
        loginInformation,
        setloginInformation,
        validateOtpAndLogin
        }}>
            {props.children}
        </Signincontext.Provider>
    )
}
export default SigninState;
