// import logo from './logo.svg';
// import mainPage from "./images/mainPage.jpg";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import AirbnbCard from './ResortCard'
import {ChakraProvider} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import {Link} from "react-router-dom";

function Resorts() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/allMemResortProducts")
            let result = await request.json();

            setData(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])

    const container={
        marginLeft: "10em",
        marginRight: "10em",
        marginBottom: "10em",

    };

    // const circuitDiv={
    //     cursor: "pointer"
    // };

    const handleClick = (elem) => event => {
        // 👇️ refers to the div element
    };

    if (data!=null){
        return (
            <div className="circuits" style={container}>
                <ChakraProvider>
                    <SimpleGrid columns={3} spacing={3}>
                        {data.map((resort, index) => {
                            return (
                                <Link key={`resort_${index}`} to={`/resort/${resort.id}`}>
                                    <div onClick={handleClick(resort)}>
                                        <AirbnbCard data={resort}/>
                                    </div>
                                </Link>
                            );
                        })}
                    </SimpleGrid>
                </ChakraProvider>
            </div>);
    }
}

export default Resorts;
