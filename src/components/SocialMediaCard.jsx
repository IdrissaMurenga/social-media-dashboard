import { SimpleGrid,Box, Image, Text, Heading, Card, CardBody, Flex } from '@chakra-ui/react'
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import instagramIcon from '../images/icon-instagram.svg';
import youtubeIcon from '../images/icon-youtube.svg'
import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';

const SocialMediaCard = () => {
  return (
    <SimpleGrid p="3" spacing={10} minChildWidth={"300px"}>
        <Card as='section' mt={2} textAlign={'center'} bg={'hsl(227, 47%, 96%)'} borderTop={'4px'} borderColor={'hsl(208, 92%, 53%)'}>
            <CardBody>
                <Flex alignItems={'center'} gap={2} justifyContent={"center"}>
                    <div>
                        <Image src={facebookIcon}/>
                    </div>
                    <Text fontWeight={"bold"} color={"hsl(228, 12%, 44%)"}>@nathanf</Text>
                </Flex>
            </CardBody>
            <CardBody pt={0}>
                <Box>
                    <Heading fontSize={50}>1987</Heading>
                    <Text color='hsl(230, 22%, 74%)' letterSpacing={5} fontSize={13}>FOLLOWERS</Text>
                </Box>
            </CardBody>
            <CardBody pt={0}>
                <Flex alignItems={'center'} gap={1} justifyContent={"center"}>
                    <div>
                        <Image src={upIcon} />
                    </div>
                    <Text fontWeight={'bold'} color={'green.400'}>12 Today</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card as='section' mt={2} textAlign={'center'} bg={'hsl(227, 47%, 96%)'} borderTop={'4px'} borderColor={'hsl(203, 89%, 53%)'}>
            <CardBody>
                <Flex alignItems={'center'} gap={2} justifyContent={"center"}>
                    <div>
                        <Image src={twitterIcon}/>
                    </div>
                    <Text fontWeight={"bold"} color={"hsl(228, 12%, 44%)"}>@nathanf</Text>
                </Flex>
            </CardBody>
            <CardBody pt={0}>
                <Box>
                    <Heading fontSize={50}>1044</Heading>
                    <Text color='hsl(230, 22%, 74%)' letterSpacing={5} fontSize={13}>FOLLOWERS</Text>
                </Box>
            </CardBody>
            <CardBody pt={0}>
                <Flex alignItems={'center'} gap={1} justifyContent={"center"}>
                    <div>
                        <Image src={upIcon} />
                    </div>
                    <Text fontWeight={'bold'} color={'green.400'}>99 Today</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card as='section' mt={2} textAlign={'center'} bg={'hsl(227, 47%, 96%)'} borderTop={'4px'} borderColor={'hsl(329, 70%, 58%)'}>
            <CardBody>
                <Flex alignItems={'center'} gap={2} justifyContent={"center"}>
                    <div>
                        <Image src={instagramIcon}/>
                    </div>
                    <Text fontWeight={'bold'} color={"hsl(228, 12%, 44%)"}>@realnathan</Text>
                </Flex>
            </CardBody>
            <CardBody pt={0}>
                <Box>
                    <Heading fontSize={50}>11k</Heading>
                    <Text color='hsl(230, 22%, 74%)' letterSpacing={5} fontSize={13}>FOLLOWERS</Text>
                </Box>
            </CardBody>
            <CardBody pt={0}>
                <Flex alignItems={'center'} gap={1} justifyContent={"center"}>
                    <div>
                        <Image src={upIcon} />
                    </div>
                    <Text fontWeight={'bold'} color={'green.400'}>1099 Today</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card as='section' mt={2} textAlign={'center'} bg={'hsl(227, 47%, 96%)'} borderTop={'4px'} borderColor={' hsl(348, 97%, 39%)'}>
            <CardBody>
                <Flex alignItems={'center'} gap={2} justifyContent={"center"}>
                    <div>
                        <Image src={youtubeIcon}/>
                    </div>
                    <Text fontWeight={"bold"} color={"hsl(228, 12%, 44%)"}>@nathan F.</Text>
                </Flex>
            </CardBody>
            <CardBody pt={0}>
                <Box>
                    <Heading fontSize={50}>8234</Heading>
                    <Text color='hsl(230, 22%, 74%)' letterSpacing={5} fontSize={13}>SUBSCRIBERS</Text>
                </Box>
            </CardBody>
            <CardBody pt={0}>
                <Flex alignItems={'center'} gap={1} justifyContent={"center"}>
                    <div>
                        <Image src={downIcon} />
                    </div>
                    <Text fontWeight={'bold'} color={'red.600'}>144 Today</Text>
                </Flex>
            </CardBody>
        </Card>
    </SimpleGrid>
  )
}

export default SocialMediaCard
