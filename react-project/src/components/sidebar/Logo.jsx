import darkLogo from '../../assets/images/tra.png'

const Logo = ({darkTheme}) => {
    return(
        <div className="logo">
            <div className="logo-icon">
                <img 
                src={darkLogo}
                alt="Logo"
                style={{ filter: darkTheme ? 'invert(1)' : 'invert(0)' }} 
                />
            </div>
        </div>
    );
}

export default Logo;