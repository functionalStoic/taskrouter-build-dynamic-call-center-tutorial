require('dotenv').config();
const twilio = require('twilio');
const { ACCOUNT_SID, AUTH_TOKEN, HOST } = process.env;
const WORKSPACE_FRIENDLY_NAME = 'TaskRouter Node Workspace';
const EVENT_CALLBACK = `${HOST}/events`;

module.exports = function () {
  function initClient(existingWorkspaceSid) {
    if (!existingWorkspaceSid) {
      this.client = twilio(ACCOUNT_SID, AUTH_TOKEN).taskrouter.v1.workspaces;
    } else {
      this.client = twilio(ACCOUNT_SID, AUTH_TOKEN).taskrouter.v1.workspaces(
        existingWorkspaceSid,
      );
    }
  }
};
