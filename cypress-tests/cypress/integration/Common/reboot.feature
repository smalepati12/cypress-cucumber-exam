Feature: Reboot

    Tests rebooting of devices

    Scenario Outline: A device tile updates accordingly when rebooting a device
        When I navigate to the device dashboard
        And I click the Reboot button of the device at the address "<IPAddress>"
        Then the device status indicator becomes green

Examples:     
     |IPAddress|
     |0        |
     |1        |
     |2        |