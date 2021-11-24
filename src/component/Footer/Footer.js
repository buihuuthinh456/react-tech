
import './Footer.css'
import FooterItems from './FooterItems'
function Footer(){

    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <FooterItems></FooterItems>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-item" >
                    <i className="fab fa-react"></i>
                </div>
                <span className="footer-copyright-item">
                    Copyright @ Bùi Hữu Thịnh
                </span>
                <span className="footer-copyright-item">
                    16/11/2021
                </span>
            </div>
        </div>
    )
}


export default Footer