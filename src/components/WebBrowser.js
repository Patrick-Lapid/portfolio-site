import './WebBrowser.css'
import NavBar from './Navbar'
import AddressBar from './AddressBar'
import close from '../imgs/close.png'
import ie from '../imgs/ie.png'

const WebBrowser = () => {
    return(
        <>
            <div className="web-browser mt-5">
                {/* Main Container */}
                <div className="browser-body container-md">
                    {/* Top Bar */} 
                    <div className="top-bar container-fluid d-flex flex-row align-content-center justify-content-between">
                        <img className='ie-icon my-1 mx-1' src={ie} alt="ie-icon" height="30" />    
                        <img className='close-btn my-1 mx-1' src={close} alt="close-icon" height="30"/>
                    </div>
                    {/* Navbar */}
                    <div className="top-section">
                        <NavBar />
                        <AddressBar />
                    </div>
                    
                    <p className='my-2 mx-2 text-dark'>Please wake up, we've been trying to reach you</p>
                </div>
            </div>
            
        
        </>
    )
        
}

export default WebBrowser;