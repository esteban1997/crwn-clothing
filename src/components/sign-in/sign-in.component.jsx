import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();

    this.setState({email:'', password:''});
  }

  handleChange = event => {
    const { value,name } = event.target;

    this.setState({[name]: value});
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>ya tengo una cuenta</h2>
        <span>logeate con tu email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            handleChange = {this.handleChange} 
            value={this.state.email} 
            required 
          />
          <label>Email</label>
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            required 
          />
          <div className = 'buttons'>
            <CustomButton type="submit" >Sign in</CustomButton>
            <CustomButton onClick = { signInWithGoogle } isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }

}

export default SignIn;