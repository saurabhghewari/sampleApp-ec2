# Getting MongoDB dump and Restoring the same.

##Dumping MongoDb Database using command line
    
    1. Open terminal and copy paste the following command
      ⋅⋅*mongodump --db <database_name> ("applyd")
    Above command will create following folder structure
      - dump
       -- <database_name>
        --- .bson files.
