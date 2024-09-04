#!/usr/bin/env bash
PROJECT_NAME=$1
git clone git@github.com:digitao-io/d-flow.git $PROJECT_NAME
rm -rf $PROJECT_NAME/.git