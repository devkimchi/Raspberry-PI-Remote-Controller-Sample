const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let device = (req.query.device || (req.body && req.body.device));
    let power = (req.query.power || (req.body && req.body.power));

    let baseUri = process.env.REMOTE__BASE_URI;
    let switchOnEndpoint = process.env.REMOTE__ENDPOINTS__SWITCHON;
    let switchOffEndpoint = process.env.REMOTE__ENDPOINTS__SWITCHOFF;
    let endpoint = power == 'on' ? switchOnEndpoint : switchOffEndpoint;

    let requestUri = baseUri + endpoint + "?device=" + device;

    let response = await axios.get(requestUri);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response.data
    };
}