Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar
	
  Scenario: Search Fields renders
    Given I go to the search fields
    Then I should see the Search field options
	
  Scenario: SectorList fields renders
    Given I go to the sectorList fields
    Then I should see the sectorList fields options
	
  Scenario: Jobs blog renders
    Given I go to the Jobs blog
    Then I should see the Jobs blog option
	
  Scenario: Featured jobs renders
    Given I go to the Featured jobs
    Then I should see the Featured jobs option
	
	
   Scenario: Footer bar renders
    Given I go to the Footer bar
    Then I should see the Footer bar option
	
	
  Scenario: Sign in option renders
    Given I go to the Sign in option
    Then I should see the Sign in form
	

 Scenario: Find a job option works
    Given I click on Find a job option
    Then I should see a jobs page
	
 Scenario: Find a Job alerts works
    Given I click on Job alerts option
    Then I should see a job alerts page
	
  Scenario: Find Search recruiters works
    Given I click on Search recruiters option
    Then I should see a Search recruiters page
	
 Scenario: Find Jobs blog works
    Given I click on Jobs blog option
    Then I should see a Jobs blog page
	
	
Scenario: Find Jobs By Sector works
    Given I click on Sector option
    Then I should see a Job of that Sector
	
Scenario: Search Job works
    Given I entered value in Keyword and location
    Then I click on submit 
	
	
Scenario: Footer Links works
    Given I click on footer links
    Then I should see a info page  
	
	
	
	
	
	

  
  
	
	
	
  	
	
	
	