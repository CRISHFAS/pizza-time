# Pizza Time

Pizza Time: Una deliciosa experiencia en línea con un menú interactivo con una variedad de opciones que incluyen pizza, sushi y pasta. El objetivo principal de este proyecto fue simplificar el proceso de pedidos en línea y brindar una experiencia de usuario fluida.

Versión en vivo:

[Pizza Time](https://pizza-time-with-react.vercel.app/)

Una plataforma de comercio electrónico diseñada para la industria gastronómica. Lideré el diseño y desarrollo integral, utilizando tecnologías como React Icons, React Router DOM, React Alice Carousel, Leaflet Maps, React Paginate, UUID, React Lazy Load y Framer Motion.

🍕 Centro Culinario Dinámico:
Restaurante ficticio con un extenso menú que incluye pizzas, sushi y pasta. Se utilizaron componentes de React como Icons, Router y Carousel para una navegación y una interfaz de usuario sencillas.

📍 Conocimiento espacial con Leaflet Maps:
Se utilizó la API de Leaflet Maps para proporcionar información geográfica, mejorando la interacción del usuario y la comprensión de la ubicación de la tienda.

🎨 Eficiencia de la interfaz de usuario mediante paginación y movimiento:
Se empleó React Paginate para una división intuitiva de las páginas del menú, optimizando la exploración. Framer Motion añadió animaciones fluidas, mejorando el atractivo visual y la interacción.

🆔 Gestión eficiente de datos:
El UUID para la generación de identificadores únicos garantiza una identificación robusta de los artículos del menú y los pedidos. React Lazy Load optimiza la carga de imágenes y componentes, mejorando el rendimiento del sitio web.

💾 Integridad de datos con Turso:
Se implementó el cliente libSQL para un backend de base de datos fiable, protegiendo las transacciones y los datos de los usuarios. Turso garantiza operaciones escalables de la base de datos SQLite.

🛒 Pedidos optimizados mediante Express.js:
Se desarrolló un sistema de pedidos basado en Express.js para una gestión fluida del carrito, la adición/eliminación de artículos y la actualización de cantidades.

👤 Interacción personalizada con el usuario:
Registro, inicio de sesión y gestión de perfiles habilitados. Los usuarios modifican y eliminan perfiles, lo que mejora la personalización.

📧 Comunicación segura mediante reCAPTCHA:
Google reCAPTCHA integrado para verificar a los usuarios del formulario de contacto, lo que reduce el spam y garantiza una comunicación segura.

Pizza Time combina comida deliciosa con tecnología avanzada, creando una experiencia digital intuitiva. Es donde la buena comida se fusiona con la programación, permitiendo a los usuarios disfrutar de una experiencia culinaria cómoda y satisfactoria.

## Contenido

- [Introducción](#gettingStarted)
- [Instrucciones](#instructions)
- [Base de datos](#database)
- [Objetivos](#goals)
- [Historia de usuario](#userStory)
- [Dependencias utilizadas](#dependencies)
- [Recursos útiles](#resources)
- [Contribución](#contribution)
- [Licencia](#license)

## Primeros pasos <a id="gettingStarted"></a>

Para empezar, necesitas:

1. Clonar el proyecto
2. Instalar pnpm
3. Instalar las dependencias listadas
4. Usar scripts disponibles, como pnpm dev

## Instrucciones <a id="instructions"></a>

- Al bifurcar o descargar el proyecto, instala los módulos de nodo usando pnpm install y luego cualquier dependencia adicional que no tengas de la lista de <a id="dependencies">Dependencies</a>.

- A continuación, crea el archivo .env, ubicado fuera del archivo src.

- En el archivo .env, utilizo varias variables:
1. VITE_TURSO_DB_URL, VITE_TURSO_DB_TOKEN y MYSQL_ATTR_SSL_CA: estas variables contienen información que te conectará a la base de datos de Turso. Puede usar la siguiente documentación (https://docs.turso.tech/sdk/ts/quickstart). Si usa otra base de datos, deberá usar la información correspondiente para conectarse a ella. El token se crea después del registro.
Tenga en cuenta que, en mi caso, la tabla de usuarios se llama "usuarios" y contiene los siguientes datos: ID | correo electrónico | contraseña | nombre completo | dirección | número.
2. VITE_USERS_URL: esta es la URL del servidor Node.js. Primero, es mejor ejecutarla localmente y solo después de cambiar a la configuración deseada. Si desea ejecutar el servidor localmente, el valor de esta variable debe ser http://localhost:3000/users. En este proyecto, configuré el backend con Vercel. Puede buscar en Google "Cómo implementar su proyecto backend de Node.js en Vercel" y configurar su propio backend.
3. VITE_CAPTCHA_URL: la misma lógica funciona para esta URL de backend, que en esta ocasión se utiliza para la verificación de captcha. Localmente, el valor de la URL debe ser http://localhost:3000/verify-recaptcha. 4. VITE_CAPTCHA_KEY y VITE_CAPTCHA_SECRET: ambos valores se pueden encontrar al crear una cuenta de reCaptcha en https://www.google.com/recaptcha/about/. Para una mejor comprensión, consulte su documentación. - Una vez configuradas las variables, puedes ejecutar el servidor en un puerto si usas el servidor local y el sitio web en otro. 


## Base de datos <a id="database"></a>
Para usar la función de registro en tu proyecto, necesitas tu propia base de datos. Puedes usar cualquier base de datos SQL que desees y adaptarla a este proyecto. Yo uso la base de datos [Turso](https://turso.tech/). Para tener tu propia base de datos, debes registrarla y configurarla según la información proporcionada. Te recomiendo usar su [documentación](https://docs.turso.tech/sdk/ts/quickstart).

## Objetivos <a id="goals"></a>
El objetivo principal de este proyecto es mejorar en React y experimentar lo que se siente al trabajar en algo que se asemeja más a un proyecto real. Anteriormente, trabajaba principalmente en pequeños fragmentos de código que no aportaban mucho por sí solos. Con este proyecto, quiero asumir una nueva perspectiva: no solo como programador, sino como alguien que crea algo útil y que lo va a usar.

## Historia de usuario <a id="userStory"></a>

Como usuario, quiero poder añadir artículos al carrito incluso sin iniciar sesión ni registrarme. Al navegar por la página del menú, quiero ver los artículos con imagen, nombre, ingredientes y precio.
Quiero poder ordenar el menú por categorías y encontrar algo específico escribiéndolo en la barra de búsqueda. Quiero poder añadir artículos al carrito, indicar la cantidad o eliminarlos. En la sección del carrito, quiero ver el total a pagar y acceder a la sección de pagos. Antes de pagar, quiero añadir una solicitud especial a mi pedido, como "sin picante, por favor".

## Dependencias utilizadas <a id="dependencies"></a>

- [Íconos de React](https://www.npmjs.com/package/react-icons)
- [DOM de React Router](https://www.npmjs.com/package/react-router-dom)
- [Carrusel de React Alice](https://www.npmjs.com/package/react-alice-carousel)
- [Mapas de Leaflet](https://react-leaflet.js.org/docs/start-installation/)
- [Paginado de React](https://www.npmjs.com/package/react-paginate)
- [UUID - Generador de ID aleatorios](https://www.npmjs.com/package/uuid)
- [Inclinación](https://micku7zu.github.io/vanilla-tilt.js/)
- [React Lazy Cargar](https://www.npmjs.com/package/react-lazy-load-image-component)
- [Framer Motion](https://www.framer.com/motion/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [libsql](https://www.npmjs.com/package/@libsql/client)


## Recursos <a id="resources"></a>

- [HTML a JSX](https://magic.reactjs.net/htmltojsx.htm) - Una excelente herramienta para compilar HTML a JSX.
- [Lorem Ipsum](https://www.lipsum.com/feed/html) - Generador de texto ficticio: no necesitas crear artículos extensos.
- [Leaflet](https://react-leaflet.js.org/) - API de mapas. Es un segundo proyecto que uso y me gusta mucho. Es gratis y no requiere información de tarjeta de crédito si quieres usarlo para proyectos pequeños.
- [Icons8](https://icons8.com/) - []() - Excelente colección de iconos, por si no encuentras lo que buscas en FontAwesome. - [Carrusel React Alice](https://www.npmjs.com/package/react-alice-carousel) - El Carrusel React Alice es un componente de React para crear galerías de contenido, rotadores de contenido y cualquier carrusel de React.
- [TinyPNG](https://tinypng.com/) - Técnicas inteligentes de compresión con pérdida para reducir el tamaño de tus archivos WEBP, JPEG y PNG.
- [Componente de Carga Diferida de Imágenes React](https://www.npmjs.com/package/react-lazy-load-image-component) - Componente de React para la carga diferida de imágenes y otros componentes/elementos.
- [Íconos React](https://react-icons.github.io/react-icons) - Incluye fácilmente íconos populares en tus proyectos React con react-icons, que utiliza importaciones de ES6 que te permiten incluir solo los íconos que usa tu proyecto.

#### Crea tu portafolio:
¡Incorpora este proyecto a tu portafolio personal! Demuestra tus habilidades y creatividad presentando tus adaptaciones o implementaciones. Solo asegúrate de seguir las directrices de la licencia MIT. Sin embargo, no recomiendo copiar y pegar este proyecto en tu portafolio y hacerlo tuyo hasta que leas el código y entiendas la lógica o lo reescribas.

¡Que disfrutes programando!