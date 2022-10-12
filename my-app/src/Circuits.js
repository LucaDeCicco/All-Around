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
            console.log(result);

            setData(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])
    

    // console.log("before return");
    // console.log(data);
    // for(let circuit of data){
    //     console.log(circuit);
    // }
    console.log("ceva");
    console.log(data);

    return <ChakraProvider>
            <AirbnbCard data={data} />
    </ChakraProvider>
}

export default Circuits;
