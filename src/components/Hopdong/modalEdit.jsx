import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
const ModalEdit = (props) => {
    const { isOpenModalEdit, hopdongId, ToggleEdit,Update } = props;

    const [hopdong, setHopdong] = useState({
        id: "",
        txt_ma_hd: "",
        txt_ma_nv: "",
        txt_heso_luong: "",
        txt_ngayvao: "",
        txt_tinhtrang: "",
        txt_loai_hd: "",
        txt_phucap: "",
        txt_ngay_macdinh: "",
        txt_ngay_nghiviec: "",
    });

    //Action
    const hanldeToggle = () => {
        return ToggleEdit();
    }
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setHopdong((prev) => {
            return { ...prev, [name]: value }
        })
    }
    console.log(hopdong);
    const hanldeUpdate=()=>
    {    
      return Update(hopdong,hopdong.id);
    }


    useEffect(() => {

        const getId = async () => {


            if (hopdongId && !_.isEmpty(hopdongId)) {
                setHopdong({
                    id: hopdongId.id,
                    txt_ma_hd: hopdongId.ma_hd,
                    txt_ma_nv: hopdongId.ma_nv,
                    txt_heso_luong: hopdongId.heso_luong,
                    txt_ngayvao: hopdongId.ngayvao,
                    txt_tinhtrang: hopdongId.tinhtrang,
                    txt_loai_hd: hopdongId.loai_hd,
                    txt_phucap: hopdongId.phucap,
                    txt_ngay_macdinh: hopdongId.ngaymacdinh,
                    txt_ngay_nghiviec: hopdongId.ngay_nghiviec,
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
                            <label>Mã Hợp Đồng</label>
                            <input className="form-control" type="text" name="id" onChange={handleChangeInput} value={hopdong.id} hidden  ></input>
                            <input className="form-control" type="text" name='txt_ma_hd' onChange={handleChangeInput} value={hopdong.txt_ma_hd}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Mã Nhân Viên</label>
                            <input className="form-control" type="text" name='txt_ma_nv' onChange={handleChangeInput} value={hopdong.txt_ma_nv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Loại Hợp Đồng</label>
                            <input className="form-control" type="text" name='txt_heso_luong' onChange={handleChangeInput} value={hopdong.txt_heso_luong}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Vào</label>
                            <input className="form-control" type="text" name='txt_ngayvao' onChange={handleChangeInput} value={hopdong.txt_ngayvao}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tình Trạng</label>
                            <input className="form-control" type="text" name='txt_tinhtrang' onChange={handleChangeInput} value={hopdong.txt_tinhtrang}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Loại Hợp Đồng</label>
                            <input className="form-control" type="text" name='txt_loai_hd' onChange={handleChangeInput} value={hopdong.txt_loai_hd}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Phụ Cấp</label>
                            <input className="form-control" type="text" name='txt_phu_cap' onChange={handleChangeInput} value={hopdong.txt_phu_cap}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Mặc Định</label>
                            <input className="form-control" type="text" name='txt_ngay_macdinh' onChange={handleChangeInput} value={hopdong.txt_ngay_macdinh}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Nghỉ Việc</label>
                            <input className="form-control" type="text" name='txt_ngay_nghiviec' onChange={handleChangeInput} value={hopdong.txt_ngay_nghiviec}></input>
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