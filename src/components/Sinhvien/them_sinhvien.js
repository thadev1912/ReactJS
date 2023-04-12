import React from "react";
class Them_sinhvien extends React.Component {
    render() {
        return (


            <div className="card mt-5">
                <div classNameName="card-header bg-danger text-white">
                    <h3 className="font-weight-bold ">THÊM SINH VIÊN</h3>
                </div>
                <div className="card-body">
                    <form action="/sinhvien/luu" method="post">

                        <div className="row">
                            <div className="col-6">
                                <label>MÃ SINH VIÊN</label>
                                <input name="txt_ma_sv" id="txt_ma_sv" className="form-control" type="text" value="" />

                            </div>
                            <div className="col-6">
                                <label>TÊN SINH VIÊN</label>
                                <input name="txt_ten_sv" id="txt_ten_sv" className="form-control" type="text" value="" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>GIỚI TÍNH</label>
                                <input name="txt_ma_sv" id="txt_ma_sv" className="form-control" type="text" value="" />

                            </div>
                            <div className="col-6">
                                <label>ĐỊA CHỈ</label>
                                <input name="txt_ten_sv" id="txt_ten_sv" className="form-control" type="text" value="" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>SỐ ĐIỆN THOẠI</label>
                                <input name="txt_ma_sv" id="txt_ma_sv" className="form-control" type="text" value="" />

                            </div>
                            <div className="col-6">
                                <label>LỚP HỌC</label>
                                <input name="txt_ten_sv" id="txt_ten_sv" className="form-control" type="text" value="" />

                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className="card-header text-white">
                    <button id="submit-button" type="submit" className="btn btn-warning" name="action" value="CONFIRM"><i className="icon-save"></i>Lưu Lại</button>
                    <a href="/tintucdatxanh" className="btn btn-danger"><i className="icon-remove"></i>Về Trang Chủ</a>
                </div>


            </div>




        )
    }
}
export default Them_sinhvien
