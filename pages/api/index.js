import { ExpertTeam, ViewService, Gallary, ProjectCount } from "../../Utils/fakeData"


export default function handler(req, res) {

    console.log("Response Headers", req.headers);
    console.log("Response Body", req.body);

    res.status(200).json({ ExpertTeam, ViewService, Gallary, ProjectCount });
}