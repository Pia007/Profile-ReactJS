import propic from '../images/propic.jpg';

function Header() {
    return (
        <div>
            <header className="c-header">
                <div className="img-holder">
                    <img className="pic" 
                    src={propic} alt="pic" 
                    border="0" width="275"  
                    height="275" 
                    
                /> 
                </div>  
            </header>  
        </div>
    )
}

export default Header
