# Password Generator

A web-based application to generate secure and customizable passwords. Users can specify the length and character types (uppercase, lowercase, numbers, symbols) to include in the generated password.

## Features

- Customizable password length (8 to 128 characters).
- Options to include uppercase letters, lowercase letters, numbers, and symbols.
- One-click copy to clipboard functionality.
- Responsive design.
- Optimized code for better performance.
- Enhanced UI for a more visually appealing experience.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/password-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd password-generator
   ```
3. Open `index.html` in your web browser to view the application.

## Usage

1. Use the range slider to select the desired password length.
2. Check the boxes to include uppercase letters, lowercase letters, numbers, and/or symbols in the password.
3. Click the "Generate" button to create a new password.
4. Click on the generated password to copy it to the clipboard.

## Code Overview

### HTML

The HTML file contains the structure of the application, including the input fields, buttons, and result display area.

### CSS

The CSS file (`assets/css/index.css`) styles the application, making it visually appealing and responsive.

### JavaScript

The JavaScript file (`assets/js/index.js`) contains the logic for generating passwords, handling user input, and copying the generated password to the clipboard.

#### Key Functions

- `getAllowedChars()`: Returns an object containing character sets for uppercase, lowercase, numbers, and symbols.
- `generatePassword(length)`: Generates a password based on the selected options and specified length.
- `copyToClipboard(text)`: Copies the provided text to the clipboard.

## Optimizations and Makeover

- **Code Optimization**: Refactored the code to improve performance and readability.
- **UI Makeover**: Updated the user interface for a more modern and visually appealing design.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Inspired by various password generator tools available online.
