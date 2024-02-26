import { test, expect } from '@playwright/test';
//Esse arquivo contém as informações do login e ambiente
const { BASE_URL, EMAIL, PASSWORD } = process.env; 

test('fazendo login com conta ja existente', async ({ page }) => {

  //  const loginPage = new LoginPage(page);

  // await loginPage.login();

  await page.goto(`${BASE_URL}/#/sign-in`);
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('clientego3@compufour.com.br');
  await page.getByLabel('E-mail').press('Tab');
  await page.locator('input[type="password"]').press('CapsLock');
  await page.locator('input[type="password"]').fill('S');
  await page.locator('input[type="password"]').press('CapsLock');
  await page.locator('input[type="password"]').fill('Sarco2020!');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page.locator('#z_app_toolbar').getByText('Dashboard')).toBeVisible(); // Confere se chegou no dashboard
});