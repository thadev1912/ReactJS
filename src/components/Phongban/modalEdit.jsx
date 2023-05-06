import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
const ModalEdit = (props) => {
    const { isOpenModalEdit, phongbanId, ToggleEdit,Update,errorArrs } = props;

    const [phongban, setPhongBan] = useState({
        id: '',
        ma_pb: '',
        ten_pb: ''
    });

    //Action
    const hanldeToggle = () => {
        return ToggleEdit();
    }
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPhongBan((prev) => {
            return { ...prev, [name]: value }
        })
    }
    console.log(phongban);
    const hanldeUpdate=()=>
    {    
      return Update(phongban,phongban.id);
    }


    useEffect(() => {

        const getId = async () => {


            if (phongbanId && !_.isEmpty(phongbanId)) {
                setPhongBan({
                    id: phongbanId.id,
                    ma_pb: phongbanId.ma_pb,
                    ten_pb: phongbanId.ten_pb,
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
                            <label>Mã Phòng Ban</label>
                            <input className="form-control" type="text" name="id" onChange={handleChangeInput} value={phongban.id} hidden  ></input>
                            <input className="form-control" type="text" name='ma_pb' onChange={handleChangeInput} value={phongban.ma_pb}></input>
                            <span className='text-danger'>
                   {errorArrs.ma_pb}
                </span>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tên Phòng Ban</label>
                            <input className="form-control" type="text" name='ten_pb' onChange={handleChangeInput} value={phongban.ten_pb}></input>
                            <span className='text-danger'>
                   {errorArrs.ten_pb}
                </span>
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