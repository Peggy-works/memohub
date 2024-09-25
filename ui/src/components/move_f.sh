#!bin/bash
for file in $(find . -name "Log*.js"); do
 cat "$file"
done