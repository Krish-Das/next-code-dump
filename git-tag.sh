#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./git-tag.sh [major|minor|patch] 'Your message here'"
  exit 1
fi

# Get the latest tag
latest_tag=$(git describe --tags --abbrev=0 2>/dev/null)

# If no tags exist, start with v0.0.0
if [ -z "$latest_tag" ]; then
  latest_tag="v0.0.0"
fi

# Split the tag into parts
IFS='.' read -r -a parts <<<"${latest_tag#v}"
major=${parts[0]}
minor=${parts[1]}
patch=${parts[2]}

# Increment based on argument
case $1 in
major)
  major=$((major + 1))
  minor=0
  patch=0
  ;;
minor)
  minor=$((minor + 1))
  patch=0
  ;;
patch)
  patch=$((patch + 1))
  ;;
*)
  echo "Invalid version type. Use major, minor, or patch."
  exit 1
  ;;
esac

# Create new tag
new_tag="v${major}.${minor}.${patch}"
message="$2"

# Bump up the package version
npm version "$1"

# Tag and push
git tag -a "$new_tag" -m "$message"
# git push origin "$new_tag"

echo "Tagged $new_tag with message: $message"
