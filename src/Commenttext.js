import React from "react";
class Commenttext extends React.Component{
constructor(props){
    super(props)
    this.state={
        textAreaValue: "",

    }
}
textAreaHandler = event => {
    this.setState({ textAreaValue: event.target.value });
  };
render(){
    return(
        <div>
            <textarea cols="150" rows="3"
      
      value={this.state.textAreaValue}
      placeholder="Write your comment"
      onChange={this.textAreaHandler}
    />
        </div>
    )
}

}export default Commenttext