describe("Tic tac toe game", () => {
  it("should look correct", async () => {
    await browser.url(``);
    await browser.execute("/*@visual.init*/", "Tic Tac Toe");
    await browser.execute("/*@visual.snapshot*/", "Empty State");

    await $('[data-testid="0"]').click();
    await $('[data-testid="3"]').click();
    await $('[data-testid="1"]').click();
    await $('[data-testid="4"]').click();
    await $('[data-testid="2"]').click();
    await browser.execute("/*@visual.snapshot*/", "X is Winner");

    const result = await browser.execute("/*@visual.end*/");
    expect(result.message).toBeNull();
  });
});
