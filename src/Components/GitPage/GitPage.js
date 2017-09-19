import React from 'react';
import './GitPage.css';
import Detail from './Detail';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel,FormGroup, FormControl,InputGroup, Button } from 'react-bootstrap';

class GitPage extends React.Component {


	constructor(props)
  {
    super(props)
    this.state = 
      {
        info: {},
				userName:'',
				leafDesign:true,
				error:null
      };
      this.handleSubmit = this.handleSubmit.bind( this )
      this.handleChange = this.handleChange.bind( this )
  }

  componentWillMount() {
     console.log("hellow",this.state.info);
     // let url = 'https://api.github.com/users/'+this.state.userName;
     // let options = { method: 'GET',
               
     //           mode: 'cors',
     //           cache: 'default' };
     // fetch(url)
     // .then(response=>{
     // 	console.log(response);
     // 	return response.json();
     // })
     // .then(data=>{
     // 	this.setState({
     //    info:data
     //  })
     // 	console.log('bello',this.state.info)
     // })
     // .catch(error=>{
     // 	console.log(error);
     // })
 }

handleSubmit( event ) {
    	event.preventDefault()
			// console.log('hello',this.state.userName);
			let url = 'https://api.github.com/users/'+this.state.userName;
			let options = { method: 'GET',
			
	               mode: 'cors',
	               cache: 'default' };
								 fetch(url)
								 .then(response=>{
									//  console.log(response);
									 return response.json();
									})
									.then(data=>{
										this.setState({
											info:data,
											leafDesign:false
										})
										if(data !== null){
											this.setState({
												leafDesign:false
											})
										}
										// console.log('bello',this.state.info)
									})
									.catch(error=>{
										console.log(error);
									})
									// event.preventDefault()
}
	handleChange( event ) {
		this.setState({ [event.target.name]: event.target.value })
    // console.log(event.target.value)
}

design(){
	return(
		<div>
			<div className="row">
				<div className="col-md-4 leaf">
					<h3>You Can Find Github Information.</h3>
				</div>
				<div className="col-md-3"></div>
				<div className="col-md-4">
					<i className="fa fa-github fa-5x" aria-hidden="true"></i>
					<i className="fa fa-bolt fa-5x" aria-hidden="true"></i>
					<i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
					<i className="fa fa-ravelry fa-5x" aria-hidden="true"></i>
					<i className="fa fa-adjust fa-5x" aria-hidden="true"></i>
					<i className="fa fa-balance-scale fa-5x" aria-hidden="true"></i>
					<i className="fa fa-space-shuttle  fa-5x" aria-hidden="true"></i>
					<i className="fa fa-superpowers fa-5x" aria-hidden="true"></i>
				</div>
			</div>
		</div>	
	)
}
  render() {
    return (
      <div>
        <div className="top">
        	<h4 className="text-center"><i className="fa fa-github fa-lg" aria-hidden="true"></i> Github Users</h4>
        	<br/>
        	<div className="row">
	        	<div className="col-md-3"></div>
	        	<div className="col-md-6">
	        		<form onSubmit={this.handleSubmit}>
	        			<FormGroup>
					      <InputGroup>
					        <FormControl 
					        	type="text"
					        	name='userName'
										className="searchInput"
										required
					        	onChange={this.handleChange}
					        	placeholder='Github user name'
					        />
					        <InputGroup.Button>
									<FormControl 
									type="submit"
									value='Search'
									className="search button"
								/>
					        </InputGroup.Button>
					      </InputGroup>
					    </FormGroup>
	        		</form>
	        	</div>
	        	<div className="col-md-3"></div>
        	</div><br/>
					{(this.state.info.message == "Not Found" || Object.keys(this.state.info).length === 0) ? <div className="display">{this.design()}</div> : <Detail content={this.state.info} userName={this.state.userName} />}
			</div>
      </div>
    )
  }
}

export default GitPage;