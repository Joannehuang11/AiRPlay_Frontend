import React from 'react';
import logo from './comm/Logo.svg';
import ProgressSeparator from './comm/ProgressSeparator.svg';
import AiRHockeyVideo from './comm/AirHockeyVideo.gif';
import './PageStart.css';
import { SimpleGrid, Box, Flex, Spacer, Center, Image, Circle, Text, VStack } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MdPlayArrow, MdNavigateNext, MdOutlineVolumeUp } from "react-icons/md";


function PageStart() {
  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      {/* navigation bar */}
      <Flex w='full' p='2' h='16'>
        <Center w='20' h='12'>
          <Image h='4' src ={logo} />
        </Center>
        <Spacer />
          <Center w='12' h='12'>
        <HamburgerIcon w='6' h='6' />
        </Center>
      </Flex>
      {/* progress bar */}
      <Flex p='2' h='20'>
        <Spacer />
        <Center>
          <Breadcrumb spacing='4' separator={<Image w='700' h='20' src={ProgressSeparator} />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                  <Circle size='10' bg='#46a3f7' color='#000000' fontWeight='bold'>
                    1
                  </Circle>
                  <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                    Select
                  </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' borderColor='#46a3f7' borderWidth='medium'  color='#000000' fontWeight='bold'>
                    2
                </Circle>
                <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                  Setup
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' borderColor='#46a3f7' borderWidth='medium' color='#000000' fontWeight='bold'>
                      3
                </Circle>
                <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                  Play
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <Spacer />
      </Flex>
      {/* game selection */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='200' bg='yellow' rounded='12' overflow='hidden' boxShadow='sm'>
          <Image src={AiRHockeyVideo} alt='AirHockeyVideo' h='full'/>
        </Box>
        <Center w='full' h='200' bg='gray.300' rounded='12' overflow='hidden' boxShadow='sm'>
          More to come....
        </Center>
        <Center w='full' h='200' bg='gray.300' rounded='12' overflow='hidden' boxShadow='sm'>
          More to come....
        </Center>
      </VStack>
    </VStack>
  );
}

function PageSetup() {
  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      {/* navigation bar */}
      <Flex w='full' p='2' h='16'>
        <Center w='20' h='12'>
          <Image h='4' src ={logo} />
        </Center>
        <Spacer />
          <Center w='12' h='12'>
        <HamburgerIcon w='6' h='6' />
        </Center>
      </Flex>
      {/* progress bar */}
      <Flex p='2' h='20'>
        <Spacer />
        <Center>
          <Breadcrumb spacing='4' separator={<Image w='700' h='20' src={ProgressSeparator} />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                  <Circle size='10' borderColor='#46a3f7' borderWidth='medium' color='#000000' fontWeight='700'>
                    1
                  </Circle>
                  <Box fontSize='xs' fontWeight='700' textAlign='center'>
                    Select
                  </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' bg='#46a3f7' color='#000000' fontWeight='bold'>
                    2
                </Circle>
                <Box fontSize='xs' fontWeight='700' textAlign='center'>
                  Setup
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' borderColor='#46a3f7' borderWidth='medium' color='#000000' fontWeight='bold'>
                      3
                </Circle>
                <Box fontSize='xs' fontWeight='700' textAlign='center'>
                  Play
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <Spacer />
      </Flex>
      {/* game setup */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='8' textAlign='center'>
          <Text fontSize='3xl' fontWeight='700'>Air Hockey</Text>
        </Box>
        <CircularProgress value={100} color='#46a3f7' capIsRound size='60' thickness='8'>
          <CircularProgressLabel fontSize='5xl' fontWeight='500'>10:00</CircularProgressLabel>
        </CircularProgress>
        <Button leftIcon={<MdPlayArrow />} colorScheme='yellow' variant='solid'>
          Play
        </Button>
        <Spacer />
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700'>Volume</Text>
          </Box>
          <Spacer />
          <Box w='200px' h='4'>
            <Slider aria-label='volume-slider' defaultValue={30} min={0} max={100} step={10}>
              <SliderTrack bg='gray.300'>
                <SliderFilledTrack bg='#000000' />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color='#000000' as={MdOutlineVolumeUp} />
              </SliderThumb>
            </Slider>
          </Box>
        </Flex>
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700'>Setting</Text>
          </Box>
          <Spacer />
          <Box w='32px' h='4'>
            <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
          </Box>
        </Flex>
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700'>Tutorial</Text>
          </Box>
          <Spacer />
          <Box w='32px' h='4'>
            <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
          </Box>
        </Flex>
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700' textColor='red'>Exit</Text>
          </Box>
          <Spacer />
          <Box w='32px' h='4'>
            <IconButton variant='link' colorScheme='red' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
          </Box>
        </Flex>
      </VStack>
    </VStack>
  );
}

function PageAdvancedSetting() {
  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      {/* navigation bar */}
      <Flex w='full' p='2' h='16'>
        <Center w='20' h='12'>
          <Image h='4' src ={logo} />
        </Center>
        <Spacer />
          <Center w='12' h='12'>
        <HamburgerIcon w='6' h='6' />
        </Center>
      </Flex>
      {/* preview */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='8' textAlign='center'>
          <Text fontSize='3xl' fontWeight='700'>Advanced Setting</Text>
        </Box>
        <SimpleGrid w='full' columns={2} spacing='0' borderWidth='medium' borderColor='#000000'>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='20' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🦁
            </Circle>
          </Center>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='14' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🐼
            </Circle>
          </Center>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='16' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🐶
            </Circle>
          </Center>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='12' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🐱 
            </Circle>
          </Center>
        </SimpleGrid>
        <Button leftIcon={<MdPlayArrow />} colorScheme='yellow' variant='solid'>
          Play
        </Button>
        <Spacer />
        {/* Advanced setting */}
        <Accordion w='full' defaultIndex={[0]} allowMultiple>
          <AccordionItem paddingY={2}>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                  Game setting
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={8}>
              <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Ball Size</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='ball-size-slider' defaultValue={20} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Ball Speed</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='ball-speed-slider' defaultValue={10} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Circle electricity</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='circle-electricity-slider' defaultValue={40} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Boundary electricity</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='boundary-electricity-slider' defaultValue={20} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Text size</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='text-size-slider' defaultValue={30} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem paddingY={2}>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                  Controller setting
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}>
              <Tabs w='full' isFitted variant='soft-rounded' colorScheme='#46a3f7'>
                <TabList>
                  <Tab fontSize='sm'>🦁 <br></br>No CNTL</Tab>
                  <Tab fontSize='sm'>🐼 <br></br>Hand CNTL</Tab>
                  <Tab fontSize='sm'>🐶 <br></br>Knee CNTL</Tab>
                  <Tab fontSize='sm'>🐱 <br></br>Touch CNTL</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left' verticalAlign='center'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4' verticalAlign='center'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={80} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={40} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={30} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={50} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={90} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={20} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={30} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={60} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={50} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={10} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={20} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={30} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                </TabPanels>
              </Tabs>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem paddingY={2}>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                  Developer mode
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} >
              <Box paddingTop='4' paddingBottom='4'>
               What should we put in here?
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </VStack>
  );
}

export { PageStart, PageSetup, PageAdvancedSetting }
