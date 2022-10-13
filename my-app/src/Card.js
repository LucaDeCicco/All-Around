import {Box} from '@chakra-ui/react'
// import {Image} from '@chakra-ui/react'
import {Badge} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import Myimage from './images/circuits/1/1.jpg'


function AirbnbCard({data}) {

    const property = {
        // imageUrl: '/src/images/circuits/1/1.jpg',//TODO
        imageAlt: 'Rear view of modern home with pool',
        days: data.days,
        // baths: 2,
        title: data.location,
        formattedPrice: data.price,
        // reviewCount: 34,
        rating: 4,
    }

    const circuitPointer={
        cursor: "pointer"
    };

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' style={circuitPointer}>
            {/*<Image src={property.imageUrl} alt={property.imageAlt}/>*/}
            <img src={Myimage} alt={property.imageAlt}/>

            <Box p='6'>
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
                        / wk
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

export default AirbnbCard;