import React from'react';
import styles from './style.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
} from "react-router-dom";
	
class Post extends React.Component{
	
	
    render(){
        return(
			<div id='container'>
				<h1>Tempthlete</h1>
				<div id="links">
					<Link to="/">Home</Link>
				</div>

				<div id='d2postcode'>
					<h1>Change postcode</h1>
					<h4>You can change the current postcode that Tempthlete is retrieving weather information for.</h4>
					<h4>Please enter the first part of a UK postcode (e.g. for the postcode "E1 4NS" you would enter just "E1" without quotation marks)</h4>
				</div>

				<div id='d1'>
					<h2>Current location</h2>
				</div>
			</div>
        );
    }
}
export default Post;