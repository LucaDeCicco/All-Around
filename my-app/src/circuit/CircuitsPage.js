import Circuits from "./Circuits";
import {useState} from "react";

function CircuitsPage(){
    const [countryFilterCriteria, setCountryFilterCriteria] = useState(null);

    return(
        <>
            <Circuits countryFilterCriteria={countryFilterCriteria} />
        </>
    );
}

export default CircuitsPage;