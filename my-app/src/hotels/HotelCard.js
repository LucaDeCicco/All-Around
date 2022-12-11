import {Box} from '@chakra-ui/react'
import {Badge} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import Myimage from '../images/circuits/1/1.jpg'


function AirbnbCardHotel({data}) {

    const property = {
        imageAlt: 'Rear view of modern home with pool',
        days: data.days,
        title: data.country,
        formattedPrice: data.price,
        // reviewCount: 34,
        rating: 4,
    }

    const circuitPointer={
        cursor: "pointer",
        backgroundColor:'#B7C8B5'
    };

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' style={circuitPointer}>
            <img src={data.images[0]} alt={property.imageAlt} style={{maxHeight: "214px", minWidth:"323px", minHeight:"214px", maxWidth:"323px"}}/>

            <Box p='6' style={{background:'linear-gradient(white, lightblue)'}}>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        Hotel
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

export default AirbnbCardHotel;