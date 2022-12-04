import AirbnbCard from './CircuitCard'
import {ChakraProvider} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import {Link} from "react-router-dom";
// import skyBackground from "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/images/circuitsBackground.jpg";
import skyBackground from "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/images/skyBackground5.jpg";
function Circuits() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user){
                let token = user.token
                let request = await fetch("http://localhost:8888/allMemCircuitProducts", {
                    headers: {Authorization: 'Bearer ' + token},
                })
                let result = await request.json();
                setData(result);
                setLoading(false)
                let background = document.querySelector(`body`)
                background.style.background = `url(${skyBackground}) no-repeat center center fixed`
                // background.style.padding = `100%`
            }
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
                    <SimpleGrid columns={3} spacing={115}>
                    {data.map((circuit, index) => {
                        return (
                            <Link key={`circuit_${index}`} to={`/circuit/${circuit.id}`} style={{maxHeight: 'fit-content'}}>
                                <div onClick={handleClick(circuit)} className={"test"} style={{maxHeight: 'fit-content'}}>
                                    <AirbnbCard data={circuit}/>
                                </div>
                            </Link>
                        );
                    })}
                    </SimpleGrid>
                </ChakraProvider>
            </div>);
    }
}

export default Circuits;
