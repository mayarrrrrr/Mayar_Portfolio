import { Container,Col,Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import navIcon1 from "../assets/github_logo.png"
import logo from '../assets/mayar.jpeg'


import navIcon2 from "../assets/LinkedIn_logo_initials.png.webp"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1}/></a>
                        <a href=""><img src={navIcon2}/></a>
                        <p>CopyRight. All Right Reserved</p>
                    </div>
                    
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}