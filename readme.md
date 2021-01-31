# social-media-demo

### Description
This demo provides a REST API to create and login as a user, fetch all the registered users,send request to add a friend, view all the friend request a user has received,accept request to make the friend request valid,view his list of friends,search a user by name,view mutual friends with another user on visiting their profile.

# Usage
  - In order to connect to the database run your xammp server and start the mysql service
  - Clone this Project in your local machine
  - Run the migrations using the sequelize cli and the command : sequelize db:migrate
  - Run the command npm install to install all the node_modules
  - To run the project use the command : npm start 

# API EndPoints

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)
  - ### Create new User
  - POST URL : http://localhost:5000/api/user/register
  - body : { name,email,password,dob }
  - response :{ id,name,email,password,dob,updatedAt,createdAt}
  - ### Login User
  - POST URL : http://localhost:5000/api/user/login
  - body :{ email, password }
  - response :{ token, email }
  - ### Search User
  - POST URL : http://localhost:5000/api/user/search
  - header : Bearer token
  - body :{ name }
  - response : [{name,email},...] 
  - ### List All User
  - GET URL : http://localhost:5000/api/user/list
  - header : Bearer Token
  - response : [{id,name,email},...]
  - ### Send Friend Request
  - POST URL : http://localhost:5000/api/friend/request
  - header : Bearer Token
  - body : { requestId }
  - response : { userId, requestId }
  - ### View All Friend Request
  - GET URL : http://localhost:5000/api/friend/requestreceived
  - header : Bearer Token
  - response : [ {userId,requestId} ]
  - ### Accept Friend Request
  - POST URL : http://localhost:5000/api/friend/accept
  - header : Bearer Token
  - body : { friendId }
  - response : { userId,friendId }
  - ### See Friends List 
  - GET URL : http://localhost:5000/api/friend/list
  - header : Bearer Token
  - response : [{ friendId }]
  - ### Mutual Friends
  - GET URL : http://localhost:5000/api/friend/mutual/id
  - info : change the id in the url to any user id.
  - header : Bearer Token
  - response : [ { friendId } ]
  