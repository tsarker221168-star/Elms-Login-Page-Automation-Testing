import { defineConfig } from '@playwright/test'; 
 
export default defineConfig({ 
  testDir: './tests', 
  use: { 
    baseURL: 'https://opensource-demo.orangehrmlive.com', 
    headless: false, 
screenshot: 'only-on-failure', 
video: 'retain-on-failure' 
} 
}); 