import { Ref, forwardRef } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import Image from "next/image";

const Portfolio = () => {
  return (
    <SectionWrapper id="portfolio" title="Naše Práce">
      <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
        <div>
          <Image
            width={800}
            height={600}
            src="/images/8.jpg"
            alt="img"
            className="mb-4 md:mb-6 lg:mb-8"
          />
          <Image
            width={800}
            height={1000}
            src="/images/4.jpg"
            alt="img"
            className=""
          />
        </div>

        <div>
          <Image
            width={800}
            height={600}
            src="/images/2.jpg"
            alt="img"
            className="mb-4 md:mb-6 lg:mb-8"
          />
          <Image
            width={800}
            height={600}
            src="/images/5.jpg"
            alt="img"
            className="mb-3 md:mb-6 lg:mb-8"
          />
          <Image
            width={800}
            height={600}
            src="/images/6.jpg"
            alt="img"
            className=""
          />
        </div>

        <div>
          <Image
            width={800}
            height={1000}
            src="/images/9.jpg"
            alt="img"
            className="mb-4 md:mb-6 lg:mb-8 "
          />
          <Image
            width={800}
            height={600}
            src="/images/10.jpg"
            alt="img"
            className=""
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
