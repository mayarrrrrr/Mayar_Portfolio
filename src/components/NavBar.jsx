import { Navbar, Container, NavDropdown,Nav } from "react-bootstrap";
import { useState, useEffect} from "react";
import navIcon1 from "../assets/github_logo.png"
import logo from '../assets/mayar.jpeg'

import navIcon2 from "../assets/LinkedIn_logo_initials.png.webp"
import navIcon3 from "../assets/LinkedIn_logo_initials.png.webp"


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener["scroll",onScroll]

        return ()=> window.removeEventListener["scroll",onScroll]
    },[])

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value)
    }




    return (
        <Navbar expand="lg" className={scrolled?"scrolled":""} >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="navbarimg" alt=""  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>

                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link":"navbar-link"}onClick ={() => onUpdateActiveLink("home")} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link":"navbar-link"}
                        onClick ={() => onUpdateActiveLink("skills")} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link":"navbar-link"}
                        onClick ={() => onUpdateActiveLink("projects")} >Projects</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another Action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>Separated link</NavDropdown.Item>

                        </NavDropdown> */}
                        <span className="navbar-text">
                            <div className="social-icon">
                            <a href="https://github.com/mayarrrrrr"><img src={navIcon1} alt="" /></a>
                <a href="https://www.linkedin.com/in/mayar-akok-05871a2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon2} alt="" /></a>
                

                            </div>
                            
                <button className="vvd"><span>Let’s Connect</span></button>
              
                        </span>
                        

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
         
         
    )
} 