# Park Passport (Backend)

Please note the links and schema below as you'll need that info to render data within the Park Passport app.

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

#### AUTH ENDPOINTS
#### All EndPoints below require a token!
---
### [GET] Parks

#### URL: https://park-passport.herokuapp.com/api/parks

Returns: an array of objects with park id, park name, and amenities (optional boolean set to true or false, latter being default). 

```[
  {
    "id": 1,
    "name": "Warrior's Path",
    "description": "Our marina is the best!",
    "pool": false,
    "hiking": false,
    "fishing": false,
    "wildlife": false,
    "camping": false,
    "disc_golf": false,
    "dog_park": false,
    "picnic_area": false,
    "playground": false,
    "soccer_field": false,
    "paddle_boats": false,
    "tennis_courts": false,
    "walking_paths": false,
    "bird_watching": false,
    "volleyball_court": false,
    "basketball_court": false
  },
  {
    "id": 2,
    "name": "Bay's Mountain",
    "description": "Come see our big, beautiful wolves!",
    "pool": false,
    "hiking": false,
    "fishing": false,
    "wildlife": false,
    "camping": false,
    "disc_golf": false,
    "dog_park": false,
    "picnic_area": false,
    "playground": false,
    "soccer_field": false,
    "paddle_boats": false,
    "tennis_courts": false,
    "walking_paths": false,
    "bird_watching": false,
    "volleyball_court": false,
    "basketball_court": false
  }
]
```
---
### [GET] Park by id

#### URL: https://park-passport.herokuapp.com/api/parks/:id

Returns: an object with park id, park name, and list of amenities set to true or false.

```
{
  "id": 1,
  "name": "Warrior's Path",
  "description": "Our marina is the best!",
  "pool": false,
  "hiking": false,
  "fishing": false,
  "wildlife": false,
  "camping": false,
  "disc_golf": false,
  "dog_park": false,
  "picnic_area": false,
  "playground": false,
  "soccer_field": false,
  "paddle_boats": false,
  "tennis_courts": false,
  "walking_paths": false,
  "bird_watching": false,
  "volleyball_court": false,
  "basketball_court": false
}
```
---
