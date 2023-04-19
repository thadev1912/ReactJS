import React,{useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Modal_addnew from './modal_addnew';
import Modal_edit from './modal_edit';
const Sinhvien=()=>
{
    const[sinhvien,setsinhvien] = useState([]);
    const navigate=useNavigate();
    const [refreshKey, setRefreshKey] = useState(0); // hỗ trợ load 1 lần sau khi updatem hoặc add new
    const[isOpenModal_addnew,set_isOpenModal_addnew]=useState(false);
    const[isOpenModal_edit,set_isOpenModal_edit]=useState(false);
    const [data_edit,setdata_edit]=useState({})
    
    useEffect(()=>{
        async function get_list() {           
            if(!localStorage.getItem('token'))
            {
                navigate('/login');
            }
                let response = await axios.get(`http://localhost:8080/sinhvien/get_api`);
                if (response.status === 200)
                 {                  
                        setsinhvien(response.data.data);                  
                       
                }
            }
           
        get_list();
          //console.log(sinhvien);
    },[refreshKey])
    //Open AddNew
    const Addnew = () => {
        set_isOpenModal_addnew(current => !current)
      }
      //Sửa
      const Edit = (data)=>
      {
         
         console.log('mã id cần chỉnh sửa:',data);
         set_isOpenModal_edit(current => !current);
         setdata_edit(data);
      }
  
        //Toggle Modal_AddNew
    const Toggle_Modal_addnew =()=>{
        set_isOpenModal_addnew(current => !current)
   
    }
     //Toggle Modal_Edit
     const Toggle_Modal_edit =()=>{
        set_isOpenModal_edit(current => !current)
   
    }
    //Lưu data
    const Store=async (data)=>{
        console.log('dữ liệu từ con',data);    
       let response = await axios.post('http://localhost:8080/sinhvien/store_api',data);
       //console.log(response.status);
       if(response.status===200)
       {
        console.log('Thêm dữ liệu thành công!!!')      
        Toggle_Modal_addnew();
       setRefreshKey(oldKey => oldKey +1)
    
       }
       else
       {
        console.log('Thất bại!!!')
       }
      
       }
       //Cập nhật
    const Update=async(data)=>{
        console.log('dữ liệu gửi lên update là:',data)
        let response = await axios.put('http://localhost:8080/sinhvien/update_api',data);
        if(response.status===200)
   {
    console.log('Cập nhật dữ liệu thành công!!!')
    Toggle_Modal_edit();
    setRefreshKey(oldKey => oldKey +1)

   }
   else
   {
    console.log('Thất bại!!!')
   }
    }
    //Xóa dữ liệu
 const Delete=async(item)=>{
    console.log('Muốn xóa id:',item)
    let response = await axios.delete('http://localhost:8080/sinhvien/delete_api',{data:{id:item}});
    if(response.status===200)
   {
    console.log('Xóa dữ liệu thành công!!!');   
    setRefreshKey(oldKey => oldKey +1)

   }
   else
   {
    console.log('Thất bại!!!')
   }
 }
        return (
            
           <>
             <Modal_addnew
            isOpen_addnew={isOpenModal_addnew}
            Toggle_Modal_addnew={Toggle_Modal_addnew}
            Store={Store}  //truyền theo kiểu function
            />
            {/* hàm ho tro updatemount được dùng trong {} */}
            {isOpenModal_edit &&
             <Modal_edit
              isOpen_edit={isOpenModal_edit}
              Toggle_Modal_edit={Toggle_Modal_edit}
              data_edit={data_edit}
              Update={Update}
             />
            }
                <div className="card mt-5">
                    <div className="card-header bg-danger text-white">
                        <h3 className="font-weight-bold ">DANH SÁCH SINH VIÊN</h3>
                    </div>
                    <div className="card-body">
                        <div> <button className=" btn btn-primary mb-3" onClick={Addnew}><i
                            className="btn-icon-only icon-edit">Thêm mới</i></button> <br /></div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th>Mã Sinh Viên</th>
                                <th>Họ Tên</th>
                                <th>Giới Tính</th>
                                <th>Ngày Sinh</th>
                                <th>Địa Chỉ</th>
                                <th>Số Điện Thoại</th>
                                <th>Lớp</th>
                                <th>Tùy Chỉnh</th>
                                </tr>
                            </thead>                           
                            <tbody>
                            { sinhvien.map((item,index) => {
                return (
                  
                  <tr key={index}> 

                  <td >{item.ma_sv}</td>
                  <td>{item.ten_sv}</td>
                  <td>{item.gioitinh_sv}</td>
                  <td>{item.ngaysinh_sv}</td>
                  <td>{item.diachi_sv}</td>
                  <td>{item.sdt_sv}</td>
                  <td>{item.ma_lop}</td>
                  <td> <button
          onClick={()=>{Edit(item)}}
             >Sửa</button>||<button
             onClick={()=>{Delete(item.id)}}
            >Xóa</button >   </td>
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

export default Sinhvien


