import {useState} from "react";
import FilterBar from "./FilterBar";
// import Circuits from "../circuit/Circuits";
import Holidays from "./Holidays";
import {useParams} from "react-router-dom";
import * as React from "react";

function HolidaysPage(){
    const {page} = useParams();

    const [typeFilterCriteria, setTypeFilterCriteria] = useState(null);
    const [countryFilterCriteria, setCountryFilterCriteria] = useState(null);
    const [filters, setFilters] = useState(1);



    return(
        <>
            {page ? (
                <></>
            ) : (
                <FilterBar
                    setCountryFilterCriteria={setCountryFilterCriteria}
                    setTypeFilterCriteria={setTypeFilterCriteria}
                    setFilters={setFilters}
                    filters={filters}
                />
            )}

            <Holidays
                countryFilterCriteria={countryFilterCriteria}
                typeFilterCriteria={typeFilterCriteria}
                filters={filters}
                setFilters={setFilters}
            />
        </>
    );

}

export default HolidaysPage;