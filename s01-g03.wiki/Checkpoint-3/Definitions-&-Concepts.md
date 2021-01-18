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

- [Glossary](#glossary)
  - [User Role Definitions](#user-role-definitions)
  - [Personas and Specific Actors](#personas-and-specific-actors)
  - [Priorities](#priorities)
  - [Concepts](#concepts)
  - [Definitions](#definitions)

[Go Home](/home)

# Glossary

## User Role Definitions

**Users**

- Every potential user of the application. These are requirements that affect everybody. This includes people who are not logged in, users who have an account, and users with special privileges.

**Students**

- These are users who have signed into the application. They have extra permissions that guest users do not have. This is the default logged-in permission, even for employees or staff that have not been given higher ranking access and permissions.

**Moderators**

- These are users who maintain specific pages on the application, such as clubs or other informative content. They have additional privileges allowing them to control how their pages are displayed.

**Administrators**

- These are users who have every permission allowed on the application. They have access to every page and have additional security features for their account.

**System**

- These are specific requirements that are related to the application and not a particular person.

## Personas and Specific Actors

**This section relates to what we did in checkpoint 2. Any personas that we created fall under the User Roles.**

**Users**

- **Students**
  - Undergraduate Student (Undergrad), Graduate Student (Grad), Prospective Student (Prospective), Administrator (Admin), Content Moderator (Moderator), Disabled Persons/Students (Disabled)
- **Moderator and Administrators**
  - Administrator (Admin), Content Moderator (Moderator)

## Priorities

The priorities for the requirements document follows a 10-100 scale with intervals of 10. Because the requirements document is already prioritized by ID number, the priorities follow the IDs. As such, they follow an ascending order. 10 is the highest priority and should be focused on before other requirements. Once all of the level 10 requirements are finished, the next level is 20 and those should be focused on next. This continues all the way until level 100. These are requirements that shouldn’t be focused on until the rest of the application is developed.

## Concepts

**Accessibility Features**

- These are features that are meant to help users of the application that may have more difficulty using it compared to the average person. Specific accessibility features are listed in the requirements documentation, but some of these examples may include a colour-blind mode and translation features to another language.

**Content Moderation**

- Moderators are able to perform content moderation. This includes actions such as kicking regular students from a group or deleting messages. Administrators have additional permissions such as adding or removing moderators, managing moderators, and managing the entire application.

**Permissions**

- Specific actions a particular user group can perform. Each user group has different permissions which define the abilities that they have with the application. The users are ranked in the following order of what they can do in the application:
  - Administrator > Moderator > Student > User

**Problematic Group**

- A group that does not uphold the standards and code of conduct that the University of Guelph dictates. A problematic group is also defined by the discretion of the individual moderator/administrator who must make the decision to enforce content moderation.

**Requirements Document Format**

- Our requirements document is formatted in a particular order. It is ordered by the priority of when something should be completed. There are 4 main categories: Musts, Shoulds, Coulds, and Wonts. Each of those categories are further organized based off of features. Each feature is generally kept together to maintain a better logical flow of the application. Each of those features are also ordered by importance of said feature. For example, having a campus map is more important than having information about groups offered at the university, so map features have a higher ID and should be focused on delivering.

**Settings**

- These are settings that the user has control over for the application. There are two types of settings for this application: personal settings and application settings. Application settings are settings that are global to how the application functions. In contrast, personal settings are settings that the user can control in relation to their account, such as their display picture, username, and any other profile settings.

## Definitions

**2FA:**: Acronym for "Two-Factor Authentication"

**API:** Acronym for "Application Programming Interface". A way for one application to get information from another application. For example, our calendar app can talk to an external program to update information.

**Application:** The program that we are developing for the client.

**Ban:** The action of a moderator prohibiting a user from contacting or accessing the online aspects of the community across the entire application (i.e. logged-in users will only have access to the calendar feature).

**Biometrics:** Features for logging in that scan the human’s biology rather than requiring a password. These features may include fingerprints and iris scanning.

**Bookmark:** A saved "shortcut" to a particular item. For our application, this refers to a collection of saved waypoints that a user can access at a later time without having to find it directly on the map.

**Calendar:** A grid-like view of events that a user created for a specific date and time. For our application, this refers to the user being able to set when a notification will appear and view it on a calendar.

**Campus:** The main property that the university owns. This is where all lectures and labs are held, and is the main focus of this application.

**Campus Map:** A visual representation of all potential locations that a student may need to know information about that is on campus. Similar to something like Google Maps.

**Channel:** An internet-connected "chat room" where members of a particular group can send messages to one another.

**Club:** A collection of people who are participating in a common activity, usually managed by a person or group of people. We use this term interchangeably with Group.

**Concurrent:** Occurring at the same time as something else.

**Event:** Something that occurs on a particular day and time in relation to the calendar.

**Group:** A collection of people who are participating in a common activity, usually managed by a person or group of people. We use this term interchangeably with Club.

**Handle:** An identifier for the user: "@centralLoginID", where the central login ID is the username for SSO (i.e. the part before the @ delimiter of an email address, centralLoginID@uoguelph.ca). For example, "@jsmith".

**Interface:** Also known as a user interface or UI. This is the part of the application that the user interacts with to perform specific actions.

**Kick:** The action of a moderator removing a user from a group entirely, or just the messaging aspect.

**Legend:** A collection of small icons on the map that denote certain waypoints, buildings, or other points of interest.

**NA:** Acronym for "not applicable".

**Notification:** An alert for an important event that will happen in the application.

**Push Notification:** The type of notification that happens outside of an app directly on your phone. For example, when someone texts you, a push notification is sent so you open the texting app.

**Residence:** A location that a student may live in while studying for classes. Residences are located on the campus of the university and are owned by the university.

**Review:** A user-submitted overview of their experience for a specific topic. For this application, reviews would correspond to how much a user enjoyed living in a particular residence. This may include the food options available, the size of the rooms, and how many activities there were. This example is not exhaustive.

**SSO:** Acronym referring to UoG Single Sign-On.

**System:** Another word for application. We use this term to refer to the program. Two-Factor Authentication: Authentication method that requires a user to validate who they are, using at least two pieces of information (2 "factors") before they are given access to their account. Examples of this may include getting a text message verification code and having to enter that code before logging in.

**University:** The university that we are developing this application for, specifically the University of Guelph.

**UoG / UofG:** The abbreviated form of the University of Guelph.

**UoG Single Sign-On:** University of Guelph’s login authentication service that allows users to use a single ID and password to access multiple websites/services. Also referred to as a user’s "central login".

**Waypoints:** A location of interest on the map.

**Website:** A collection of web resources, pages, and multimedia content. In this case, the website refers to our application that is being developed. It would be a program that is accessible through the internet via a link.

**Workday:** A typical workday is 8 hours long.

**Work Week:** 5 days out of the week. Also known as a business week.
