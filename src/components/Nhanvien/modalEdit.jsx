import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
const ModalEdit = (props) => {
    const { isOpenModalEdit, nhanvienId, ToggleEdit,Update } = props;

    const [nhanvien, setNhanvien] = useState({
        id: "",        
        txt_ma_nv: "",
        txt_hoten_nv: "",
        txt_diachi_nv: "",
        txt_gioitinh_nv: "",
        txt_ngaysinh_nv: "",
        txt_sdt_nv: "",
        txt_cccd_nv: "",
        txt_trangthai_nv: "",
        txt_ma_pb: "",
        txt_ma_cv: "",
        txt_trinhdo_nv: "",
        txt_chuyennganh_nv: "",
        txt_ma_email: "",
    });

    //Action
    const hanldeToggle = () => {
        return ToggleEdit();
    }
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNhanvien((prev) => {
            return { ...prev, [name]: value }
        })
    }
    console.log('giá trị nhân viên là:',nhanvien);
    const hanldeUpdate=()=>
    {    
      return Update(nhanvien,nhanvien.id);
    }


    useEffect(() => {

        const getId = async () => {


            if (nhanvienId && !_.isEmpty(nhanvienId)) {
                setNhanvien({
                    id: nhanvienId.id,        
                    txt_ma_nv:nhanvienId.ma_nv ,
                    txt_hoten_nv: nhanvienId.hoten_nv,
                    txt_diachi_nv: nhanvienId.diachi_nv,
                    txt_gioitinh_nv:nhanvienId.gioitinh_nv,
                    txt_ngaysinh_nv: nhanvienId.ngaysinh_nv,
                    txt_sdt_nv: nhanvienId.sdt_nv,
                    txt_cccd_nv: nhanvienId.cccd_nv,
                    txt_trangthai_nv: nhanvienId.trangthai_nv,
                    txt_ma_pb: nhanvienId.ma_pb,
                    txt_ma_cv: nhanvienId.ma_cv,
                    txt_trinhdo_nv: nhanvienId.trinhdo_nv,
                    txt_chuyennganh_nv: nhanvienId.chuyennganh_nv,
                    txt_ma_email: nhanvienId.ma_email,
                });

            }
        }
        getId();

    }, []);

    return (

        <>

            <Modal isOpen={isOpenModalEdit} toggle={hanldeToggle}  >
                <ModalHeader>CHỈNH SỬA THÔNG TIN</ModalHeader>
                <ModalBody>
                <div className="container">
            <div className="col-12 form-group">
                <label>Mã Nhân Viên</label>
                <input className="form-control" type="text" name='id' onChange={handleChangeInput} value={nhanvien.id} hidden ></input>
                <input className="form-control" type="text" name='txt_ma_nv' onChange={handleChangeInput} value={nhanvien.txt_ma_nv}  ></input>
            </div>
            <div className="col-12 form-group">
                <label>Họ Tên Nhân Viên</label>
                <input className="form-control" type="text" name='txt_hoten_nv' onChange={handleChangeInput} value={nhanvien.txt_hoten_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Địa Chỉ Nhân Viên</label>
                <input className="form-control" type="text" name='txt_diachi_nv' onChange={handleChangeInput} value={nhanvien.txt_diachi_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Giới Tính</label>
                <input className="form-control" type="text" name='txt_gioitinh_nv' onChange={handleChangeInput} value={nhanvien.txt_gioitinh_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Ngày Sinh</label>
                <input className="form-control" type="text" name='txt_ngaysinh_nv' onChange={handleChangeInput} value={nhanvien.txt_ngaysinh_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Số Điện Thoại</label>
                <input className="form-control" type="text" name='txt_sdt_nv' onChange={handleChangeInput} value={nhanvien.txt_sdt_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Căn Cước Công Dân</label>
                <input className="form-control" type="text" name='txt_cccd_nv' onChange={handleChangeInput} value={nhanvien.txt_cccd_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Trạng Thái</label>
                <input className="form-control" type="text" name='txt_trangthai_nv' onChange={handleChangeInput} value={nhanvien.txt_trangthai_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Mã Phòng Ban</label>
                <input className="form-control" type="text" name='txt_ma_pb' onChange={handleChangeInput} value={nhanvien.txt_ma_pb}></input>
            </div>
            <div className="col-12 form-group">
                <label>Mã Chức Vụ</label>
                <input className="form-control" type="text" name='txt_ma_cv' onChange={handleChangeInput} value={nhanvien.txt_ma_cv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Trình Độ</label>
                <input className="form-control" type="text" name='txt_trinhdo_nv' onChange={handleChangeInput} value={nhanvien.txt_trinhdo_nv}></input>
            </div>
            <div className="col-12 form-group">
                <label>Chuyên Ngành</label>
                <input className="form-control" type="text" name='txt_chuyennganh_nv' onChange={handleChangeInput} value={nhanvien.txt_chuyennganh_nv}></input>
            </div>
        </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={hanldeUpdate} >
                        Lưu Lại
                    </Button>
                    <Button color="danger" onClick={hanldeToggle} >
                        Thoát
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalEdit