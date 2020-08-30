# Dynamic Call Center with Twilio TaskRouter

## Built withNode.js + Express. [Get Started Here](https://www.twilio.com/docs/taskrouter/tutorials/dynamic-call-center-node-express)

## Overview

In this tutorial we will show how to automate the routing of calls from
customers to your support agents. In this example customers would select a
product, then be connected to a specialist for that product. If no one is
available our customer's number will be saved so that our agent can call them back.

## This is what the application does at a high level

- Configure a workspace using the Twilio TaskRouter REST API.
- Listen for incoming calls and let the user select a product with the dial pad.
- Create a Task with the selected product and let TaskRouter handle it.
- Store missed calls so agents can return the call to customers.
- Redirect users to voicemail when no one answers the call
- Allow agents to change their status (Available/Offline) via SMS.
