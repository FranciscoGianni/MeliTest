import { test } from "@playwright/test";
import {  MeliPage } from "../pages/homePage";
import { SearchFunction } from "../pages/searchPage";


test("Go to History", async function ({ page }) {
  const meliPage = new MeliPage(page);
  await meliPage.goto();

  await meliPage.clickOnHistory();

  await meliPage.viewHistoryOk();

});
