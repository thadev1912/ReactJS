import Trangchu from '../components/Test/Trangchu';
import Chucnang from '../components/Test/Chucnang';
import Lienhe from '../components/Test/Lienhe';
import Sinhvien from '../components/Sinhvien/sinhvien';

//Public Routes
const publicRoutes= [
    {   path:"/", component:Trangchu },
    {   path:"/trangchu", component:Trangchu },
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