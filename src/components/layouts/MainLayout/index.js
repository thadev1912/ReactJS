import Header from "../Header/index";
import Footer from "../Footer/index";    
function DefaultLayout({children})
{
        return (
            <>
            <Header/>
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