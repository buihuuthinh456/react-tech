
import './HeroSection.css'
import Button from '../Button'
import video from '../../video/video3.mp4'
function HeroSection(){


    return(
        <div className="hero-container" >
            <video className="hero-video" src={video} autoPlay loop muted></video>
            <h1 className="hero-title">Advanture Awaits</h1>
            <p className="hero-text">Technology Is Power</p>
            <div className="hero-btns">
                <Button buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                <Button buttonStyle="btn--primary" buttonSize="btn--large">Watch Video<i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection