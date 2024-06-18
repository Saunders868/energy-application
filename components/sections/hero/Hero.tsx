import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="bg-secondary-950 h-fit py-48 flex flex-col gap-32">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div>
            <h1 className="text-white text-hero leading-none">
              The Future of Green Energy
            </h1>
          </div>

          <div className="flex flex-col justify-between gap-6 sm:gap-0 mt-6 sm:mt-0">
            <p className="text-white">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet. Join us in a journey towards a future where
              clean, renewable energy sources transform they way we power our
              lives.
            </p>
            <Link href={"/solutions"}>
              <Button variant="secondary">See our solutions</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill speed={120}>
          <div className="flex justify-center gap-8 items-start mx-4">
            <Image
              src={"/images/hero1.png"}
              alt="hero"
              width={450}
              height={250}
            />
            <Image
              src={"/images/hero2.png"}
              alt="hero"
              width={450}
              height={250}
            />
            <Image
              src={"/images/hero3.png"}
              alt="hero"
              width={450}
              height={250}
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export { Hero };
