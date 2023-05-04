import styles from "./styles.module.css";
import { Link ,useNavigate} from "react-router-dom";
import React from "react";
function Home(userDetails) {
	const navigate=useNavigate('')
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}`, "_self");
		navigate('/')
		

	};
	
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Home</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/profile.jpg" alt="profile" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Profile</h2>
					<button className={styles.btn} onClick={logout}>Log Out</button>
				</div>
			</div>
		</div>
	);
}

export default Home;