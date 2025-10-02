# zk-website CHANGELOG

### v0.1.8 - 02/10/2025

- major content rewrite: updated About, Story, and Hobbies sections for professionalism and conciseness
- achievements overhaul: added new 2025 DSTA YDSP Scholarship, restructured with sideAchievements array, removed outdated entries (e.g., old awards, multiple AAA)
- projects cleanup: removed old tutorial-based projects (ZK Three Portfolio, Cinewave, ZK-GPT3 Website, ZKGericht)
- UI enhancements: integrated custom fonts (Satoshi for headers, Inter for body), updated card borders and colors (red titles, slate borders), improved accessibility (buttons over divs)
- asset updates: switched hero video to WebM format with preload/poster, added new images (PNG profiles, DSTA achievement), added custom fonts directory, deleted unused JPEG images
- structural changes: removed versions page, updated footer to display last updated instead of versions link, optimized project page rendering with notFound() and direct data fetching
- config updates: added turbopack to dev/build scripts, updated tsconfig target to ES2017, added CSS radius variable
- performance improvements: memoized achievements data, simplified component logic and removed unnecessary effects
- added google search console verification file

### v0.1.7 - 27/10/2024

- added 'achievements' section
- added 'achievements' page

### v0.1.6a - 8/8/2024

- edited story
- changed header to only have slate background on homepage, and turn black on other pages
- made animations for 'github' and 'live website' links on project pages animate on group hover

### v0.1.6 - 12/5/2024

- made versions page header centered
- made versions page header non-gradient
- added fiverr as contact method
- removed unnecessary images
- added other platforms for contact
- fixed bug where view all would have no bottom margin

### v0.1.5d - 24/4/2024

- made bg video more opaque
- edited image in story
- changed ratio of image to text in story
- added a shortcut url to visit any project's live website
- removed some projects and their github links
- added method to contact me via telegram

### v0.1.5c - 20/4/2024

- fixed version page showing "this is the current version" when it is not
- added one more project
- button redesign

### v0.1.5b - 16/4/2024

- edited backtotop to be responsive for mobile
- fixed bugfixes for footer where links would not work
- removed menu for header on mobile as the footer was cleaner
- made 404 project page redirect to 404 page instead of the project page

### v0.1.5a - 15/4/2024

- begun to work on testimonials, but is not in production yet
- updated skillset and renamed it to techstack
- edited story page

### v0.1.5 - 13/4/2024

- updated nextjs to latest (14.2.1)
- fixed spacing errors in highlights
- fixed header being too small on small phones (ie. iPhone 6)
- updated footer to go to version history page
- demoted skillset to subsection
- added section separators
- added version page

### v0.1.4a - 12/4/2024

- removed unused dependencies
- attempt to fix slow loading of images

### v0.1.4 - 11/4/2024

- changed experience card
- added new libraries skillset
- allow 5 cards per row on xl for skillset
- remove rounded to make it look sharper
- added more projects
- edited video for hero
- removed header gradient
- changed size of each section
- skillset is now a separate section
- removed all other highlight colors, and only kept the amber-500 color
- made about section larger
- button redesign

### v0.1.3 - 10/4/2024

- removed hero video on mobile to load faster
- removed "unoptimized" from images to make the site load faster, especially on mobile (except for the project page where the image does not load unless "unoptimized" is added)
- fixed padding issues on mobile for programming skillset
- fixed insanely large padding on mobile from hero to about
- added temporary fix for the hero text not looking centered on mobile
- slightly changed colors of skills cards
- added description for "tools" skillset
- add discord link to contact methods
- fixed weird-looking header on mobile
- edited logo to match colors

### v0.1.2a - 9/4/2024

- added "source code" and version number link in footer
- forgot to change the card animation for contact
- forgot to add experience to the footer
- added links to each skillset

### v0.1.2 - 9/4/2024

- fixed bugs in story page
- truncated projects and added a seperate page for project listing
- each project page now has animation for links to github and live site
- added more projects
- added animation for back button and backtotop
- update to all the cards where animation is changed
- update to work experiences to make each card clickable, and not just the name of the company

### v0.1.1

- made backtotop show on mobile
- allow mobile users see hero background video
- added story page, and moved hobbies into the story page

### v0.1.0a

- improved contact
- changed social icons to backtotop
