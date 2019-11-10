#! /bin/bash
folder=$1

rm -rf $folder/data
mkdir $folder/data
pg_ctl initdb -D $folder/data