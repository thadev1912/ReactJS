import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalAdd from './modalAdd';
import ModalEdit from './modalEdit';
const Phongban = () => {
    //Delcare states
    const [phongban, setPhongban] = useState([]);
    const [errorArrs, setErrorArrs] = useState([]);
    const [phongbanId,setPhongbanId]=useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); // hỗ trợ load 1 lần sau khi update hoặc add 
    //Use Effect
    useEffect(() => {
        const getList = async () => {
            let res = await axios.get(`http://127.0.0.1:8000/api/phongban`);
            if (res) {
                console.log(res.data);
                setPhongban(res.data.data);
            }
        }
        getList();
    }, [refreshKey])
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
            let response = await axios.post('http://127.0.0.1:8000/api/phongban/store', data);
            Toggle(); 
            setRefreshKey(oldKey => oldKey +1)
            //console.log(response.data);
        }

        catch (err) {
            if (err.response) {
                //console.log(err.response.data);
                setErrorArrs(err.response.data);

            }

        }

    }
      //Edit Data
      const handleEdit =async(data)=>
      {        
       
            setIsOpenModalEdit(current => !current);   
            setPhongbanId(data);               
            //console.log('mã id cần chỉnh sửa là là:',data);
        }

      
      //Update Data
      const Update=async(data,id)=>
      {
        console.log('Dữ liệu cần cập nhật là',data);
        try {
            let url=`http://127.0.0.1:8000/api/phongban/update/${id}`;
            console.log(url);
            let response = await axios.put(url,data);
            ToggleEdit();    
            setRefreshKey(oldKey => oldKey +1)                       
           
        }

        catch (err) {
            if (err.response) {
                //console.log(err.response.data);
                setErrorArrs(err.response.data);
            }

        }

      }
        //Delete Data
        const handleDelete=async(id)=>
        {
          
          try {
              let url=`http://127.0.0.1:8000/api/phongban/delete/${id}`;
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
                errorArrs={errorArrs}             
            />
             {isOpenModalEdit &&
            <ModalEdit
            isOpenModalEdit={isOpenModalEdit}
            ToggleEdit={ToggleEdit}
            phongbanId={phongbanId}
            Update={Update} 
            errorArrs={errorArrs}    
            />
             }
            <div className="card-header bg-danger text-white">
                <h3 className="font-weight-bold ">DANH SÁCH PHÒNG BAN</h3>
            </div>
            <div className="card-body">
                <div> <button className=" btn btn-primary mb-3" ><i
                    className="btn-icon-only icon-edit" onClick={handleAdd}>Thêm mới</i></button> <br /></div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Phòng Ban</th>
                            <th>Tùy Chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phongban.map((item, index) => {
                            return (

                                <tr key={index}>

                                    <td >{item.ma_pb}</td>
                                    <td>{item.ten_pb}</td>
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

export default Phongban