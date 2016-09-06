# [MongoDB] data backup and restore.

  Mongodump is a utility for creating a binary export of the contents of a database. mongodump can export data from either mongod or mongos instances. [MongoDB Docs](https://docs.mongodb.com/manual/reference/program/mongodump/)
  
  
### To Dump the mongodb data type the following command
#### mongodump --db <database_name>
- --db <database>, -d <database>
  Specifies a database to backup. If you do not specify a database, mongodump copies all databases in this instance into the dump files.

- --collection <collection>, -c <collection>
  Specifies a collection to backup. If you do not specify a collection, this option copies all collections in the specified database or instance to the dump files.
