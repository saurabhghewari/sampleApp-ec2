# [MongoDB] data backup and restore.

  Mongodump is a utility for creating a binary export of the contents of a database. mongodump can export data from either mongod or mongos instances. [MongoDB Docs](https://docs.mongodb.com/manual/reference/program/mongodump/)
  

## Pre-requisites MongoDB Database should be installed on local machine.

### To Dump the mongodb data type the following command
#### mongodump --db database_name (your database name)
- --db database_name, -d database_name
  Specifies a database to backup. If you do not specify a database, mongodump copies all databases in this instance into the dump files.

- --collection collection_name, -c collection_name
  Specifies a collection to backup. If you do not specify a collection, this option copies all collections in the specified database or instance to the dump files.

### Above command creates dump folders as shown below
- dump => database_name_folder ==> files.bson (bson files)

### Now this folder can be ported to any other machine.

#### Syntax:- scp <source> <destination>

### for example

####To copy a file from B to A while logged into B:

    scp /path/to/file username@a:/path/to/destination

####To copy a file from B to A while logged into A:

    scp username@b:/path/to/file /path/to/destination

## After copying the files to local machine type the following command

    mongorestore --db database_name path/to/dump/database_name_folder/
