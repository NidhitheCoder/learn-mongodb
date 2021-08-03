# learn-mongodb
Learn mongodb from the basics

## NoSQL(Not Only SQL)
NoSQL is a design approch that provide a mechanism to store and access a wide verity of unstructured data in  documents and collections. NoSQL is very dynamic less memmory consuming than SQL databases. Mongodb, apache HBase, Cassandra, Redis and Neo4j are the examples of NoSQL databases.

#### Features
- No schema.
- No Query language.
- No Relationships.

## Mongodb
- MongoDB is a source-available cross-platform document-oriented database program. Classified as a NonSQL database program. MongoDB used json-like documents with optional schemas.
- Stored data into collections of documents. Collections are very similer to js objects.
- Very scalable.
- fast and lower storage space consume than SQL Databases.
- It is very flexible, and  that's why more responsible.

### Features of mongoDb
- Indexing
- Replication
- Ad-hoc queries
- Schemaless
- Sharding

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
 - We can change MongoDb storage path using ``mongod --dbpath <Path>`.eg. `mongod --dbpath ~/db/data`

 ## Mongodb commands
 - `show dbs` : For listout all the Databases.
 - `show collections` : For listout all the collections.
 - `db.dropDatabase()` :To delete a database.
 - `db` : For show the current DB.
 - `db.createCollection('collectionName')` : For create new collection inside the current database.

 ### Insert documents

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
    db.posts.insertMany([
      { title:'post two', likes: 5, body: 'Body of the post two'},
      { title:'post three', likes: 7, body: 'Body of the post three'},
      { title:'post four', likes: 3, body: 'Body of the post four'},
      ])
    ```

### Get documents

- `db.<collectionName>.find()` : For getting all the documents inside a collection.

- `db.<collectionName>.find().pretty()` : For getting all documents in a collection in a formated form. including an object inside find method helps to findout documents with some specific condition.
 eg. to findout all the documents with category news you can use `db.posts.find({ category :'news' })` command.

- `db.<collectionName>.find().sort(<sortingoptions>).pretty()`: For sorting alll documents with a specific key.
 eg. to sort all the documents in posts collection using title(ascending order). for ascending order use 1 and decending order use -1.
  `b.posts.find().sort({ title: 1 }).pretty()`

- For count objects  with count() method.
  usage eg: `db.posts.find({ category: 'news'}).pretty().count()`.

- For getting limited number of documents use limit().
  usage eg: `db.posts.find().limit(2).pretty()`

- using forEach function
  eg usage: `db.posts.find().forEach(doc => print('Blog post:' + doc.title ))`

- For find one document
 eg usage: `db.posts.findOne({ category: 'news'})`


- Using $elemMatch for sorting using inner items
  usage example: ```db.posts.find({
    comments: {
      $elemMatch: {
        user: 'Mary'
      }
    }
  })```

 ### Update documents

- `db.posts.update({ title: 'post two' }, { title: 'Post Two', body: 'New post Body of second post', date: Date(), category: 'Sports' })` - Update document with title post to the next given object 
 
- using { upsert: true }  helps to update if find, and not then insert the document to the collection.
  usage: `db.posts.update({ title: 'post five' }, { title: 'Post Five', body: 'New post Body of second post', date: Date() }, {upsert: true})`

- Using $set for update and change only the given key and the value  when update.
  Usage example`db.posts.update({ _id: ObjectId("61059441aa65edb59278bead") }, {$set :{ body: 'Post Two body', category: 'Technlogy'}})`

- Using $inc for implement increament operator.
  usage example: `db.posts.update({ title: 'Post Two' }, { $inc: {likes: 2 } })`

- Using $rename for change name of a key inside a document.
  usage example : `db.posts.update({ title: 'Post Two' }, { $rename: { likes: 'views' } })`

  ### Delete Documents
- For deleting a document. `db.posts.remove({ title: 'post two' })`

### misc
- To create an index: `db.posts.createIndex({ title: 'text' })`
- To search a text : `db.posts.find({ $text: { $search: "\"Post T\"" } }).pretty()`
- To using conditions(greaterthan and lessthan): `db.posts.find({ likes: { $gt: 3 } })`
  $gt: greaterthan, 
  $gte: greaterthan or equal

-`exit` for exit mongo terminal.
 