// import logo from './logo.svg';
// import mainPage from "./images/mainPage.jpg";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import AirbnbCard from './Card'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

function Circuits() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/allMemProducts")
            let result = await request.json();
            setData(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])
    

    return <ChakraProvider>
        <AirbnbCard data={data} />
    </ChakraProvider>
}

export default Circuits;
