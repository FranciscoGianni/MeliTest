import { Locator, Page } from "@playwright/test";

export class SearchFunction {
  page: Page;
  search: Locator;
  searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.search = page.getByPlaceholder("Buscar productos, marcas y más…");
    this.searchButton = page.locator('xpath=/html/body/header/div/div[2]/form/button/div');
   }

  async fillSearch(
    search: string

  ) {
    await this.search.fill(search);
    await this.searchButton.click();
  }
}
