Feature: Reboot

    Tests rebooting of devices

    Scenario Outline: A device tile updates accordingly when rebooting a device
        When I navigate to the device dashboard
        And I click the Reboot button of the device at the "<Index>" address "<IPAddress>"
        Then the device status indicator becomes green

Examples:     
     |Index|IPAddress|
     |0    |10.198.162.1|
     |1    |10.198.162.2|
     |2    |10.198.162.3|