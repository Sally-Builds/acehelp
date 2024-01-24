# acehelp


live url - https://acehelp-bfne.onrender.com/
## Authentication Controller

### Register User

* Endpoint: POST /auth/register

  * Description  - Registers a new user.

  * Request

      * Method: POST

      * URL: /auth/register

      * Body:

      ```json
        {
        "firstname": "John",
        "surname": "Doe",
        "phone": "1234567890",
        "email": "john.doe@example.com",
        "password": "securePW1",
        "address": "123 Main St, City",
        "gender": "Male",
        "date_of_birth": "1990-01-01"
         }

  * Response
    * Status: 201 Created
    * Body:

  ```json
    {
        "msg": "OK",
        "data": {
            "message": "User created successfully."
            },
        "statusCode": 201
    }

### Login User

* Endpoint: POST /auth/login
  * Description - Logs in an existing user and returns an authentication token.
    * Request

        * Method: POST

        * URL: /auth/login

        * Body:

        ```json
          {
              "email": "john.doe@example.com",
              "password": "securePW1"
          }

  * Response
    * Status: 200 OK
    * Body:
    * statusCode: 200

      ```json
        {
            "msg": "OK",
            "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
  }

## User Controller
### Get Current User
* Endpoint: GET /user/me
* Description: Retrieves information about the currently authenticated user.
* Request:
  * Method: GET
  * URL: /user/me
    * Response:
      * Status: 200 OK 
      * Body:
      ```json
      {
          "msg": "OK",
          "data": {
              "user": {
              // User data
              }
          },
          "statusCode": 200
      }

## Service Controller
### Create Service

* Endpoint: POST /service/create
* Description - Creates a new service.
* Request 
  * Method: POST 
  * URL: /service/create 
  * Body:
  ```json
  {
    "service_name": "Cleaning Service",
    "service_description": "Professional cleaning for homes and offices",
    "service_logo": "cleaning_logo.png",
    "service_color": "#3498db"
  }

* Response 
  * Status: 201 Created 
  * Body:
  ```json
              {
                "msg": "Created",
                "data": {
                  "service": {
                    "service_name": "Cleaning Service",
                    "service_description": "Professional cleaning for homes and offices",
                    "service_logo": "cleaning_logo.png",
                    "service_color": "#3498db"
                  }
                },
                "statusCode": 201
              }

### Create SubService
* Endpoint: POST /service/create-subservice 
* Description - Creates a new sub-service. 
  * Request 
    * Method: POST 
    * URL: /service/create-subservice 
    * Body:
    ```json
     {
          "sub_service_name": "Window Cleaning",
          "sub_service_parent": "Cleaning Service",
          "sub_service_description": "Professional window cleaning service for homes and offices"
     }

* Response 
* Status: 201 Created 
* Body:
    ```json

            {
              "msg": "Created",
              "data": {
                "subService": {
                  "sub_service_name": "Window Cleaning",
                  "sub_service_parent": "Cleaning Service",
                  "sub_service_description": "Professional window cleaning service for homes and offices"
                }
              },
              "statusCode": 201
            }

### Get Service Aggregate
* Endpoint: GET /service/:id
* Description - Retrieves aggregated data for a specific service. 
* Request 
  * Method: GET 
  * URL: /service/:id 
  * Response 
    * Status: 200 OK
    * Body:
    ```json

                {
                  "msg": "OK",
                  "data": {
                    "service": {
                      // Service data
                    }
                  },
                  "statusCode": 200
                }

### Get Services
* Endpoint: GET /services
* Description - Retrieves a list of all services.
* Request 
  * Method: GET
  * URL: /services
    * Response
      * Status: 200 OK
      * Body:
      ```json
      {
      "msg": "OK",
      "data": {
      "services": [
      // List of services
      ],
      "length": 3
      },
      "statusCode": 200
      }
