import React, { Component } from "react";
class Addpost extends Component{
     constructor(props){
      super(props)
      this.state = {
        name: "hey123"
      }
    }
   
    render(){
        return(
            
            <div>
            <div   >
            <span class="border border-success p-1 mb-1"> {this.state.name}</span>
            

            </div>
            <button type="button"class="btn btn-light"  onClick={this.addlike}> Like</button>

          <button type="button" class="btn btn-light" onClick={this.addcomments}>Add comments</button>
             </div>
        )
    }

}
export default Addpost