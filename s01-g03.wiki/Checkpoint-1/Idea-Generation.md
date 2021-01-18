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

This page contains all of our brainstorming ideas for our application.

- [Services and Discovery](#services-and-discovery)
    - [Location Discovery](#location-discovery)
    - [General Information](#general-information)
    - [Student Information](#student-information)
    - [App Integration](#app-integration)
- [System Interaction](#system-interaction)
    - [Interface and Interaction](#interface-and-interaction)
    - [Platforms](#platforms)
    - [Content](#content)
    - [Functionality](#functionality)
- [Content Management](#content-management)
    - [Storage Methods](#storage-methods)
    - [Tools](#tools)
- [Anything Else](#anything-else)
    - [Initial Design](#initial-design)

[Go Home](/home)

# Services and Discovery

### Location Discovery

> What are some locations that one might be interested in?

- **Core Functions**
  - Campus map
    - Buildings
    - Classrooms
    - Parking spots
  - Study areas
    - Library
    - Reynolds basement
    - Summerlee Science Complex atrium
    - Thornbrough think tank
  - Lounges
    - Engineering lounge
    - OCUS lounge

- **Food & Drink**
  - Microwaves
  - Restaurants
  - Vending machines
  - Water bottle refill stations
  - Water fountains

- **Miscellaneous**
  - AEDs
  - ATMs
  - Emergency poles
  - Fire alarms
  - First-aid kits
  - Pay phones
  - Residence call boxes
  - Washrooms

### General Information

> What information would the general population be interested in?

- Athletics centre info
- Campus community police
  - Emergency numbers
  - Help lines
- Campus events
- Electronic access
- Fun trivia
- Hospitality services info
  - Restaurants and menus
- Library info
- Parking info
- Registrarial services
- University of Guelph directory

### Student Information

> What information would students be interested in?

- Accessibility services
- Bookstore
- Campus organizations
  - Clubs
  - CSA
- CCS tech support
- Co-operative education & career services
- Course info
- Intramurals
- Library writing services
- Meal plan info (including what accepts Flex dollars)
- Residence info
- Safe walk / Gryph walk info
- STARTonTrack
- Student wellness info
  - Counselling
  - Health services
  - Mental health support
- Supported Learning Groups
- Textbooks
- The Cannon
- Tutoring

### App Integration

> Are there existing applications that can be integrated?

- [Course 2 Calendar for UofG](https://jhvisser.com/course/)
- [Guelph Course Scheduler](https://guelph.scheduler.online/)
- [SafeGryphon](https://www.uoguelph.ca/police/safegryphon-app)
- Emergency notification system implementation

# System Interaction

### Interface and Interaction

> How will the application display its information to the user?
> What are some methods of interacting with the application?

- **Display**
  - Inputting information
    - Checkboxes
    - Date and time pickers
    - Dropdown lists
    - Radio buttons
    - Text fields
    - Toggles
  - Navigation components
    - Breadcrumbs
    - Buttons
    - Pagination
    - Search fields
  - Organizing information
    - Calendar
    - Cards
    - Grids
    - Hovers
    - Lists
    - Menus
    - Modals
    - Pages
    - Pop-ups
    - Tables
    - Tabs
  - Support multiple themes
    - Dark
    - High contrast
    - Light

- **IO Devices**
  - Gestures
  - Keyboard
  - Mouse
  - Shortcuts
  - Speech
  - Touch screen

- **Accessibility Features**
  - Colour blind options
  - Font size / text scaling
  - Multiple languages
  - Screen reader
  - Zoom

### Platforms

> What are some possible devices that this application should support?

- **Devices**
  - Apple watch
  - Desktop / Laptop
  - Echo
  - Fitbit
  - Google glasses
  - Google home
  - Phone
  - Tablets

- **Clients**
  - App
  - Program
  - VR / AR
  - Website

### Content

> What content should the application support?

- Alarms
- AMA
- Articles
- Audio / Music
- Blogs
- Calendar
- Email or system notifications
- Events
- External links
  - Email addresses
  - Phone numbers
  - Websites
- FAQ
- Groups
- iCalendar files
- Meetings
- Messages
- Personal notes
- Pictures
- Reminders
- Social media
- Surveys
- Video

### Functionality

> What are some potential uses, features, or functions of the application?

- Authentication
- Browse events and articles
- Calculators
  - Meal plan cost
  - Residence cost
  - Tuition cost
- Calendar sharing
- Commenting on content
- Feedback / suggestion system
- Image sharing
- Importing & exporting iCalendar files
- Interactive map
- Liking content
- Meeting & event invitations
- Messaging
  - Group chat for courses
  - Help chat
- Offline mode
- Playing audio and video
- Print any content
- Quick access to common forms to fill out for services
- Scheduling events
- Set reminders and alarms
- Sharing content to social media
- Show recommended activities
- Show trending activities
- Sync data between platforms
- Taking notes

# Content Management

### Storage Methods
> How will the application manage the content?

- Databases
- File storage
- Arrays
- Data structures
- Tables
- AWS
- Calendar
- Events list
- Calendar events are either timeframed or generic “all day” (can span multiple days, or have recurring events)

### Tools

> How will the team team manage work and organize our content?

- **Article Management (code and documents)**
  - GitLab
  - Google Drive (docs, sheets, ppt, etc)
  - Office 365 (MS word, excel, ppt, etc)
  - OneDrive
  - Dropbox
  - Confluence
  - Atlassian Cloud
  - CI/CD (Docker, Jenkins)

- **Workflow Tracking**
  - Trello
  - AgileCraft
  - Jira

- **Communication**
  - Slack
  - Discord
  - SMS

# Anything Else

### Initial Design

1. Logging in (admin - special privileges to user)
   - Two-factor authentication
   - Biometrics
   - Log on with Google/Facebook/Twitter etc.
   - Sync account with other info from different social media

2. Brought to Notifications Stream (as a home page)
   - Contains calendar notification (option to opt-out)
   - UoG official announcements (all)
   - Event information (subscribed to)
   - Emergency System Notifications (official UoG, eg. power out, campus closed)
   - Random Tips/Tricks (eg. common/recent phishing info)
   - CCS-related information feed

3. Calendar (their event planner and list)
   - Has multiple views: monthly, weekly, daily, “upcoming”
   - View is either a time-framed grid of 30min per cell each day column OR list of each event in - chronological order (“all day” / events without time appear at the top, not in the time grid)
   - Ability to add and edit events, including notifications/reminders per event
     - Can create recurring events
     - Can set urgency of reminder (general, important, urgent)
     - Events can span multiple days
     - Invites for events can be sent out as email (notifications)
     - Able to set notification timing (eg. reminder occurs 15min, 18 hours, etc before the event time - itself)
   - Ability to share calendar by giving other users permission to view/access your own
     - Different levels: full block, blocked view (chunks of time), detailed view (can see event details - such as title and location), edit capabilities

4. Menu / Sidebar of additional information sections & services info discovery
   - This is where specific categorized streams such as settings, profile, UoG official announcements, hospitality services, help services, etc.
     - Each has its own section in the menu

5. Map (mainly on-campus, but some off-campus key points are represented too)
   - This is where the user can use a map with overly of significant places and points to locate things
     - Key buildings and landmarks are marked on map (display text over it)
     - Also has interior building maps / layouts
   - Ability to select a location and finds a route there from current location or set starting point to the designation destination
     - Especially useful for finding classrooms within a building
     - Also for finding study areas during busy times when library is full
   - Has a legend for each icon (eg. ATM, eats/drinks, water fountain / bottle refill station, emergency phone, washrooms, etc.)
   - The above features also apply to some extent of off-campus, but nearby campus-affiliated places that host students as regulars

6. Settings and Profile
   - Accessed from the menu
   - Profile settings are separate
     - Modify things such as picture, name, bio info, email, phone #, etc
   - Settings include:
     - Themes / colour schemes
     - Colour blind modes
     - Dark / light(default) mode/theme
     - Change password ?
     - Notification settings (tone/sound, volume, mute, etc)
     - Enable text to speech
