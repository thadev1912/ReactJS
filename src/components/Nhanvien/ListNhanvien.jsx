import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ListNhanvien = () => {
const [nhanvien, setNhanvien] = useState([]);
const navigate=useNavigate();
const [search,setSearch]=useState({
    search:''
});
useEffect(() => {
    const getList = async () => {
        let res = await axios.get(`http://127.0.0.1:8000/api/nhanvien/list`);
        if (res) {
            //console.log('giá trị list nhân viên là:',res.data);
            setNhanvien(res.data.data.data);
           
        }
    }
    getList();
}, []) 
//console.log('giá trị nhân viên',nhanvien);
//console.log('giá trị input Search',search);
//Action
const handleSearch =async(data)=>{
    console.log('giá trị cần tìm kiếm là là:',data);
    let res = await axios.post(`http://127.0.0.1:8000/api/nhanvien/search`,data);
    if(res.status===200)
    {
        //console.log('kết nối thành công!!!');
        //console.log(res.data.data);
        setNhanvien(res.data.data);
        
    }
    else
    {
        console.log('Vui lòng kiểm tra lại');
    }
    
    
}
const handleDetail =async(data)=>
{
   //console.log(data);
   try{
    let res = await axios.get(`http://127.0.0.1:8000/api/nhanvien/detail/${data}`);
   
    let nhanvienId=res.data.data;    
    //let data =123;
         navigate('/detailNhanvien',{state:{nhanvienId:nhanvienId}});
   }
 catch(err)
 {
    console.log(err.res);
 }
   
}
//console.log('giá trị chi tiết nhân viên là:',nhanvienId);
  return (
  
    <div className='card mt-5'>
    <div className="card-header bg-danger text-white ">
                <h3 className="font-weight-bold "> THÔNG KÊ DANH SÁCH NHÂN VIÊN</h3>
               
            </div>
            <div className="card-body">
                <div className='row mb-1'>
                    <div className="col-2"><h5>Tìm kiếm</h5></div>
                    <div className="col-4 float">
            <input class="form-control mr-1  font-italic" type="text"  onChange={(e)=>setSearch(e.target.value)} placeholder='Tìm theo tên...' ></input></div>
            <div className="col-4 float">
            <button class="btn btn-primary" type="submit" onClick={()=>handleSearch({search})}>Tìm Kiếm</button>
            </div>
           
          
            </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Mã Nhân Viên</th>
                            <th>Họ Tên Nhân Viên</th>                            
                            <th>Phòng Ban</th>
                            <th>Chức Vụ </th>                            
                            <th>Số Điện Thoại</th>
                            <th>Trình Trạng Làm Việc</th>
                            <th>Trạng Thái</th>                           
                            <th>Trình Độ</th>
                            <th>Chuyên Ngành</th>
                            <th>Tùy Chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nhanvien.map((item, index) => {
                            return (

                                <tr key={index}>
                                    <td >{item.ma_nv}</td>
                                    <td>{item.hoten_nv}</td>
                                    <td >{item.ten_pb}</td>
                                    <td>{item.ten_cv}</td>                                    
                                    <td >{item.sdt_nv}</td>
                                    <td>{item.tinhtrang}</td>
                                    <td>{item.trangthai_nv}</td>                                   
                                    <td >{item.trinhdo_nv}</td>
                                    <td>{item.chuyennganh_nv}</td>                              
                                    <td> <button className='btn btn-danger' onClick={()=>handleDetail(item.id)}>Chi Tiết</button></td>
                                </tr>)
                        })
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default ListNhanvien