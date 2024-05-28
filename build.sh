#!/bin/bash

TEMP_BUILD_DIR="temp_build"
mkdir -p $TEMP_BUILD_DIR

if ! command -v rsync &> /dev/null
then
    echo "rsync could not be found, installing..."
    apt-get update && apt-get install -y rsync
fi

rsync -av --exclude='*.stories.ts' . $TEMP_BUILD_DIR --exclude="$TEMP_BUILD_DIR"

cd $TEMP_BUILD_DIR

npx next build

cd ..

rm -rf $TEMP_BUILD_DIR
