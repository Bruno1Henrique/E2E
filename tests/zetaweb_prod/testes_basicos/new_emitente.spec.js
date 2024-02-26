const { BASE_URL, EMAIL, PASSWORD } = process.env; 
import { test, expect } from '@playwright/test';
const faker = require('faker-br'); //Gerador de dados aleatórios
//Esse arquivo contém as informações do login e ambiente


test('criando uma nova conta', async ({ page }) => {
    const email = faker.internet.exampleEmail();
    let meuCpf = faker.br.cpf();
    
    await page.goto(`${BASE_URL}/#/sign-in`);
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

    // Cadastrando os dados do emitente

    await page.getByRole('link').nth(2).click();
    await page.getByRole('link', { name: 'Dados da empresa' }).click();
    await page.getByLabel('Razão social / nome*').click();
    await page.getByLabel('Razão social / nome*').fill('Esse é um teste');
    await page.getByLabel('Nome fantasia / apelido*').click();
    await page.getByLabel('Nome fantasia / apelido*').fill('Esse é um teste');
    await page.getByLabel('CPF/CNPJ*').click();
    await page.getByLabel('CPF/CNPJ*').fill(meuCpf);
    await page.getByLabel('Inscrição Estadual').click();
    await page.getByLabel('Inscrição Estadual').fill('123456');
    await page.getByLabel('CNAE').click();
    await page.getByLabel('CNAE').fill('123456');
    await page.getByRole('button', { name: 'Endereço' }).click();
    await page.getByLabel('CEP').click();
    await page.getByLabel('CEP').fill('89705110');
    await page.getByLabel('Logradouro').click();
    await page.getByLabel('Número').click();
    await page.getByLabel('Número').fill('10');
    await page.getByLabel('Complemento').click();
    await page.getByLabel('Complemento').fill('Casa');
    await page.getByLabel('Bairro').click();
    await page.locator('#z_app_content_container').getByRole('button', { name: 'Salvar' }).click();
    await expect(page.getByText('Salvo com sucesso!')).toBeVisible();

});
