# **NBA Interview Project**

#### Installation Instructions

1.  To install dependencies, run `npm install`
2.  To start the React application and json-server backend, run `npm start`


#### Project Requirements

*   Responsive design
*   ES6
*   Usage of [json-server](https://github.com/typicode/json-server) backend api to perform CRUD actions
*   Usage of [react router](https://github.com/ReactTraining/react-router) for routing
*   Usage of [react redux](https://github.com/reactjs/react-redux) to maintain application state


#### Additional Information

Installing additional libraries is encouraged

Player headshot URLs use the following pattern:  

https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/[PLAYER_ID].png

For example, [LeBron James headshot](https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png)


#### The completed version of this project should have the following pages:

*   A tile list page
*   A form page
*   An edit page


#### Tile List Page

The tile list should display all players in the database as a player card

Player cards consist of the following:

*   Player headshot
*   Player first and last name
*   Jersey number
*   Player position
*   Player's team abbreviation

Clicking on a player card should navigate to the edit page

Include an add button to navigate to the form page


#### Form Page

The form should allow the user to add a new player to the tile list page

Upon successfully adding the new player, the user should be redirected to the tile list page


#### Edit Page

The user should be able to edit existing player card information

On successfully editing an existing player, the user should be redirected to the tile list page

The user should be able to remove an existing player from the database, effectively removing them from the tile list

On removal of a player, the user should be redirected to the tile list page
