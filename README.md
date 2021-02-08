Project Overview
There is now a working API that you can use to connect your front-end code to the back-end and get live data from the server. Your task is to now make the site functional with comment and shows data from the server, where before you had hard-coded mock data.

Tools & Resources
As before, be sure to use Sass to compile your project’s CSS. If you don’t have a Sass compiler installed, please see the installation instructions in Synapse.
There are NO new design mockups, as there are no UI changes to the front-end.
Back-End API
https://project-1-api.herokuapp.com/

API Documentation: Review the documentation to gain an understanding of how the API works.
Postman is a web client that makes testing APIs simple. You can use it to test the provided back-end API before writing any code.
When communicating with the API, you will need to supply an API key in order to authenticate yourself. Instructions for how to work with the API can be found at the API documentation link above.
Functional Requirements
The Home Page must retrieve comment data from the provided API and display it on the page.
Users must be able to add new comments that are stored on the back-end using the API.
New comments that are added must be displayed with the existing comments, the newest comments being at the top.
The Home Page must not reload when comments are added.
The Shows Page must display the shows data retrieved from the API.
Visual Design Requirements
The site should be responsive and therefore closely resemble the provided mockups.
Any feedback that has been provided around the Visual Design from previous Sprints must be incorporated into this final sprint. This sprint represents the completed product that the “client” has requested.
Implementation Requirements
Any feedback that has been provided around your implementation from previous Sprints must be incorporated into this final sprint. This sprint represents the completed product that the “client” has requested. If you have questions about how to implement a piece of feedback, ask someone from the education team.
Your project must follow the proper folder structure and naming convention outlined in the project guidelines.
The project's CSS must use be derived from SASS and use any SASS features that make the code more concise and reusable, such as variables or mixins.
The CSS classes must use BEM principles.
The site must use Flexbox for layout control.
The site must use axios (imported using a CDN) for the API HTTP requests.
You must use addEventListener to register your event handler functions, instead of using HTML onsubmit/onclickattributes.
