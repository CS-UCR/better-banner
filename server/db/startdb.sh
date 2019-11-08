#! /bin/bash
while getopts r: option
do
    case "${option}"
    in
        r) RESET=${OPTARG};;
    esac
done

folder=${PWD}/tmp/better-banner
echo "Starting db..."
export PGDATA=$folder/data
export PGSOCKETS=$folder/sockets

#Clear folder
rm -rf $folder

# #Initialize folders
mkdir $folder
mkdir $folder/data
mkdir $folder/sockets
sleep 1

# #Initialize DB
initdb

sleep 1
# #Start folder
export PGPORT=3005
pg_ctl -o "-c unix_socket_directories=$PGSOCKETS -p $PGPORT" -D $PGDATA -l $folder/logfile start
createdb -h localhost -p $PGPORT better-banner
pg_ctl status
