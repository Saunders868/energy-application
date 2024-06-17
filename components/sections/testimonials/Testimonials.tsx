"use client";

import { Container, Heading, Section, SubTitle } from "@/components";
import { TestimonialCarousel } from "./Testimonial-Carousel";

export const Testimonials = () => {
  return (
    <Section classname="bg-secondary-950 rounded-3xl">
      <Container classname="flex flex-col items-center">
        <SubTitle subTitle="Testimonials" />
        <Heading
          className="text-section leading-none text-white text-left w-full"
          as="h2"
        >
          What our customers say
        </Heading>

        <div className="mt-24">
          <TestimonialCarousel />
        </div>
      </Container>
    </Section>
  );
};
