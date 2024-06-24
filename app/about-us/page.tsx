import { Button, Container, Heading, LindkedlnFooter, NewsLetter, Section } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <React.Fragment>
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

                <div className="grid md:grid-cols-4 mt-4 md:grid-rows-4 gap-4">
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
                    <div className="col-span-2 gap-4 h-full grid grid-rows-2 grid-cols-2 row-span-4">
                        <div className="col-span-2 row-span-1 md:row-start-3 rounded-3xl overflow-hidden">
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

        <Section classname='bg-white'>
            <Container>
                <Heading as='h2' className='text-section leading-none capitalize mb-24'>
                    Our work philosophy
                </Heading>
                <div className="grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                        <div>
                            <span>Culture</span>
                            <Heading as='h4' className='text-features leading-none'>
                                Curiosity & Creativity
                            </Heading>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sunt, aspernatur at nisi magnam veritatis, laudantium laborum quisquam ad maxime ipsa neque quos asperiores ab provident reprehenderit ullam. Sint, neque.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                        <div>
                            <span>Culture</span>
                            <Heading as='h4' className='text-features leading-none'>
                                Curiosity & Creativity
                            </Heading>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sunt, aspernatur at nisi magnam veritatis, laudantium laborum quisquam ad maxime ipsa neque quos asperiores ab provident reprehenderit ullam. Sint, neque.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>

        <div className="p-2 sm:p-4 bg-secondary-950">
            <NewsLetter />
        </div>

        <Section classname='bg-white'>
            <Container>
                <Heading as='h2' className='text-section leading-none capitalize mb-24'>
                    A Team of Energy Experts
                </Heading>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Member'
                            width={320}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                            <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                <div className="flex justify-between items-center">
                                    <Heading
                                    as="h4"
                                    className="text-label font-semibold leading-none"
                                    >
                                        Daniel Saunders
                                    </Heading>
                                    <span>CTO</span>
                                    <Link href="/">
                                        <LindkedlnFooter />
                                    </Link>
                                </div>
                                <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Member'
                            width={320}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                            <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                <div className="flex justify-between items-center">
                                    <Heading
                                    as="h4"
                                    className="text-label font-semibold leading-none"
                                    >
                                        Daniel Saunders
                                    </Heading>
                                    <span>CTO</span>
                                    <Link href="/">
                                        <LindkedlnFooter />
                                    </Link>
                                </div>
                                <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Member'
                            width={320}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                            <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                <div className="flex justify-between items-center">
                                    <Heading
                                    as="h4"
                                    className="text-label font-semibold leading-none"
                                    >
                                        Daniel Saunders
                                    </Heading>
                                    <span>CTO</span>
                                    <Link href="/">
                                        <LindkedlnFooter />
                                    </Link>
                                </div>
                                <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Member'
                            width={320}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                            <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                <div className="flex justify-between items-center">
                                    <Heading
                                    as="h4"
                                    className="text-label font-semibold leading-none"
                                    >
                                        Daniel Saunders
                                    </Heading>
                                    <span>CTO</span>
                                    <Link href="/">
                                        <LindkedlnFooter />
                                    </Link>
                                </div>
                                <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Member'
                            width={320}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                            <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                <div className="flex justify-between items-center">
                                    <Heading
                                    as="h4"
                                    className="text-label font-semibold leading-none"
                                    >
                                        Daniel Saunders
                                    </Heading>
                                    <span>CTO</span>
                                    <Link href="/">
                                        <LindkedlnFooter />
                                    </Link>
                                </div>
                                <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Member'
                            width={320}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                            <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                <div className="flex justify-between items-center">
                                    <Heading
                                    as="h4"
                                    className="text-label font-semibold leading-none"
                                    >
                                        Daniel Saunders
                                    </Heading>
                                    <span>CTO</span>
                                    <Link href="/">
                                        <LindkedlnFooter />
                                    </Link>
                                </div>
                                <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                    <li className="text-sub-title">4 years in energy field</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    </React.Fragment>
  )
}

export default AboutPage