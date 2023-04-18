import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Modal_addnew=(props)=> {
    const {isOpen_addnew,Toggle_Modal_addnew,Store}=props; // đây là cách nhận props trong function component   
    const [sinhvien, setsinhvien] = useState({
        ma_sv: '',
        ten_sv: '',
        gioitinh_sv: '',
        ngaysinh_sv: '',
        diachi_sv: '',
        sdt_sv: '',
        ma_lop: ''
    })
    useEffect(() => {



    }, [])
       //focus toggle
        const toggle = () => {        
       return Toggle_Modal_addnew(); //nhận props theo kiểu function
    }
    const hanleChangeInput = (e) => {
       const name=e.target.name;
       const value=e.target.value;
       setsinhvien((prev)=>{
        return {...prev,[name]:value}
       })

    }
    //console.log('giá trị input là',sinhvien);
    const handleStore=()=>{
        Store(sinhvien);
    }
    
    return (
       
       
            <Modal isOpen={isOpen_addnew} toggle={toggle} >
                <ModalHeader>THÊM MỚI THÔNG TIN</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="col-12 form-group">
                            <label>Mã Sinh Viên</label>
                            <input className="form-control" type="text" name="ma_sv" onChange={hanleChangeInput}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tên Sinh Viên</label>
                            <input className="form-control" type="text" name="ten_sv" onChange={hanleChangeInput}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Giới Tính</label>
                            <input className="form-control" type="text" name="gioitinh_sv" onChange={hanleChangeInput}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Sinh</label>
                            <input className="form-control" type="text" name="ngaysinh_sv" onChange={hanleChangeInput}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Địa Chỉ</label>
                            <input className="form-control" type="text" name="diachi_sv" onChange={hanleChangeInput}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Số Điện Thoại</label>
                            <input className="form-control" type="text" name="sdt_sv" onChange={hanleChangeInput}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Lớp Học</label>
                            <input className="form-control" type="text" name="ma_lop" onChange={hanleChangeInput}></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"onClick={handleStore} >
                        Lưu Lại
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Thoát
                    </Button>
                </ModalFooter>
            </Modal>
      
    )
}

export default Modal_addnew