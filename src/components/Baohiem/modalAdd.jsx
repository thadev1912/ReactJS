import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModalAdd = (props) => {
    const { isOpenModal, Toggle, Store, selectNoiKham, selectNoiCap, selectLoaibhxh,errorArrs } = props;
    const [baohiem, setBaohiem] = useState({})
    //const [selectNoiKham,setselectNoiKham]=useState(['Quận Ninh Kiều']);

    //Functions
    const handleToggle = () => {
        return Toggle();
    }
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBaohiem((prev) => {
            return { ...prev, [name]: value }
        })

    }
    console.log(baohiem);
    const handleStore = () => {
        return Store(baohiem);
    }
   // console.log('giá trị validate bao hiểm nhận từ cha được là',errorArrs);
    return (

        <Modal isOpen={isOpenModal} toggle={handleToggle}>
            <ModalHeader>THÊM MỚI THÔNG TIN</ModalHeader>
            <ModalBody>
                <div className="container">
                    <div className="col-12 form-group">
                        <label>Mã Bảo Hiểm Xã Hội</label>
                        <input className="form-control" type="text" name='ma_bhxh' onChange={handleChangeInput} ></input>
                        <span className='text-danger'>{errorArrs.ma_bhxh}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Mã Nhân Viên</label>
                        <input className="form-control" type="text" name='ma_nv' onChange={handleChangeInput}></input>
                        <span className='text-danger'>{errorArrs.ma_nv}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Loại Bảo Hiểm Xã Hội</label>
                        <select className="form-select" name='loai_bhxh' onChange={handleChangeInput}
                            aria-label="Default select example">
                            <option value={''}>Lựa chọn Loại BHXH</option>
                            {selectLoaibhxh.map((item, index) => {
                                return (
                                    <option key={index} value={item.loai_bhxh}>{item.loai_bhxh}</option>
                                )
                            })
                            }

                        </select>
                        <span className='text-danger'>{errorArrs.loai_bhxh}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Ngày Cấp</label>
                        <input className="form-control" type="date" name='ngaycap' onChange={handleChangeInput}></input>
                        <span className='text-danger'>{errorArrs.ngaycap}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Ngày Hết Hạn</label>
                        <input className="form-control" type="date" name='ngayhethan' onChange={handleChangeInput}></input>
                        <span className='text-danger'>{errorArrs.ngayhethan}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Nơi Cấp</label>
                        {/* <input className="form-control" type="text" name='noicap' onChange={handleChangeInput}></input> */}
                        <select className="form-select" name='noicap' onChange={handleChangeInput}

                            aria-label="Default select example">
                            <option value={''}>Lựa chọn nơi cấp</option>
                            {selectNoiCap.map((item, index) => {
                                return (
                                    <option key={index} value={item.noicap}>{item.noicap}</option>
                                )
                            })
                            }

                        </select>
                        <span className='text-danger'>{errorArrs.noicap}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Nơi Khám</label>
                        {/* <input className="form-control" type="text" name='noikham' onChange={handleChangeInput}></input> */}
                        <select className="form-select" name='noikham' onChange={handleChangeInput}

                            aria-label="Default select example">
                            <option value={''}>Lựa chọn nơi khám</option>
                            {selectNoiKham.map((item, index) => {
                                return (
                                    <option key={index} value={item.noikham}>{item.noikham}</option>
                                )
                            })
                            }



                        </select>
                        <span className='text-danger'>{errorArrs.noikham}</span>
                    </div>
                    <div className="col-12 form-group">
                        <label>Tiền Đóng BHXH</label>
                        <input className="form-control" type="text" name='tiendong_bhxh' onChange={handleChangeInput}></input>
                        <span className='text-danger'>{errorArrs.tiendong_bhxh}</span>
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