import React , {useState} from "react";
import Styles from './Navbar.module.css';
import menuIcon from '/assets/nav/menuIcon.png'
import closeIcon from '/assets/nav/closeIcon.png'


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={Styles.navbar}>
            <a href="/" className={Styles.title}>Portfolio</a>
            <div className={Styles.menu}>
                <img className={Styles.menuBtn} 
                    src={menuOpen ? closeIcon:menuIcon} alt="menu-btn"
                    onClick={()=>setMenuOpen(!menuOpen)}
                />
                <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuopen}`}
                    onClick={()=>setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}