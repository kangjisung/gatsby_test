import React, { useState } from "react";
import {Link} from 'gatsby'

import Logo from "../../assets/images/white-logo.png"
import SidebarLogo from "../../assets/images/logo.png"

import InstagramImg1 from "../../assets/images/team/team-img1.jpg"
import InstagramImg2 from "../../assets/images/team/team-img2.jpg"
import InstagramImg3 from "../../assets/images/team/team-img3.jpg"
import InstagramImg4 from "../../assets/images/team/team-img4.jpg"
import InstagramImg5 from "../../assets/images/team/team-img5.jpg"
import InstagramImg6 from "../../assets/images/team/team-img6.jpg"

const NavbarStyleSix = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area dibiz-new-navbar-area">
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                                <h1 style="color:white">PLAYFIN</h1>
                            </Link>

                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarStyleSix;