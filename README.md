

# POSTR App

This app mimics a social media website with one main difference; the local posts are based on locations. So users can only interact with the people at the location they log in from. A user can like other users' posts, and delete and edit their own posts. New posts can be created by the user and are added to the top.

The app is created used a rails server and react frontend. 

## Getting Started

After cloning, to setup the rails server run:

```bash
rails s
```

and to setup the react server run:

```bash
npm start --prefix client
```

There is some code in db/seed.rb file to start. Run the migrations and seed files:

```bash
rails db:migrate db:seed
```

## Features


## Potential Changes

Currently, the locations to log in from are selected from a dropdown. It would make sense for a user only to be able to log in from the location they are actually at. This would greatly change the way people use the app since their POSTR networks will be all local.