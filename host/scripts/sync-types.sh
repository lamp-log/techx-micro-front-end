#!/bin/bash
# host/scripts/sync-types.sh

# Copy remote types to host
echo "📋 Syncing types from remote..."

# Create types directory
mkdir -p src/@types/remote

# Copy type definitions
cp -r ../remote/dist/@mf-types/* src/@types/remote/

echo "✅ Types synced successfully!"
