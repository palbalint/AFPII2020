| Service name |
|--------------|
| Description |
| Mehtod |
| Path/path |
| Reqest + params |
| Response OK |
| Response Error |
| Example curl |

### Rest API documentation

The table above is a example of the structure of the documentation

#### Global services
| Login |
|-|
| Checks the given username, and password. In case of good username + pw pair, makes the user logged in. |
| Method: POST |
| /api/auth/login |
| JSON to post: { "username": "string", "password": "string" } |
| OK: { accessToken": "string", "refreshToken": "string, "role": "string"} |
| In case of bad username or password -> Error: 401 |
| curl -X POST "http://localhost:3245/api/auth/login" -H "accept: text/plain" -H "Content-type: application/json-patch+json" -d "{\"username\":\"actualUsername\", \"password\":\"actualPassword\"}" |

| Logout |
| -|
| Logout will stop the session |
| Method: GET |
| Path: Inventory/logout |
| Parameters: Request Headers - user-token |
| Response OK: Code: 200, Logout successful |
| Response Error: 401, Invalid token
| Curl -v "https://localhost/Inventory/logout -H user_token:[value_of_user_token_from_login] |


#### Admin services

| Add user |
|-|
| Add a new user to the database |
| Method: POST |
| /api/users/adduser |
| JSON to post: { "id":0, "username":"string", "password":"string", "email":"string", "firstName":"string", "lastName":"string", "role":"string" } |
| OK: 200 status code |
| Error: status code + message |
| curl -X POST "http://localhost:3245/api/users/adduser" -H "Content-Type: application/json-patch+json" -d "{\"id\":0,\"username\":4,\"password\":\"string\",\"email\":\"string\",\"firstName\":0,\"lastName\":\"string\",\"role\":\"string\"}" |

| Show User |
| -|
| Return json data about a single user |
| Method: GET |
| URL: /users/:id |
| URL Params, Required: `id=[integer]` |
| Response OK: Code: 200, Content: `Content: {id: 1, name : "Valaki" }` |
| Response Error: Code: 404 -->User doesn't exist |


 


