Feature: Reboot

    Tests rebooting of devices

    Scenario: A device tile updates accordingly when rebooting a device
        When I navigate to the device dashboard
        And I click the Reboot button of the device at the address "10.198.162.2"
        Then the device status indicator becomes green
