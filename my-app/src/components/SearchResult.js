import * as React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {ChakraProvider, SimpleGrid} from "@chakra-ui/react";
import AirbnbCard from "../circuit/CircuitCard";
import AirbnbCardResort from "../resort/ResortCard";
import AirbnbCardHotel from "../hotels/HotelCard";




export default function SearchResult() {
    const {toSearch} = useParams();
    console.log(toSearch)


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // const params = new URLSearchParams(window.location.pathname);
        // let toSearch = params.get("toSearch")
        // console.log("param")
        // console.log(toSearch)
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user){
                let token = user.token
                let request = await fetch(`http://localhost:8888/util/search/${toSearch}`, {
                    headers: {Authorization: 'Bearer ' + token},
                })
                let result = await request.json();
                setData(result);
                console.log(result)
                setLoading(false)
                // let background = document.querySelector(`body`)
                // background.style.background = `url(${skyBackground}) no-repeat center center fixed`
                // background.style.padding = `100%`
            }
        };

        fetcher();
    }, [loading])

    const container={
        marginLeft: "10em",
        marginRight: "10em",
        marginBottom: "5em",

    };

    const handleClick = (elem) => event => {
        // 👇️ refers to the div element
    };

    if (data){
        console.log("data")
        console.log(data)
        return (
            <>
                <div className="circuits" style={container}>

                    <ChakraProvider>
                        <SimpleGrid columns={3} spacing={115}>
                            {data.map((product, index) => {
                                return (
                                    <Link key={`circuit_${index}`} to={`/${product.productType.toLowerCase()}/${product.id}`} style={{maxHeight: 'fit-content'}}>
                                        <div onClick={handleClick(product)} className={"test"} style={{maxHeight: 'fit-content'}}>
                                            {product.productType.toLowerCase()==="circuit" ? (
                                                <AirbnbCard data={product}/>
                                            ) : (
                                                <></>
                                            )}
                                            {product.productType.toLowerCase()==="resort" ? (
                                                <AirbnbCardResort data={product} />
                                            ) : (
                                                <></>
                                            )}
                                            {product.productType.toLowerCase()==="hotel" ? (
                                                <AirbnbCardHotel data={product} />
                                            ) : (
                                                <></>
                                            )}

                                        </div>
                                    </Link>
                                );
                            })}
                        </SimpleGrid>
                    </ChakraProvider>
                    <br></br>
                    <br></br>
                </div>

            </>
        );
    }
    return (
        <>
            <h1>Search results...</h1>
        </>
    );
}
