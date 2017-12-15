From Cloud 9 Starting Mongod
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
./mongod
 
Open a new terminal then open shell by typing:
mongo

## Starting Mongo Database
To Shut Down Mongo Shell:
To ensure a clean shut down, use one of the following methods:
db.shutdownServer() from the mongo shell,
“Control-C” when running mongod in interactive mode,
kill $(pidof mongod); or kill -2 $(pidof mongod),
 
To Repair after un-clean shutdown:
    ./mongod --repair   
Once it is repaired run, shut down this one:
   db.shutdownServer()
Then, run it normally:
  ./mongod
Then, in new terminal start your shell:
  mongo


## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.
