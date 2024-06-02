import {
  Section,
  Ev,
  Heading,
  Container,
  SubTitle,
  Solar,
  Wind,
  Hydro,
} from "@/components";

export const Features = () => {
  return (
    <Section classname="bg-[#FFF7ED] rounded-3xl">
      <Container>
        <SubTitle subTitle="Solutions" classname="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              Key to clean future
            </Heading>
          </div>

          <div className="grid md:grid-cols-2 gap-8 xl:grid-cols-4">
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  Ev Charging
                </Heading>
                <p className="text-neutral-800">
                  Evs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help to reduce
                  greenhouse gas emission in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Solar />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  Solar Energy
                </Heading>
                <p className="text-neutral-800">
                  Solar panels convert sunlight into electricity. Photovoltaic
                  (PV) cells on these panels capture the energy from the sun and
                  convert it into electrical power.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Wind />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  Wind Energy
                </Heading>
                <p className="text-neutral-800">
                  Wind turbines harness the kinetic energy of the wind to
                  generate electricity. Wind farms with multiple turbines are
                  commonly used to produce large amounts of clean energy.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Hydro />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  Hydropower
                </Heading>
                <p className="text-neutral-800">
                  This technology uses the energy from flowing water, such as
                  rivers and dams, to turn turbines and generate electricity.
                  It&apos;s one of the oldest forms of renewable energy.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
