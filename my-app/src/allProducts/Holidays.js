import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ChakraProvider, SimpleGrid, Spinner} from "@chakra-ui/react";
import AirbnbCardCircuit from "../circuit/CircuitCard";
import Button from "react-bootstrap/Button";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import * as React from "react";
import AirbnbCardHotel from "../hotels/HotelCard";
import AirbnbCardResort from "../resort/ResortCard";

function Holidays(props){
    const {page} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [pageNumber, setPageNumber] = useState(parseInt(page));
    const [previousBtn, setPreviousBtn] = useState(null);
    const [nextBtn, setNextBtn] = useState(null);
    const [dataOfNextPage, setDataOfNextPage] = useState(null);

    const paginationHandler =()=> {
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
                if (dataOfNextPage.length===0 || data.length===0 ||data.length>20 || props.filters!==1){
                    nextBtn.style.visibility = "hidden";
                }
                else {
                    nextBtn.style.visibility = "show";
                }
            }
        }
    }

    useEffect(() => {
        paginationHandler()
    },[previousBtn, loading, pageNumber, data, dataOfNextPage])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setCurrentUser(user);
        }
        const fetcher = async () => {
            if (user){
                let token = user.token
                if (!page){
                        if(props.filters===2||props.filters===3){
                            let request = await fetch(`http://localhost:8888/allFilteredProducts`, {
                                method: "POST",
                                headers: {"Content-Type": "application/json",
                                    "Access-Control-Allow-Origin": "http://localhost:300",
                                    Authorization: 'Bearer ' + token
                                },
                                body: JSON.stringify({country:props.countryFilterCriteria, productType:props.typeFilterCriteria})
                            })
                            let result = await request.json();
                            setData(result);
                            setLoading(false)
                        }
                        else {
                            let route = `/allMemProducts`;
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
                    let route = `/allMemProducts`;
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
        };
        fetcher();
    }, [loading, pageNumber, props.filters])

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
                window.location.replace(`/holidays/${pageNumber+1}`)
        }
        else {
            window.location.replace(`/holidays/2`)
        }
    }

    const goPreviousPage = () => {
        if (page){
            if (page==="2"){
                window.location.replace("/holidays")
            }
            else {
                window.location.replace(`/holidays/${pageNumber-1}`)
            }
        }
    }

    if (currentUser){
        if (data){
            return (
                <>
                    <br></br>
                    <div className="holidays" style={container}>
                        <ChakraProvider>
                            <SimpleGrid columns={3} spacing={115}>
                                {data.map((product, index) => {
                                    return (
                                        <Link key={`product_${index}`} to={`/${product.productType.toLowerCase()}/${product.id}`} style={{maxHeight: 'fit-content'}}>
                                            <div onClick={handleClick(product)} className={"test"} style={{maxHeight: 'fit-content'}}>
                                                {product.productType==="Circuit" ? (
                                                    <AirbnbCardCircuit data={product}/>
                                                ) : (
                                                    <></>
                                                )}
                                                {product.productType==="Resort" ? (
                                                    <AirbnbCardResort data={product}/>
                                                ) : (
                                                    <></>
                                                )}{product.productType==="Hotel" ? (
                                                <AirbnbCardHotel data={product}/>
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

export default Holidays;