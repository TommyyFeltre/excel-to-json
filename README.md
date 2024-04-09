Features:
- Reads Excel files in the .xlsx format.
- Extracts translation keys and values from a specific sheet within the Excel file.
- Supports translating into a single language or generating JSON files for all available languages.
- Handles cases where the first row contains headers.

Requirements:
- Node.js and npm (or yarn) package manager installed.
 - The xlsx package installed: npm install xlsx
- The fs (file system) module is included by default in Node.js.

Usage:
- Clone or download the script repository.
- Open a terminal window in the project directory.
-  Run the script using ts-node app.ts (assuming it's named app.ts).

Configuration:
- BE: Path to the back-end Excel file (replace with your actual path).
- FE: Path to the front-end Excel file (replace with your actual path).
- AVAILABLE_LANGUAGE: An array containing the supported language codes (e.g., ['en', 'de', 'es']).

Example Usage (Translating all languages):
Bash
- ts-node app.ts
This will create JSON files in the ./translated_files directory with names matching the language codes (e.g., en.json, de.json, etc.). Each JSON file will contain the translated key-value pairs for that language.

Error Handling:
- The script includes basic error handling for file system operations.

Additional Notes:
- This script assumes a specific Excel file format with translation keys in the first column (header row optional) and translated values in subsequent columns matching the language codes.
- For more complex translation workflows, consider using dedicated translation management tools.
