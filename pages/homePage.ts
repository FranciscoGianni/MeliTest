import { Page, Locator, expect } from "@playwright/test";

export class MeliPage {
  page: Page;
  cancelButton: Locator;
  product: Locator;
  addToCartButton: Locator;
  lookCartButton: Locator;
  viewHistoryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.getByRole("link", { name: "Sony PlayStation 5 825GB Standard  color blanco y negro" });
    this.addToCartButton = page.getByRole("link", { name: "Agregar al carrito" });
    this.lookCartButton = page.getByRole("link", { name: "Ver Carrito" });
    this.viewHistoryButton = page.getByRole("link", { name: "Ver historial" });
  }

  async goto() {
    await this.page.goto("https://www.mercadolibre.com.ar/");
  }

  
  async clickOnProduct() {
    await this.product.click();
  }

  async clickOnAddtocart() {
    await this.addToCartButton.click();
  }

  async clickOnViewCart() {
    await this.lookCartButton.click();
  }

  async checkAddToCart() {
    await expect(
      this.page.getByText(`Total con envío`)
    ).toBeVisible();
  }

  async clickOnHistory() {
    await this.viewHistoryButton.click();
  }

  async viewHistoryOk() {
    await expect(
      this.page.getByText(`Tu historial`)
    ).toBeVisible();
  }

}
