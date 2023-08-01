Feature: Verify the site if the manufature is ENVISON


@ENVISON
  Scenario: Verify the option string if the manufature is ENVISON

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a ENVISION test site
    When click on the device
    When Select the manufature as ENVISION
    When Enter user name for ENVISION
    When Enter password for ENVISION
    When Click on save
    Given as logged into manitou
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click device menu
    When select a camera
    When Verify the option string

  @ENVISON
  Scenario: Verify address field if the manufature is ENVISON

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a ENVISION test site
    When click on the device
    When Verify the manufature is ENVISION
    When Enter user name for ENVISION
    When Enter password for ENVISION
    When Click on save
    Given as logged into manitou
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click device menu
    When select a camera
    When Verify the value in address field