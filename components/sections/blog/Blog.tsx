import React from "react";
import { Container, Heading, Section } from "@/components";
import Link from "next/link";
import Image from "next/image";

export const Blog = () => {
  return (
    <Section classname=" bg-secondary-950">
      <Container>
        <div>
          <div className="w-full flex justify-between items-center">
            <Heading as="h2" className="text-section leading-none text-white">
              Blog
            </Heading>
            <button className="border px-6 py-3 rounded-full text-white">
              See all
            </button>
          </div>
          <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/hero2.png"
                    alt="Blog A"
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
                  <p className="text-neutral-400 line-clamp-2">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                <Image
                  src="/images/hero2.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    Wind Power: A Breath of Fresh Air for Clean Energy
                    Enthusiasts
                  </Heading>
                  <p className="text-neutral-400 line-clamp-2">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post, we&apos;ll delve into the incredible
                    potential of solar techno...
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                <Image
                  src="/images/hero2.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </Heading>
                  <p className="text-neutral-400 line-clamp-2">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                <Image
                  src="/images/hero2.png"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </Heading>
                  <p className="text-neutral-400 line-clamp-2">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bruno.jpg"
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
