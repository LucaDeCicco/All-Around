import Carousel from 'react-bootstrap/Carousel';
import Myimage1 from "../images/circuits/1/2.jpg";
import Myimage2 from "../images/circuits/1/3.jpg";
import Myimage3 from "../images/circuits/1/4.jpg";
import {useParams} from "react-router-dom";

function CarouselFadeExampleResort() {
    const {id} = useParams();

    const carrouselDimensions={
        marginLeft:"20em",
        marginRight:"20em",
    };

    const imageDimensions = {
        height: "25em",
        // width: "50em",
        // align: "center"
    }
    return (
        <div style={carrouselDimensions}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // className="imageDimensions"
                        src={Myimage1}
                        alt="First slide"
                        style={imageDimensions}
                    />
                    {/*<img src={Myimage1}/>*/}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // className="imageDimensions"
                        src={Myimage2}
                        alt="Second slide"
                        style={imageDimensions}
                    />
                    {/*<img src={Myimage2}/>*/}

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // className="imageDimensions"
                        src={Myimage3}
                        alt="Third slide"
                        style={imageDimensions}
                    />
                    {/*<img src={Myimage3}/>*/}

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselFadeExampleResort;