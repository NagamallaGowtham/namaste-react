# Namaste React 🚀


# Parcel
- It builds 'Dev Build'
- It creates 'Local Server'
- HMR = Hot Module Replacement (means whenerver the code is updated and saved the browser will refresh automatically)
- This HMR works based on the File Watching Algorithm - written in C++
- It will do 'Caching' - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundlers


# Namaste Food
/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *     - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
(Normal JS utility functions)


# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create Slice (cartSlice)
- dispatch Action
- Selector


# Types of testing (developer only)
- Unit Testing - means testing one unit or component in an isolation.
- Integration Testing
- End to End Testing - e2e testing



# Setting up testing in our app
- Install React testing Library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration 
- Install jsdom library
- Install @babel/preset-react to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom 