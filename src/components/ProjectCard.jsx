import { Col } from "react-bootstrap"


export const ProjectCard = ({title,description,imgUrl,link}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                
                <div className="proj-txtx">
                    <h1>{title}</h1>
                    <span>{description}</span>
                    {link && (
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                <button>View</button>
                                </a>
                            )}
                </div>
            </div>
        </Col>
    )
}