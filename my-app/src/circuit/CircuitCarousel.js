import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExampleCircuit({data}) {

    const carrouselDimensions={
        marginLeft:"20em",
        marginRight:"20em",
    };

    const imageDimensions = {
        height: "25em",
        // width: "50em",
        // align: "center"
    }

    for (const datum of data.images) {
        console.log(datum)
    }

    return (
        <div style={carrouselDimensions}>
        <Carousel fade>
            {(() => {
                const images = [];
                let index = 0;
                for (let image of data.images) {
                    index++;
                    images.push(
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                // className="imageDimensions"
                                src={image}
                                alt="First slide"
                                style={imageDimensions}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                return images;
            })()}
        </Carousel>
        </div>
    );
}

export default CarouselFadeExampleCircuit;