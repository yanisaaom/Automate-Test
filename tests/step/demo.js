const { Given, When, Then,} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require("@playwright/test");

let browser;
let page;

//open เว็บไซต์
Given("เปิดเว็บไซต์ PMRP {string}",{ timeout: 30000 } , async function (url) {
    browser = await chromium.launch({ headless: false, slowMo: 1000 });
    page = await browser.newPage();
    await page.goto('http://203.154.184.162:5001/');
})

When("กรอก username {string}", { timeout: 65000 },async (string) => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
});

When("กรอก password {string}", { timeout: 65000 },async (string) => { 
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
});

When("คลิกปุ่ม Sign in {string}", { timeout: 65000 }, async (buttonName) => {
  await page.getByRole('button', { name: buttonName }).click();
});

Then('แสดงหน้าหลัก', async function () {
  await page.getByText('สวัสดี Kissadapa Nguanchonกรุณาเลือก Company/OEMkubotaสำนักงานใหญ่Komatsu')
});

//-----------------------------------------
// ไปที่หน้า Permission
When("เลือก OEM Komatsu {string}", { timeout: 65000 }, async (string) => {
  await page.getByText('Komatsuสำนักงานใหญ่').click();
});

When("เลือกเมนูหลัก Ticket Management Center {string}", { timeout: 65000 }, async (string) => {
  await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
});

When("เลือกเมนูย่อย Setting PermissionSLA {string}", { timeout: 65000 }, async (string) => {
  await page.getByRole('menuitem', { name: 'Setting Permission/SLA' }).click();
});

When("เลือกเมนู permission {string}", { timeout: 65000 }, async (string) => {
  const permissionMenuItem = page.getByRole('menuitem', { name: 'Permission' }).last();
  await permissionMenuItem.waitFor({ state: 'visible' });
  await permissionMenuItem.click();
  await page.waitForTimeout(500);
  await page.locator('#burger_icon_pc').click();
});

//-----------------------------------------
// คลิกปุ่ม Sync
When("คลิกปุ่ม Sync {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('button', { name: 'Sync' }).click();
});

//-----------------------------------------
// ทดสอบการค้นหาด้วย Name
When("ค้นหาด้วย Name {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When("กรอกข้อมูล Name {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('Team');
});
When('คลิกค้นหา Name {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// ทดสอบการค้นหาด้วย Department
When("ค้นหาด้วย Department {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When("กรอกข้อมูล Department {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('Transform');
});
When('คลิกค้นหา Department {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// ทดสอบการค้นหาด้วย Position
When("ค้นหาด้วย Position {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When("กรอกข้อมูล Position {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('Test');
});
When('คลิกค้นหา Position {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// ทดสอบการค้นหาด้วย Email
When("ค้นหาด้วย Email {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When("กรอกข้อมูล Email {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('Jeerawat');
});
When('คลิกค้นหา Email {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// ทดสอบการค้นหาด้วย Line ID
When("ค้นหาด้วย Line ID {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When("กรอกข้อมูล Line ID {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('Wilaiwan');
});
When('คลิกค้นหา Line ID {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// ทดสอบการค้นหาด้วย Phone
When("ค้นหาด้วย Phone {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When("กรอกข้อมูล Phone {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('0952505635');
});
When('คลิกค้นหา Phone {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//-----------------------------------------
// ทดสอบการค้นหาด้วย Dropdown Permission
When("คลิก Dropdown Permission {string}", { timeout: 65000 }, async (text) => {
  await page.locator('.ant-select-selection-overflow').click();
  //await page.getByText('Super Admin').nth(5).click();
});
When('คลิกเลือก status {string}', { timeout: 65000 }, async function (statusName) {
  const optionLocator = page.getByText(statusName, { exact: true }).nth(3);
  //await optionLocator.waitFor({ state: 'visible', timeout: 10000 }); 
  await optionLocator.click({ force: true });
  await page.getByText(statusName, { exact: true }).first().waitFor({ state: 'visible', timeout: 15000 });
});
When('คลิกค้นหา Permission {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//-----------------------------------------
// ทดสอบการค้นหาข้อมูลที่ไม่มีในตาราง
When("ค้นหาด้วยข้อมูลที่ไม่มีในตาราง {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#input_text_button_search_ticket_permission').click();
});
When('กรอกข้อมูลในช่องค้นหา {string}', { timeout: 65000 }, async (dataToSearch) => {
  await page.locator('#input_text_button_search_ticket_permission').fill('Sunday');
});
When('คลิกค้นหา {string}', { timeout: 65000 }, async function (buttonText) {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//-----------------------------------------
// ทดสอบการ Clear ข้อมูลค้นหา
When("คลิกปุ่ม Clear {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//-----------------------------------------
// ตรวจสอบ Tooltip ชื่อผู้ใช้
When("นำเมาส์ไปวาง ชื่อผู้ใช้ {string}", { timeout: 65000 }, async (text) => {
  await page.getByText('gen account (ไทย)').hover();
});

 When('นำเมาส์ออก', { timeout: 65000 }, async function () {
    // ย้ายเมาส์ไปยังตำแหน่งมุมซ้ายบน (0, 0) เพื่อให้ Tooltip หายไป (ยกเลิกการ hover)
    await page.mouse.move(0, 0); 
});

// ตรวจสอบ Tooltip Department
When("นำเมาส์ไปวาง Department {string}", { timeout: 65000 }, async (text) => {
  await page.getByText('Transform').nth(2).hover();
  await page.mouse.move(0, 0);
});

// ตรวจสอบ Tooltip Position
When("นำเมาส์ไปวาง Position {string}", { timeout: 65000 }, async (text) => {
  await page.getByText('นักวิเคราะห์ระบบ').nth(1).hover();
  await page.mouse.move(0, 0);
});

// ตรวจสอบ Tooltip Permission status
//When("นำเมาส์ไปวาง Permission {string}", { timeout: 65000 }, async (text) => {
  //await page.getByText('Implementer').hover();
  //await page.mouse.move(0, 0);
//});

// ตรวจสอบ Tooltip เบอร์โทร
When("นำเมาส์ไปวาง เบอร์โทร {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#root').getByText('-777-4444').hover();
  await page.mouse.move(0, 0);
});

// ตรวจสอบ Tooltip Email
When("นำเมาส์ไปวาง Email {string}", { timeout: 65000 }, async (text) => {
  await page.getByText('jeerawat62009@gmail.com').nth(1).hover();
  await page.mouse.move(0, 0);
});

// ตรวจสอบ Tooltip LineID
When("นำเมาส์ไปวาง LineID {string}", { timeout: 65000 }, async (text) => {
  await page.locator('#root').getByText('Wilaiwan').hover();
  await page.mouse.move(0, 0);
});

//-----------------------------------------
// ทดสอบการสลับจาก List View ไป Card View
When("คลิก Card View {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('button', { name: 'appstore' }).click();
});

//-----------------------------------------
// ทดสอบการสลับจาก Card View ไป List View
When("คลิก List View {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('button', { name: 'unordered-list' }).click();
});

//-----------------------------------------
// ทดสอบการสลับสถานะเป็น Active
When("คลิกสลับเป็น Active {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('switch').first().click();
});

//-----------------------------------------
// ทดสอบการสลับสถานะเป็น Inactive
When("คลิกสลับเป็น Inactive {string}", { timeout: 65000 }, async (text) => {
  await page.locator('div:nth-child(7) > div:nth-child(5) > div:nth-child(2) > .ant-switch').click();
});

//-----------------------------------------
// ทดสอบการเลือกสถานะ Permission
When("คลิก Dropdown Status", { timeout: 65000 }, async () => {
  await page.getByText('Not Permission').first().click();
});

When('คลิกเลือก Permission status {string}', { timeout: 65000 }, async function (statusName) {
  await page.getByText(statusName, { exact: true }).last().click();
  //await page.getByText('Super Admin').nth(4).click();
});

//-----------------------------------------
// ทดสอบการลบสถานะ Permission ด้วยไอคอน x
When("ลบ Permission status {string}", { timeout: 65000 }, async (text) => {
  await page.locator('.anticon.anticon-close-circle > svg').first().click();
});

//-----------------------------------------
// ทดสอบการเปลี่ยนไปหน้าถัดไป (Next Page)
When("คลิก Next Page {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('button', { name: 'right' }).click();
});

//-----------------------------------------
// ทดสอบการเปลี่ยนกลับไปหน้าก่อนหน้า (Previous Page)
When("คลิก Previous Page {string}", { timeout: 65000 }, async (text) => {
  await page.getByRole('button', { name: 'left' }).click();
});

//-----------------------------------------
// ทดสอบการคลิกเลือกเลขหน้า เพื่อกดไปยังหน้าอื่น
When("คลิกเลือกเลขหน้า {string}", { timeout: 65000 }, async (text) => {
  await page.getByText('2', { exact: true }).click();
});

//-----------------------------------------
// ทดสอบการเปลี่ยนจำนวนรายการต่อหน้า (เช่น 20 / page)
When("คลิก Dropdown Page Size", { timeout: 65000 }, async () => {
  await page.getByText('/ page').click();
});
When("คลิกเปลี่ยนจำนวน {string}", { timeout: 65000 }, async (pageSize) => {
  const pageNumber = pageSize.split('/')[0].trim();
  await page.getByRole('option', { name: pageNumber }).click({ force: true });
});