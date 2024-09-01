#!/usr/bin/env bash

args=$1;
git clone git@github.com:digitao-io/d-flow.git;
mv d-flow $args;
cd $args;
rm -rf .git;