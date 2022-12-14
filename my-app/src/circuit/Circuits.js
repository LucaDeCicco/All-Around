import Airbnb1Card from './CircuitCard'
import {ChakraProvider, Spinner} from '@chakra-ui/react'
import {createContext, useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import {Link, useParams} from "react-router-dom";
import AirbnbCardCircuit from "./CircuitCard";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Pagination from "../components/Pagination"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FilterBar from "../allProducts/FilterBar";

function Circuits(props) {
    const {page, country} = useParams();
    // const {filterCountry} = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [pageNumber, setPageNumber] = useState(parseInt(page));
    const [previousBtn, setPreviousBtn] = useState(null);
    const [nextBtn, setNextBtn] = useState(null);
    const [dataOfNextPage, setDataOfNextPage] = useState(null);


    useEffect(() => {
        let previousBtn = document.getElementById("previousBtn")
        let nextBtn = document.getElementById("nextBtn")
        if (previousBtn){
            setPreviousBtn(previousBtn)
            if (!pageNumber || pageNumber===1){
                previousBtn.style.visibility = "hidden";
            }
            else {
                previousBtn.style.visibility = "show";
            }
        }
        if (nextBtn){
            setNextBtn(nextBtn)
            if(dataOfNextPage){
                if (dataOfNextPage.length===0 || data.length===0){
                    nextBtn.style.visibility = "hidden";
                }
                else {
                    nextBtn.style.visibility = "show"
                }
            }
        }
    },[previousBtn, loading, pageNumber, data, dataOfNextPage])


    useEffect(() => {
        // console.log("ceva")
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setCurrentUser(user);
        }
        const fetcher = async () => {
            if (user){
                let token = user.token
                if (!page){
                    if (props.countryFilterCriteria){
                        window.location.replace(`/circuits/1/${props.countryFilterCriteria}`)
                    }
                    else {
                        let route = `/allMemCircuitProducts`;
                        let request = await fetch(`http://localhost:8888${route}/${1}`, {
                            headers: {Authorization: 'Bearer ' + token},
                        })
                        let result = await request.json();
                        setData(result);
                        setLoading(false)
                        let requestNextPage = await fetch(`http://localhost:8888${route}/${2}`, {
                            headers: {Authorization: 'Bearer ' + token},
                        })
                        let resultNextPage = await requestNextPage.json();
                        setDataOfNextPage(resultNextPage);
                        setLoading(false)
                    }
                }
                else {
                    if (props.countryFilterCriteria){
                        window.location.replace(`/circuits/1/${props.countryFilterCriteria}`)
                    }
                    else {
                        console.log("country")
                        console.log(country)
                        if (country){
                            let route = ``;
                            let request = await fetch(`http://localhost:8888/filteredCircuitsByCountry/${pageNumber}/${country}`, {
                                headers: {Authorization: 'Bearer ' + token},
                            })
                            let result = await request.json();
                            setData(result);
                            setLoading(false)
                            let requestNextPage = await fetch(`http://localhost:8888/filteredCircuitsByCountry/${pageNumber+1}/${country}`, {
                                headers: {Authorization: 'Bearer ' + token},
                            })
                            let resultNextPage = await requestNextPage.json();
                            setDataOfNextPage(resultNextPage);
                            setLoading(false)
                        }
                        else {
                            let route = `/allMemCircuitProducts`;
                            let request = await fetch(`http://localhost:8888${route}/${pageNumber}`, {
                                headers: {Authorization: 'Bearer ' + token},
                            })
                            let result = await request.json();
                            setData(result);
                            setLoading(false)
                            let requestNextPage = await fetch(`http://localhost:8888${route}/${pageNumber+1}`, {
                                headers: {Authorization: 'Bearer ' + token},
                            })
                            let resultNextPage = await requestNextPage.json();
                            setDataOfNextPage(resultNextPage);
                            setLoading(false)
                        }
                    }
                }
            }
        };

        fetcher();
    }, [loading, pageNumber, props.countryFilterCriteria])

    const container={
        marginLeft: "10em",
        marginRight: "10em",
        marginBottom: "5em",

    };

    const handleClick = (elem) => event => {
        // 👇️ refers to the div element
    };


    const goLogin = () => {
        window.location.replace("/login")
    }

    const goNextPage = () => {
        if (page){
            console.log(country)
            if(country){
                window.location.replace(`/circuits/${pageNumber+1}/${country}`)
            }
            else {
                window.location.replace(`/circuits/${pageNumber+1}`)
            }
        }
        else {
            if (country){
                window.location.replace(`/circuits/2/${country}`)
            }
            window.location.replace(`/circuits/2`)
        }
    }
    const goPreviousPage = () => {
        if (page){
            if (country){
                window.location.replace(`/circuits/${pageNumber-1}/${country}`)
            }
            else {
                window.location.replace(`/circuits/${pageNumber-1}`)
            }
        }
        // else {
        //     // if (props.filterCountry){
        //     //     window.location.replace(`/circuits/${props.filterCountry}/2`)
        //     // }
        //     window.location.replace(`/circuits/2`)
        // }
    }

    if (currentUser){
        if (data){
            return (
                <>
                    {/*<h1 style={{textAlign:"center"}}>{props.countryFilterCriteria}</h1>*/}
                    <br></br>
                    <div className="circuits" style={container}>
                        <ChakraProvider>
                            <SimpleGrid columns={3} spacing={115}>
                                {data.map((circuit, index) => {
                                    return (
                                        <Link key={`circuit_${index}`} to={`/circuit/${circuit.id}`} style={{maxHeight: 'fit-content'}}>
                                            <div onClick={handleClick(circuit)} className={"test"} style={{maxHeight: 'fit-content'}}>
                                                <AirbnbCardCircuit data={circuit}/>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </SimpleGrid>
                        </ChakraProvider>
                        <br></br>
                        <br></br>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Button variant={"secondary"} style={{display:"inline-block", borderRadius:"15px"}} onClick={goPreviousPage} id={"previousBtn"}><ArrowCircleLeftIcon /> Previous</Button>
                        <div style={{display:"inline-block", minWidth:"1em"}}></div>
                        <Button variant={"secondary"} style={{display:"inline-block", borderRadius:"15px"}} onClick={goNextPage} id={"nextBtn"}>Next <ArrowCircleRightIcon /></Button>
                        <div style={{minHeight:"2em"}}></div>
                    </div>

                </>
            );
        }
        return (
            <>
                <div style={{textAlign:"center", verticalAlign:"middle", marginTop:"20%"}}>
                    <Spinner style={{height:"3em", width:"3em"}}/>
                    <p>Search results...</p>
                </div>
            </>
        );
    }
    else {
        return (
            <div style={{textAlign:"center", marginTop:"10em"}}>
                <h3>Please Log in!</h3>
                <Button onClick={goLogin}>LogIN</Button>
            </div>
        )
    }


}

export default Circuits;
