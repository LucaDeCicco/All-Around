// import {Badge, Box} from "@chakra-ui/react";
// import Myimage from "../images/circuits/1/1.jpg";
// import {StarIcon} from "@chakra-ui/icons";
import {useParams} from "react-router-dom";

function ResortDescription({data}) {

    const {id} = useParams();

    // const property = {
    //     // imageUrl: '/src/images/circuits/1/1.jpg',//TODO
    //     imageAlt: 'Rear view of modern home with pool',
    //     days: data.days,
    //     // baths: 2,
    //     title: data.location,
    //     formattedPrice: data.price,
    //     // reviewCount: 34,
    //     rating: 4,
    // }

    // const circuitPointer={
    //     cursor: "pointer"
    // };

    return (
        <>
            <div>TEST DESCRIERE ${id}</div>
        </>
    )
}

export default ResortDescription;