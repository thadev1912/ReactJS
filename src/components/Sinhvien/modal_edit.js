import React ,{useState,useEffect}from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
const Modal_edit = (props) => {
    const {isOpen_edit,data_edit,Toggle_Modal_edit,Update}=props;    
    const [sinhvien, setsinhvien] = useState({
        id:'',
        ma_sv: '',
        ten_sv: '',
        gioitinh_sv: '',
        ngaysinh_sv: '',
        diachi_sv: '',
        sdt_sv: '',
        ma_lop: ''
    })
    let data= {data_edit};
    useEffect(()=>{
    async function data_edit()
    {
        
      
        console.log('id nhận từ prop cha:',data);
        if(data && !_.isEmpty(data))
        {
           
          setsinhvien({
                id:data.data_edit.id,
                ma_sv: data.data_edit.ma_sv,
                ten_sv: data.data_edit.ten_sv,
                gioitinh_sv: data.data_edit.gioitinh_sv,
                ngaysinh_sv: data.data_edit.ngaysinh_sv,
                diachi_sv: data.data_edit.diachi_sv,
                sdt_sv: data.data_edit.sdt_sv,
                ma_lop: data.data_edit.ma_lop,
            });
        }
    }
    data_edit();
},[])
       //focus toggle
    
    const toggle = () => {
       return Toggle_Modal_edit(); //nhận props theo kiểu function
    }
    const hanleChangeInput = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setsinhvien((prev)=>{
         return {...prev,[name]:value}
        })
        
     }  
     const handle_Update=()=>{
        // this.props.Store(this.state);    
         console.log('dữ liệu cần update là:',sinhvien);
         Update(sinhvien);
     }
  
    return (
            
        <>

            <Modal isOpen={isOpen_edit} toggle={toggle} >
                <ModalHeader>CHỈNH SỬA THÔNG TIN</ModalHeader>
                <ModalBody>
                    <div className="container">                        
                          
                            <div className="col-12 form-group">
                            <label>Mã Sinh Viên</label>
                            <input className="form-control" type="text" name="ma_sv" onChange={hanleChangeInput} value={sinhvien.id} hidden></input>
                            <input className="form-control" type="text" name="ma_sv" onChange={hanleChangeInput} value={sinhvien.ma_sv} ></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Tên Sinh Viên</label>
                            <input className="form-control" type="text" name="ten_sv" onChange={hanleChangeInput} value={sinhvien.ten_sv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Giới Tính</label>
                            <input className="form-control" type="text" name="gioitinh_sv" onChange={hanleChangeInput} value={sinhvien.gioitinh_sv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Ngày Sinh</label>
                            <input className="form-control" type="text" name="ngaysinh_sv" onChange={hanleChangeInput} value={sinhvien.ngaysinh_sv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Địa Chỉ</label>
                            <input className="form-control" type="text" name="diachi_sv" onChange={hanleChangeInput} value={sinhvien.diachi_sv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Số Điện Thoại</label>
                            <input className="form-control" type="text" name="sdt_sv" onChange={hanleChangeInput} value={sinhvien.sdt_sv}></input>
                        </div>
                        <div className="col-12 form-group">
                            <label>Lớp Học</label>
                            <input className="form-control" type="text" name="ma_lop" onChange={hanleChangeInput} value={sinhvien.ma_lop}></input>
                        </div>                      
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handle_Update}>
                        Lưu Lại
                    </Button>
                    <Button color="danger" onClick={toggle}>
                        Thoát
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default Modal_edit