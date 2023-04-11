import Header from "../Header/index";
import Slidebar from "../Slidebar/index";
import Footer from "../Footer/index";  

  
function DefaultLayout({children})
{
        return (
            <>
            <Header/>
            <div className="container">           
              <Slidebar/>
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