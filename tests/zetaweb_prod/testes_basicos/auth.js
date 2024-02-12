const { BASE_URL, EMAIL, PASSWORD } = process.env;
import { expect } from '@playwright/test';
class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(email = EMAIL, password = PASSWORD) {
        await this.page.goto(BASE_URL + '#/sign-in/');
        await this.page.locator('input[name="email"]').click();
        await this.page.locator('input[name="email"]').fill(email);
        await this.page.locator('input[name="email"]').press('Tab');
        await this.page.locator('input[type="password"]').fill(password);
        await this.page.locator('button', { name: 'Entrar' }).click()

        // Checa se entrou na tela principal do sistema, irá aguardar até 30 segundos.
        await expect(this.page).toHaveTitle(/Financeiro - ZetaWeb/, { timeout: 30000 });

    }

    async logout() {
        await this.page.locator('span').filter({ hasText: 'CP' }).first().click();
        await this.page.getByText('CP').first().click();
        await this.page.getByText('Sair').click();
    }
}

module.exports = { LoginPage };