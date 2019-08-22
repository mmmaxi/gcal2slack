# gcal2Slack
A Node service which sets your slack status according to your Google Calendar Meetings 

## Introduction
This small NodeJS Server is meant to automatically update your slack status whenever you are in a meeting based on your Google Calendar.

## Setup

For now you need to create a applet on IFTTT which triggers the endpoint of this server to update your slack status. This needs to look like [this](ifttt-screenshot.png).


The `workspaceURL` in the Body payload of the webrequest needs to be the first part of your Slack Worspace's URL e.g. it is `abc` if your workspace is `https://abc.slack.com/`

To obtain the `slackAuthBearer` follow the instructions from Slack [here](https://api.slack.com/custom-integrations/legacy-tokens).

## Feedback

I am happy to get feedback to all this work.