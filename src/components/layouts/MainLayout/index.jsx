import Header from "../Header/index";
import Footer from "../Footer/index";   
import Slidebar from "../Slidebar/Slidebar"; 
function DefaultLayout({children})
{
        return (
            <>
            <Header/>
            <Slidebar/>
            <div className="container">           
            
              <div className="content">
                  {children}
              </div>
              <div className="footer">
              <Footer/>
              </div>
            </div>
            </>
        )
}
export default DefaultLayout;