import React from'react';
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
            <div id="postpage">
			<h1>Postcode Search</h1>
			<Link to="/">Home</Link>
			<form action="" method="get" id="form">
				<fieldset>
					<label>Enter Postcode:</label>
					<br></br>
					<input type="text" name="post code" />
					<button id="Search" type="submit" onclick="check_valid_pc()">  Search</button>

				</fieldset>
			</form>
		</div>

        );
    }
}
export default Post;