#!/bin/bash

TEMP_BUILD_DIR="temp_build"
mkdir -p $TEMP_BUILD_DIR

rsync -av --exclude='*.stories.ts' . $TEMP_BUILD_DIR --exclude="$TEMP_BUILD_DIR"

cd $TEMP_BUILD_DIR

npx next build

cd ..

rm -rf $TEMP_BUILD_DIR
