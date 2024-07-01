## EPC Processor

This project takes a JSON file containing a list of EPCs (Electronic Product Codes) and creates a new text file with each EPC on a separate line.

**Requirements:**

* Node.js and npm (or yarn) installed on your system.

**Usage:**

1. **Update file names:**
    * Replace `'data.json'` with the actual filename of your JSON file containing the EPC list.
    * Replace `'processed.txt'` with the desired filename for the output text file.
2. **Run the script:**
    * Open a terminal or command prompt and navigate to the directory containing this project's files.
    * Run the following command:

        ```bash
        node index.js
        ```

**Explanation:**

* This script uses the `fs` (file system) module from Node.js to read and write files.
* It reads the JSON file specified by `jsonDataFile`.
* It parses the JSON data and extracts the `epcList` array.
* It joins the EPCs in the list with newline characters (`\n`) to create a single string with each EPC on a new line.
* Finally, it writes the processed data to a new text file specified by `processedFile`.

**Error Handling:**

The script includes error handling for potential issues during file reading, JSON parsing, and file writing. Any errors will be logged to the console.
