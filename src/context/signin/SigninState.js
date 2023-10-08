import React from "react";
import Signincontext from "./signinContext";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const SigninState = (props) => {
    const [userSignUp, setUserSignUp] = useState({
        name:"",
        email:"",
        password:"",
        username:""
    });
    const navigate = useNavigate();
const [token, settoken] = useState("");

useEffect(() => {
  localStorage.setItem('token', token);
}, [token]);
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
    const apiBaseUrl =  "http://localhost:4000"
    async function validateOtpAndLogin() {
		try {
			const requestBody = {
				email: loginInformation.email,
                password:loginInformation.password,
			};
			const response = await fetch(
				`${apiBaseUrl}/auth/signin`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						"Authorization": localStorage.getItem('token'),
					},
					body: JSON.stringify(requestBody),
				}
			);
			const data = await response.json();
			if (data.success) {
          if(!data?.data?.otpVerified){
            localStorage.setItem('token', data.data.cookie)
            showModal()
          }
          else{
                Swal.fire({
                    title: 'You have logged in succesfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                  showModal();
                navigate('/CalenderUI');

                localStorage.setItem('token', data.data.cookie)
              }
            }
            else{
                Swal.fire({
                    title: 'Wrong Credentials',
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
                password:userSignUp.password,
                username:userSignUp.username
			};
			const response = await fetch(
				`${apiBaseUrl}/auth/signup`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						"Authorization": localStorage.getItem('token'),
					},
					body: JSON.stringify(requestBody),
				}
			);
			const data = await response.json();
			if (data.success) {
                settoken(data.data.cookie);
                Swal.fire({
                    title: 'The User Has been created',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                  showModal();
                  localStorage.setItem('token', data.data.cookie)
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
    async function otpVerification() {
		try {
			const requestBody = {
				otp
			};
			const response = await fetch(
				`${apiBaseUrl}/auth/verify`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						"Authorization" : localStorage.getItem('token'),
					},
					body: JSON.stringify(requestBody),
				}
			);
			const data = await response.json();
			if (data.success) {
                Swal.fire({
                    title: 'The User Has been created',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                  localStorage.setItem('token', data.data.cookie)
                //   showModal();
                navigate('/CalenderUI');
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
        validateOtpAndLogin,
        otpVerification,
        token, settoken
        }}>
            {props.children}
        </Signincontext.Provider>
    )
}
export default SigninState;
