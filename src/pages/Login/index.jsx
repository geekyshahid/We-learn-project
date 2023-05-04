import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

function Login() {
	const navigate=useNavigate('')
	const [email, setEmail]=useState('')
	const [Password, setPassword]=useState('')
	const [emailErr,setEmailErr]=useState(false)
	const [passErr,setpassErr]=useState(false)
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
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
		console.log({email,Password})
		axios.post('https://jsonplaceholder.typicode.com/posts?_limit=10',{
			email: email,
			password: Password
		})
		if(email.length<4 || Password.length<4)
		{
			alert("type correct value")
		}
		else{
			alert("Success")
			navigate('/User')
			
		}
	    }
	

	return (
	
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					
					<h2 className={styles.from_heading}>Students Log-in</h2>
					
					<input type="Email" className={styles.input} onChange={handleEmail} placeholder="Email" />{emailErr?<span>user not valid</span>:""}
					<input type="Password" className={styles.input} onChange={handlePassword} placeholder="Password" />{passErr?<span>password not valid</span>:""}
					<button className={styles.btn} onClick={handleApi}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign-in with Google</span>
					</button>
					
					
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;