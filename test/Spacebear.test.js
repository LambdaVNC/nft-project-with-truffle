const Spacebear = artifacts.require("Spacebear");

contract("Spacebear", async (accounts) => {
  it("should credit an NFT to a specific a account", async () => {
    const spacebearInstance = await Spacebear.deployed();
    await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");

    assert.equal(
      await spacebearInstance.ownerOf(0),
      accounts[1],
      "Owner of Token 1 is not equal account 2"
    );
  });
});
