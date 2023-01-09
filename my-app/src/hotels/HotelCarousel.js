import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExampleHotel({data}) {

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
                {(() => {
                    const images = [];
                    let index = 0;
                    for (let image of data.images) {
                        index++;
                        images.push(
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                    style={imageDimensions}
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    return images;
                })()}
            </Carousel>
        </div>
    );
}

export default CarouselFadeExampleHotel;