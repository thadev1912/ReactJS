import Login from '../components/auth/login';
import Chucnang from '../components/Test/Chucnang';
import Lienhe from '../components/Test/Lienhe';
import Sinhvien from '../components/Sinhvien/sinhvien';

//Public Routes
const publicRoutes= [
    {   path:"/", component:Login },
    {   path:"/login", component:Login },
    {   path:"/chucnang", component:Chucnang },
    {   path:"/lienhe", component:Lienhe },
    //Danh mục sinh vien
    {   path:"/sinhvien", component:Sinhvien },

]
const privateRoutes=[

]
export  {
    publicRoutes,
    privateRoutes
}