describe("Github users app", () => {
  it("should render correctly", async () => {
    await browser.url(``);
    await browser.execute("/*@visual.init*/", "Github Users");
    await browser.execute("/*@visual.snapshot*/", "Home Page");

    await browser.url(`/login`);
    await browser.execute("/*@visual.snapshot*/", "Login Page");

    await browser.url(`/foobar`);
    await browser.execute("/*@visual.snapshot*/", "Error Page");

    const result = await browser.execute("/*@visual.end*/");
    expect(result.message).toBeNull();
  });
});
