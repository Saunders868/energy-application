import { Container, Heading, Section, SubTitle } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <Section classname="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our Blog" />

        <div className="text-white">
          <Heading as="h1" className="text-hero leading-none">
            Our Latest Posts
          </Heading>
          <p className="max-w-md mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            eveniet cumque odio commodi cum eaque molestiae facilis! Vero,
            ratione natus?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
          <div className="flex group flex-col gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
              <Link href="/blog/a">
                <Image
                  src={"/images/hero2.png"}
                  alt="blog a"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </Link>
            </div>
            <div>
              <div>
                <Heading as="h3" className="text-white text-sub-title mb-4">
                  <Link href="/blog/a">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </Link>
                </Heading>
                <p className="text-neutral-400">
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post, sustainable energy source for a brighter
                  future.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={"/images/bruno.jpg"}
                    alt="blog a"
                    width={40}
                    height={40}
                    className="h-[40px] object-cover rounded-full"
                  />
                  <span className="text-white">Leslie Alexander</span>
                </div>
                <span className="text-white">9 min read</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlogPage;
