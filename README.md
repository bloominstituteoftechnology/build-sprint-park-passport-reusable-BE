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
