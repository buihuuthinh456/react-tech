import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {MenuItems} from './MenuItems'
import Button from '../Button'
import './Navbar.css'
function Navbar(){

    const [showMenu,setShowMenu] = useState(false)
    let navigate = useNavigate()
    const handleSignUp = ()=>{
        navigate('/signup')
    }
    return(
        <div className="navbar-container">
            <nav className="navbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={()=>{setShowMenu(!showMenu)}}>
                    <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={showMenu ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key={index} className="nav-menu-item">
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button cName="nav-sign-up-pc" onClick={handleSignUp}>Sign Up</Button>
                
            </nav>
        </div>
    )
}


export default Navbar