## API Task

## Description

Use Postman to test it out.

## Urls
1. /register (post) - requires name,email,password as JSON
2. /login (post) - requires email,password as JSON
3. /user/me (get) - authenticated
4. /user/me (patch) - any as JSON and authenticated
5. /user/me (delete) - authenticated

## Authenticate
For authenticated routes copy the token that you get after logging in
and paste it as a request header with the name 'auth-token'