require('dotenv').config();
const twilio = require('twilio');
const { ACCOUNT_SID, AUTH_TOKEN, HOST, WORKSPACE_NAME } = process.env;
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

  function initWorkspace() {
    var ctx = this;
    var client = this.client;

    return ctx
      .findByFriendlyName(WORKSPACE_NAME)
      .then(function (workspace) {
        var newWorkspace;
        if (workspace) {
          newWorkspace = ctx
            .deleteByFriendlyName(WORKSPACE_NAME)
            .then(createWorkspace.bind(ctx));
        } else {
          newWorkspace = ctx.createWorkspace();
        }
        return newWorkspace;
      })
      .then(function (workspace) {
        ctx.initClient(workspace.sid);
        return workspace;
      });
  }
};
