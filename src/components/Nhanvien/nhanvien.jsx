import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalAdd from './modalAdd';
import ModalEdit from './modalEdit';
const Nhanvien = () => {
    //Delcare states
    const [nhanvien, setNhanvien] = useState([]);
    const [selectTrinhdo,setSelectTrinhdo]=useState([]);
    const [selectTrangthai,setSelectTrangthai]=useState([]);
    const [selectPhongban,setSelectPhongban]=useState([]);
    const [selectChucvu,setSelectChucvu]=useState([]);
    const [nhanvienId,setNhanvienId]=useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); // hỗ trợ load 1 lần sau khi update hoặc add 
    //Use Effect
    useEffect(() => {
        const getList = async () => {
            let res = await axios.get(`http://127.0.0.1:8000/api/nhanvien?page=2`);
            if (res) {
                console.log(res.data);
                setNhanvien(res.data.nhanvien.data);
                setSelectTrangthai(res.data.trangthai);
                setSelectTrinhdo(res.data.trinhdo);
                setSelectPhongban(res.data.phongban);
                setSelectChucvu(res.data.chucvu);
            }
        }
        getList();
    }, [refreshKey]) 
    console.log('giá trị select nhân viên nhận được là',nhanvien);
    console.log('giá trị select phongban nhận được là',selectPhongban);
    //Action
    const handleAdd = () => {
        setIsOpenModal(current => !current)
    }
    const Toggle = () => {
        setIsOpenModal(current => !current)
    }
    const ToggleEdit = () => {
        setIsOpenModalEdit(current => !current)
    }
    //Store Data
    const Store = async (data) => {
        console.log('dữ liệu được truyền lên là', data);
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/nhanvien/store', data);
            Toggle(); 
            setRefreshKey(oldKey => oldKey +1)
            console.log(response.data);
        }

        catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }

        }

    }
      //Edit Data
      const handleEdit =async(data)=>
      {        
       
            setIsOpenModalEdit(current => !current);   
            setNhanvienId(data);               
            //console.log('mã id cần chỉnh sửa là là:',data);
        }

      
      //Update Data
      const Update=async(data,id)=>
      {
        console.log('Dữ liệu cần cập nhật là',data);
        try {
            let url=`http://127.0.0.1:8000/api/nhanvien/update/${id}`;
            console.log(url);
            let response = await axios.put(url,data);
            ToggleEdit();    
            setRefreshKey(oldKey => oldKey +1)                       
           
        }

        catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }

        }

      }
        //Delete Data
        const handleDelete=async(id)=>
        {
          
          try {
              let url=`http://127.0.0.1:8000/api/nhanvien/delete/${id}`;
              console.log(url);
              let response = await axios.delete(url);               
              setRefreshKey(oldKey => oldKey +1)                       
             
          }
  
          catch (err) {
              if (err.response) {
                  console.log(err.response.data);
              }
  
          }
  
        }
    return (

        <div className="card mt-5">
            <ModalAdd
                isOpenModal={isOpenModal}
                Toggle={Toggle}   //truyền sate của nó nhe
                Store={Store}    
                selectTrangthai={selectTrangthai}
                selectTrinhdo={selectTrinhdo} 
                selectChucvu={selectChucvu}
                selectPhongban={selectPhongban}              
            />
             {isOpenModalEdit &&
            <ModalEdit
            isOpenModalEdit={isOpenModalEdit}
            ToggleEdit={ToggleEdit}
            nhanvienId={nhanvienId}
            Update={Update} 
            selectTrangthai={selectTrangthai}
            selectTrinhdo={selectTrinhdo}      
            selectChucvu={selectChucvu}
            selectPhongban={selectPhongban}            
            />
             }
            <div className="card-header bg-danger text-white">
                <h3 className="font-weight-bold ">DANH SÁCH NHÂN VIÊN</h3>
            </div>
            <div className="card-body">
                <div> <button className=" btn btn-primary mb-3" ><i
                    className="btn-icon-only icon-edit" onClick={handleAdd}>Thêm mới</i></button> <br /></div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Mã Nhân Viên</th>
                            <th>Họ Tên Nhân Viên</th>
                            <th>Địa Chỉ Nhân Viên</th>
                            <th>Giới Tính </th>
                            <th>Ngày Sinh</th>
                            <th>Số Điện Thoại</th>
                            <th>Công Cước Công Dân</th>
                            <th>Trạng Thái</th>
                            <th>Mã Phòng Ban</th>
                            <th>Mã Chức Vụ</th>
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
                                    <td >{item.diachi_nv}</td>
                                    <td>{item.gioitinh_nv}</td>
                                    <td>{item.ngaysinh_nv}</td>
                                    <td >{item.sdt_nv}</td>
                                    <td>{item.cccd_nv}</td>
                                    <td>{item.trangthai_nv}</td>
                                    <td >{item.ma_pb}</td>
                                    <td>{item.ma_cv}</td>
                                    <td >{item.trinhdo_nv}</td>
                                    <td>{item.chuyennganh_nv}</td>                              
                                    <td> <button onClick={()=>handleEdit(item)}>Sửa</button>||<button onClick={()=>handleDelete(item.id)}>Xóa</button ></td>
                                </tr>)
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Nhanvien