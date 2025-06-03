#!/bin/bash
# host/scripts/gen-remotes-dts.sh

set -e

REMOTE_DIR="src/@types/remote"
OUT_FILE="src/@types/remotes.d.ts"
REMOTE_VITE_CONFIG="../remote/vite.config.ts"

echo "// AUTO-GENERATED. DO NOT EDIT." > "$OUT_FILE"
echo "" >> "$OUT_FILE"

# Function to extract content from a file
extract_content() {
  local file=$1
  local indent=$2
  
  if [ -f "$file" ]; then
    # Extract interfaces and types
    awk -v indent="$indent" '
      /^export (interface|type)/ {
        print indent $0
        in_block = 1
        brace_count = gsub(/{/, "{")
        brace_count -= gsub(/}/, "}")
        if (brace_count == 0) in_block = 0
        next
      }
      in_block {
        print indent $0
        brace_count += gsub(/{/, "{")
        brace_count -= gsub(/}/, "}")
        if (brace_count == 0) in_block = 0
      }
      /^export declare const/ {
        print indent $0
      }
      /^export const/ {
        gsub(/export const/, "export declare const")
        print indent $0
      }
    ' "$file"
  fi
}

# Extract lines containing expose definitions from vite.config.ts
grep -E '^\s*['"'"'"]\.\/[^'"'"'"]+['"'"'"]\s*:\s*['"'"'"]' "$REMOTE_VITE_CONFIG" | while read -r line; do
  # Extract the exposed name and file path
  exposed_name=$(echo "$line" | sed -E 's/^[[:space:]]*['"'"'"]\.\/([^'"'"'"]+)['"'"'"].*/\1/')
  file_path=$(echo "$line" | sed -E 's/.*['"'"'"]\.\/src\/([^'"'"'"]+)['"'"'"].*/\1/')
  file_path=$(echo "$file_path" | sed 's/\.tsx$//' | sed 's/\.ts$//')
  
  # Skip if we couldn't extract both values
  if [ -z "$exposed_name" ] || [ -z "$file_path" ]; then
    continue
  fi
  
  mod_name="remote/${exposed_name}"
  type_file="$REMOTE_DIR/${file_path}.d.ts"
  
  if [ -f "$type_file" ]; then
    echo "declare module \"$mod_name\" {" >> "$OUT_FILE"
    
    # Special handling for UserContext which has multiple files
    if [ "$exposed_name" = "UserContext" ]; then
      # Extract from context file
      extract_content "$REMOTE_DIR/contexts/UserContext.context.d.ts" "  " >> "$OUT_FILE"
      echo "" >> "$OUT_FILE"
      
      # Extract UserProvider
      echo "  export declare const UserProvider: React.FC<{ children: React.ReactNode }>;" >> "$OUT_FILE"
      
      # Extract useUser
      echo "  export declare const useUser: () => UserContextType;" >> "$OUT_FILE"
      
      # Default export
      echo "  const UserProvider: React.FC<{ children: React.ReactNode }>;" >> "$OUT_FILE"
      echo "  export default UserProvider;" >> "$OUT_FILE"
    else
      # For other modules, extract content normally
      extract_content "$type_file" "  " >> "$OUT_FILE"
      
      # Handle default export
      default_export=$(grep "^declare const" "$type_file" | sed -E 's/declare const ([^:]+):.*/\1/')
      if [ -n "$default_export" ]; then
        type_info=$(grep "^declare const $default_export" "$type_file" | sed -E 's/declare const [^:]+: (.+);?$/\1/' | sed 's/;$//')
        echo "  const $default_export: $type_info;" >> "$OUT_FILE"
        echo "  export default $default_export;" >> "$OUT_FILE"
      fi
    fi
    
    echo "}" >> "$OUT_FILE"
    echo "" >> "$OUT_FILE"
    
    echo "  ✓ Generated types for: $mod_name"
  else
    echo "  ⚠ Warning: Type file not found for ${exposed_name} at $type_file"
  fi
done

echo ""
echo "✅ remotes.d.ts generated from vite.config.ts"
