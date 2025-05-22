import React from "react";
import linaImage from "../../../assets/linamoller.jpg";

export default function AboutUsPage() {
  return (
    <>
      <section className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Om oss</h1>
        <p className="mb-6">
          Nordica Freelance Collective är en modern frilansbyrå som samlar handplockade kreatörer från hela Norden – designers, utvecklare, skribenter och marknadsstrateger.
          Vi grundades år 2022 av digitalstrategen Lina Möller, efter att hon själv arbetat som frilansare i över ett decennium och sett behovet av en trygg plats för både frilansare och uppdragsgivare.
        </p>
        <p className="mb-6">
          Vår mission är att skapa en smidig bro mellan kompetens och behov – där uppdragsgivare enkelt hittar rätt expert, och frilansare får arbeta med projekt som inspirerar dem.
          Genom vår digitala plattform kan besökare söka bland talanger, läsa deras profiler, filtrera efter kompetensområde och skicka projektförfrågningar direkt via sajten.
        </p>
        <p className="mb-6">
          Vi är transparenta, snabbrörliga och tror på frihet under ansvar – för både våra kunder och våra frilansare.
        </p>
      </section>
      <section className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Grundare</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-2xl shadow-xl">
          <img
            src={linaImage}
            alt="Lina Möller"
            className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Lina Möller</h3>
            <p>
              Lina Möller är digitalstrateg och grundare av Nordica Freelance Collective.
              Efter över tio år som frilansare inom digital kommunikation såg hon ett växande behov av en plattform som erbjuder trygghet, kvalitet och gemenskap – både för kreatörer och uppdragsgivare.
              År 2022 tog hon steget och grundade NFC med visionen att modernisera hur frilansarbete organiseras i Norden.
            </p>
          </div>
        </div>
      </section>
      <section className="p-4 max-w-4xl mx-auto">
        <h3 className="text-xl font-medium mb-2">Vill du jobba med oss?</h3>
        <p>
          Skicka gärna ett mejl till{" "}
          <a href="mailto:NFC@rekrytering.se" className="text-blue-600 underline">
            NFC@rekrytering.se
          </a>
          .
        </p>
      </section>
    </>
  );
}
