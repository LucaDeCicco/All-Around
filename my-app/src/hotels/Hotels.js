import AirbnbCard from './HotelCard'
// import Airb
import {ChakraProvider} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import {Link} from "react-router-dom";

function Hotels() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user){
                let token = user.token
                let request = await fetch("http://localhost:8888/allMemHotelProducts",{
                    headers: {Authorization: 'Bearer ' + token},
                })
                let result = await request.json();
                setData(result);
                setLoading(false)
            }
        };

        fetcher();
    }, [loading])

    const container={
        marginLeft: "10em",
        marginRight: "10em",
        marginBottom: "5em",

    };

    // const circuitDiv={
    //     cursor: "pointer"
    // };

    const handleClick = (elem) => event => {
        // 👇️ refers to the div element
    };

    if (data!=null){
        return (
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
            </div>);
    }
}

export default Hotels;
