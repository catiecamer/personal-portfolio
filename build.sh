#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# 1. Build the Angular app with output directed to the 'docs' folder.
echo "Building Angular project..."
ng build --output-path docs

# 2. Remove the <base> tag from docs/index.html.
# This regex removes any <base ...> tag.
echo "Removing <base> tag from docs/index.html..."
sed -i '' 's|<base[^>]*>||g' docs/index.html


# 3. Duplicate index.html to 404.html (useful for SPA routing on GitHub Pages).
echo "Creating 404.html from index.html..."
cp docs/index.html docs/404.html

# 4. Create a CNAME file with your custom website URL.
WEBSITE_URL="www.catiecamer.com"
echo "Creating CNAME file with domain: $WEBSITE_URL..."
echo "$WEBSITE_URL" > docs/CNAME

echo "Build process complete!"
