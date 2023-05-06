import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModalAdd = (props) => {
  const {isOpenModal,Toggle,Store,selectTrangthai,selectTrinhdo,selectPhongban,selectChucvu,errorArrs}=props;
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
  console.log(nhanvien);
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
                <span className='text-danger'>{errorArrs.txt_ma_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Họ Tên Nhân Viên</label>
                <input className="form-control" type="text" name='txt_hoten_nv' onChange={handleChangeInput}></input>
                <span className='text-danger'>{errorArrs.txt_hoten_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Địa Chỉ Nhân Viên</label>
                <input className="form-control" type="text" name='txt_diachi_nv' onChange={handleChangeInput}></input>
                <span className='text-danger'>{errorArrs.txt_diachi_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Giới Tính</label><br/>
                {/* <input className="form-control" type="text" name='txt_gioitinh_nv' onChange={handleChangeInput}></input> */}
                <input className='radio-inline' name="txt_gioitinh_nv" type="radio" value="Nam"  onChange={handleChangeInput}/>Nam
                <input className='radio-inline'  name="txt_gioitinh_nv" type="radio" value="Nữ"  onChange={handleChangeInput}/>Nữ
                <span className='text-danger'>{errorArrs.txt_gioitinh_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Ngày Sinh</label>
                <input className="form-control" type="date" name='txt_ngaysinh_nv' onChange={handleChangeInput}></input>
                <span className='text-danger'>{errorArrs.txt_ngaysinh_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Số Điện Thoại</label>
                <input className="form-control" type="text" name='txt_sdt_nv' onChange={handleChangeInput}></input>
                <span className='text-danger'>{errorArrs.txt_sdt_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Căn Cước Công Dân</label>
                <input className="form-control" type="text" name='txt_cccd_nv' onChange={handleChangeInput}></input>
                <span className='text-danger'>{errorArrs.txt_cccd_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Trạng Thái</label>
                {/* <input className="form-control" type="text" name='txt_trangthai_nv' onChange={handleChangeInput}></input> */}
                <select className="form-select" name='txt_trangthai_nv' onChange={handleChangeInput}
                            aria-label="Default select example">
                            <option value={''}>Lựa chọn Trạng Thái</option>
                            {selectTrangthai.map((item, index) => {
                                return (
                                    <option key={index} value={item.trangthai_nv}>{item.trangthai_nv}</option>
                                )
                            })
                            }

                        </select>
                        <span className='text-danger'>{errorArrs.txt_trangthai_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Mã Phòng Ban</label>
                {/* <input className="form-control" type="text" name='txt_ma_pb' onChange={handleChangeInput}></input> */}
                <select className="form-select" name='txt_ma_pb' onChange={handleChangeInput}
                            aria-label="Default select example">
                            <option value={''}>Lựa chọn Phòng Ban</option>
                            {selectPhongban.map((item, index) => {
                                return (
                                    <option key={index} value={item.ma_pb}>{item.ten_pb}</option>
                                )
                            })
                            }

                        </select>
                        <span className='text-danger'>{errorArrs.txt_ma_pb}</span>
            </div>
            <div className="col-12 form-group">
                <label>Mã Chức Vụ</label>
                {/* <input className="form-control" type="text" name='txt_ma_cv' onChange={handleChangeInput}></input> */}
                <select className="form-select" name='txt_ma_cv' onChange={handleChangeInput}
                            aria-label="Default select example">
                            <option value={''}>Lựa chọn Chức Vụ</option>
                            {selectChucvu.map((item, index) => {
                                return (
                                    <option key={index} value={item.ma_cv}>{item.ten_cv}</option>
                                )
                            })
                            }

                        </select>
                        <span className='text-danger'>{errorArrs.txt_ma_cv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Trình Độ</label>
                {/* <input className="form-control" type="text" name='txt_trinhdo_nv' onChange={handleChangeInput}></input> */}
                <select className="form-select" name='txt_trinhdo_nv' onChange={handleChangeInput}
                            aria-label="Default select example">
                            <option value={''}>Lựa chọn Trình độ</option>
                            {selectTrinhdo.map((item, index) => {
                                return (
                                    <option key={index} value={item.trinhdo_nv}>{item.trinhdo_nv}</option>
                                )
                            })
                            }

                        </select>
                        <span className='text-danger'>{errorArrs.txt_trinhdo_nv}</span>
            </div>
            <div className="col-12 form-group">
                <label>Chuyên Ngành</label>
                <input className="form-control" type="text" name='txt_chuyennganh_nv' onChange={handleChangeInput}></input>
                <span className='text-danger'>{errorArrs.txt_chuyennganh_nv}</span>
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