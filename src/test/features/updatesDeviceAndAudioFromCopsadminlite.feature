Feature: Verify site sync when update from copsadminlite


@copsadminlite
  Scenario: Update sensor name in copsadminlite

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the device
    When click on sensor tab
    When Edit camera name
    When User navigates to the manitou application
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click device menu
    When Verify the sensor name


@copsadminlite
  Scenario: Update audio name in copsadminlite

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the device
    When click on sensor tab
    When Edit the audio type name
    When User navigates to the manitou application
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click device menu
    When Verify the audio type




