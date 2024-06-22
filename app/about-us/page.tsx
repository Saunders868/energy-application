import { Button, Container, Heading, Section } from '@/components'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <Section classname='bg-white'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <Heading as='h1' className='text-hero'>About Page</Heading>
                <div>
                    <p className='mb-4'>
                        At flow, we&apos;re comitted to a sustainable future, as a pioneering force in the green energy sectior, we&apos;ve been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also evironmentally responsible. We belive that by harnessing the power of nature, we can power the world and protect it simultaneously.
                    </p>
                    <Button variant="secondary">Read More</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-4 mt-4 md:grid-rows-4 md:h-screen gap-4">
                <div className="col-span-2 gap-4 h-full grid grid-rows-2 grid-cols-2 row-span-4">
                    <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1659733478370-159f42ab3190?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='about us'
                            width={450}
                            height={320}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1 row-span-2 grid grid-rows-2 gap-4">
                        <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                            <Heading as='h3' className='text-title'>
                                100%
                            </Heading>
                            <div>
                                <Heading as='h4' className='text-label font-bold'>
                                    Dedicaiton
                                </Heading>
                                <p className="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quaerat quasi officia corrupti, cum dolor!
                                </p>
                            </div>
                        </div>
                        <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                            <Heading as='h3' className='text-title'>
                                100%
                            </Heading>
                            <div>
                                <Heading as='h4' className='text-label font-bold'>
                                    Dedicaiton
                                </Heading>
                                <p className="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quaerat quasi officia corrupti, cum dolor!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                        <Heading as='h3' className='text-title'>
                            100%
                        </Heading>
                        <div>
                            <Heading as='h4' className='text-label font-bold'>
                                Dedicaiton
                            </Heading>
                            <p className="">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quaerat quasi officia corrupti, cum dolor!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
  )
}

export default AboutPage