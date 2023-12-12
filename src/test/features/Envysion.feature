Feature: Verify the site if the manufature is ENVYSION


@ENVISON
  Scenario: Update a site for the manufature Envysion

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the ENVYSION device
    When Select the manufature as ENVISION
    When Enter user name for ENVISION
    When Enter password for ENVISION
    When Click on save
    When Verify the success message

  @ENVISON
  Scenario: Verify the option string if the manufature is ENVYSION

    Given as logged into manitou
    Given User enter the username in manitou
    Given User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on SYSTEM menu
    When Click on ENVYSION menu
    When Click device menu
    When select a camera
    When Verify the option string In ENVYSION

  @ENVISON
  Scenario: Verify address field if the manufature is ENVYSION

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links 
    When Select a test site
    When Select the store number
    Given as logged into manitou
    Given User enter the username in manitou
    Given User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on SYSTEM menu
    When Click on ENVYSION menu
    When Click device menu
    When select a camera
    When Verify the value in address field