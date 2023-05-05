import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
const ModalEdit = (props) => {
    const { isOpenModalEdit, baohiemId, ToggleEdit, Update, selectNoiKham, selectNoiCap, selectLoaibhxh } = props;
    //const [check,setCheck]=useState([]);
    const [baohiem, setBaohiem] = useState({
        id: "",
        ma_bhxh: "",
        ma_nv: "",
        loai_bhxh: "",
        ngaycap: "",
        ngayhethan: "",
        noicap: "",
        noikham: "",
        tiendong_bhxh: "",
    });
    console.log('giá trị select cần edit là', selectNoiCap);
    //Action
    const hanldeToggle = () => {
        return ToggleEdit();
    }
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setBaohiem((prev) => {
            return { ...prev, [name]: value }
        });

    }
    //console.log('giá trị select đã check là',check);
    console.log(baohiem);
    const hanldeUpdate = () => {
        return Update(baohiem, baohiem.id);
    }


    useEffect(() => {

        const getId = async () => {


            if (baohiemId && !_.isEmpty(baohiemId)) {
                setBaohiem({
                    id: baohiemId.id,
                    ma_bhxh: baohiemId.ma_bhxh,
                    ma_nv: baohiemId.ma_nv,
                    loai_bhxh: baohiemId.loai_bhxh,
                    ngaycap: baohiemId.ngaycap,
                    ngayhethan: baohiemId.ngayhethan,
                    noicap: baohiemId.noicap,
                    noikham: baohiemId.noikham,
                    tiendong_bhxh: baohiemId.tiendong_bhxh,
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
                            <label>Mã Bảo Hiểm Xã Hội</label>
                            <input className="form-control" type="text" name="id" onChange={handleChangeInput} value={baohiem.id} hidden  ></input>
                            <input className="form-control" type="text" name='ma_bhxh' onChange={handleChangeInput} value={baohiem.ma_bhxh}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Mã Nhân Viên</label>
                            <input className="form-control" type="text" name='ma_nv' onChange={handleChangeInput} value={baohiem.ma_nv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Loại Bảo Hiểm Xã Hội</label>
                            <select className="form-select" name='loai_bhxh' onChange={handleChangeInput}
                                aria-label="Default select example">
                                <option selected>Lựa chọn nơi cấp</option>
                                {selectLoaibhxh.map((item, index) => {
                                    return (
                                        <option key={index} value={item.noicap}
                                            selected={baohiem.loai_bhxh === item.loai_bhxh}
                                        >
                                            {item.loai_bhxh}</option>
                                    )
                                })
                                }

                            </select>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Cấp</label>
                            <input className="form-control" type="text" name='ngaycap' onChange={handleChangeInput} value={baohiem.ngaycap}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Hết Hạn</label>
                            <input className="form-control" type="text" name='ngayhethan' onChange={handleChangeInput} value={baohiem.ngayhethan}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Nơi Cấp</label>
                            <select className="form-select" name='noicap' onChange={handleChangeInput}

                                aria-label="Default select example">
                                <option selected>Lựa chọn nơi cấp</option>
                                {selectNoiCap.map((item, index) => {
                                    return (
                                        <option key={index} value={item.noicap}
                                            selected={baohiem.noicap === item.noicap}
                                        >
                                            {item.noicap}</option>
                                    )
                                })
                                }

                            </select>
                        </div>
                        <div className="col-12 form-group">
                            <label>Nơi Khám</label>
                            <select className="form-select" name='noikham' onChange={handleChangeInput}
                                aria-label="Default select example">
                                <option selected>Lựa chọn nơi khám</option>
                                {selectNoiKham.map((item, index) => {
                                    return (
                                        <option key={index} value={item.noicap}
                                            selected={baohiem.noikham === item.noikham}
                                        >
                                            {item.noikham}</option>
                                    )
                                })
                                }

                            </select>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tiền Đóng BHXH</label>
                            <input className="form-control" type="text" name='tiendong_bhxh' onChange={handleChangeInput} value={baohiem.tiendong_bhxh}></input>
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