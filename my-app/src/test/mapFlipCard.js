import {Box} from '@chakra-ui/react'
import {Badge} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import Myimage from '../images/circuits/1/1.jpg'


function MapFlipCard() {

    return (
        <>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="398" height="176" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=semilunei%202&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://123movies-to.org">123 movies</a><br></br>
                    {/*<style>.mapouter{position:relative;text-align:right;height:176px;width:398px;}</style>*/}
                    <style>.map-outer{{position:"relative",textAlign:"right",height:"176px",width:"398px"}}</style>
                    <a href="https://www.embedgooglemap.net">embed google maps wordpress</a>
                    <style>.map_canvas {{overflow:"hidden",background:"none!important",height:"176px",width:"398px"}}</style>
                </div>
            </div>
        </>
    )
}

export default MapFlipCard;