import { Locator, Page } from "@playwright/test";

export class CreateAccount {
  page: Page;
  signIn: Locator;
  mail: Locator;
  continue: Locator;
  passwordText: Locator;
  logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signIn = page.getByRole("link", { name: "Ingresá" });
    this.mail = page.getByLabel("E‑mail, teléfono o usuario");
    this.continue = page.getByRole("link", { name: "Continuar" });
    this.passwordText = page.getByLabel("Contraseña");
    this.logInButton = page.getByRole("link", { name: "Iniciar sesión" });
   }
   

  async LogIn( ) {
    await this.signIn.click();
    await this.mail.fill("jp1837854@gmail.com");
    await this.continue.click();
    await this.passwordText.fill("1837854.Jp");
    await this.logInButton.click()
  }
}
