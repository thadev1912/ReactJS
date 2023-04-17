import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'; //hỗ trợ check sự tồn tại 
class Modal_edit extends React.Component {
    // Phần State <==> init state
    constructor(props) {
        super(props);
        this.state = {
            id:'',
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
        let data=this.props.Edit_id;   
       
        if(data && !_.isEmpty(data)) {/* hàm ho tro updatemount được dùng trong {} */}

        {
            //console.log('state nhận từ prop cha:',data);  
           this.setState({
            id:data.id,
            ma_sv:data.ma_sv,
            ten_sv:data.ten_sv,
            gioitinh_sv:data.gioitinh_sv,
            ngaysinh_sv:data.ngaysinh_sv,
            diachi_sv:data.diachi_sv, 
            sdt_sv:data.sdt_sv,
            ma_lop:data.ma_lop,
           
           })
        }
    }
    //focus toggle
    toggle = () => {
        this.props.Toggle_Modal_edit(); //nhận props theo kiểu function
    }
    hanleChangeInput =(e,id)=>{        
       let all_sate={...this.state}; // dùng để nhận toàn bộ object state
       all_sate[id]=e.target.value;
       this.setState({
        ...all_sate
       },()=> {console.log(this.state);})
       
    }
    
    handle_Update=()=>{
       // this.props.Store(this.state);    
        console.log('dữ liệu update là:',this.state);
        this.props.Update(this.state);
    }
 
    render() {
       
        //console.log('dữ liệu edit từ cha:',data);
        return (
            
            <>

                <Modal isOpen={this.props.isOpen_edit} toggle={this.toggle} >
                    <ModalHeader>CHỈNH SỬA THÔNG TIN</ModalHeader>
                    <ModalBody>
                        <div className="container">                            
                                <div className="col-12 form-group">
                                    <label>Mã Sinh Viên</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'id')} value={this.state.id} hidden></input>
                                    <input className="form-control" type="text"
                                    onChange={(e)=>this.hanleChangeInput(e,'ma_sv')} value={this.state.ma_sv}></input>
                                </div>                       
                                <div className="col-12 form-group">
                                    <label>Tên Sinh Viên</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'ten_sv')} value={this.state.ten_sv}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Giới Tính</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'gioitinh_sv')} value={this.state.gioitinh_sv}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Ngày Sinh</label>
                                    <input className="form-control" type="date" onChange={(e)=>this.hanleChangeInput(e,'ngaysinh_sv')} value={this.state.ngaysinh_sv}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Địa Chỉ</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'diachi_sv')} value={this.state.diachi_sv}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Số Điện Thoại </label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'sdt_sv')} value={this.state.sdt_sv}></input>
                                </div>
                                <div className="col-12 form-group">
                                    <label>Lớp Học</label>
                                    <input className="form-control" type="text" onChange={(e)=>this.hanleChangeInput(e,'ma_lop')} value={this.state.ma_lop}></input>
                                </div>
                          
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_Update}>
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
export default Modal_edit