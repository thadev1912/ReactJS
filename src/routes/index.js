import Login from '../components/auth/login';
import Redux from '../components/Test/Train_Hook/redux';
import Hopdong from '../components/Hopdong/hopdong';
import Baohiem from '../components/Baohiem/baohiem';
import Sinhvien from '../components/Sinhvien/sinhvien';
import Phongban from '../components/Phongban/phongban';
import Chucvu from '../components/Chucvu/chucvu';
import Nhanvien from '../components/Nhanvien/nhanvien';
import ListNhanvien from '../components/Nhanvien/ListNhanvien';
import DetailNhanvien from '../components/Nhanvien/DetailNhanvien';
//Public Routes
const publicRoutes= [
    {   path:"/", component:Login },
    {   path:"/login", component:Login },
    {   path:"/hopdong", component:Hopdong },
    {   path:"/redux", component:Redux },
    //Danh mục sinh vien
    {   path:"/sinhvien", component:Sinhvien },
    {   path:"/phongban", component:Phongban },
    {   path:"/chucvu", component:Chucvu },
    {   path:"/baohiem", component:Baohiem },
    {   path:"/nhanvien", component:Nhanvien },
    {   path:"/listNhanvien", component:ListNhanvien },
    {   path:"/detailNhanvien", component:DetailNhanvien },

]
const privateRoutes=[

]
export  {
    publicRoutes,
    privateRoutes
}