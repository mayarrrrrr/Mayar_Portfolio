import { Row ,Container,Col,Nav,Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorsharp2 from "../assets/color-sharp2.png"
import projImg1  from "../assets/bakery_logo.jpg"
import projImg2  from "../assets/foot.webp"
import projImg3  from "../assets/googledrivelogo.png"
import projImg4 from "../assets/Your paragraph text.png"
import projImg5 from "../assets/profitify.jpeg"


export const Projects = () =>{

    const designProjects = [
    {
        title: "Profitify app design",
        description: "An app design for content creation purposes.",
        imgUrl: projImg5,
        link: "https://www.figma.com/design/2uSdmkOJ5TDVYNNm0PHtO2/Profitify-figma-design?node-id=0-1&t=KOCgOJG6fbiwHoob-1"
    },
    {
        title: " Doodle & Dreams",
        description: "An ecommerce web app design for stationery.",
        imgUrl: projImg4,
        link: "https://www.canva.com/design/DAGjmN1OmOo/hQMAU8h7dSUhlSG-OCTrPg/edit?utm_content=DAGjmN1OmOo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
        title: " Power Walk Poster",
        description: "A poster designed for event publication.",
        imgUrl: projImg2,
        link: "https://www.canva.com/design/DAGj6iskb1I/HhqMYDyfYCPYBhiCZ-FzUw/edit?utm_content=DAGj6iskb1I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    }
    ];

    const devProjects = [
    {
        title: "Bonmaj",
        description: "A client-seller ecommerce website for a bakery shop that showcases the products on sale and allows order making",
        imgUrl: projImg1,
        link: "https://bonmaj.vercel.app/"
    },
    {
        title: "Cloudstore",
        description: "A google drive clone web application that enables creation, management and sharing of files and folders.",
        imgUrl: projImg3
    }
    ];

    return(

        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>A collection of projects showcasing my ability to design web apps/posters,build fullstack applications, implement secure authentication, manage databases, and create responsive user interfaces with modern web technologies!</p>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Web Development </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Cloud Projects</Nav.Link>
                    </Nav.Item>

                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    designProjects.map((project,index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    devProjects.map((project,index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}></img>
        </section>
    )
}