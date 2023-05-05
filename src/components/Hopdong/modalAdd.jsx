import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModalAdd = (props) => {
  const {isOpenModal,Toggle,Store}=props;
  const [hopdong,setHopdong]=useState({})
  
  //Functions
  const handleToggle=()=>
  {
    return Toggle();
  }
  const handleChangeInput=(e)=>
  {
    const name=e.target.name;
       const value=e.target.value;
       setHopdong((prev)=>{
        return {...prev,[name]:value}
       })
     
  }
  //console.log(hopdong);
  const handleStore=()=>
  {
    return Store(hopdong);
  }

  return (
    <Modal isOpen={isOpenModal} toggle={handleToggle}>
    <ModalHeader>THÊM MỚI THÔNG TIN</ModalHeader>
    <ModalBody>
        <div className="container">
            <div className="col-12 form-group">
                <label>Mã Hợp Đồng</label>
                <input className="form-control" type="text" name='txt_ma_hd' onChange={handleChangeInput} ></input>
            </div>
            <div className="col-12 form-group">
                <label>Mã Nhân Viên</label>
                <input className="form-control" type="text" name='txt_ma_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Hệ Số Lương</label>
                <input className="form-control" type="text" name='txt_heso_luong' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Ngày Vào</label>
                <input className="form-control" type="text" name='txt_ngayvao' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Tình Trạng</label>
                <input className="form-control" type="text" name='txt_tinhtrang' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Loại Hợp Đồng</label>
                <input className="form-control" type="text" name='txt_loai_hd' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Phụ Cấp</label>
                <input className="form-control" type="text" name='txt_phucap' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Ngày Mặc Định</label>
                <input className="form-control" type="text" name='txt_ngay_macdinh' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Ngày Nghỉ Việc</label>
                <input className="form-control" type="text" name='txt_ngay_nghiviec' onChange={handleChangeInput}></input>
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