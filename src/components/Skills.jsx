import { Container ,Row,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.svg"
import meter2 from "../assets/meter2.svg"
import meter3 from "../assets/meter3.svg"
import colorSharp from "../assets/color-sharp2.png"

export const Skills =()=>{

    const responsive = {
        superLargeDesktop: {
            //
            breakpoint: {max:4000, min: 3000},
            items: 5
        },
        desktop: {
            //
            breakpoint: {max:3000, min: 1024},
            items: 3
        },
        tablet: {
            //
            breakpoint: {max:1024, min: 600},
            items: 2
        },
        mobile: {
            //
            breakpoint: {max:600, min: 0},
            items: 1
        }
    }
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Skilled in developing fullstack web applications with a strong foundation in both frontend and backend technologies, secure authentication methods, and deployment workflows.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>AWS cloud fundamentals</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>Figma/Canva designs </h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt=""/>
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt=""/>
                                <h5>Databases</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>API Integrations</h5>
                            </div>


                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}