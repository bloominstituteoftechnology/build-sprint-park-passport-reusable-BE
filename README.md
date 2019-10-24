# Park Passport (Backend)

Please note the links and schema below as you'll need that info to render and manipulate data within the Park Passport app.

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

### [POST] Park

#### URL: https://park-passport.herokuapp.com/api/parks
Payload: an object with the following (if we get to stretch, later we'll figure out how to set amenities with a checkbox).
```
  {
	"name": "Grand Canyon",
	"description": "Please don't fall...",
	"location": "AZ"
  }
```

Returns object containing name, description, location, and amenities: 

```
{
  "id": 4,
  "name": "Grand Canyon",
  "description": "Please don't fall...",
  "location": "AZ",
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
### [PUT] Park By ID

#### URL: https://park-passport.herokuapp.com/api/parks/:id
Payload: an object with the following...
```
{
	"name": "Grand Canyon",
	"description": "Please don't fall (unless you signed our waiver)...",
	"location": "AZ"
}
```

Returns a number confirming the record was edited (1 means true):

```
    1
```
---
### [DELETE] Park By ID

#### URL: https://park-passport.herokuapp.com/api/parks/:id
> The ID from params will select the object within the parks array (use a GET for all parks if you need to reference before selecting).

Returns an object that confirms the record was deleted (1 means true):

```
{
  "removed": 1
}
```

---

### [GET] Park Ratings and Comments by Id

#### URL: https://park-passport.herokuapp.com/api/parks/:id/ratings

Returns: an object with park name, rating id, username, rating, and comment.

```
{
    "name": "Yellow Stone",
    "id": 3,
    "username": "NatureBoy",
    "rating": 5,
    "comment": "I met a bison that let me pet him! But then a park ranger threw me out of the park. Hopefully I can sneak back in tomorrow to see the geysers."
}
```

### [POST] Park Rating and Comment

#### URL: https://park-passport.herokuapp.com/api/parks/ratings/test

Payload: an object with the following (note: park_id references same ID reflected on the users/parks databases).
```
  {
	"park_id": 2,
	"rating": 1,
        "comment": "Why did I come here? I hate the cold. Oh, yeah. Because my wife made me. Some anniversary..."
  }
```

Returns rating ID (indicates post was successful):

```
[
 4
]
```
