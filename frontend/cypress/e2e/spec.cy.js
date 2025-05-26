describe("Home", () => {
  it("Besöker först sidan", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Klickar join us", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button");
    cy.contains("JOIN US").click();
  });

  it("Klickar läs mer här", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button");
    cy.contains("Läs mer här").click();
  });
});

describe("Om oss", () => {
  it("Navigerar till om oss i navbaren", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button");
    cy.contains("Om oss").click();
  });
});

describe("Våra frilansare", () => {
  it("Klicka på Våra frilansare i navbaren.", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button");
    cy.contains("Våra frilansare").click();
    cy.get("input").type("Siri");
    cy.get("button");
    cy.contains("Läs mer").click();
    cy.get("button");
    cy.contains("Tillbaka").click();
  });

  describe("Kontakt", () => {
    it("Klicka på kontakt i navbaren", () => {
      cy.visit("http://localhost:5173/");
      cy.get("button");
      cy.contains("Kontakt").click();
    });
  });
});
