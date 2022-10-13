// import logo from './logo.svg';
// import mainPage from "./images/mainPage.jpg";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import AirbnbCard from './Card'
import {ChakraProvider} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import NavBar from "./NavBar";
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
        // margin: "10em",
        // marginwidth: "10em",
        marginLeft: "10em",
        marginRight: "10em",
        marginBottom: "10em"

    };



    if (data!=null){
        return (
            <div className="circuits" style={container}>

                {/*<NavBar />*/}
                <ChakraProvider>
                    <SimpleGrid columns={3} spacing={3}>
                    {data.map(circuit => {
                        return (
                            <>
                                <AirbnbCard data={circuit}/>
                            </>
                        );
                    })}
                    </SimpleGrid>
                </ChakraProvider>
            </div>);
    }
}

export default Circuits;
