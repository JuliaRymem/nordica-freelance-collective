import React from "react";

export default function AboutUsPage() {
  return (
    <section className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Om Nordica Freelance Collective</h1>
      <p className="mb-6">
        Vi är ett nätverk av kreativa frilansare inom design, utveckling och strategi. 
        Vårt mål är att skapa kvalitativa samarbeten och projekt som gör skillnad.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Om grundaren</h2>
      <p className="mb-6">
        Vår grundare har lång erfarenhet inom tech-branschen och brinner för att hjälpa frilansare växa och nå sina mål.
      </p>

      <h3 className="text-xl font-medium mb-2">Vill du jobba med oss?</h3>
      <p>
        Skicka gärna ett mejl till{" "}
        <a href="mailto:NFC@rekrytering.se" className="text-blue-600 underline">
          NFC@rekrytering.se
        </a>
        .
      </p>
    </section>
  );
}