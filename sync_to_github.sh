#!/bin/bash

# Configuration
BRANCH="main"
REMOTE="origin"
COMMIT_MSG="Auto-sync: $(date '+%Y-%m-%d %H:%M:%S')"

# Navigate to script directory
cd "$(dirname "$0")"

# Check for changes
if [[ -n $(git status -s) ]]; then
    echo "Changes detected. Syncing..."
    
    # Add all changes
    git add .
    
    # Commit
    git commit -m "$COMMIT_MSG"
    
    # Push
    git push "$REMOTE" "$BRANCH"
    
    if [ $? -eq 0 ]; then
        echo "Successfully synced to GitHub."
    else
        echo "Error pushing to GitHub."
    fi
else
    echo "No changes to sync."
fi
