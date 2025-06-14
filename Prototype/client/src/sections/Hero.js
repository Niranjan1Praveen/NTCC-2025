"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import design1 from "@/assets/images/design-example-1.png";
import design2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import { SparkleIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 overflow-x-clip">
      <div className="container relative mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        {/* <div className="absolute -left-32 top-16 hidden lg:block z-[-10]">
          <Image src={design1} alt="hero-design-1-example" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block z-[-10]">
          <Image src={design2} alt="hero-design-2-example" />
        </div> */}
        <div className="w-full md:w-3/4">
          <div className="flex items-center justify-center">
            <div className="inline-flex py-1 px-3 text-center bg-gradient-to-r from-primary-500 via-[#30f6d5] to-[#5EF7BA] rounded-full text-neutral-900 font-semibold">
              <span className="text-blue-400 mr-1 animate-spin animation-delay-2000 "><SparkleIcon/></span> Trusted by AI Researchers, Students, and Educators
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium mt-6 leading-tight text-center">
            Understand and Visualize How AI Can Be Fooled
          </h1>

          <p className="text-lg md:text-xl text-white/50 mt-8 leading-relaxed text-center">
            Our interactive dashboard helps you explore adversarial attacks on
            image classifiers. Upload images, apply attacks like FGSM and PGD,
            and see how even small changes can trick powerful AI models—making
            it easier to learn, teach, and build more secure systems.
          </p>
          <div className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-none px-4 !bg-transparent md:flex-1 w-full"
            />
            <RegisterLink>
              <Button
                type="submit"
                variant="signup"
                size="sm"
                className="whitespace-nowrap"
              >
                Sign Up
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
