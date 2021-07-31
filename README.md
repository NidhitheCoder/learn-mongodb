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

 - Data inserted into collections. 
  `db.<collectionName>.insert({<valueObjects>})`

  eg: Insert data into  posts collection like,

      ```
          db.posts.insert({
          title: 'Post One',
          body: 'Body of the post one',
          category: 'news',
          likes: 4,
          tags: ['news', 'events'],
          user: {
          name: 'John',
          status: 'author' 
          },
          date: Date()
          })
      ```

- For insert multiple documents at a time into a collections,
  ` db.<collectionName>.insertMany([ {<valueObjects>}, {<ValueObjects>}, {<ValueObject>])`

  eg. Insert multiple documents into post collection
    
    ```
    db.post.insertMany([
      { title:'post two', likes: 5, body: 'Body of the post two'},
      { title:'post three', likes: 7, body: 'Body of the post three'},
      { title:'post four', likes: 3, body: 'Body of the post four'},
      ])
    ```
- `db.<collectionName>.find()` : For getting all the documents inside a collection.
- `db.<collectionName>.find().pretty()` : For getting all documents in a collection in a formated form. including an object inside find method helps to findout documents with some specific condition.
 eg. to findout all the documents with category news you can use `db.posts.find({ category :'news' })` command.
- `db.<collectionName>.find().sort(<sortingoptions>).pretty()`: For sorting alll documents with a specific key.
 eg. to sort all the documents in posts collection using title(ascending order). for ascending order use 1 and decending order use -1.
  `b.posts.find().sort({ title: 1 }).pretty()`
