# Pizza Time

![Pizza Time preview](https://github.com/catherineisonline/pizza-time-with-react/blob/main/src/assets/images/project-preview.png?raw=true)

Pizza Time: A delicious online experience. I designed and developed an e-commerce platform for this pizza restaurant, featuring an interactive menu with a variety of options including pizza, sushi, and pasta. Simplifying the online ordering process and providing a seamless user experience was the key goal of this project.

[![GitHub license](https://img.shields.io/github/license/catherineisonline/pizza-time-with-react)](https://github.com/catherineisonline/travel-with-catherine/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/catherineisonline/pizza-time-with-react)](https://github.com/catherineisonline/travel-with-catherine/issues)
[![GitHub stars](https://img.shields.io/github/stars/catherineisonline/pizza-time-with-react)](https://github.com/catherineisonline/travel-with-catherine/stargazers)

Live Version:

[Pizza Time](https://pizza-time-with-react.vercel.app/)

An e-commerce platform tailored for the gastronomy industry. I led end-to-end design and development, utilizing technologies like React Icons, React Router DOM, React Alice Carousel, Leaflet Maps, React Paginate, UUID, React Lazy Load, and Framer Motion.

🍕 Dynamic Culinary Hub:
Fictional restaurant featuring an extensive menu including pizzas, sushi, and pasta. Used React components like Icons, Router, and Carousel for easy navigation and user interface.

📍 Spatial Awareness with Leaflet Maps:
Used Leaflet Maps API to provide geographical insights, enhancing user interaction and store location understanding.

🎨 UI Efficiency via Pagination and Motion:
Employed React Paginate for user-friendly menu page division, optimizing exploration. Framer Motion added smooth animations, enhancing visual appeal and interaction.

🆔 Efficient Data Management:
UUID for unique ID generation ensures robust menu item and order identification. React Lazy Load optimizes image/component loading, boosting site performance.

💾 Data Integrity with Turso:
Implemented libSQL client for a reliable database backend, securing transactions and user data. Turso ensures scalable SQLite database operations.

🛒 Streamlined Ordering via Express.js:
Developed Express.js-based ordering system for smooth cart management, item addition/removal, and quantity updates.

👤 Personalized User Interaction:
Enabled user registration, login, and profile management. Users modify and delete profiles, enhancing customization.

📧 Secure Communication via reCAPTCHA:
Integrated Google reCAPTCHA to verify contact form users, curbing spam and ensuring secure communication.

Pizza Time brings together delicious food and advanced technology, creating a user-friendly digital experience. It's where great food meets programming, letting users enjoy a convenient and satisfying culinary journey.

## Contents

- [Getting Started](#gettingStarted)
- [Instructions](#instructions)
- [Database](#database)
- [Goals](#goals)
- [User Story](#userStory)
- [Used Dependencies](#dependencies)
- [Useful Resources](#resources)
- [Contribution](#contribution)
- [License](#license)

## Getting Started <a id="gettingStarted"></a>

To get started you need to:

1. Clone the project
2. pnpm install
3. Install listed dependencies
4. Use available scripts, like pnpm dev

## Instructions <a id="instructions"></a>

- When you fork or download the project install node modules using pnpm install and then any additional dependencies you don't have from <a id="dependencies">Dependencies</a> list

- Next, you need to create the file name .env located outside the src file

- In the .env file I am using several variables:
1. VITE_TURSO_DB_URL, VITE_TURSO_DB_TOKEN & MYSQL_ATTR_SSL_CA - these variables contain information that will connect you to the Turso database. You can use the following [documentation](https://docs.turso.tech/sdk/ts/quickstart). If you use any other database you need to use the according information to connect to that database. The token can be created after registration.
Note that the table for users in my case is named "users" and contains the following data: id | email | password | fullname | address | number.
2. VITE_USERS_URL - this is a url for Node.js server. First, it's better to run it locally and only then switch to whatever you want. If you want to run the server locally the value of this variable should be http://localhost:3000/users. In this project I set up backend using Vercel. You can google "How to Deploy Your Node.js Backend Project to Vercel" and set up your own backend.
3. VITE_CAPTCHA_URL - the same logic works for this backedn url which this time is used for captcha verification. Locally, the url value should be http://localhost:3000/verify-recaptcha.
4. VITE_CAPTCHA_KEY & VITE_CAPTCHA_SECRET - both values can be found once you create an account for reCaptcha at https://www.google.com/recaptcha/about/. Please use their documentation for better understanding.

- Once you set up the variables, you can run the server on one port, if you use local server and the website on another port. 


## Database <a id="database"></a>
To use the registration functionality for your own project, you need to use your own database. You can use any SQL database you wish and you adapt it to this project. I am using [Turso](https://turso.tech/) database. To have your own database you need to register and set it up by provided information. I recommend you to use their [documentation](https://docs.turso.tech/sdk/ts/quickstart).

## Goals <a id="goals"></a>
The main goal of this project is to get better at React and experience what it's like to work on something that feels more like a real project. In the past, I've mostly worked on small pieces of code that didn't do much on their own. With this project, I want to step into different shoes – not just as a coder, but as someone who's building something useful and someone who's going to use it. 


## User Story <a id="userStory"></a>

As a user, I want to be able to add items to cart even if I am not logged in/registered. When navigating to the menu page, I want to see menu items that have pictures, name, ingredients, pricing.
I want to be able to sort the menu by categories, as well as be able to find something specific by writing it in the search bar. I want to be able to add items to cart, indicate the amount or delete the items from the cart. In the cart section, I want to be able to see how much I have to pay total and have the possibility to navigate to payments. Before paying, I want to add a special request to my order, like, "no spicy, please".

## Used Dependencies <a id="dependencies"></a>

- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Alice Carousel](https://www.npmjs.com/package/react-alice-carousel)
- [Leaflet Maps](https://react-leaflet.js.org/docs/start-installation/)
- [React Paginate](https://www.npmjs.com/package/react-paginate)
- [uuid - Random id generator](https://www.npmjs.com/package/uuid)
- [Tilt](https://micku7zu.github.io/vanilla-tilt.js/)
- [React Lazy Load](https://www.npmjs.com/package/react-lazy-load-image-component)
- [Framer Motion](https://www.framer.com/motion/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [libsql](https://www.npmjs.com/package/@libsql/client)


## Resources  <a id="resources"></a>

- [HTML to JSX](https://magic.reactjs.net/htmltojsx.htm) - a great tool to compile HTML to JSX.
- [Lorem Ipsum](https://www.lipsum.com/feed/html) - dummy text generator, there no need to think of big articles on your own.
- [Leaflet](https://react-leaflet.js.org/) - map API. It's a second project where I use it and I like it a lot. It's free and doesn't require any credit card info if you want to use it for some small projects.
- [Icons8](https://icons8.com/) - []() - very good collection of icons, in case you cannot find what you needed on FontAwesome.
- [React Alice Carousel](https://www.npmjs.com/package/react-alice-carousel) - React Alice Carousel is a React component for building content galleries, content rotators and any React carousels.
- [TinyPNG](https://tinypng.com/) - smart lossy compression techniques to reduce the file size of your WEBP, JPEG and PNG files.
- [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component) - React Component to lazy load images and other components/elements.
- [React Icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Contribution <a id="contribution"></a>

This project serves as a personal portfolio website to show off my personal skills. I do not accept any contributions like pull requests to this project however if you have any suggestions or ideas feel free to message me or submit an idea in the [discussions](https://github.com/catherineisonline/pizza-time-with-react/discussions). Otherwise, you are free to fork this project and change it for your own purposes. 

## License  <a id="license"></a>
This project is released under the MIT [LICENSE](https://github.com/catherineisonline/pizza-time-with-react/blob/main/LICENSE). You can find the specific terms and conditions outlined in the LICENSE file. This means you're free to utilize, modify, and distribute the project according to the terms of the MIT License.

#### Build Your Portfolio:
Feel free to incorporate this project into your personal portfolio! Showcase your skills and creativity by featuring your adaptations or implementations of this project. Just make sure to follow the guidelines of the MIT License while doing so. At the same time, I do not recommend copy pasting this project into your portoflio and claiming it as your own until you read the code and understand the logic or rewrite it.

Happy coding!