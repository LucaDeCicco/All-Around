import AirbnbCard from './HotelCard'
// import Airb
import {ChakraProvider, Spinner} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import {Link, useParams} from "react-router-dom";
import * as React from "react";
import Button from "react-bootstrap/Button";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Hotels() {
    const {page} = useParams();
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
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                setCurrentUser(user);
            }
            if (user){
                let token = user.token
                if (!page){
                    let request = await fetch(`http://localhost:8888/allMemHotelProducts/${1}`, {
                        headers: {Authorization: 'Bearer ' + token},
                    })
                    let result = await request.json();
                    setData(result);
                    setLoading(false)
                    let requestNextPage = await fetch(`http://localhost:8888/allMemHotelProducts/${2}`, {
                        headers: {Authorization: 'Bearer ' + token},
                    })
                    let resultNextPage = await requestNextPage.json();
                    setDataOfNextPage(resultNextPage);
                    setLoading(false)
                }
                else {
                    let request = await fetch(`http://localhost:8888/allMemHotelProducts/${pageNumber}`, {
                        headers: {Authorization: 'Bearer ' + token},
                    })
                    let result = await request.json();
                    setData(result);
                    setLoading(false)

                    let requestNextPage = await fetch(`http://localhost:8888/allMemHotelProducts/${pageNumber+1}`, {
                        headers: {Authorization: 'Bearer ' + token},
                    })
                    let resultNextPage = await requestNextPage.json();
                    setDataOfNextPage(resultNextPage);
                    setLoading(false)
                }
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
        // ??????? refers to the div element
    };

    const goLogin = () => {
        window.location.replace("/login")
    }

    const goNextPage = () => {
        if (page){
            window.location.replace(`/hotels/${pageNumber+1}`)
        }
        else {
            window.location.replace(`/hotels/2`)
        }
    }

    const goPreviousPage = () => {
        if (page){
            window.location.replace(`/hotels/${pageNumber-1}`)
        }
        else {
            window.location.replace(`/hotels/2`)
        }
    }

    if (currentUser){
        if (data){
            return (
                <>
                    <br />
                <div className="hotels" style={container}>
                    <ChakraProvider>
                        <SimpleGrid columns={3} spacing={115}>
                            {data.map((hotel, index) => {
                                return (
                                    <Link key={`hotel_${index}`} to={`/hotel/${hotel.id}`}>
                                        <div onClick={handleClick(hotel)}>
                                            <AirbnbCard data={hotel}/>
                                        </div>
                                    </Link>
                                );
                            })}
                        </SimpleGrid>
                    </ChakraProvider>
                    <br />
                    <br />
                </div>
                    <div style={{textAlign:"center"}}>
                        <Button variant={"secondary"} style={{display:"inline-block", borderRadius:"15px"}} onClick={goPreviousPage} id={"previousBtn"}><ArrowCircleLeftIcon /> Previous</Button>
                        <div style={{display:"inline-block", minWidth:"1em"}}></div>
                        <Button variant={"secondary"} style={{display:"inline-block", borderRadius:"15px"}} onClick={goNextPage} id={"nextBtn"}>Next <ArrowCircleRightIcon /></Button>
                        <div style={{minHeight:"2em"}}></div>
                    </div>
                </>);
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

export default Hotels;
