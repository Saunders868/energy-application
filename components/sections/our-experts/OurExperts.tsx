import React from "react";
import { Container, Heading, Linkedln, Section, SubTitle } from "@/components";
import Image from "next/image";
import Link from "next/link";
import teamData from "@/data/team.json";

type MemberType = {
  name: string;
  position: string;
  image: string;
  linkedIn: string;
};

export const OurExperts = () => {
  return (
    <Section classname="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our Experts" />
        <div>
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="text-section leading-none text-white">
              Meet our experts
            </Heading>
            <p className="text-neutral-400">
              Our team boasts top green energy experts, driving innovation in
              sustainability.
            </p>
          </div>
          <div className="mt-20">
            {teamData.team.map((member: any, index: number) => (
              <div
                key={index}
                className="py-8 border-b flex gap-12 items-center border-neutral-700"
              >
                <div className="relative shrink-0 h-[90px] w-[90px]">
                  <Image
                    src={member.image}
                    alt="expert image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flew-row justify-between w-full">
                  <div className="text-white flex flex-col sm:flex-row sm:gap-28 sm:justify-between">
                    <Heading as="h3" className="text-sub-title">
                      {member.name}
                    </Heading>
                    <p className="text-neutral-500">{member.position}</p>
                    <Link target="_blank" href={member.linkedIn}>
                      <Linkedln />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
