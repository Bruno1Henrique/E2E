import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';


test('criando uma nova conta', async ({ page }) => {
const email = faker.internet.exampleEmail();

  await page.goto('https://zetaweb.com.br/');
  await page.goto('https://zetaweb.com.br/#/');
  await page.goto('https://zetaweb.com.br/#/sign-in');
  await page.getByRole('link', { name: 'Não possui uma conta?' }).click();
  await page.getByLabel('Nome completo').click();
  await page.getByLabel('Nome completo').fill(email);
  await page.getByLabel('Nome completo').press('Tab');
  await page.getByPlaceholder('(99) 99999-').fill('(99) 9 9999-9999');
  await page.getByPlaceholder('(99) 99999-').press('Tab');
  await page.getByLabel('E-mail').fill(email);
  await page.getByLabel('E-mail').press('Tab');
  await page.locator('input[type="password"]').fill("Sarco2020!");
  await page.getByLabel('Aceito os').check();
  await expect(page.getByRole('button', { name: 'termos de uso' })).toBeVisible();
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.waitForTimeout(10000);
  await expect(page.locator('#z_app_toolbar').getByText('Dashboard')).toBeVisible();
});