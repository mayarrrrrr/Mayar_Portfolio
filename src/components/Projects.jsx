import { Row ,Container,Col,Nav,Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorsharp2 from "../assets/color-sharp2.png"
import projImg1  from "../assets/bakery_logo.jpg"
import projImg2  from "../assets/bakery_logo.jpg"
import projImg3  from "../assets/googledrivelogo.png"

export const Projects = () =>{

    const projects = [
        {
            title: "Bonmaj",
            description:"A client-seller ecommerce website for a bakery shop that showcases the products on sale and allows order making",
            imgUrl: projImg1,
            
        },
        {
            title: "Cloudstore",
            description:"A google drive clone web application that enables creation,management and sharing of files and folders.",
            imgUrl: projImg3,
            
        }
        
    ]
    return(

        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>A collection of projects showcasing my ability to build fullstack applications, implement secure authentication, manage databases, and create responsive user interfaces with modern web technologies!</p>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>

                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">lorem</Tab.Pane>
                        <Tab.Pane eventKey="third">lorem</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}></img>
        </section>
    )
}