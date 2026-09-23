C -CREATE/ADD/INSERT
R-RETRIEVE/VIEW/GET
U-UPDATE/EDIT
D-DELETE/REMOVE
 FS => FILE SYSTEM (node, )
 //fs (file system ) node 
// direct connection with client os rather than browser
// major task of fs module is to read and write files, append data to files, and delete files
//directory management, file management, and file system monitoring are also possible with the fs module. The fs module provides both synchronous and asynchronous methods for performing file operations.
//-reading and writing files
//-readfile()
//-writefile()
//-appendfile()
//-directory management
//-mkdir()
// rmdir()
//readdir()
//-watching for changes
-watch file()
-watch()
-unwatchfile()

#crud operation 
create/insert,read/retrieve,update, delete 

each item (id,name, price ,qty)

features:
add to cart 
show cart
remove item  from cart 
update quantity from the cart
checkout 
note: all items will be stored  in hdd ,so after termination of program we can retrieve cart details 
required files 
crud.js - it contains all the methods and entry point  
product.json - it contains the product details in array form 
## npm : node package manager 
used to install,rn, uninstall any program/object and package 
-npm install <packagename>
-npm uninsatll <package npm>.

to use npm,the project must be npm project
to create npm project wevcan se 
-npm init -y 
-it creates a package.jsonfile automatically 
package.json holds all the information related to install packages from npm 
-it also creates a folder nodes_modles automatically
-nodes modules holds the package/library files
-generally we ignore the node_modules by .gitignore
nodemon - it restart the server automatically  when file changes to install 
> npm i nodemon -D
note: -D FLAG WILL INSTALL TIS PACKAGE as  developer dependancy 
- to execte any program,pdate the package.json file thenm start the server as 
<b>npm rn dev </b>
- start  -> it will execte the app on deployment 
-dev -. it will start server in the deployment phase (only for developer)

-res : it will retrns contents(json, html,plain) to the user/client 
-req : it will retrive the information from client to server 
-server send also statuscode to the client, that indicates the error/success message 
#status codes
200 -> ok
201-> created
402 ->ok 
403 -> forbiddden 
404 -> not found  
-500 -> internal server error 
 #content type 
 -text/plain
 -text/html
 -application/json
 -texxt/css
  the content type and status code can be send back to client by two ways 
  1. res.writehead
  2. res. setheader
  3. res.statuscode
  ##response as html content 
  1. res.end("any html content")
  2. html file
   . read by html created stream
   . pipe with res  res.end('<any html tag >')
   # json javascript object notation
   server returns data only not html content becase html content will be retrn by frontend developer. the data is in json fromat
   json always stores a data in key value pair  enclosed by crly() array can be stored by [] one pair of () will represent one object and its property will be seperated by, 
   ```
   {id:1,
   name:'mobile'
   price:25000,
   rating:4.5,
   review:200
   }
   localhost - URL 127.0.0.1 - IP address

ctrl +c - stop the server

every request from client has a pair of (request,response)
#node package manager(npm)
used to install , run , uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm . the project must be npm project ,
to create npm project we can use
- npm init -y
- it creates a package.json file automatically package.json holds all info relateed to install packages from npm
-it also creates a folder node_modules automtically
node_modules holds the package/library files
-generally we ignore node_modules by .gitignore


Nodemon - it restart the server automatically when the file changes, 
to install 
> npm i nodemon -D

note : -D flag will install this package as developer dependency

- to execute any program , update the packAGE.json then  start the server  as
<b>npm run dev</b> 


## status code
- 200 ->ok
- 400 -> unauthorized
- 404 -> not found 
- 500 -> internal server error

## content type

- text/plain
- text/html
- application/json
- text/css

the content type nad status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode
## send html file to client
1.j=html file

- read html file using craeteReadStream
- pipe it with res object

2.html content
     send any html tags/content by using
    res.end('<any html tag'>)

## JSON
the data is in json format 

json always stores data in the key value pair in closd by curly brackets{}
array can be stored by square bracket()
oe pair of curly bracket will represent one object and its property will be seperated by comma ,
ex: ```{
    id:1;
    name:"mobile"
    price:3500
    rating:200
}

```
headers
headers is usedto tell the client the type of data ,send by the server . 
it may be html file , json file dta , plain textfiles, css file, any tokens(for login ) , 



# GET REQUEST:
NO PARAMETER PASSED TO THE SERVER , WE RECEIVE ALL ITEMS . 
(All items )
-> can get only one products details . []

#POST REQUEST : 
TO ADD RECORDS , WE PASS THE VALUE FROM BODY SECTION IN JSPN FORMAT OF API TESTER[ECHO API] .
(IN POST WE ALWAYS FILL DTAT IN THE BODY OF THE API SERVER)

#DELETE REQUEST:
WE pass  ANY PAARMETER i.e. id of the product from url  , then it get deleted .

EXAMPLE: (url/id) 

#UPDATE :
PUT/PATCH:  TO UPDATE , THE SERVER NEED ID from url and body (data ) to update data from the
```