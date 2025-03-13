import { FC } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import ServiceCard from "../Layout/ServiceCard";

const Services: FC = () => {
  return (
    <SectionWrapper id="services" title="Služby">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 md:flex-row">
          <ServiceCard
            title="Voda"
            details="Montáž nových rozvodů teplé a studené vody v bytech a bytových domech. Úprava stávajících rozvodů teplé a studené vody. Instalace sanitárních zařízení."
            borderColor="border-blue-500"
          />
          <ServiceCard
            title="Topení"
            details="Montáž nových rozvodů topení v bytech a bytových domech. Úprava stávajících rozvodů topení. Montáž radiátorů a jiných topných zařízení. Montáž podlahového topení. Instalace elektrických boilerů. Výměna tepelných čerpadel."
            borderColor="border-red-500"
          />
          <ServiceCard
            title="Plyn"
            details="Certifikované revize veškerých plynových zařízení, bytů, bytových domů a plynových kotelen. Instalace plynových spotřebičů. Výstavba plynových kotelen s veškerými zednickými pracemi. Opravy závad po plynových revizích. Montáž nových plynových rozvodů v bytech a bytových domech. Úprava stávajících rozvodů plynu."
            borderColor="border-yellow-500"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
