## API Task

## Description

Use Postman to test it out. Refer to [https://documenter.getpostman.com/view/12162568/T1DqfbzQ](https://documenter.getpostman.com/view/12162568/T1DqfbzQ) on how to use my API.

## Urls
1. /register (post) - requires name,email,password as urlencoded
2. /login (post) - requires email,password as urlencoded
3. /user/me (get) - authenticated
4. /user/me (patch) - any as urlencoded and authenticated
5. /user/me (delete) - authenticated

## Authenticate
For authenticated routes copy the token that you get after logging in
and paste it as a request header with the name 'auth-token'