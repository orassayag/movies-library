# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/movies-library/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **AngularJS 1.6** component architecture
- **ES6** syntax with Babel transpilation
- **Webpack** for module bundling
- **SASS** for styling
- **Bootstrap 4** for UI components

Before submitting:
```bash
# Install dependencies
npm install

# Test the application
npm start

# Build to ensure no errors
npm run build
```

### Coding Standards

1. **Component structure**: Follow the existing component pattern with separate controller, component, and HTML files
2. **ES6 syntax**: Use arrow functions, destructuring, and modern JavaScript features
3. **Services**: Keep business logic in services, not controllers
4. **Naming conventions**: Use camelCase for variables and functions, PascalCase for classes
5. **File organization**: Keep related files together in component folders
6. **ngInject**: Use `'ngInject'` annotation for dependency injection

### Adding New Features

When adding new features:
1. Create appropriate component structure in `src/components/`
2. Add service logic in `src/services/` if needed
3. Register components in `src/app.components.js`
4. Add routes in `src/services/router-helper/app-routes.js`
5. Add styles in `src/assets/styles/elements/`
6. Test thoroughly in the browser

### Styling Guidelines

1. Use SASS features (variables, nesting, mixins)
2. Follow BEM naming conventions where applicable
3. Keep styles scoped to components
4. Use Bootstrap 4 classes when possible
5. Define variables in `src/assets/styles/vars/`

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
