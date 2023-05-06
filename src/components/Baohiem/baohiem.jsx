import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalAdd from './modalAdd';
import ModalEdit from './modalEdit';
import { wait } from '@testing-library/user-event/dist/utils';
const Baohiem = () => {
    //Delcare states
    const [baohiem, setBaohiem] = useState([]);
    const [errorArrs, setErrorArrs] = useState([]);
    const [selectNoiKham,setselectNoiKham]=useState([]);
    const [selectNoiCap,setselectNoiCap]=useState([]);
    const [selectLoaibhxh,setselectLoaibhxh]=useState([]);
    const [baohiemId,setBaohiemId]=useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); // hỗ trợ load 1 lần sau khi update hoặc add 
    //Use Effect
    useEffect(() => {
        const getList = async () => {
            let res = await axios.get(`http://127.0.0.1:8000/api/baohiem?page=4`);
            if (res) {
                //console.log(res.baohiem);
                setBaohiem(res.data.baohiem.data);
                setselectNoiKham(res.data.noikham);   // không có data vì không có phân trang thôi!!!
                setselectNoiCap(res.data.noicap); 
                setselectLoaibhxh(res.data.loai_bhxh); 
            }
        }
        getList();
    }, [refreshKey])
    console.log('danh sách của bảo hiểm là:',baohiem);
    console.log('danh sách của noikham là:',selectNoiKham);
    //Action
    const handleAdd = () => {
        setIsOpenModal(current => !current);
        setErrorArrs('');
    }
    const Toggle = () => {
        setIsOpenModal(current => !current)
    }
    const ToggleEdit = () => {
        setIsOpenModalEdit(current => !current);
        setErrorArrs('');
    }
    //Store Data
    const Store = async (data) => {
        console.log('dữ liệu được truyền lên là', data);
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/baohiem/store', data);
            Toggle(); 
            setRefreshKey(oldKey => oldKey +1)
            console.log(response.data);
        }

        catch (err) {
            if (err.response) {
                //console.log(err.response.data);
                setErrorArrs(err.response.data.errors);
            }

        }

    }
      //Edit Data
      const handleEdit =async(data)=>
      {        
       
            setIsOpenModalEdit(current => !current);   
            setBaohiemId(data);               
            //console.log('mã id cần chỉnh sửa là là:',data);
        }

      
      //Update Data
      const Update=async(data,id)=>
      {
        console.log('Dữ liệu cần cập nhật là',data);
        try {
            let url=`http://127.0.0.1:8000/api/baohiem/update/${id}`;
            console.log(url);
            let response = await axios.put(url,data);
            ToggleEdit();    
            setRefreshKey(oldKey => oldKey +1)                       
           
        }

        catch (err) {
            if (err.response) {
                //console.log(err.response.data);
                setErrorArrs(err.response.data.errors);
            }

        }

      }
        //Delete Data
        const handleDelete=async(id)=>
        {
          
          try {
              let url=`http://127.0.0.1:8000/api/baohiem/delete/${id}`;
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
                selectNoiKham={selectNoiKham}  
                selectNoiCap={selectNoiCap}  
                selectLoaibhxh={selectLoaibhxh}  
                errorArrs={errorArrs}          
            />
             {isOpenModalEdit &&
            <ModalEdit
            isOpenModalEdit={isOpenModalEdit}
            ToggleEdit={ToggleEdit}
            baohiemId={baohiemId}
            Update={Update} 
            selectNoiKham={selectNoiKham}  
            selectNoiCap={selectNoiCap} 
            selectLoaibhxh={selectLoaibhxh} 
            errorArrs={errorArrs}   
            />
             }
            <div className="card-header bg-danger text-white">
                <h3 className="font-weight-bold ">DANH SÁCH BẢO HIỂM</h3>
            </div>
            <div className="card-body">
                <div> <button className=" btn btn-primary mb-3" ><i
                    className="btn-icon-only icon-edit" onClick={handleAdd}>Thêm mới</i></button> <br /></div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Mã Bảo Hiểm</th>
                            <th>Mã Nhân Viên</th>
                            <th>Loại BHXH</th>
                            <th>Ngày Cấp</th>
                            <th>Ngày Hết Hạn</th>
                            <th>Nơi Cấp</th>
                            <th>Nơi Khám</th>
                            <th>Tiền Đóng BHXH</th>
                            <th>Tùy Chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {baohiem.map((item, index) => {
                            return (

                                <tr key={index}>

                                    <td >{item.ma_bhxh}</td>
                                    <td>{item.ma_nv}</td>
                                    <td >{item.loai_bhxh}</td>
                                    <td>{item.ngaycap}</td>
                                    <td >{item.ngayhethan}</td>
                                    <td>{item.noicap}</td>
                                    <td >{item.noikham}</td>
                                    <td>{item.tiendong_bhxh}</td>
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

export default Baohiem