// // import {Badge, Box} from "@chakra-ui/react";
// // import Myimage from "../images/circuits/1/1.jpg";
// // import {StarIcon} from "@chakra-ui/icons";
// // import {useParams} from "react-router-dom";
//
// function   CircuitDescription({data}) {
//
//     // const {id} = useParams();
//
//     // const property = {
//     //     // imageUrl: '/src/images/circuits/1/1.jpg',//TODO
//     //     imageAlt: 'Rear view of modern home with pool',
//     //     days: data.days,
//     //     // baths: 2,
//     //     title: data.location,
//     //     formattedPrice: data.price,
//     //     // reviewCount: 34,
//     //     rating: 4,
//     // }
//
//     // const circuitPointer={
//     //     cursor: "pointer"
//     // };
//
//     return (
//         <>
//             <div>DESCRIERE Circuit {data.description}</div>
//         </>
//     )
// }
//
// export default CircuitDescription;

import Card from 'react-bootstrap/Card';

function CircuitDescription({data}) {
    let countriesData = data.countries
    let countries = ""
    for (const country of countriesData) {
        countries += country
        countries += " "
    }
    return (
        <Card style={{ width: '70%', margin:"auto", marginTop:"5em", marginBottom:"5em" }}>
            <Card.Body>
                <Card.Title>{countries}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.productType}</Card.Subtitle>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CircuitDescription;