import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModalAdd = (props) => {
  const {isOpenModal,Toggle,Store}=props;
  const [phongban,setPhongban]=useState({})
  
  //Functions
  const handleToggle=()=>
  {
    return Toggle();
  }
  const handleChangeInput=(e)=>
  {
    const name=e.target.name;
       const value=e.target.value;
       setPhongban((prev)=>{
        return {...prev,[name]:value}
       })
     
  }
  //console.log(phongban);
  const handleStore=()=>
  {
    return Store(phongban);
  }

  return (
    <Modal isOpen={isOpenModal} toggle={handleToggle}>
    <ModalHeader>THÊM MỚI THÔNG TIN</ModalHeader>
    <ModalBody>
        <div className="container">
            <div className="col-12 form-group">
                <label>Mã Phòng Ban</label>
                <input className="form-control" type="text" name='ma_pb' onChange={handleChangeInput} ></input>
            </div>
            <div className="col-12 form-group">
                <label>Tên Phòng Ban</label>
                <input className="form-control" type="text" name='ten_pb' onChange={handleChangeInput}></input>
            </div>
         
        </div>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={handleStore} >
            Lưu Lại
        </Button>{' '}
        <Button color="danger" onClick={handleToggle} >
            Thoát
        </Button>
    </ModalFooter>
</Modal>

  )
}

export default ModalAdd