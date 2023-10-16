import { Box, Card, Heading, SimpleGrid, Flex, Text, Image} from "@chakra-ui/react"
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import instagramIcon from '../images/icon-instagram.svg';
import youtubeIcon from '../images/icon-youtube.svg'
import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';

const OverView = () => {
  return (
    <Box>
        <Heading p="3" fontSize="2xl" color={"hsl(228, 12%, 44%)"} >Overview - Today</Heading>
        <SimpleGrid p="3" spacing={10} minChildWidth={"300px"}>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Page Views</Text>
                    <div>
                        <Image src={facebookIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>87</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={upIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'green.400'}>3%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Likes</Text>
                    <div>
                        <Image src={facebookIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>52</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={downIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'red.600'}>2%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Likes</Text>
                    <div>
                        <Image src={instagramIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>5462</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={upIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'green.400'}>2257%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Profile Views</Text>
                    <div>
                        <Image src={instagramIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>52k</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={upIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'green.400'}>1375%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Retweets</Text>
                    <div>
                        <Image src={twitterIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>117</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={upIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'green.400'}>303%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Likes</Text>
                    <div>
                        <Image src={twitterIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>507</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={upIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'green.400'}>553%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Likes</Text>
                    <div>
                        <Image src={youtubeIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>107</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={downIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'red.600'}>19%</Text>
                    </Flex>
                </Flex>
            </Card>
            <Card as="section" bg={'hsl(227, 47%, 96%)'} p={5} >
                <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Text as="p" color={"hsl(228, 12%, 44%)"} fontWeight={'bold'}>Total Views</Text>
                    <div>
                        <Image src={facebookIcon}/>
                    </div>
                </Flex>
                <Flex justifyContent={'space-between'}  pt={5}>
                    <Heading fontSize={30}>1407</Heading>
                    <Flex display={"flex"} alignItems={"center"} pt="6">
                        <div>
                            <Image src={downIcon} />
                        </div>
                        <Text fontWeight={'bold'} fontSize={10} color={'red.600'}>12%</Text>
                    </Flex>
                </Flex>
            </Card>
        </SimpleGrid>
    </Box>
  )
}

export default OverView
