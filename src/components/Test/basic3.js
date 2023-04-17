import React from "react";
class Cuphap extends React.Component {
    state = {
         name:"Thạch Chanh Tha",
         level:'Junior'
    }
    render()
    {
       
    return(
        <>
       
        <div className="first"> Cùng tìm hiểu về cú pháp JSX với {this.state.name} nhé!!</div>  
        <div className="second"> Với trình độ {this.state['level']} nhé!!</div>  
        </> // đây là pragment
    )
   
    }
}
export default Cuphap