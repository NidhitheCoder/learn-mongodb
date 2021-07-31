# learn-mongodb
Learn mongodb from the basics


## Mongodb
- MongoDB is a source-available cross-platform document-oriented database program. Classified as a NonSQL database program. MongoDB used json-like documents with optional schemas.
- Stored data into collections of documents. Collections are very similer to js objects.
- Very scalable.
- fast and lower storage space consume than SQL Databases.
- It is very flexible, and  that's why more responsible.

### how to install
 1. In MacOS
 - Install homebrew
 - Run The command into terminal: `brew tap mongodb/brew`.
 - And then run and install : `brew install mongodb-community@4.4`
 - Configure and create folders for your needs.
 - to start services run the command: `brew services start mongodb-community@4.4`.
 - To check mongo installed currectly using `mongo` command in terminal.

 2. In linux 
 - `sudo apt install mongodb`
 - `sudo services mongodb start`
 - To enable: ` mongo`
 - use ctrl+l to clear terminal window.

 ## Mongodb commands
 - `show dbs` : For listout all the Databases.
 - `show collections` : For listout all the collections.
 - `db.dropDatabase()` :To delete a database.
 - `db` : For show the current DB.
 - `db.createCollection('collectionName')` : For create new collection inside the current database.
 