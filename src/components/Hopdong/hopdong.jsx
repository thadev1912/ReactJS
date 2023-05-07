import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalAdd from './modalAdd';
import ModalEdit from './modalEdit';
import moment from 'moment/moment';
import CurrencyFormat from 'react-currency-format';
const Hopdong = () => {
    //Delcare states
    const [hopdong, setHopdong] = useState([]);
    const [errorArrs, setErrorArrs] = useState([]);
    const [selectLoaihd,setSelectLoaihd]=useState([]);
    const [selectTinhtrang,setSelectTinhtrang]=useState([]);
    const [hopdongId,setHopdongId]=useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); // hỗ trợ load 1 lần sau khi update hoặc add 
    //Use Effect
    useEffect(() => {
        const getList = async () => {
            let res = await axios.get(`http://127.0.0.1:8000/api/hopdong?page=4`);
            if (res) {
                //console.log(res.data);
                setHopdong(res.data.hopdong.data);
                setSelectLoaihd(res.data.loaihd);
                setSelectTinhtrang(res.data.tinhtrang);
            }
        }
        getList();
    }, [refreshKey])
    //console.log('dữ liệu api hợp đồng là',hopdong)
    //console.log('dữ liệu api loại hợp đồng là',selectLoaihd)
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
            let response = await axios.post('http://127.0.0.1:8000/api/hopdong/store', data);
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
            setHopdongId(data);               
            //console.log('mã id cần chỉnh sửa là là:',data);
        }

      
      //Update Data
      const Update=async(data,id)=>
      {
        console.log('Dữ liệu cần cập nhật là',data);
        try {
            let url=`http://127.0.0.1:8000/api/hopdong/update/${id}`;
            console.log(url);
            let response = await axios.put(url,data);
            ToggleEdit();    
            setRefreshKey(oldKey => oldKey +1)                       
           
        }

        catch (err) {
            if (err.response) {
                console.log(err.response.data.errors);
                setErrorArrs(err.response.data.errors);
            }

        }

      }
        //Delete Data
        const handleDelete=async(id)=>
        {
          
          try {
              let url=`http://127.0.0.1:8000/api/hopdong/delete/${id}`;
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
                selectLoaihd={selectLoaihd}  
                selectTinhtrang={selectTinhtrang} 
                errorArrs={errorArrs}                  
            />
             {isOpenModalEdit &&
            <ModalEdit
            isOpenModalEdit={isOpenModalEdit}
            ToggleEdit={ToggleEdit}
            hopdongId={hopdongId}
            Update={Update} 
            selectLoaihd={selectLoaihd}  
            selectTinhtrang={selectTinhtrang}  
            errorArrs={errorArrs}    
            />
             }
            <div className="card-header bg-danger text-white">
                <h3 className="font-weight-bold ">DANH SÁCH HỢP ĐỒNG</h3>
            </div>
            <div className="card-body">
                <div> <button className=" btn btn-primary mb-3" ><i
                    className="btn-icon-only icon-edit" onClick={handleAdd}>Thêm mới</i></button> <br /></div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Mã Hợp Đồng</th>
                            <th>Mã Nhân Viên</th>
                            <th>Hệ Số Lương</th>
                            <th>Ngày Vào </th>
                            <th>Tình Trạng</th>
                            <th>Loại Hợp Đồng</th>
                            <th>Phụ Cấp</th>
                            <th>Ngày Mặc Định</th>
                            <th>Mã Nghỉ Việc</th>                          
                            <th>Tùy Chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hopdong.map((item, index) => {
                            return (

                                <tr key={index}>

                                    <td >{item.ma_hd}</td>
                                    <td>{item.ma_nv}</td>
                                    <td >{item.heso_luong}</td>
                                    <td>{moment(item.ngayvao).format('DD/MM/YYYY')}</td>                                    
                                    <td>{item.tinhtrang}</td>
                                    <td >{item.loai_hd}</td>
                                    {/* <td>{item.phu_cap}</td> */}
                                    <CurrencyFormat value={item.phu_cap} displayType={'text'} thousandSeparator={true}  renderText={value => <td>{value} VNĐ</td>} />
                                    <td>{item.ngay_macdinh}</td>
                                    <td >{item.ngay_nghiviec}</td>                                   
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

export default Hopdong