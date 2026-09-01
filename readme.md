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
-nodes modles holds the package/library files
-generally we ignore the node_modules by .gitignore
