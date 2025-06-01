#!/bin/bash

# Start both applications for the demo

echo "🚀 Starting Micro Frontend Demo..."
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "host/node_modules" ]; then
    echo "📦 Installing host dependencies..."
    cd host && npm install && cd ..
fi

if [ ! -d "remote/node_modules" ]; then
    echo "📦 Installing remote dependencies..."
    cd remote && npm install && cd ..
fi

# Start both applications
echo ""
echo "🏃 Starting applications..."
npm run dev

echo ""
echo "📍 Remote: http://localhost:5001"
echo "📍 Host: http://localhost:5000"
