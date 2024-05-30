### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is essential for creating modern SPAs with React. It simplifies the process of handling navigation, routing, and URL management, providing a seamless and intuitive user experience. By using React Router, you can build complex, dynamic, and maintainable routing structures in your applications.

- What is a single page application?

A Single Page Application (SPA) is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload. SPAs aim to provide a more seamless and fluid user experience, similar to that of a desktop application. 

- What are some differences between client side and server side routing?

Client-side routing is great for building fast, interactive single-page applications, while server-side routing is beneficial for SEO and traditional multi-page applications.

- What are two ways of handling redirects with React Router? When would you use each?

Using the <Redirect> Component:

Declarative approach.
Suitable for simple, direct redirects within JSX.
Good for setting up permanent redirects and automatic redirects on render.
Using the history Object:

Imperative approach.
Suitable for redirects based on complex logic or events.
Provides more control over when and how the redirect occurs, especially outside the rendering lifecycle.

- What are two different ways to handle page-not-found user experiences using React Router? 

Catch-All Route (Wildcard Route):

Simple and straightforward.
Catches all undefined routes with a generic handler.
Ensures no route is left unhandled.
Specific Route for 404:

Provides a specific URL for the 404 page.
Useful for SEO, analytics, and user bookmarks.
Allows for more explicit and intentional handling of 404 errors.
Both methods are effective and can be used based on the needs and structure of your application. The catch-all route is more common for its simplicity, while the specific 404 route provides additional benefits for SEO and user experience.

- How do you grab URL parameters from within a component using React Router?

In React Router, you can grab URL parameters within a component using the useParams hook. This hook allows you to access the parameters of the current route.

- What is context in React? When would you use it?

Context is a powerful feature in React for managing and sharing global data across your component tree. It's best used for data that needs to be accessed by multiple components at different levels, helping to avoid prop drilling and making your application easier to manage. However, it should be used judiciously to avoid potential performance and isolation issues.

- Describe some differences between class-based components and function
  components in React.

  While both class-based components and function components can achieve the same results, function components with hooks are now the preferred approach in modern React development. They provide a more concise, readable, and flexible way to handle state and side effects, encouraging better separation of concerns and code reuse. Class-based components are still supported and used in many codebases, but hooks and function components represent the future direction of React development.

- What are some of the problems that hooks were designed to solve?

Hooks were introduced to address the limitations and problems of class-based components in React, making it easier to manage state and side effects, reuse logic, reduce boilerplate, and avoid issues with the this keyword. They provide a more functional and modern approach to building React applications, improving both developer experience and code maintainability.