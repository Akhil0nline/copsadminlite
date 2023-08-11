 Feature: Verify service level update

@service1
  Scenario: Verify save when change the service level

    Given as logged into copsadminlite
    When User enter the username in copsadminlite
    When User enter the password in copsadminlite
    When User click on the login button in copsadminlite
    When select company from the drop downlist
    When Click on sites links
    When Select a test site
    When Edit service level
    When Click on save account info
    When Verify the confirmation message


   