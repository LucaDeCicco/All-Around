// import logo from './logo.svg';
// import mainPage from "./images/mainPage.jpg";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import AirbnbCard from './Card'
import {ChakraProvider} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'

function Circuits() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/allMemProducts")
            let result = await request.json();
            console.log(result);

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
        console.log(event.currentTarget);
        console.log(elem)
        console.log('div clicked');
    };

    if (data!=null){
        return (
            <div className="circuits" style={container}>

                <ChakraProvider>
                    <SimpleGrid columns={3} spacing={3}>
                    {data.map(circuit => {
                        return (
                            <div onClick={handleClick(circuit)}>
                                <AirbnbCard data={circuit}/>
                            </div>
                        );
                    })}
                    </SimpleGrid>
                </ChakraProvider>
            </div>);
    }
}

export default Circuits;
