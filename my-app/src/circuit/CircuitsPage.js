import FilterBar from "../allProducts/FilterBar";
import Circuits from "./Circuits";
import {useState} from "react";


function CircuitsPage(){
    const [countryFilterCriteria, setCountryFilterCriteria] = useState(null);



    return(
        <>
            {/*<FilterBar setCountryFilterCriteria={setCountryFilterCriteria}/>*/}
            {/*<h3>{countryFilterCriteria}</h3>*/}
            <Circuits countryFilterCriteria={countryFilterCriteria} />
        </>
    );
}

export default CircuitsPage;