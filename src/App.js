import "./styles.css";
import Home from "./routes/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "./pages/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
export default function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home/>}/>
        
      </Routes>
      <Routes>
				<Route
					exact
					path="/User"
					element={user ? <Navigate to="/" /> : <User />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
        
    </div>
  );
}
