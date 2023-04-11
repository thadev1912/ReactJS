import Trangchu from '../components/Test/Trangchu';
import Chucnang from '../components/Test/Chucnang';
import Lienhe from '../components/Test/Lienhe';
//Public Routes
const publicRoutes= [
    {   path:"/trangchu", component:Trangchu },
    {   path:"/chucnang", component:Chucnang },
    {   path:"/lienhe", component:Lienhe },
]
const privateRoutes=[

]
export  {
    publicRoutes,
    privateRoutes
}