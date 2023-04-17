import React from "react";
import axios from 'axios';
import MyModal from '../Helper/modal';
import Modal_edit from '../Helper/modal_edit';
class Sinhvien extends React.Component {
    // Phần State <==> init state
    constructor(props) {
        super(props);
        this.state = {
            sinhvien: [],
            isOpenModal:false,
            isOpenModal_edit:false,
            edit_id:{}, // tạo object state cho việc nhận id sửa
                

        }
    }
    //Phần didmount <=>setState
    async componentDidMount() {
        this.get_list();
        }
        get_list =async ()=>
        {
            let response = await axios.get(`http://localhost:8080/sinhvien/get_api`);
            if (response.status === 200) {
    
                this.setState({
                    sinhvien: response.data.data,
                }
                )
                //console.log(this.state.sinhvien);
        }
    }
    Addnew =() =>
    {
        this.setState({
            isOpenModal:true
        })
    }
    Edit = (data)=>
    {
       
       //console.log('mã id cần chỉnh sửa:',data);
        this.setState({
            isOpenModal_edit:true,
            edit_id:data, // set lại state cho edit_id
        })
    }

    //Toggle Modal_AddNew
    Toggle_Modal =()=>{
        this.setState({
            isOpenModal:!this.state.isOpenModal, //xét giá trị với giá trị đang có
            // bonus: isOpenModal(setState==='dark'? 'light':'dark' )  nghich đảo giá trị 
        })
   
    }
     //Toggle Modal_Edit
     Toggle_Modal_edit =()=>{
        this.setState({
            isOpenModal_edit:!this.state.isOpenModal_edit, //xét giá trị với giá trị đang có
            // bonus: isOpenModal(setState==='dark'? 'light':'dark' )  nghich đảo giá trị 
        })
   
    }
    //Lưu data
     Store=async (data)=>{
    console.log('dữ liệu từ con',data);    
   let response = await axios.post('http://localhost:8080/sinhvien/store_api',data);
   //console.log(response.status);
   if(response.status===200)
   {
    console.log('Thêm dữ liệu thành công!!!')
    this.Toggle_Modal();
    this.get_list();

   }
   else
   {
    console.log('Thất bại!!!')
   }
   }
   //Cập nhật
    Update=async(data)=>{
        console.log('dữ liệu gửi lên update là:',data)
        let response = await axios.put('http://localhost:8080/sinhvien/update_api',data);
        if(response.status===200)
   {
    console.log('Cập nhật dữ liệu thành công!!!')
    this.Toggle_Modal_edit();
    this.get_list();

   }
   else
   {
    console.log('Thất bại!!!')
   }
    }
//Xóa dữ liệu
 Delete=async(item)=>{
    console.log('Muốn xóa id:',item)
    let response = await axios.delete('http://localhost:8080/sinhvien/delete_api',{data:{id:item}});
    if(response.status===200)
   {
    console.log('Xóa dữ liệu thành công!!!');   
    this.get_list();

   }
   else
   {
    console.log('Thất bại!!!')
   }
 }
    render() {
        let sinhvien = this.state.sinhvien;
        console.log(sinhvien);
        return (
            <>
            <MyModal
            isOpen={this.state.isOpenModal}
            Toggle_Modal={this.Toggle_Modal}
            Store={this.Store}
            />
            {/* hàm ho tro updatemount được dùng trong {} */}
           {this.state.isOpenModal_edit &&
            <Modal_edit
            isOpen_edit={this.state.isOpenModal_edit}
            Toggle_Modal_edit={this.Toggle_Modal_edit}   
            Edit_id={this.state.edit_id}
            Update={this.Update}
                
            />
           }  
                <div className="card mt-5">
                    <div class="card-header bg-danger text-white">
                        <h3 class="font-weight-bold ">DANH SÁCH SINH VIÊN</h3>
                    </div>
                    <div className="card-body">
                        <div> <button class=" btn btn-primary mb-3" onClick={()=>this.Addnew()}><i
                            class="btn-icon-only icon-edit">Thêm mới</i></button> <br /></div>
                        <table className="table table-bordered">
                            <thead>
                                <th>Mã Sinh Viên</th>
                                <th>Họ Tên</th>
                                <th>Giới Tính</th>
                                <th>Ngày Sinh</th>
                                <th>Địa Chỉ</th>
                                <th>Số Điện Thoại</th>
                                <th>Lớp</th>
                                <th>Tùy Chỉnh</th>
                            </thead>
                            <tbody>
                            { sinhvien.map((item,index) => {
                return (
                  
                  <tr> 
                              
                  <td>{item.ma_sv}</td>
                  <td>{item.ten_sv}</td>
                  <td>{item.gioitinh_sv}</td>
                  <td>{item.ngaysinh_sv}</td>
                  <td>{item.diachi_sv}</td>
                  <td>{item.sdt_sv}</td>
                  <td>{item.ma_lop}</td>
                  <td> <button
            onClick={()=>this.Edit(item)}
             >Sửa</button>||<button
            onClick={()=>this.Delete(item.id)}
            >Xóa</button>   </td>
                  </tr>)
              })
              }
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }
}
export default Sinhvien