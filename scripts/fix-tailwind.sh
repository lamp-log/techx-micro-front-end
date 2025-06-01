#!/bin/bash

echo "🔧 Fixing Tailwind CSS setup..."

# Clear caches
echo "Clearing Vite caches..."
rm -rf host/node_modules/.vite
rm -rf remote/node_modules/.vite

# Restart servers
echo ""
echo "✨ Tailwind CSS configuration fixed!"
echo ""
echo "Please restart your development servers:"
echo "  1. cd host && npm run dev"
echo "  2. cd remote && npm run dev"
echo ""
echo "The dark theme should now be applied correctly."
