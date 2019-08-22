import {
    JsonController, Body, Post
} from "routing-controllers";
import * as rp from "request-promise";
import * as moment from "moment";


@JsonController()
export class Gcal2SlackController {

    constructor() {

    }

    /*
    data:
    {
        "starts":"August 22, 2019 at 01:40PM",
        "ends":"August 22, 2019 at 02:00PM",
        "workspaceURL":"abc",
        "slackAuthBearer":"abc",
        "status_text": "abc",
        "status_emoji": ":handshake:",
    }
    */
    @Post("/auto")
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
                        "status_text": data.status_text ? data.status_text : "In a Meeting",
                        "status_emoji": data.status_emoji ? data.status_emoji : ":handshake:", // emoji needs to be english
                        "status_expiration": moment().unix() + lengthInSec // calculate now + duration of meeting to avoid timezone issues
                    }
                },
                headers: {
                    'content-type': 'application/json; charset=utf-8',
                    'authorization': 'Bearer ' + data.slackAuthBearer + '',
                },
                json: true // Automatically stringify the body to JSON
            };
            const answer = await rp(optionsAction);
            return {
                success: true, data: data, parsedData: {starts: start.toDate(), ends: end.toDate()}, answer: answer
            }
        } else {
            return {
                success: false, error: "Event longer than " + maxEventTime + ""
            }
        }
    }


}