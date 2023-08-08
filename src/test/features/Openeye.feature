Feature: Verify the site if the manufature is OPENEYE


@OPENEYE
 Scenario: Update a OPENEYE device IN Copsadminlite

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the OPENEYE device
    When Select the manufature type as OPENEYE
    When Enter user name for OPENEYE
    When Enter password for OPENEYE
    When Enter Device id for OPENEYE
    When Click on save

    @OPENEYE  
    Scenario: Verify the option string if the Viewer type is IPC Core
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
    When select a camera
    When Verify the option string in OPENEYE
