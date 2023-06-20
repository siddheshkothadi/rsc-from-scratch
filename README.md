# RSC From Scratch

Link: https://github.com/reactwg/server-components/discussions/5

Learnings:

- Custom ESM Loaders and chaining in node: https://dev.to/jakobjingleheimer/custom-esm-loaders-who-what-when-where-why-how-4i1o
- Babel: https://babeljs.io/docs/babel-plugin-transform-react-jsx

### Process

1. Writing JSX code

2. Babel transformation: When you build or compile your React application, Babel comes into play. Babel is a JavaScript compiler that converts modern JavaScript code, including JSX, into a format that is compatible with older browsers or environments.

3. Loaders and Configuration: presets and plugins in `babelrc`, `babel.config.js` files.

4. JSX transformation: Babel converts your JSX code using  the configured transformations. It converts the JSX syntax into regular JavaScript code that creates React elements. This transformation process involves converting JSX tags into function calls and handling JSX-specific features like fragments and component references.

5. JSX runtime: During the transformation, the resulting code relies on the JSX runtime to execute properly. The JSX runtime includes helper functions and runtime code that are used by the transformed code to create and manage React elements. This includes functions for creating elements, handling fragments, and resolving component references.

6. Including the runtime: To ensure the transformed code has access to the necessary runtime functions, the `jsx-runtime.js` file (or a similar file with a different name) is typically included in the final bundle of your application. This file contains the required runtime code and is imported by the transformed code at runtime.

7. Execution: When your React application runs in the browser or on a server, the transformed code, along with the included JSX runtime, is executed. The runtime functions are used to create and render React components based on the JSX code you wrote.
