import "./WebBrowser.css";
import AddressBar from "./AddressBar";
import close from "../imgs/close.png";
import ie from "../imgs/ie.png";
import profilePic from "../imgs/profile_picture.png";

const WebBrowser = () => {
    return (
        <>
            <div className="web-browser">
                {/* Main Container */}
                <div className="browser-body">
                    {/* Top Bar */}
                    <div className="top-bar d-flex flex-row align-content-center justify-content-between">
                        <img
                            className="ie-icon my-1 mx-1"
                            src={ie}
                            alt="ie-icon"
                            height="30"
                        />
                        <img
                            className="close-btn my-1 mx-1"
                            src={close}
                            alt="close-icon"
                            height="30"
                        />
                    </div>
                    {/* Navbar */}
                    <div className="top-section">
                        <AddressBar />
                    </div>
                    <div className="content row">
                        <div className="profile-col col-2">
                            <div className="profile-card d-flex flex-column align-items-center">
                                <img src={profilePic} alt="" />
                                <p>profile.png</p>
                            </div>
                        </div>
                        <div className="content-col col-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vitae ornare purus. Ut laoreet diam ut
                            sapien accumsan, non placerat neque rhoncus. Nam
                            placerat euismod tincidunt. Nulla magna nulla,
                            dictum et aliquet eget, tristique quis ligula.
                            Mauris ut libero sollicitudin, mattis risus id,
                            maximus elit. Suspendisse id magna blandit,
                            hendrerit urna et, aliquam justo. Cras pharetra
                            purus id enim ultrices dictum. Phasellus placerat
                            iaculis consectetur. In ut felis sit amet purus
                            malesuada maximus ac sit amet neque. Pellentesque id
                            lectus blandit leo accumsan fermentum. Maecenas
                            tempus quam massa, vitae eleifend magna semper a.
                            Morbi ut vestibulum mi. Donec eget rhoncus leo.
                            Vivamus non purus lacus. Cras sagittis porttitor
                            dignissim. Quisque vel consectetur libero. Nulla sit
                            amet vulputate ex, vitae vulputate elit. Vestibulum
                            diam turpis, interdum non leo a, consequat ultrices
                            elit. Fusce eget felis ut mauris posuere dictum in
                            sed augue. Sed at leo consequat, bibendum lorem ac,
                            faucibus lectus. Aenean hendrerit, lacus eget
                            faucibus hendrerit, sapien purus pellentesque nunc,
                            at fringilla felis ex quis neque. Sed aliquet luctus
                            purus, quis euismod nisi accumsan eu. Morbi non
                            convallis nibh. Nunc in lacus non nisi dignissim
                            faucibus sed ut ligula. Vestibulum lobortis felis
                            vel neque sollicitudin feugiat.
                        </div>
                        <p className="my-2 mx-2 text-dark">
                            Please wake up, we've been trying to reach you
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebBrowser;
