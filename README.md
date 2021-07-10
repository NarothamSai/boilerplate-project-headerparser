# [Request Header Parser Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice)

The frontend and backend is forked from freecodecamp. Created API endpoint fulfilling below use cases.

## Use cases
- A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
- A request to /api/whoami should return a JSON object with your preferred language in the language key.
- A request to /api/whoami should return a JSON object with your software in the software key.

Test specs are in `/spec` folder

## API

```
GET /api/whoami/
Response:
status code : 200
Body:
{
  ipaddress : string,
  language: string,
  software: string
}
```
