import React from "react";
class ChangeState extends React.Component {
  state = {
    name:"Thạch Chanh Tha",
    level:'Junior'
}
  hanleChange =(event) => {
    this.setState({
        name:event.target.value
    })
  }
    render()
    {
       
    return(
        <>
        <div className="zero">
            <input value={this.state.name} type="text"
            onChange ={(event) => this.hanleChange(event)}/>
        </div>
        <div className="first"> Cùng tìm hiểu về cú pháp JSX với {this.state.name} nhé!!</div>  
        <div className="second"> Với trình độ {this.state['level']} nhé!!</div>  
        </> // đây là fragment
    )
   
    }
}
export default ChangeState