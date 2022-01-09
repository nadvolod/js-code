describe("Functional checks", () => {
  it("should search", async () => {
    await browser.url(``);
    await browser.execute("/*@visual.init*/", "Functional Test", {
      ignore: "[data-testid='requests-counter']",
    });

    const searchBar = await $("[data-testid='search-input']");
    searchBar.click();
    searchBar.setValue("wesbos");
    const searchButton = await $("[data-testid='search-button']");
    searchButton.click();

    await browser.execute("/*@visual.snapshot*/", "Searched State");

    const result = await browser.execute("/*@visual.end*/");
    expect(result.message).toBeNull();
  });
});
