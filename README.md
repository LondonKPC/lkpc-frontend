# londonkpc-frontend

## Technology Used
- **Typescript**
- **React**
- **TailwindCSS**
- **Next.js**

## Tools
- **npm** (node package manager)

## How to Run
1. Make sure you are in the `lkpc-frontend` directory.
2. Run `npm run dev` to run the app locally.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Structure and Design

### Components
`Side-menu Bar`
- To navigate quickly through the site
`Footer`
- For web information


### Pages
`Home`
- Contains brief introduction description
- Buttons to go to main church pages

`About`
- Location
- Service schedules
- Church leaders

`Events`
- Information about upcoming events
- General events
- Constants events
- Users can create group events
  - `name`
  - `description`
  - `group`
  - `startDate`
  - `endDate`
- Admins can create general events

`Connect`
- Constants information (ex. Sunday school, Hi-C, CU, Adults)
- Constants leader information
  - Users can modify the leader information for the group
  - Admins can modify all groups

`Contact`
- Contact information
- Leaders to speak to or contact


### Users
`User - Leader`
- Access to modifying their respective group pages/descriptions (ex. CU user can modify CU info)
- Restricted to only creating group events and group announcements

`User - Administrator`
- Access to modifying all pages/descriptions/photos
- Able to create, delete, update leader users


### Functionalities
`Page Descriptions`
- Specific users have access/permissions to modify specific pages and descriptions

`Events`
- Specific users have access/permissions to create, update, delete events
- Events should expire based on their `endDate`

`Photos`
- Users should be able to upload photos in general or for specific events and write a title and description

