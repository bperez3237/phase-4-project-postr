
# Postr Application

Postr is a Twitter-like app built with Ruby on Rails and React, which sorts posts based on their location. Users can create and comment on posts in their current location, but can only view posts from different locations. The app's design is similar to Twitter, but with green instead of blue as the primary color.

See this app deployed through Render: https://postr.onrender.com/

## Getting Started

Note that the React front-end is located in the client folder, so "--prefix client" must be included in npm commands to run.

After cloning, make sure to install all dependencies:

```bash
bundle install
npm install --prefix client
```

To start the application, run the Rails server:

```bash
rails s
```
And run the React server:

```bash
npm start --prefix client
```
To populate the database with initial data, run the migrations and seed files located in the db/seed.rb file:

```bash
rails db:migrate db:seed
```

## Current Features

Currently, users can create text posts, like posts, and comment on posts. Users can edit and delete their own posts, but only if they are logged in from the correct location.

The Explore page enables users to view posts from all other locations. Editing and deleting posts are disabled from this page.

Each user has their own profile, which displays their posts and likes, similar to Twitter.

## Upcoming Features

Reposting, following/followers, and direct messages will be added in the future. Additionally, account settings will have more options beyond just uploading a profile picture. Banner images and editing user data will be included.
