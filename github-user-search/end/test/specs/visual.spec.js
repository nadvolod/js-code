describe("Visual checks", () => {
  it("pages render correctly", async () => {
    await browser.url(``);
    //in all snapshots, we will ignore these locators
    await browser.execute("/*@visual.init*/", "Visual Test", {
      ignore: "[data-testid='requests-counter']",
    });
    await browser.execute("/*@visual.snapshot*/", "Home Page");

    await browser.url(`/login`);
    await browser.execute("/*@visual.snapshot*/", "Login Page");
    const img = await $("img");
    img.waitForExist({ timeout: 5000 });

    await browser.url(`/foobar`);
    await browser.execute("/*@visual.snapshot*/", "Error Page");

    const result = await browser.execute("/*@visual.end*/");
    expect(result.message).toBeNull();
  });
});
