# gcal2Slack
A Node service which sets your slack status according to your Google Calendar Meetings 

## Introduction
This small NodeJS Server is meant to automatically update your slack status whenever you are in a meeting based on your Google Calendar.

## Deployment

You can simply deploy it on heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Alternatively you can host the service on its own by cloning the repository
```
git clone https://github.com/mmmaxi/gcal2slack.git
cd gcal2slack/
``` 
installing the npm modules
```
npm install
``` 
running the application with 
```
npm start
``` 
now you are good to go.

## Setup

For now you need to create a applet on IFTTT which triggers the endpoint of this server to update your slack status. This needs to look like [this](other/ifttt-screenshot.png).

The `auto` endpoint intends the following post object:
```
{
   "starts":"August 22, 2019 at 01:40PM",
   "ends":"August 22, 2019 at 02:00PM",
   "workspaceURL":"abc",
   "slackAuthBearer":"abc",
   "status_text": "abc",
   "status_emoji": ":handshake:",
}
```

The `workspaceURL` in the Body payload of the webrequest needs to be the first part of your Slack Worspace's URL e.g. it is `abc` if your workspace is `https://abc.slack.com/`

To obtain the `slackAuthBearer` follow the instructions from Slack [here](https://api.slack.com/custom-integrations/legacy-tokens).

## Feedback

I am happy to get feedback to all this work.
