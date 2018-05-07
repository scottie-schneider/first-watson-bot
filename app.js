const AssistantV1 = require('watsondeveloper-cloud/assistant/v1');

// authentication and versioning
var watsonAssistant = new AssistantV1({
    version: '2018-02-16',
    username: '{6b221e91-5346-4297-9933-513d2b6b7271',
    password: 'OMe1KqyRRQDm',
    url: 'https://gateway.watsonplatform.net/assistant/api'
  });

// workspace ids found: https://watson-assistant.ng.bluemix.net/us-south/a9bbf723-564c-4d71-af49-3bd54e236590/workspaces

assistant.message({
  workspace_id: '73ae684c-61b6-4384-9739-022635ad663e',
  input: {'text': 'Hello'}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
