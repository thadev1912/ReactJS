import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
const DetailNhanvien = () => {
    const { state } = useLocation();
    const { nhanvienId } = state || {};
    console.log('giá trị navigate là:', state);
    return (
        <div className='card mt-5'>
            <div class="card-header bg-info text-center ">
                <div class="row">
                    <div class="col">
                        <h1 class="btn text-light"> CHI TIẾT THÔNG TIN KHÁCH HÀNG</h1>
                    </div>
                </div>
            </div>

            <div className="card-body">
                {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Mã Nhân Viên</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.ma_nv}></input>

                    </div>
                    <div class="col">
                        <label>Họ Tên Nhân Viên</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.hoten_nv}></input>

                    </div>
                </div>
                  {/* end row */}
                   {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Địa Chỉ </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.diachi_nv}></input>

                    </div>
                    <div class="col">
                        <label>Giới Tính</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.gioitinh_nv}></input>

                    </div>
                </div>
                 {/* end row */}
                  {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Ngày Sinh </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={moment(nhanvienId.ngaysinh_nv).format('DD/MM/YYYY')}></input>

                    </div>
                    <div class="col">
                        <label>Sổ Điện Thoại</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.sdt_nv}></input>

                    </div>
                </div>
                 {/* end row */}
                  {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Công Cước Công Dân </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.cccd_nv}></input>

                    </div>
                    <div class="col">
                        <label>Tình Trạng Hôn Nhân</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.trangthai_nv}></input>

                    </div>
                </div>
                 {/* end row */}
                  {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Phòng Ban </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.ten_pb}></input>

                    </div>
                    <div class="col">
                        <label>Chức Vụ</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.ten_cv}></input>

                    </div>
                </div>
                 {/* end row */}
                  {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Trình Độ  </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.trinhdo_nv}></input>

                    </div>
                    <div class="col">
                        <label>Chuyên Ngành</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.chuyennganh_nv}></input>

                    </div>
                </div>
                 {/* end row */}
                  {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Mã Hợp Đồng  </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.ma_hd}></input>

                    </div>
                    <div class="col">
                        <label>Ngày Vào</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={moment(nhanvienId.ngayvao).format('DD/MM/YYYY')}></input>

                    </div>
                </div>
                 {/* end row */}
                   {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Tình Trạng Hoạt Động  </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.tinhtrang}></input>

                    </div>
                    <div class="col">
                        <label>Loại Hợp Đồng</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.loai_hd}></input>

                    </div>
                </div>
                 {/* end row */}
                   {/* start row */}
                <div class="row">
                    <div class="col">
                        <label>Mã Bảo Hiểm Xã Hội  </label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.ma_bhxh}></input>

                    </div>
                    <div class="col">
                        <label>Loại Bảo Hiểm Xã Hội</label>
                        <input id="current-pass-control" name="txt_hoten_kh" class="form-control" type="text" value={nhanvienId.loai_bhxh}></input>

                    </div>
                </div>
                 {/* end row */}
            </div>
            <Link className="btn btn-danger" to="/listNhanvien">Quay Lại</Link>
        </div>
    )
}

export default DetailNhanvien