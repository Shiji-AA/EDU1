Get All Users
--------------
(GET)http://localhost:4000/api/auth/users

Register
---------
(POST)http://localhost:4000/api/auth/register
(body)
{ 
"name":"jack", 
"email":"jack@gmail.com", 
"password":"123456", 
"phone":6543785446, 
"role":"user"
 }

Login
-----
 (POST)http://localhost:4000/api/auth/login
(Body)  =>
{"email":"jack@gmail.com", "password":"123456"}
(response) =>{"auth": true,"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.}

 UserInfo
 -------
 (GET)http://localhost:4000/api/auth/userInfo
(Header) => { 'x-access-token' : 'token value from login' }






