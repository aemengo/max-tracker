#!/usr/bin/env bash

dir=$(cd $(dirname $0) && cd .. && pwd)
version=$(cat $dir/manifest.json | jq -r .version)

cd $dir

set -x
zip "$dir/max-tracker-$version".zip *
