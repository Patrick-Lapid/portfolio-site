import './AddressBar.css'

const AddressBar = () => {
    return(
        <div className="address-section d-flex flex-row align-content-center">
            <div className="address-text mx-1">Address</div>
            <div className="address-wrapper flex-grow-1">
                <div className="address-bar px-2">
                    localhost:8000/api
                </div>
            </div>
            
        </div>
    )
}

export default AddressBar;