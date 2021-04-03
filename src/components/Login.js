import React from 'react'

class Login extends React.Component {

    constructor(prosp){
        super(prosp)
        this.state={
            username:"",
            pasword:"",

        }
      }


      onchangeusername=(event)=>{
          this.setState({username:event})
      }


      onchangepasword=(event)=>{
        this.setState({pasword:event})
    }


    login=(e)=>{
        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(rlt=>{
            console.log(rlt.filter(item=> item.username===this.state.username).length);

            if(rlt.filter(item=> item.username === this.state.username).length>0) {
      alert("logined");
            }
      else{
          alert("fail");
      }
        // if(this.state.username==="sesha" &&this.state.pasword==="sai")
        // {
        //     alert("login sucess");
        // }else{
        //     alert("login fail");
        // }
    });

}


    render() {
        return (
            <div style={{textAlign:'center'}}>
                <form onSubmit={this.login} >
                    <h1>{this.state.username}</h1>
                    <h1>{this.state.pasword}</h1>
                     <br/> 
                    <input type="username" placeholder="username" onChange={(e)=>this.onchangeusername(e.target.value)}  />
                    <br/> 
                    <br/> 
                    <input type="pasword" placeholder="pasword" onChange={(e)=>this.onchangepasword(e.target.value)} />
                    <br/> 
                    <br/>
                    <input type="submit" value="Login" />


                </form>
                
            </div>
        )
    }
}

export default Login;
