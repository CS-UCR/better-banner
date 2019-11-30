#! /bin/bash
folder=$1
sh ./stopdb.sh
rm -rf $folder/data
sh ./startdb.sh
# mkdir $folder/data
# pg_ctl initdb -D $folder/data