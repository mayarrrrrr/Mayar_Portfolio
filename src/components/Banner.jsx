import { Container ,Row,Col} from "react-bootstrap"
// import {ArrowRightCircle} from 'bootstrap-icons'
import headerImg from "../assets/mayarr.jpeg"
import {useState,useEffect} from "react"

export const Banner = ()=>{

    const [loopNum,setLoopNum] = useState(0)
    const [isDeleting,setIsDeleting] = useState(false)
    const toRotate = ['Full stack Developer','Frontend Developer','Backend Developer']
    const [text,setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick()

        },delta)
        return ()=>{clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1): fullText.substring(0,text.length + 1)

        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText == ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Mayar, `}<span className="wrap">a {text}</span></h1>
                    <p>As a fullstack developer, I’ve particularly been drawn to  not only seamless user interfaces but also architecture of backend systems. Reading through tech documentation has been my new norm,getting updated on new features and understanding evolving frameworks.  I thrive on solving real-world problems through clean, efficient code.</p>
                    <button onClick={()=> console.log("connect")}>Let’s connect<i className="bi bi-arrow-right-circle"></i>
                    </button>
                    </Col>
                    <Col xs={12} md={5} xl={5} >
                    <img src={headerImg} alt="header Img"/>
                    </Col>

                </Row>
            </Container>

t
        </section>
    )

}