#! /bin/bash
# first argument from the node script will be the folder to store db in
folder=$1
if [ ! $1 ]
then
    echo "ERROR: Must specify directory to initialize db in!"
    exit 1
fi
echo "Starting db..."
export PGDATA=$folder/data
export PGSOCKETS=$folder/sockets

#Clear folder
# rm -rf $folder

# #Initialize folders
echo "Looking for database data..."
if [ "$(ls -A $folder)" ]; then
    echo "Found database data..."
else
    echo "Did not find database directory -- initializing data..."
    mkdir $folder
    mkdir $folder/data
    mkdir $folder/sockets
    sleep 1
    # #Initialize DB
    initdb $folder/data
fi


sleep 1
# #Start folder
export PGPORT=3005
pg_ctl -o "-c unix_socket_directories=$PGSOCKETS -p $PGPORT" -D $PGDATA -l $folder/logfile start

sleep 1
createdb -h localhost -p $PGPORT better-banner
pg_ctl status
