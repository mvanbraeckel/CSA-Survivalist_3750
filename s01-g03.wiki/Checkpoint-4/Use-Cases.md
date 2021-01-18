# Section 01 Group 03 - CSA Survivalists <!-- omit in toc -->

| Name                  |
| --------------------- |
| Kenneth Chan          |
| Jason Chow            |
| Peter Hudel           |
| Jason Nguyen          |
| Dixant Patel          |
| Mitchell Van Braeckel |

# Table of Contents <!-- omit in toc -->

- [Precondition: Logging Into the System](#precondition-logging-into-the-system)
- [Use Case 1: Creating Notifications](#use-case-1-creating-notifications)
  - [Core Path](#core-path)
  - [Alternative Paths](#alternative-paths)
- [Use Case 2: Managing a Group Page](#use-case-2-managing-a-group-page)
  - [Core Path](#core-path-1)
  - [Alternative Paths](#alternative-paths-1)

[Go Home](/home)

# Precondition: Logging Into the System

Before the user can access many of the application’s features, they must be logged in to the system. To do this, they will click on a login button on the home screen and the system will redirect them to the University of Guelph (UoG) Single Sign On (SSO) login page. The user will then enter their central login username and password which will authenticate the user. Some scenarios to consider include a user creating an account, a user forgetting their password, or authentication failing due to incorrect username and/or password. However, as the system authenticates using SSO, the system is not responsible for account management because central login accounts are handled by the University of Guelph. For instance, the user would be redirected to the Computing and Communications Services (CCS) page for help with their password if they are having issues logging in. After the user has successfully logged in, they are redirected to the application’s home screen. The user must be logged in for the following use cases.

# Use Case 1: Creating Notifications

The primary actor for this use case is a student who is logged in to the system. The secondary actor is the system because it is responsible for creating notifications and notifying the student when a notification triggers. In this use case, the student will create a new notification to remind them about an event that is occurring at a date and time. This use case has the precondition that the user must be logged in so they have access to their newsfeed and calendar.

## Core Path

1. Once the user is logged in to the application, the system will display the home screen which allows the user to navigate to all of the application's pages.
2. The user will view their notifications by clicking on the newsfeed icon on the home screen. The system will take the user to their personalized newsfeed which will display all triggered and upcoming notifications.
3. The user will navigate to the top of the page and locate the create notification button. The user will click the button and a popup will appear. This popup will prompt the user for input regarding the name of the notification and the date that the notification will occur.
4. When the user is finished entering information, they will click the save button and the system will store the new notification in their newsfeed. The popup will be removed and the user will be returned to their newsfeed.

## Alternative Paths

1. If the precondition of the user needing to be logged in is not met, then the only notifications that will be displayed are official UoG notifications, and the user cannot create, edit, or remove any notifications.
2. The user can also create notifications directly from their calendar. The user will navigate to the calendar page by clicking on the calendar icon on the home screen. When the user double clicks or clicks and holds on a specific date or event, the same popup for creating a notification will occur. If a specific date is highlighted, then the system will autocomplete the date and time. If an event is highlighted, then the system will autocomplete the name,  date, and time.
3. If the user wants to make an alarm type notification, then the user must specify the time in which the notification will trigger. If no time is specified when creating a notification, it will default to an all-day notification with the time set to 12 AM.
4. If the user tries to leave the page before finishing the creation or modification of a notification, the system will create a popup message confirming the action and ask if the user wants to save their changes. Depending on their choices, the system will save the changes and edit the notification accordingly.

No matter how they choose to create the notification, it will now be displayed in their newsfeed and calendar. This postcondition will be true for every path that the user can take for this use case. After creating the notification, it will be saved to their account on the server.

# Use Case 2: Managing a Group Page

This use case is about a user who is trying to manage information about a group. The primary actor in this use case is a content moderator who has permissions to manage a group’s information. The secondary actor is the system which is responsible for allowing a content moderator to edit group information, post information, and add content to the group page. Before a content moderator is able to perform these actions, certain preconditions must be met. To begin with, whoever is trying to perform this specific use case must be logged in to the system and authenticated as a content moderator for at least one group so they are able to modify the group’s page. We are also assuming that the group already exists in the system and doesn’t need to be created beforehand.

## Core Path
1. The content moderator needs to navigate to a group that they are managing. They will click on the group icon on the home screen and the system will display every group currently stored in the application.
2. The content moderator will enter the name of the group into the search bar and the system will constantly filter the groups displayed based on the text entered.
3. The content moderator will then click on the group that they wish to edit and the system will display the group’s page.
4. In the group page, the content moderator will click the edit button and the system will display all of the group page’s editable fields.
5. The content moderator can modify the group’s title and description by clicking on their respective fields.
6. The content moderator will click the save button when they are done editing. Before the changes are saved, a confirmation popup will appear. Once the content moderator confirms, the system will save the edited information for the group page.

## Alternative Paths
1. Rather than searching for a group by name, they can click on a filter button and the system will display a list of available filters for searching groups. These filters include bookmarked/saved groups and groups that you are a member of. In each of these cases, the system will filter out the groups displayed according to the selected filter.
2. If a user wishes to edit a group page but they are not a content moderator for the group, then the system will not display the edit button.
3. If a content moderator makes a mistake while editing a group page and would like to undo all changes, then they can click a reset button to clear any changes.

The user must confirm their actions when they have finished modifying a group page’s content through a confirmation popup. In the postcondition, the system will save the state of the group with the new changes. Users will see the updated group page when they refresh the page.
