const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})
 
Given(/^I go to the search fields$/, () => World.goToJobsPage());

Then(/^I should see the Search field options$/, async () => {
  return World.findSearchFields();
})

Given(/^I go to the sectorList fields$/, () => World.goToJobsPage());

Then(/^I should see the sectorList fields options$/, async () => {
  return World.findSectorLists();
})

Given(/^I go to the Jobs blog$/, () => World.goToJobsPage());

Then(/^I should see the Jobs blog option$/, async () => {
  return World.driver.findElement(By.xpath("//span[contains(text(),'Jobs blog')]"));
  
  })
  
Given(/^I go to the Featured jobs$/, () => World.goToJobsPage());

Then(/^I should see the Featured jobs option$/, async () => {
  return World.driver.findElement(By.xpath("//span[contains(text(),'Featured jobs')]"));
  
  })
  
Given(/^I go to the Footer bar$/, () => World.goToJobsPage());

Then(/^I should see the Footer bar option$/, async () => {
  return World.driver.findElement(By.xpath("//nav[@class='tertiary-nav block']"));
  
  })
  
Given(/^I go to the Sign in option$/, () => World.goToJobsPage());

Then(/^I should see the Sign in form$/, async () => {
  return World.SignIn();
  
  })
  

Given(/^I click on Find a job option$/, () => World.goToJobsPage());

Then(/^I should see a jobs page$/, async () => {
  return World.goToFindJob();
  
  })
  
  
Given(/^I click on Job alerts option$/, () => World.goToJobsPage());

Then(/^I should see a job alerts page$/, async () => {
  return World.goToJobAlerts();
  
  })
  
  
Given(/^I click on Search recruiters option$/, () => World.goToJobsPage());

Then(/^I should see a Search recruiters page$/, async () => {
  return World.goToSearchRecruiters();
  
  })
  
  
Given(/^I click on Jobs blog option$/, () => World.goToJobsPage());

Then(/^I should see a Jobs blog page$/, async () => {
  return World.goToJobsBlog();
  
  })
  
Given(/^I click on Sector option$/, () => World.goToJobsPage());

Then(/^I should see a Job of that Sector$/, async () => {
  return World.goToJobSector();
  
  })
  
 Given(/^I entered value in Keyword and location$/, () => World.goToJobsPage());

Then(/^I click on submit$/, async () => {
  return World.goToJobSearch();
  
  }) 
  
   Given(/^I click on footer links$/, () => World.goToJobsPage());

Then(/^I should see a info page$/, async () => {
  return World.goToFooterLinks();
  
  }) 
  




 
  
  
  
  
  

  
  
  
  
  
  
  

	




