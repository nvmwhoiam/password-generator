# Password Generator

A web-based application to generate secure and customizable passwords. Users can specify the length and character types (uppercase, lowercase, numbers, symbols) to include in the generated password.

## Features

### Enhanced Password Generation

- **Smart Character Selection**: Uses secure randomization with `crypto.getRandomValues()`
- **Improved Character Sets**:
  - Removed ambiguous characters (e.g., l, 1, O, 0)
  - Optimized symbols for maximum compatibility with auth systems (`!@#$%^&*-_+=`)
- **Guaranteed Character Types**: Includes at least one character from each selected type

### New Password History

- 📜 View previously generated passwords
- 📅 Timestamp for each generated password
- 📋 One-click copy from history
- 💾 LocalStorage persistence between sessions

### UX Improvements

- ✅ Clean, intuitive interface
- 🎚️ Visual length indicator
- 🔄 Responsive design
- 🎨 Modern visual styling
- 📱 Mobile-friendly layout

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nvmwhoiam/password-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd password-generator
   ```
3. Open `index.html` in your web browser to view the application.

## Usage

1. Adjust length with the slider (8-128 characters)
2. Select character types (uppercase, lowercase, numbers, symbols)
3. Click "Generate" to create password
4. Click "Copy" to copy to clipboard
5. Click "History" to view password history

## Technical Improvements

### Password Generation Logic

- Uses cryptographically secure randomization
- Shuffles password characters for better security
- HTML-encodes output for safety
- Strict length validation (8-128 chars)
- Requires at least one character type

### UI Components

- Animated history panel (open/close states)
- Visual feedback for copy actions
- Accessible button labels
- Responsive layout adjustments

### Code Structure

- Modular function organization
- Clear variable naming
- Efficient DOM queries
- LocalStorage management for history
- Event delegation for dynamic elements

## Why This Version Is Better

1. More Secure Passwords:

- Avoids ambiguous characters
- Better character distribution
- Proper cryptographic randomization

2.  Better User Experience:

- Password history eliminates regeneration
- Clear visual feedback
- Intuitive controls

3. More Reliable:

- Works with more authentication systems
- Fewer "invalid character" errors
- Consistent output formatting

## Screenshots

![Alt text](https://sadevworks.com/assets/img/projects/password-generator-v2.0.0.png "a title")

## Future Improvements

- Password strength meter
- Custom character sets
- Export history as CSV
- Dark mode toggle

## Contact

If you have any questions or need assistance, please do not hesitate to reach out. I apologize if any part of this setup is not clear; this is my first major project, and I am putting in continuous effort to improve it. Feel free to contact me at [info@sadevworks.com](mailto:info@sadevworks.com) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/password-generator).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

- Email: [info@sadevworks.com](mailto:info@sadevworks.com)
- Website: [sadevworks.com](https://sadevworks.com)
- GitHub: [@nvmwhoiam](https://github.com/nvmwhoiam/)
