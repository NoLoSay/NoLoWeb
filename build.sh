#!/bin/bash

TEMP_BUILD_DIR="temp_build"
mkdir -p $TEMP_BUILD_DIR

cp -r  * $TEMP_BUILD_DIR

cd $TEMP_BUILD_DIR

find . -name "*.stories.ts" -type f -delete

next build

cd ..

rm -rf $TEMP_BUILD_DIR
