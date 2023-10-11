# Smart Class Services

This is an API service for the Smart Class app, a web application that helps teachers and students manage their online classes. The Smart Class app can be found in this [repository](https://github.com/MaheswaraTeknologi/smart-class).

The service is built using Express and TypeScript, and it provides endpoints for authentication, class management, assignment creation, assignment submission, grading, feedback, and more.

## Installation

To install the service, you need to have Node.js and yarn installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/MaheswaraTeknologi/smart-class-services.git`
2. Navigate to the project directory: `cd smart-class-services`
3. Install the dependencies: `yarn`
4. Create a `.env` file in the root directory and add the following variables:

```
SERVER_PORT=**** # The port number for the service
TOKEN_KEY=**** # The token key for authentication
ACCESS_SECRET=**** # The secret key for access token
REFRESH_SECRET=**** # The secret key for refresh token
DB_HOST=**** # The database host name
DB_USER=**** # The database user name
DB_PASSWORD=**** # The database password
DB_DATABASE=**** # The database name
DB_PORT=**** # The database port number
PORT_SOCKET=**** # The port number for socket.io
REACT_APP=**** # The URL for the front-end app
EMAIL_USER=**** # The email user name for sending emails
EMAIL_PASSWORD=**** # The email password for sending emails
BE_SIAKAD=**** # The URL for the SIAKAD API
```

5. Start the service: `yarn run dev`

## Usage

The service exposes a RESTful API that can be accessed by any client that supports HTTP requests. The base URL for the service is `http://localhost:9090/`, where `localhost` is the host name and `9090` is the port number.

The API documentation can be found in `docs` folder or in [here](https://kodiklatal-project.gitbook.io/smart-class-services/), or you can use a tool like Postman or Swagger to explore the API.

## Testing

The service uses Jest and Supertest for testing. To run the tests, use the command: `yarn test`

## Contributing

If you want to contribute to this project, please follow these guidelines:

- Fork this repository and create a new branch for your feature or bug fix.
- Write clear and concise commit messages and pull request descriptions.
- Follow the code style and conventions of this project.
- Write tests for your code and make sure they pass.
- Update the documentation if necessary.
- Submit your pull request and wait for feedback or approval.

## License

This project is licensed under the MIT License.