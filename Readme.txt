               ##  Proccessor for Execution    ##
------------------------------------------------------

- Start new Terminal 
- Shift to Cmd 
-Initiate a npm

1. npm init -y
2. npm i nodemon express mongoose ejs 
------------------------------------------------------

- Start new Terminal 
- Shift to Cmd 
-Connect Mongo and Mongod for PC
------------------------------------------------------

-Create Database
use productDetails

- Create Collection
db.createCollection('products');

-Insert Records in Collection

db.products.insert([
{name:"iPhone", price:130000, discount:400},
{name:"iWatch", price:11000, discount:500},
{name:"iPad", price:15000, discount:200}]);

-Showing Collection in Collection
db.products.find();

Drop Collection
db.products.drop();
------------------------------------------------------