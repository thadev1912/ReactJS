import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
const ModalEdit = (props) => {
    const { isOpenModalEdit, chucvuId, ToggleEdit,Update } = props;

    const [chucvu, setChucvu] = useState({
        id: '',
        ma_cv: '',
        ten_cv: ''
    });

    //Action
    const hanldeToggle = () => {
        return ToggleEdit();
    }
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setChucvu((prev) => {
            return { ...prev, [name]: value }
        })
    }
    console.log(chucvu);
    const hanldeUpdate=()=>
    {    
      return Update(chucvu,chucvu.id);
    }


    useEffect(() => {

        const getId = async () => {


            if (chucvuId && !_.isEmpty(chucvuId)) {
                setChucvu({
                    id: chucvuId.id,
                    ma_pb: chucvuId.ma_cv,
                    ten_pb: chucvuId.ten_cv,
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
                            <label>Mã Chức Vụ</label>
                            <input className="form-control" type="text" name="id" onChange={handleChangeInput} value={chucvu.id} hidden  ></input>
                            <input className="form-control" type="text" name='ma_cv' onChange={handleChangeInput} value={chucvu.ma_cv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tên Chức Vụ</label>
                            <input className="form-control" type="text" name='ten_cv' onChange={handleChangeInput} value={chucvu.ten_cv}></input>
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