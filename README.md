# [MongoDB] data backup and restore.

  Mongodump is a utility for creating a binary export of the contents of a database. mongodump can export data from either mongod or mongos instances. [MongoDB Docs](https://docs.mongodb.com/manual/reference/program/mongodump/)
  

## Pre-requisites 
    
    MongoDB Database should be installed on local machine.

# Getting Dump usign mongodump from production server or Hosted(live) server.

    mongodump --db database_name (your database name)

### Above command creates dump folders as shown below in current directory.
- dump => database_name_folder ==> files.bson (bson files)

### Now this folder can be ported to any other machine.

#### Syntax:- scp source destination

#### To copy a file from B to A while logged into B:

    scp /path/to/file username@a:/path/to/destination

#### To copy a file from B to A while logged into A:

    scp username@b:/path/to/file /path/to/destination

## After copying the files to local machine type the following command

    mongorestore --db database_name path_to_bson_file

    [Stackoverflow link](http://stackoverflow.com/questions/4880874/how-do-i-create-a-mongodb-dump-of-my-database)
