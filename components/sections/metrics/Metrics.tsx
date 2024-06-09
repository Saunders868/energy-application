import React from "react";
import {
  Container,
  Heading,
  Renewable,
  Saveenergy,
  Section,
  SubTitle,
  User,
} from "@/components";

export const Metrics = () => {
  return (
    <Section classname="bg-[#FFF7ED] rounded-3xl">
      <Container>
        <SubTitle subTitle="Metrics" classname="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              We are commited to a sustabinable future
            </Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 items-start p-10 bg-primary-300 rounded-3xl">
              <Renewable />
              <div className="flex flex-col gap-6">
                <h3 className="text-title leading-none">5,000 Mwh</h3>
                <h4 className="test-sub-title">Renewable Energy Generated</h4>
                <p className="text-neutral-800">
                  Evs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="flex h-full gap-6 p-8 bg-primary-300 rounded-3xl">
                <User />
                <div>
                  <h3 className="text-title leading-none">10,000+</h3>
                  <h4 className="test-sub-title leading-none mt-4 sm:mt-6">
                    Customers Served
                  </h4>
                </div>
              </div>
              <div className="flex h-full gap-6 p-8 bg-primary-300 rounded-3xl">
                <Saveenergy />
                <div>
                  <h3 className="text-title leading-none">15%</h3>
                  <h4 className="test-sub-title leading-none mt-4 sm:mt-6">
                    Avg. Energy Saved
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
