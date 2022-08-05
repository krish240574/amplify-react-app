import React, {Component} from 'react';
import './App.css';
//import { Button } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import '@aws-amplify/ui-react/styles.css';
import axios from 'axios';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			users: [],  
			loading:true  
			}
		}
	async getSchema(){
		const res = await axios.get('https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-east-1:751383665607:function:func9/invocations')
		console.log(res.data)
		this.setState({loading:false, users: res.data})
		}       
	componentDidMount(){
		//this.getSchema()
	  } 
	render() {
			return (
			<Button
			loadingText=""
			  onClick={this.getSchema}
			ariaLabel="">
				Click me!
			</Button>
			)
	}
}

