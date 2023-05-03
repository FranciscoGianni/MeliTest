import { test } from "@playwright/test";
import {  MeliPage } from "../pages/homePage";
import { SearchFunction } from "../pages/searchPage";
import { CreateAccount } from "../pages/createAccount";



test.beforeEach(async ({ page }, testInfo) => {
  const CreateAccounts = new CreateAccount (page);
  await CreateAccounts.LogIn();
});


test("Add to cart", async function ({ page }) {
  const meliPage = new MeliPage(page);
  const searchFunction = new SearchFunction(page);
  await meliPage.goto();
  await searchFunction.fillSearch(
    "Play"
  );


  await meliPage.clickOnProduct();

  await meliPage.clickOnAddtocart();

  await meliPage.clickOnViewCart();

  await meliPage.checkAddToCart();

});
