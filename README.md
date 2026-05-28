# Movies Library

A single-page web application that displays a comprehensive movie library with detailed information about films, built with AngularJS 1.6, Webpack, ES6, and Bootstrap 4.

Built in November 2018. This application fetches movie data from external sources, processes it, and presents it in an intuitive, responsive interface.

## Features

- 🎬 Displays random featured movies on the home page
- 📋 Browse complete movie catalog
- 🔍 View detailed movie information (title, year, genres, ratings, storyline, actors)
- 📊 Visual rating display with statistics
- 📱 Responsive design with Bootstrap 4
- ⚡ Fast performance with Webpack optimizations
- 🎨 Modern UI with SASS styling

## Getting Started

### Prerequisites

- Node.js (v8 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/orassayag/movies-library.git
cd movies-library
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Project Architecture

```mermaid
graph TB
    subgraph "Application Layer"
        A[index.html] --> B[app.module.js]
        B --> C[Router]
        B --> D[Components]
        B --> E[Services]
    end

    subgraph "Components"
        D --> F[Header]
        D --> G[Home]
        D --> H[Movies]
        D --> I[Movie]
    end

    subgraph "Services"
        E --> J[MoviesService]
        E --> K[MoviesUtils]
        E --> L[TextUtils]
    end

    subgraph "Data Flow"
        J --> M[External API]
        M --> N[Movie JSON Data]
        N --> J
        J --> G
        J --> H
        J --> I
    end

    subgraph "Routing"
        C --> O[/ - Home]
        C --> P[/movies - List]
        C --> Q[/movie - Detail]
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style J fill:#bfb,stroke:#333,stroke-width:2px
    style M fill:#fbb,stroke:#333,stroke-width:2px
```

## Project Structure

```
movies-library/
├── src/
│   ├── components/          # Angular components
│   │   ├── header/         # Navigation header
│   │   ├── home/           # Landing page (3 random movies)
│   │   ├── movies/         # Complete movie list
│   │   └── movie/          # Single movie details
│   ├── services/           # Business logic and utilities
│   │   ├── movies/         # Movie data service (API calls)
│   │   ├── utils/          # Helper functions
│   │   └── router-helper/  # Routing configuration
│   ├── assets/             # Static assets
│   │   └── styles/         # SASS stylesheets
│   ├── data/               # Static movie data
│   ├── app.module.js       # Main Angular module
│   ├── app.components.js   # Component registration
│   └── index.html          # Entry point
├── build/                  # Production build output
├── webpack.config.js       # Webpack configuration
├── .babelrc               # Babel configuration
└── package.json           # Dependencies and scripts
```

## Technology Stack

### Frontend Framework

- **AngularJS 1.6** - MVC framework for building the SPA
- **UI Router 1.0** - Client-side routing

### Build Tools

- **Webpack 3** - Module bundling and build process
- **Babel** - ES6 to ES5 transpilation
- **SASS** - CSS preprocessing

### UI Framework

- **Bootstrap 4** - Responsive grid and components
- **Font Awesome 4.7** - Icon library
- **jQuery 3.2** - DOM manipulation (Bootstrap dependency)

## Available Scripts

### `npm start`

Runs the app in development mode with hot reload at [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder with optimizations:

- Minified JavaScript with UglifyJS
- Optimized CSS with cssnano
- Code splitting (vendor and app bundles)
- Source maps for debugging

## Features in Detail

### Home Page

- Displays 3 randomly selected movies
- Eye-catching layout with movie posters
- Quick access to movie details

### Movies List

- Shows all available movies in a grid
- Movie cards with poster, title, and basic info
- Click to view detailed information

### Movie Details

- Complete movie information:
  - Title and release year
  - Genres
  - Content rating and duration
  - Release date
  - Storyline
  - Cast members
  - User ratings with statistics

### Responsive Design

- Mobile-first approach
- Works on phones, tablets, and desktops
- Bootstrap 4 responsive grid system

## Data Source

Movies are fetched from:

```
https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-coming-soon.json
```

The data includes comprehensive information about upcoming movies with ratings, cast, genres, and more.

## Development

### Component Architecture

Each component follows the AngularJS 1.6 component pattern:

```javascript
// Component definition
export default {
  controller: ComponentController,
  template: require('./component.html')
};

// Controller
export default class ComponentController {
  constructor(dependency) {
    'ngInject';
    // Constructor logic
  }

  $onInit = () => {
    // Initialization logic
  };
}
```

### Adding a New Component

1. Create component folder in `src/components/`
2. Create files: `index.js`, `component-name.component.js`, `component-name.controller.js`, `component-name.html`
3. Register in `src/app.components.js`
4. Add route in `src/services/router-helper/app-routes.js`
5. Add styles in `src/assets/styles/elements/`

### Webpack Configuration

Key webpack features:

- **Entry points**: Separate bundles for app and vendor code
- **Loaders**: Babel, SASS, HTML, file loaders
- **Plugins**: UglifyJS, ExtractText, HtmlWebpack, CleanWebpack
- **Dev Server**: Hot reload, historyApiFallback for routing

## Core Capabilities

- **Dynamic Movie Catalog**: Real-time fetching and display of a comprehensive movie database.
- **Featured Discovery**: Intelligent random selection of movies for the landing page.
- **Detailed Insights**: Deep-dive views into movie metadata, ratings, and cast information.
- **Optimized Performance**: Fast load times through Webpack bundling and code splitting.
- **Adaptive UI**: Seamless experience across mobile, tablet, and desktop devices.

## Technical Excellence

- **Webpack Optimization**: Minification, UglifyJS, and CSS optimizations for production.
- **Code Splitting**: Separating vendor and application code for efficient loading.
- **Transpilation**: Ensuring cross-browser compatibility using Babel.
- **Modular SASS**: Scalable and maintainable styling architecture.

## Developer Experience

- **Hot Module Replacement**: Immediate feedback during development with Webpack Dev Server.
- **Modern Tooling**: Full ES6 support via Babel and SASS preprocessing.
- **Structured Project Layout**: Intuitive directory organization for easy navigation.
- **Integrated Dev Tools**: Compatibility with standard browser debugging tools.

## Architecture Principles

- **Component-Based Architecture**: UI is divided into reusable AngularJS components.
- **Service-Driven Logic**: Business logic and data fetching are encapsulated in services.
- **MVC Pattern**: Separation of concerns between Models (data), Views (HTML), and Controllers (JS).
- **Module System**: Code is organized into logical modules for better maintainability.
- **Single Responsibility Principle**: Each component and service has a focused purpose.

## Design Patterns

- **Component Pattern**: Encapsulating UI and logic into discrete, reusable units.
- **Service Pattern**: Centralizing data access and utility logic into injectable services.
- **Module Pattern**: Using AngularJS modules to organize application features.
- **Controller Pattern**: Managing view state and interaction logic within dedicated controllers.

## Directory Structure

```
src/
├── assets/             # Static assets (styles, images)
├── components/          # AngularJS UI components
├── data/               # Static data files
├── services/           # Business logic and data services
├── app.module.js       # Main application entry point
└── index.html          # Main HTML template
```

## Usage

1. **Home Page**: Discover 3 random featured movies on the landing page.
2. **Browse Library**: Click "Movies" in the navigation to see the full catalog.
3. **View Details**: Click on any movie card to see detailed information, ratings, and cast.
4. **Navigation**: Use the header to switch between Home and the complete Movies list.

## Best Practices

- **Strict Dependency Injection**: Use `'ngInject'` for safe minification.
- **ES6 Standards**: Use modern JavaScript features like arrow functions and classes.
- **SASS Organization**: Follow a structured SASS hierarchy for scalable styling.
- **Component Pattern**: Follow the AngularJS 1.6 component pattern for UI elements.
- **Responsive Design**: Utilize Bootstrap's grid system for cross-device compatibility.

## Support

For questions, issues, or contributions:

- **GitHub Issues**: [https://github.com/orassayag/movies-library/issues](https://github.com/orassayag/movies-library/issues)
- **Email**: orassayag@gmail.com

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Reporting issues
- Submitting pull requests
- Code style guidelines
- Development workflow

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT license - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built for educational and research purposes
- Respects robots.txt and implements rate limiting
- Uses user-agent rotation to avoid detection
- Implements polite crawling practices
