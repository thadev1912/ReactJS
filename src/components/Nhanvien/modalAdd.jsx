import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModalAdd = (props) => {
  const {isOpenModal,Toggle,Store}=props;
  const [nhanvien,setNhanvien]=useState({})
  
  //Functions
  const handleToggle=()=>
  {
    return Toggle();
  }
  const handleChangeInput=(e)=>
  {
    const name=e.target.name;
       const value=e.target.value;
       setNhanvien((prev)=>{
        return {...prev,[name]:value}
       })
     
  }
  //console.log(nhanvien);
  const handleStore=()=>
  {
    return Store(nhanvien);
  }

  return (
    <Modal isOpen={isOpenModal} toggle={handleToggle}>
    <ModalHeader>THÊM MỚI THÔNG TIN</ModalHeader>
    <ModalBody>
        <div className="container">
            <div className="col-12 form-group">
                <label>Mã Nhân Viên</label>
                <input className="form-control" type="text" name='txt_ma_nv' onChange={handleChangeInput} ></input>
            </div>
            <div className="col-12 form-group">
                <label>Họ Tên Nhân Viên</label>
                <input className="form-control" type="text" name='txt_hoten_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Địa Chỉ Nhân Viên</label>
                <input className="form-control" type="text" name='txt_diachi_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Giới Tính</label>
                <input className="form-control" type="text" name='txt_gioitinh_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Ngày Sinh</label>
                <input className="form-control" type="text" name='txt_ngaysinh_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Số Điện Thoại</label>
                <input className="form-control" type="text" name='txt_sdt_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Căn Cước Công Dân</label>
                <input className="form-control" type="text" name='txt_cccd_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Trạng Thái</label>
                <input className="form-control" type="text" name='txt_trangthai_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Mã Phòng Ban</label>
                <input className="form-control" type="text" name='txt_ma_pb' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Mã Chức Vụ</label>
                <input className="form-control" type="text" name='txt_ma_cv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Trình Độ</label>
                <input className="form-control" type="text" name='txt_trinhdo_nv' onChange={handleChangeInput}></input>
            </div>
            <div className="col-12 form-group">
                <label>Chuyên Ngành</label>
                <input className="form-control" type="text" name='txt_chuyennganh_nv' onChange={handleChangeInput}></input>
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