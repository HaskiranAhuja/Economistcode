const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { By, Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

class CustomWorld {
  goToJobsPage() {
    return this.driver.get(BASE_URL);
  }

  start() {
    this.driver = buildDriver();
  }

  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
  findSearchFields()
  {
	  this.driver.findElement(By.id('keywords'));
	  this.driver.findElement(By.id('location'));
	  this.driver.findElement(By.id('RadialLocation'));
	  this.driver.findElement(By.id('width-full'));
	  return true;
	}
	
	
	findSectorLists()
  {
	  this.driver.findElement(By.linkText('Banking and finance'));
	  this.driver.findElement(By.linkText('Business services'));
	  this.driver.findElement(By.linkText('IT and telecoms'));
	  this.driver.findElement(By.linkText('Government'));
	  return true;
	}
	
	SignIn()
	{
		var url;
		this.driver.findElement(By.linkText('Sign in')).click();
		if(url=='https://jobs.economist.com/logon/')
			return true;
		else
			return false;
		
		this.driver.findElement(By.linkText('Create account')).click();
		if(url=='https://jobs.economist.com/logon/')
			return true;
		else
			return false;
	}
	
	goToFindJob()
	{
		var url;
		this.driver.findElement(By.linkText('Find a job')).click();
		if(url=='https://jobs.economist.com/jobs/')
			return true;
		else
			return false;
		
	}
	
	goToJobAlerts()
	{
		var url;
		this.driver.findElement(By.linkText('Job alerts')).click();
		if(url=='https://jobs.economist.com/newalert/')
			return true;
		else
			return false;
		
		
	}
	
	goToSearchRecruiters()
	{
		var url;
		this.driver.findElement(By.linkText('Search recruiters')).click();
		if(url=='https://jobs.economist.com/employers/')
			return true;
		else
			return false;
		
		
	}
	
	goToJobsBlog()
	{
		var url;
		this.driver.findElement(By.linkText('Jobs blog')).click();
		if(url=='https://jobs.economist.com/careers/')
			return true;
		else
			return false;
		
		
	}
	
	goToJobSector()
	{
		var url;
		this.driver.findElement(By.linkText('IT and telecoms')).click();
		if(url=='https://jobs.economist.com/jobs/it-and-telecoms/')
			return true;
		else 
			return false;
		this.driver.findElement(By.linkText('/job/23893/fully-funded-professional-development-program-in-russia-/?LinkSource=PremiumListing')).click();
	}
	goToJobSearch()
	{
		this.driver.findElement(By.id('keyword')).sendKeys('Economics');
		this.driver.findElement(By.id('location')).sendKeys('United kingdom');
		this.driver.findElement(By.xpath('//*[@type="submit"]')).click();
		
	}
	
	goToFooterLinks()
	{
        
	  this.driver.findElement(By.linkText('About Us'));
	  if(url=='https://jobs.economist.com/about-us/')
			return true;
		else 
			return false;
	  this.driver.findElement(By.linkText('Contact Us'));
	  if(url=='https://jobs.economist.com/contact-us/')
			return true;
		else 
			return false;
	  this.driver.findElement(By.linkText('Terms & Conditions'));
	  if(url=='https://jobs.economist.com/terms-and-conditions/')
			return true;
		else 
			return false;
	  this.driver.findElement(By.linkText('Privacy Policy'));
	  if(url=='https://jobs.economist.com/privacy-policy/')
			return true;
		else 
			return false;
	  this.driver.findElement(By.linkText('Advertise with us'));
	  if(url=='https://recruiters.jobs.economist.com/')
			return true;
		else 
			return false;
	  
	
	}	
}
setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
