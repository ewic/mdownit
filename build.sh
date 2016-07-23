#!/bin/bash
echo "Deploying files"

echo "Deploying JS"

cp ./node_modules/requirejs/require.js ./site/lib/js/
cp ./node_modules/jquery/dist/jquery.min.js ./site/lib/js/
cp ./node_modules/bootstrap/dist/js/bootstrap.min.js ./site/lib/js/
cp ./node_modules/backbone/backbone-min.js ./site/lib/js/
cp ./node_modules/underscore/underscore-min.js ./site/lib/js/

echo "JS deployed"

echo "Deploying CSS"

cp ./node_modules/bootstrap/dist/css/bootstrap.min.css ./site/lib/css/
cp ./node_modules/bootstrap/dist/css/bootstrap-theme.min.css ./site/lib/css/

echo "CSS Deployed"