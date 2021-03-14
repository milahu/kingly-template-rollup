#!/usr/bin/env bash

sed -i 's|"module": "src/index.js"|"module": "dist/kingly.es.js"|' node_modules/kingly/package.json 
