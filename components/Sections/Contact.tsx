import { FC } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import Fire from "../Icons/Fire";
import MapPin from "../Icons/MapPin";
import Envelope from "../Icons/Envelope";
import Phone from "../Icons/Phone";

const Contact: FC = () => {
    return (
        <SectionWrapper id="contact" title="Kontakt">
            <div className="bg-gray-50 p-4 shadow-lg flex flex-col-reverse mx-auto gap-4 md:p-8 md:flex-row lg:gap-8">
                <iframe
                    className="w-full h-80 md:w-1/2 md:h-92 lg:w-3/5"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3156197690237!2d14.450076676493003!3d50.02418147151388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b915f83fd7ea3%3A0xe723e322dd731699!2sHurbanova%201279%2F6%2C%20142%2000%20Praha%204-Kr%C4%8D!5e0!3m2!1ssk!2scz!4v1698963130718!5m2!1ssk!2scz"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <ul className="flex flex-col gap-2 md:w-1/2 lg:w-2/5">
                    <li className="flex items-center gap-2">
                        <Fire />
                        <p className="font-semibold">PRO-REVIZ s.r.o.</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <MapPin />
                        <p className="font-semibold">Hurbanova 1279/6, 142 00 Praha Krč</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Envelope />
                        <p className="font-semibold">proreviz@gmail.com</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone />
                        <p className="font-semibold">+420 720 568 141</p>
                    </li>
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
