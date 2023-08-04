Feature: Verify the site if the manufature is OPENEYE


@OPENEYE
  Scenario: Verify the option string if the manufature is OPENEYE

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a ipc CORE test site
    When click on the device
    When Verify the manufature is OPENEYE
    When select ipc core from the viewer type list
    When Enter user name for OPEN EYE
    When Enter password for OPEN EYE
    When Enter Device id for OPEN EYE
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
    When Verify the container created
