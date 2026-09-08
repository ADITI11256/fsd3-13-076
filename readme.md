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