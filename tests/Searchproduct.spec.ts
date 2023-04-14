import { test } from "@playwright/test";
import {  MeliPage } from "../pages/homePage";
import { SearchFunction } from "../pages/searchPage";


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
