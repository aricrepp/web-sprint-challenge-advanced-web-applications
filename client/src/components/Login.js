import React from 'react';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="input_con">
        <form className="login_form" onSubmit={login}>
          <input
            className="login_input"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={handleChange}
          />
          <input
            className="login_input"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
