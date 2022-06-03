import React,{ Component } from 'react';


class Hello extends Component
{ 
  state = {
     value:'',
     a:'',
     b:''
    }  
  

   handelChange = (event) =>
    { this.setState({ value :event.target.value})
    }
  
  handelSubmit = (event) =>
  {event.preventDefault()
  
   this.setState({ a : event.target.no1.value })
   this.setState({ b : event.target.no2.value })
 
  }

  render(){
    const { a, b,value } = this.state;

    return (
      <div>
        <div className="preview">
          <h1>Result of Add is</h1>
          <div>{Number(a) + Number(b)}</div>
        </div>
        <div className="preview">
          <h1>Result of Minus is</h1>
          <div>{Number(a) - Number(b)}</div>
        </div>
        <div className="preview">
          <h1>Result of Multiple </h1>
          <div>{Number(a) * Number(b)}</div>
        </div>
        <div className="preview">
          <h1>Result of Divide</h1>
          <div>{Number(a) / Number(b)}</div>
        </div>
        <form onSubmit={this.handelSubmit}>
        <label>No1:</label>
     <input id="no1" type="text" onChange={this.handelChange}/>
     <label>No2:</label>
     <input id="no2" type="text" onChange={this.handelChange}/>
     
     <button>Submit </button>
     </form>
     </div>
     )}
  }
 
export default Hello;
