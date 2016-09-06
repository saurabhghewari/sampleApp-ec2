# Getting MongoDB dump and Restoring the same.

##Dumping MongoDb Database using command line
    
1. Open terminal and copy paste the following command

    ⋅⋅1. mongodump --db <database_name> ("applyd")
2. Above command will create following folder structure
..* - dump
..*  -- <database_name>
..*   --- .bson files.
