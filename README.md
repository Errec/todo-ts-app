
# Todo-TS-App

This is a simple to-do list application built using Atomic Design principles and TypeScript. The application is styled with SCSS and uses Parcel for bundling. It also includes unit tests with Jest and ensures accessibility for screen readers and other assistive technologies.This project does not include an \`index.html\` file. The HTML is generated through JavaScript (TypeScript). The entry point is \`src/index.ts\`, and Parcel handles the bundling and HTML creation during the build process.

## Advantages of Generating HTML with JavaScript (TypeScript)

- **Dynamic Content**: Generating HTML through JavaScript allows for more dynamic content manipulation. You can easily update the DOM based on user interactions and data changes without needing to reload the page.
  
- **Component Reusability**: Using JavaScript for HTML generation promotes the creation of reusable components. This aligns with the Atomic Design methodology, enabling better code organization and maintainability.
  
- **Reduced Redundancy**: With JavaScript-generated HTML, you avoid redundancy by creating HTML elements programmatically. This can simplify the structure and reduce the risk of errors from manually editing HTML files.
  
- **Single Source of Truth**: Managing your UI components in JavaScript ensures that your logic and markup are closely aligned. This makes it easier to maintain and debug the application.
  
- **Better Integration with Build Tools**: Tools like Parcel can automatically handle dependencies, bundling, and optimizations when the HTML is generated through JavaScript. This leads to more efficient builds and streamlined development workflows.
  
- **Improved Testing**: Generating HTML with JavaScript allows for more straightforward unit and integration testing. You can simulate DOM changes and interactions within your test suites, ensuring your components behave as expected.

## Features

- Add, edit, and remove tasks.
- Mark tasks as completed.
- Persistent storage using local storage.
- Responsive design.
- Dark theme support.
- Animations and transitions for better user experience.
- Unit tests with Jest.
- Accessibility support for screen readers and other assistive technologies.

## Technologies and Methodologies

### Technologies Used

- **TypeScript**: For type-safe JavaScript.
- **SCSS**: For modular and maintainable styles.
- **Parcel**: For fast and simple bundling.
- **Jest**: For unit testing.

### Methodologies

- **Atomic Design**: Organizing components into Atoms, Molecules, Organisms, Templates, and Pages for better scalability and reusability.
- **BEM (Block Element Modifier)**: For consistent and understandable naming of CSS classes.
- **Local Storage**: For persisting tasks between sessions.
- **Error Handling**: Using try-catch blocks for robust error management.
- **Accessibility**: Ensuring the application is accessible to users with disabilities.

## Project Structure

```plaintext
todo-ts-app/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── _variables.scss
│   │       ├── _mixins.scss
│   │       └── main.scss
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── utils/
│   ├── types/
│   ├── App.ts
│   └── index.ts
├── tests/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-ts-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

To start the development server, run:
```bash
npm start
```

### Build

To build the project, run:
```bash
npm run build
```

### Tests

To run the unit tests, run:
```bash
npm test
```

## Accessibility Features

- **ARIA Labels**: Added to buttons, inputs, and other interactive elements.
- **Semantic HTML**: Used appropriate HTML tags to enhance accessibility.
- **Keyboard Navigation**: Ensured all interactive elements are accessible via keyboard.
- **Color Contrast**: Ensured sufficient color contrast for text and background.
