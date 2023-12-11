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
    When click on the OPENEYE device
    When click on sensor tab
    When Edit camera name
    When Click on save button in sensor tab

@copsadminlite
  Scenario: Verify the sensor name in manitou

    Given as logged into manitou
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on SYSTEM menu
    When Click on OPENEYE menu
    When Click device menu under OPENEYE
    When Verify the camera name


@copsadminlite
  Scenario: Update audio name in copsadminlite

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the OPENEYE device
    When click on audio tab
    When Enter audio zone name
    When click on save all button in the audio tab

   @copsadminlite
  Scenario: Verify the audio zone  in manitou 
    Given as logged into manitou
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on SYSTEM menu
    When Click on OPENEYE menu
    When Click device menu under OPENEYE
    When Verify the audio type




