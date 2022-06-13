#!/bin/bash
set +x

VERSION=`cat ./VERSION`
if [[ $VERSION =~ v[0-9]+.[0-9]+.[0-9]+$ ]]; then 
   echo "$VERSION"
else
    echo "ERROR: version file format not valid"
    exit 1
fi