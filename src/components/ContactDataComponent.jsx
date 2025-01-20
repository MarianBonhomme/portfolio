import React from "react";
import TitleComponent from "./TitleComponent";

export default function ContactDataComponent() {
  return (
    <div className="max-w-xl 2xl:max-w-4xl text-center px-5 sm:px-0">
      <TitleComponent text="contact" css="mb-10" />
      <p className="text-sm 2xl:text-xl leading-loose mb-10">
        Si ce design vous plaît, vous pouvez l'utiliser pour votre propre site
        web. Contactez-moi pour le réserver !
      </p>
      <div className="mb-5">
        <p className="text-xl 2xl:text-3xl font-cera mb-1">Phone</p>
        <p className="text-xs 2xl:text-base select-text">06 33 63 66 00</p>
      </div>
      <div className="mb-5">
        <p className="text-xl 2xl:text-3xl font-cera mb-1">Email</p>
        <p className="text-xs 2xl:text-base select-text">contact@mardev.fr</p>
      </div>
      <div className="mb-5">
        <p className="text-xl 2xl:text-3xl font-cera mb-1">Address</p>
        <p className="text-xs 2xl:text-base select-text">
          Montpellier • France
        </p>
      </div>
    </div>
  );
}
