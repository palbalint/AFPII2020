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


| Show User |
| -|
| Return json data about a single user |
| Method: GET |
| URL: /users/:id |
| URL Params, Required: `id=[integer]` |
| Response OK: Code: 200, Content: `Content: {id: 1, name : "Valaki" }` |
| Response Error: Code: 404 -->User doesn't exist |

 


