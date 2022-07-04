import './WebBrowser.css'
import NavBar from './Navbar'
import AddressBar from './AddressBar'
import close from '../imgs/close.png'
import ie from '../imgs/ie.png'
import profilePic from '../imgs/profile_picture.png'

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
                    <div className="content row">
                        <div className="profile-col col-2">
                            <div className="profile-card d-flex flex-column align-items-center">
                                <img src={profilePic} alt=""/>
                                <p>profile.png</p>
                            </div>
                        </div>
                        <div className="content-col col-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ornare purus. Ut laoreet diam ut sapien accumsan, non placerat neque rhoncus. Nam placerat euismod tincidunt. Nulla magna nulla, dictum et aliquet eget, tristique quis ligula. Mauris ut libero sollicitudin, mattis risus id, maximus elit. Suspendisse id magna blandit, hendrerit urna et, aliquam justo. Cras pharetra purus id enim ultrices dictum. Phasellus placerat iaculis consectetur. In ut felis sit amet purus malesuada maximus ac sit amet neque.

Pellentesque id lectus blandit leo accumsan fermentum. Maecenas tempus quam massa, vitae eleifend magna semper a. Morbi ut vestibulum mi. Donec eget rhoncus leo. Vivamus non purus lacus. Cras sagittis porttitor dignissim. Quisque vel consectetur libero. Nulla sit amet vulputate ex, vitae vulputate elit. Vestibulum diam turpis, interdum non leo a, consequat ultrices elit. Fusce eget felis ut mauris posuere dictum in sed augue. Sed at leo consequat, bibendum lorem ac, faucibus lectus. Aenean hendrerit, lacus eget faucibus hendrerit, sapien purus pellentesque nunc, at fringilla felis ex quis neque. Sed aliquet luctus purus, quis euismod nisi accumsan eu. Morbi non convallis nibh. Nunc in lacus non nisi dignissim faucibus sed ut ligula. Vestibulum lobortis felis vel neque sollicitudin feugiat.

Vestibulum vulputate nunc ac dui commodo placerat. Etiam porta hendrerit consectetur. Sed efficitur, metus ac molestie porta, ipsum urna gravida magna, sed pretium purus erat nec turpis. Pellentesque tristique cursus varius. Etiam vehicula pellentesque egestas. Vestibulum hendrerit ac odio sit amet aliquet. Praesent ac sagittis nunc. Sed vestibulum, nisi id congue venenatis, nulla justo porttitor nunc, ut venenatis sem quam vel sem. Sed nec viverra dolor, ac molestie lacus. Vivamus mattis ornare nibh sit amet faucibus. Nam vehicula tempus venenatis. Curabitur nisl elit, lacinia porttitor nunc sed, feugiat posuere erat. In ut dolor auctor est facilisis porttitor.

Integer tristique mi ante, ac finibus orci scelerisque vel. Nam scelerisque leo ultricies sapien dictum, et rhoncus orci fermentum. Praesent finibus ipsum ipsum, ac posuere quam suscipit vel. Praesent rhoncus diam eu quam mollis, in rutrum odio varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac est vitae nisl varius finibus sed vitae augue. Phasellus elit turpis, congue a elit sit amet, suscipit feugiat mi. Nam varius cursus elit, a placerat purus pharetra eu. Sed a ante sed neque laoreet pellentesque et nec turpis. Nam fermentum sapien pulvinar erat rutrum vulputate sit amet nec lacus. Phasellus id arcu ac purus pellentesque dignissim quis vel turpis. Proin malesuada odio at varius feugiat. Phasellus sit amet nulla nec tortor euismod congue vitae fringilla ligula. Fusce laoreet risus cursus accumsan tempus. Duis sagittis, nisl nec viverra ullamcorper, orci mi consequat quam, in interdum dolor diam non purus. Aenean interdum, sem eu lacinia maximus, nibh mauris tincidunt nunc, id pulvinar purus massa vel felis.

Aliquam sed velit feugiat, consectetur lacus sed, mollis arcu. Aliquam erat volutpat. Duis interdum lectus in tincidunt congue. Maecenas et nibh ac elit gravida volutpat. Aliquam tortor nisl, lobortis et viverra eget, efficitur eu sapien. Etiam imperdiet dui in ipsum accumsan faucibus. Ut pellentesque, tortor eu ornare lobortis, mi ante ultrices magna, id varius nunc dolor nec ligula. Duis dignissim eros vel auctor porta. Vestibulum vitae lobortis purus, sed bibendum nisl. Pellentesque diam velit, feugiat vitae turpis ac, consectetur ultrices neque. Curabitur venenatis elit sem, vel aliquam nibh gravida ac. Donec sed auctor est. Sed vel ante in elit sollicitudin iaculis. Aliquam semper elit at scelerisque aliquet. Proin at dolor mi.

</div>
                        <p className='my-2 mx-2 text-dark'>Please wake up, we've been trying to reach you</p>
                    </div>
                </div>
            </div>
            
        
        </>
    )
        
}

export default WebBrowser;