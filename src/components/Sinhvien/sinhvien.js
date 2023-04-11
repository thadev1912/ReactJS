import React, { Component } from "react";
import axios from 'axios';
class Sinhvien extends Component {


  // Phần State <==> init state
  constructor(props) {
    super(props);
    this.state = {
      sinhvien: []
    }
  }

  //Phần didmount <=>setState
  async componentDidMount() {
    let response = await axios.get(`http://localhost:8080/sinhvien/get_api`);
    if (response.status === 200) {

      this.setState({
        sinhvien: response.data.data,
      }
      )
      //console.log(this.state.sinhvien);
    }
  }

  //Phần JSX <==> Render
  render() {
   let sinhvien=this.state.sinhvien;
   console.log(sinhvien);
    return (
      <>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Mã Sinh Viên</th>
              <th>Họ Tên</th>
              <th>Giới Tính</th>
              <th>Địa Chỉ</th>
              <th>Số Điện Thoại </th>
              <th>Lớp</th>
              <th>Tùy Chỉnh</th>
            </tr>
          </thead>
          <tbody>
           
              { sinhvien.map((item,index) => {
                return (
                  <tr>
                  <td>{item.ma_sv}</td>
                  <td>{item.ten_sv}</td>
                  <td>{item.gioitinh_sv}</td>
                  <td>{item.diachi_sv}</td>
                  <td>{item.sdt_sv}</td>
                  <td>{item.ma_lop}</td>
                  <td> <button
            onClick=''
            type="button" >Sửa</button>||<button
            onClick=''
            type="button" >Xóa</button>   </td>
                  </tr>)
              })
              }

            

          </tbody>
        </table>
      </>
    )
  }
}
export default Sinhvien