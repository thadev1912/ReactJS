import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class MyModal extends React.Component {
    // Phần State <==> init state
    constructor(props) {
        super(props);
        this.state = {
            ma_sv:'',
            ten_sv:'',
            gioitinh_sv:'',
            ngaysinh_sv:'',
            diachi_sv:'',
            sdt_sv:'',
            ma_lop:'',

        }
    }
    //setstate
    componentDidMount() {

    }
    //focus toggle
    toggle = () => {
        this.props.Toggle_Modal_addnew(); //nhận props theo kiểu function
    }
    hanleChangeInput =(e,id)=>{        
       let all_sate={...this.state}; // dùng để nhận toàn bộ object state
       all_sate[id]=e.target.value;
       this.setState({
        ...all_sate
       },()=> {console.log(this.state);})
       
    }
    
    handle_Store=()=>{
        this.props.Store(this.state);
       // console.log('dữ liệu là:',this.state);
    }
  
    render() {
        return (
            <>

                <Modal isOpen={this.props.isOpen_addnew} toggle={this.toggle} >
                    <ModalHeader>THÊM MỚI THÔNG TIN</ModalHeader>
                    <ModalBody>
                        <div className="container">                            
                                <div className="col-12 form-group">
                                    <label>Mã Sinh Viên</label>
                                    <input className="form-control" type="text"
                                    onChange={(e)=>this.hanleChangeInput(e,'ma_sv')}></input>
                                </div>                       
                                <div className="col-12 form-group">
                                    <label>Tên Sinh Viên</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'ten_sv')}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Giới Tính</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'gioitinh_sv')}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Ngày Sinh</label>
                                    <input className="form-control" type="date" onChange={(e)=>this.hanleChangeInput(e,'ngaysinh_sv')}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Địa Chỉ</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'diachi_sv')}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Số Điện Thoại </label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'sdt_sv')}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Lớp Học</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'ma_lop')}></input>
                                </div>
                          
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_Store}>
                            Lưu Lại
                        </Button>{' '}
                        <Button color="danger" onClick={this.toggle}>
                            Thoát
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}
export default MyModal