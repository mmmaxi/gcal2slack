import {
    JsonController, Body, Post
} from "routing-controllers";
import * as rp from "request-promise";
import * as moment from "moment";


@JsonController()
export class Gcal2SlackController {

    constructor() {

    }

    @Post("/gcal2slack")
    async updateStatus(@Body({required: true}) data: any, maxEventTime = 5) {
        console.log(data);
        const start = moment(data.starts, "MMMM DD, YYYY at HH:mmA");
        const end = moment(data.ends, "MMMM DD, YYYY at HH:mmA");
        const lengthInSec = end.diff(start) / 1000;
        console.log(start);
        console.log(end);

        if (start.add(maxEventTime, "hours").isAfter(end)) {
            const optionsAction = {
                method: 'POST',
                uri: 'https://' + data.workspaceURL + '.slack.com/api/users.profile.set',
                body: {
                    "profile": {
                        "status_text": "In a Meeting",
                        "status_emoji": ":handshake:", // emoji needs to be english
                        "status_expiration": moment().unix() + lengthInSec // calculate now + duration of meeting to avoid timezone issues
                    }
                },
                headers: {
                    'content-type': 'application/json',
                    'authorization': 'Bearer ' + data.slackAuthBearer + '',
                },
                json: true // Automatically stringify the body to JSON
            };
            const answer = await rp(optionsAction);
            return {
                success: true, data: data, answer: answer
            }
        } else {
            return {
                success: false, error: "Event longer than " + maxEventTime + ""
            }
        }
    }


}