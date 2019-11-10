#! /bin/bash
folder=$1
if [ ! $1 ]
then
    echo "ERROR: Must specify directory to initialize db in!"
    exit 1
fi

pg_ctl -D $1/data stop