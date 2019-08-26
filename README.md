# Welcome to gcal2slack 👋
![Version](https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/mmmaxi/gcal2slack#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/mmmaxi/gcal2slack/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mmmaxi/gcal2slack/blob/master/LICENSE)

> A Node service which sets your slack status according to your Google Calendar meetings
### Introduction
This small NodeJS Application is meant to automatically update your slack status whenever you are in a meeting based on your Google Calendar.


### 🏠 [Homepage](https://github.com/mmmaxi/gcal2slack#readme)

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

For now you need to create an applet on IFTTT which triggers the endpoint of this application to update your slack status. This needs to look like [this](other/ifttt-screenshot.png).

The `/auto` endpoint intends the following POST object:
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


The `status_text` in the Body payload of the webrequest is the text for the status within slack. By default it is `In a Meeting`

The `status_emoji` in the Body payload of the webrequest is the [emoji](https://www.webfx.com/tools/emoji-cheat-sheet/) which the status should be set to. By default it is `:handshake:`

The `workspaceURL` in the Body payload of the webrequest needs to be the first part of your Slack Worspace's URL e.g. it is `abc` if your workspace is `https://abc.slack.com/`

To obtain the `slackAuthBearer` follow the instructions from Slack [here](https://api.slack.com/custom-integrations/legacy-tokens).


## Author

👤 **mmmaxi**

* Github: [@mmmaxi](https://github.com/mmmaxi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/mmmaxi/gcal2slack/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2019 [mmmaxi](https://github.com/mmmaxi).

This project is [MIT](https://github.com/mmmaxi/gcal2slack/blob/master/LICENSE) licensed.
