# Shopify Theme Project

## Overview
This project is a custom Shopify theme that includes a unique shopping cart feature designed to enhance the user experience. The theme is structured to allow easy customization and integration with Shopify's platform.

## Project Structure
The project consists of the following main directories and files:

- **assets/**: Contains JavaScript and CSS files for the theme.
  - `cart.js`: Manages custom shopping cart functionality.
  - `custom-cart.css`: Styles for the shopping cart.
  - `theme.js`: General JavaScript for the theme.

- **config/**: Contains configuration files for the theme.
  - `settings_schema.json`: Defines the settings schema for customization options.

- **layout/**: Contains layout templates for the theme.
  - `cart.liquid`: Layout template for the cart page.
  - `theme.liquid`: Main layout template for the theme.

- **locales/**: Contains localization files for the theme.
  - `en.default.json`: Translation strings for the theme.

- **sections/**: Contains modular sections for the theme.
  - `custom-cart.liquid`: Section for the custom cart.

- **snippets/**: Contains reusable snippets for the theme.
  - `cart-item.liquid`: Snippet for rendering individual cart items.
  - `custom-cart-summary.liquid`: Snippet for displaying a summary of the cart.

- **templates/**: Contains template files for different pages.
  - `cart.liquid`: Template for the cart page.
  - `index.liquid`: Template for the homepage.

## Custom Shopping Cart Feature
The custom shopping cart feature allows users to:
- Add items to the cart.
- Remove items from the cart.
- Update item quantities.
- View a summary of the cart contents.

The functionality is implemented in `assets/cart.js`, while the visual presentation is handled by `assets/custom-cart.css` and the relevant Liquid files in the `sections/` and `snippets/` directories.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Upload the theme files to your Shopify store.
4. Customize the theme settings in the Shopify admin under Online Store > Themes > Customize.
5. Test the custom cart functionality to ensure it works as expected.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for more details.