import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import React, { Component } from "react";
import styles from "./styles.module.css";
import axios from "axios";


function Signup() {
	const navigate=useNavigate('')
	const [username, setUsername]=useState('')
	const [email, setEmail]=useState('')
	const [Password, setPassword]=useState('')
	const [usernameErr,setusernameErr]=useState(false)
	const [emailErr,setEmailErr]=useState(false)
	const [passErr,setpassErr]=useState(false)
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	const handleUsername=(e)=>{
		let item=e.target.value;
		if(item.length<4)
		{
			setusernameErr(true)
		}
		else
		{
			setusernameErr(false)
		}
		setUsername(item)
		console.warn(e.target.value.length)
		setUsername(e.target.value)
	}
	const handleEmail=(e)=>{
		let item=e.target.value;
		if(item.length<4)
		{
			setEmailErr(true)
		}
		else
		{
			setEmailErr(false)
		}
		setEmail(item)
		console.warn(e.target.value.length)
		setEmail(e.target.value)
	}
	const handlePassword=(e)=>{
		let item=e.target.value;
		if(item.length<4)
		{
			setpassErr(true)
		}
		else
		{
			setpassErr(false)
		}
		setPassword(item)
		console.warn(e.target.value.length)
		setPassword(e.target.value)
	}
	const handleApi=()=>{
		console.log({username,email,Password})
		axios.post('https://jsonplaceholder.typicode.com/posts?_limit=10',{
			username: username,
			email: email,
			password: Password
		})
		if(email.length<4 || Password.length<4)
		{
			alert("type correct value")
		}
		else{
			alert("Success")
			navigate('/Login');

		}
	    }

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/signup.jpg" alt="signup" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input type="text" className={styles.input} onChange={handleUsername} placeholder="Username" />{usernameErr?<span>user not valid</span>:""}
					<input type="text" className={styles.input} onChange={handleEmail} placeholder="Email" />{emailErr?<span>email not valid</span>:""}
					<input
						type="password"
						className={styles.input}
						onChange={handlePassword}
						placeholder="Password"
					/>{passErr?<span>password not valid</span>:""}
					<button className={styles.btn} onClick={handleApi}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;