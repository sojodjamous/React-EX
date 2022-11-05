import React from "react";
import moment from "moment";

class Comment extends React. Component{
    constructor(props){
        super(props)
        //   this.state={
        //   name:'comment'

        // }
       
    this .state={
        name:'comment',
        
        date_create: moment().format("hh:mm DD/MM/YYYY ")
    }
    }
    render(){
        return(
            <div>
                <span ><span > {this.state.name}</span>
                <br/>
            <span> date:{this. state.date_create}</span></span>
            


            </div>
        )
    }
}
export default Comment