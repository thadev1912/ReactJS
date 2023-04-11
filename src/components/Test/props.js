import React from "react";
class Myprops extends React.Component {

  
    render()
    {
      console.log('Check props:',this.props);
      // let name=this.props.name;
      // let level=this.props.age;
      let {name,level} =this.props;
    return(
        <>
        
        <div className="first"> Cùng tìm hiểu về cú pháp JSX với {name} nhé!!</div>  
        <div className="second"> Với trình độ {level} nhé!!</div>  
        </> // đây là fragment
    )
   
    }
}
export default Myprops