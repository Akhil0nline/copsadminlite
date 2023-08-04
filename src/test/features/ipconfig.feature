Feature: Verify the site if the manufature is IPCONFIG


@IPC
  Scenario: Update a IPC Core device
    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the ipc device
    When Select the manufature type as ipc
    When select ipc core from the viewer type list
    When Enter user name for ipc core
    When Enter password for ipc core
    When Click on save
    Given as logged into manitou


  @IPC
  Scenario: Verify the option string if the Viewer type is IPC Core
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on SYSTEM menu
    When Click on IPC-CORE menu
    When Click device menu under IPC-CORE
    When select a camera
    When Verify the option string in IPC

  @IPC
  Scenario: Update a IPC Fusion Device
    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When click on the ipc Fusion device
    When Select the manufature type as ipc
    When select ipc Fusion from the viewer type list
    When Enter Deviceid for ipc Fusion
    When Click on save

 @IPC
  Scenario: Verify the option string if the Viewer type is IPC Fusion

    Given as logged into manitou
    When User enter the username in manitou
    When User enter the password in manitou
    When User click on the login button in manitou
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on SYSTEM menu
    When Click on IPC-Fusion menu
    When Click device menu under IPC-Fusion
    When select a camera
    When Verify the option string in IPC FUSION