import './WebBrowser.css'
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
                        <h2 className='my-1 mx-1 text-white'>ERROR</h2>
                        <img className='close-btn my-1 mx-1' src={close} alt="close-icon" height="30"/>
                    </div>
                    {/* Navbar */}
                    <h3 className='my-2 mx-2 text-dark'>Please wake up, we've been trying to reach you</h3>
                </div>
            </div>
            
        
        </>
    )
        
}

export default WebBrowser;