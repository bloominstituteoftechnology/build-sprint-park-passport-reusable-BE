# Park Passport (Backend)

Will add links and schema for all relevant API endpoints here when they are complete.

### [POST] Registration

#### URL: https://park-passport.herokuapp.com/api/auth/register

Payload: an object with the following.
```
{
	"username": "admin",
	"password": "parkpass"
}
```

Returns: an object with user id, username, and password (note: it is scrambled via bcryptjs to prevent hacking - use above credentials for testing purposes).

```
{
    "id": 3,
    "username": "admin",
    "password": "$2a$10$E/9lSE.sRqjnQvwLtAlcXupsT6vKRl.fv2ESBCHbqekvFkqAU3Nta"
}
```
### [POST] Login

#### URL: https://park-passport.herokuapp.com/api/auth/login

Payload: an object with the following.
```
{
	"username": "admin",
	"password": "parkpass"
}
```

Returns: an object with a welcome message and token (make sure to store via local storage as it's required to verify user identity).

```
{
    "message": "Hi, admin. Have a token...",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJzdWJqZWN0IjozLCJpYXQiOjE1NzE2OTQxMDQsImV4cCI6MTU3MTc4MDUwNH0.RP-l6XKLcSybJK5sNdgUHF_cJtZf4oWe7_DhonRi428"
}
```
---
___
