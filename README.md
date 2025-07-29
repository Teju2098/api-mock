# Playwright + JavaScript API Mocking 

## Environment Setup
1. Setup playwright 
```bash
npm init playwright 
```
2. Command to run the script
```bash
npx playwright test
```
3. Setup cucumber
``` bash
npm install --save-dev @cucumber/cucumber
```
4. Setup Allure Report for Plawright
``` bash
npm install -D @playwright/test allure-playwright
npm installl -g allure-commandline --save-dev 
```
5. Setup Allure Report for Cucumber
``` bash
npm install --save-dev allure-cucumberjs
npm installl -g allure-commandline --save-dev 
```
6. To Generate Allure report and open
``` bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```
