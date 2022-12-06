import {Box} from '@chakra-ui/react'
import {Badge} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import Myimage from '../images/circuits/1/1.jpg'


function AirbnbCardCircuit({data}) {

    let countriesData = data.countries
    let countries = ""
    for (const country of countriesData) {
        countries += country
        countries += " "
    }

    const property = {
        // imageUrl: '/src/images/circuits/1/1.jpg',//TODO
        imageAlt: 'Rear view of modern home with pool',
        days: data.days,
        title: countries,
        formattedPrice: data.price,
        // reviewCount: 34,
        rating: 4,
    }

    const circuitPointer={
        cursor: "pointer",
        backgroundColor:'#B7C8B5'
    };

    return (
        <Box maxW='sm' borderRadius='lg' overflow='hidden'>
            {/*<Image src={property.imageUrl} alt={property.imageAlt}/>*/}
            <img src={data.images[0]} alt={property.imageAlt} style={{maxHeight: "214px", minWidth:"323px", minHeight:"214px", maxWidth:"323px"}}/>
            {/*<div>*/}
            {/*    <img src={data.images[0]} alt="React Logo" />*/}
            {/*</div>*/}

            <Box p='6' style={{backgroundColor:'#B7C8B5'}}>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        Circuit
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {property.days} days
                        {/*{property.days} days &bull; {property.baths} baths*/}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {property.title}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        $ / person
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {/*{property.reviewCount} reviews*/}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AirbnbCardCircuit;