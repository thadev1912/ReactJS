import Login from '../components/auth/login';
import Redux from '../components/Test/Train_Hook/redux';
import Reducer1 from '../components/Test/Train_Hook/reducer_bt1';
import Reducer2 from '../components/Test/Train_Hook/reducer_bt2';
import Sinhvien from '../components/Sinhvien/sinhvien';
import Phongban from '../components/Phongban/phongban';
import Chucvu from '../components/Chucvu/chucvu';
//Public Routes
const publicRoutes= [
    {   path:"/", component:Login },
    {   path:"/login", component:Login },
    {   path:"/reducer1", component:Reducer1 },
    {   path:"/reducer2", component:Reducer2 },
    {   path:"/redux", component:Redux },
    //Danh mục sinh vien
    {   path:"/sinhvien", component:Sinhvien },
    {   path:"/phongban", component:Phongban },
    {   path:"/chucvu", component:Chucvu },

]
const privateRoutes=[

]
export  {
    publicRoutes,
    privateRoutes
}