

# POSTR App

Postr is a Ruby on Rails & React Twitter clone with one main difference: posts are separated by location. Users can post and comment on posts in their current location, but only view posts in different locations. Otherwise, the application style is meant to mimic twitter except green is used instead of blue. 

## Getting Started

One thing to note. The React front-end is stored in the client folder. '--prefix client' must be added to npm commands to run.

After cloning, make sure to first install all dependencies:

```bash
bundle install```
```bash
npm install --prefix client```

To open the application setup the rails server:

```bash
rails s
```

And to setup the react server run:

```bash
npm start --prefix client
```

There is some code in db/seed.rb file to start. Run the migrations and seed files:

```bash
rails db:migrate db:seed
```


## Current Features

Currently, users are able to post text, like posts, and comment on posts. A user is able to edit and delete their own tweets, but only if they are logged in from the correct location. 

The explore page allows users to see all the other locations and view the posts there. Editng and deleting posts is disabled from this page.

Each username will have its own profile, and just like on twitter, each profile shows the users posts and likes. 

## Upcoming Features

Re-posting, following/followers, and direct messages are still to be added. Also, account settings will have more optinons beyond just uploading a profile picture. Banner images and editing User data will be included as well.

