import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('good submit', this.state);
  };

  render() {
    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Email Address'
                    name='email'
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Password'
                    name='password'
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
