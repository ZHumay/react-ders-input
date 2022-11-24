import React, { Component } from 'react'


export default class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    ischecked: false,
    type:"password"

  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleClick1 = () => {
    this.setState({ name: "" })

  }
  handleClick2 = () => {

    this.setState({ email: "" })

  }
  handleClick3 = () => {

    this.setState({ password: "" })
  }


  render() {
    console.log(this.state)
    return (

      < div className="container">

        <label htmlFor='name'>Name</label>
        <input value={this.state.name} type="text" id="name" name="name" onChange={this.handleInput} />
        <label htmlFor='email'>E-mail</label>
        <input value={this.state.email} type="text" id="email" name="email" onChange={this.handleInput} />
        <label htmlFor='password'>Password</label>
        <input value={this.state.password} type={this.state.type} id="password" name="password" onChange={this.handleInput} />
        <input type="checkbox" checked={this.state.ischecked} onChange={() => this.setState({ ischecked: !this.state.ischecked,type:this.state.type==="text"?"password":"text" })} />
        
        <div className='but'> </div>
        <button className="bir" onClick={this.handleClick1}>X</button>
        <button className="bir" onClick={this.handleClick2}>X</button>
        <button className="bir" onClick={this.handleClick3}>X</button>


      </div>



    )
  }
}
