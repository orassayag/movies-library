# Instructions

**Version**: 2.0.0
**Last Updated**: May 2026

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Available Commands](#available-commands)
4. [Development Guide](#development-guide)
5. [Extending the Application](#extending-the-application)
6. [Best Practices](#best-practices)
7. [External Resources](#external-resources)

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The application will open automatically in your browser at `http://localhost:3000`

## Configuration

### Webpack Configuration

Edit `webpack.config.js` to customize:

- **Port**: Change `devServer.port` (default: 3000)
- **Output path**: Change `output.path` (default: `build/`)
- **Source maps**: Modify `devtool` setting

### Movie Data Source

The application fetches movie data from:

```javascript
https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-coming-soon.json
```

To change the data source:

1. Open `src/services/movies/movies.service.js`
2. Update the `moviesUrl` property
3. Ensure the new source returns data in the same JSON format

## Building for Production

Create an optimized production build:

```bash
npm run build
```

This generates:

- Minified JavaScript bundles in `build/libs/`
- Optimized CSS in `build/assets/styles/`
- HTML file with injected assets in `build/`

## Project Structure

```
movies-library/
├── src/
│   ├── components/          # Angular components
│   │   ├── header/         # Header component
│   │   ├── home/           # Home page (shows 3 random movies)
│   │   ├── movie/          # Single movie detail page
│   │   └── movies/         # All movies list page
│   ├── services/           # Angular services
│   │   ├── movies/         # Movie data service
│   │   ├── utils/          # Utility services
│   │   └── router-helper/  # Routing configuration
│   ├── assets/             # Static assets
│   │   └── styles/         # SASS stylesheets
│   ├── data/               # Static JSON data
│   ├── app.module.js       # Main application module
│   ├── app.components.js   # Component registration
│   ├── vendor.module.js    # Third-party dependencies
│   └── index.html          # Entry HTML file
├── build/                  # Production build output
├── webpack.config.js       # Webpack configuration
└── package.json           # NPM dependencies and scripts
```

## Available Scripts

### Development

```bash
npm start
```

Starts the webpack dev server with:

- Hot module replacement
- Source maps
- Browser auto-open
- Port 3000 (configurable)

### Build

```bash
npm run build
```

Creates production build with:

- Minified JavaScript
- Optimized CSS
- Source maps
- Vendor code splitting

## Component Architecture

Each component follows this structure:

```
component-name/
├── index.js                    # Module export
├── component-name.component.js # Component definition
├── component-name.controller.js # Controller logic
└── component-name.html         # Template
```

### Creating a New Component

1. Create folder in `src/components/`
2. Add component files (controller, component, HTML)
3. Register in `src/app.components.js`
4. Add route in `src/services/router-helper/app-routes.js`
5. Add styles in `src/assets/styles/elements/`

## Routing

Routes are defined in `src/services/router-helper/app-routes.js`:

- `/` - Home page (3 random movies)
- `/movies` - All movies list
- `/movie` - Single movie detail

## Styling

### SASS Structure

```
assets/styles/
├── vars/           # Variables (colors, typography, etc.)
├── blocks/         # Base styles (body, etc.)
├── elements/       # Component styles
└── styles.scss     # Main entry point
```

### Bootstrap Integration

The project uses Bootstrap 4 for:

- Grid system
- Typography
- Utility classes
- Components (buttons, cards, etc.)

## Data Format

Movies should follow this JSON structure:

```json
{
  "id": "1",
  "title": "Movie Title",
  "year": "2018",
  "genres": ["Action", "Comedy"],
  "ratings": [1, 2, 3, ...],
  "poster": "image-url.jpg",
  "contentRating": "11",
  "duration": "PT100M",
  "releaseDate": "2018-02-28",
  "storyline": "Movie description",
  "actors": ["Actor 1", "Actor 2"]
}
```

## Development Tips

1. **Hot reload**: Changes to JS, HTML, and SCSS are auto-reloaded
2. **Browser DevTools**: Use Angular Batarang or ng-inspector for debugging
3. **Source maps**: Enabled in development for easier debugging
4. **Console**: Check browser console for AngularJS errors

## Troubleshooting

### Port already in use

Change the port in `webpack.config.js`:

```javascript
devServer: {
  port: 3001; // Change to available port
}
```

### Build fails

1. Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Clear build folder:
   ```bash
   rm -rf build
   ```

### Movies not loading

1. Check browser console for network errors
2. Verify the movie data URL is accessible
3. Check CORS policy if using custom data source

## Browser Support

The application supports:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Prerequisites

### System Requirements

- **Node.js**: Version 8 or higher
- **npm**: Version 5 or higher
- **Browser**: Modern web browser (Chrome, Firefox, Safari, Edge)
- **Memory**: 1GB RAM minimum
- **Disk Space**: 200MB for application and dependencies

## Initial Setup

1. **Clone the repository**: `git clone https://github.com/orassayag/movies-library.git`
2. **Navigate to project**: `cd movies-library`
3. **Install dependencies**: `npm install`
4. **Start development**: `npm start`

## Install Dependencies

To install all necessary project dependencies, run:

```bash
npm install
```

## Setup and Usage Instructions

This project is built with AngularJS 1.6 and Webpack 3. To get started, ensure you have the correct Node.js version installed. Follow the [Initial Setup](#initial-setup) section to clone and run the application. Use the [Available Commands](#available-commands) to manage your development and build workflows.

## Available Commands

### Development Commands

- `npm start`: Runs the application in development mode with hot reload.
- `npm run build`: Compiles and optimizes the application for production.
- `npm test`: Runs the test suite (placeholder).

## Development Commands

- `npm start`: Main command for active development.
- `npm run build`: Command for preparing the application for deployment.

## Running Scripts

Use the following syntax to run any project script:

```bash
npm run <script-name>
```

## Documentation

- **README.md**: General project overview and architecture.
- **INSTRUCTIONS.md**: Detailed setup and usage guide.
- **CONTRIBUTING.md**: Guidelines for project contributions.

## Extending the Application

### Adding Components

1. Create a new directory in `src/components/`.
2. Add the component definition and controller.
3. Register the component in `src/app.components.js`.

### Adding Services

1. Create a new service file in `src/services/`.
2. Register the service in the relevant module (e.g., `core.module.js`).

## Best Practices

- **Component-Driven Development**: Build UI features as isolated components.
- **Service Encapsulation**: Keep business logic out of controllers.
- **Strict DI**: Always use `'ngInject'` for dependency injection.
- **SASS Modularity**: Use variables and partials for maintainable styles.

## External Resources

- [AngularJS Documentation](https://docs.angularjs.org/api)
- [UI-Router Documentation](https://ui-router.github.io/ng1/)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/)

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
