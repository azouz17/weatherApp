import logo from './logo.svg';
//import "./components/style.css";
import { Mainpage } from './components/homepage';
import Post from './components/Postcode';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link
  } from "react-router-dom";

function App() {
  return (
    <Router>
			<Routes>
			<Route exact  path="/" element={<Mainpage />}/>
      <Route exact  path="/Postcode" element={<Post />}/>
      
      
			</Routes>
			
		</Router>
  );
}

export default App;
