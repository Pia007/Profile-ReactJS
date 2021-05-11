import pic from '../images/pic.jpg';

function Header() {
    return (
        <div>
            <header className="c-header">
                <div className="img-holder">
                    <img className="pic" 
                    src={pic} alt="pic" 
                    border="0" width="300"  
                    height="300" 
                    
                /> 
                </div>  
            </header>  
        </div>
    )
}

export default Header
