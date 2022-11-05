import React from "react";
import './App.css';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import Addpost from "./Addpost"
class TextArea extends React.Component {
    state = {
        textAreaValue: "",
        inputValue: ""
      };
  constructor(props){
    super(props)
  
  }

  textAreaHandler = event => {
    this.setState({ textAreaValue: event.target.value });
  };

  

 
  addpost=()=>{
    console.log(this.state.textAreaValue)
    this.setState({  
        textAreaValue: ""});
       <Addpost/>

  }

  

  render() {
    
    return (
      <div>
      <div    className="ss">
        
          <textarea cols="150" rows="15"
      
            value={this.state.textAreaValue}
            placeholder="Write what do you thinking"
            onChange={this.textAreaHandler}
          />
        
      
        {/* <p>You wrote: {this.state.textAreaValue}</p> */}
      </div>
        <div>
        <button type="button" class="btn btn-success " onClick={this.addpost}>Add post</button>
      </div>

      </div>
    );

  }
}

export default TextArea;