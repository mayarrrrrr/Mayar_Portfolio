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
                    <p>I'm a full-stack developer and aspiring cloud engineer with a passion for clean user interfaces, scalable backend systems, and efficient cloud-ready solutions. Reading technical documentation is part of my routine, keeping me up to date with new features and evolving frameworks. I thrive on solving real-world problems through clean, effective code.</p>
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