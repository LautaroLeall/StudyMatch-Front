# Arquitectura Frontend de StudyMatch: Explicación Detallada

¡Hola! Tal como solicitaste, aquí tienes una explicación **desde cero y súper detallada** de qué hacen las carpetas `/context`, `/hooks`, `/services` y `/utils`, y para qué sirven las dependencias que descargamos. 

En el desarrollo moderno con React, organizar bien el código es fundamental para que el proyecto pueda crecer sin volverse un desastre. Por eso dividimos las responsabilidades.

---

## 📦 Dependencias Instaladas

### 1. `react-hook-form`
**¿Qué es?** Es una librería para manejar formularios en React.
**¿Por qué la necesitamos?** En React puro, manejar un formulario implica crear un "estado" (`useState`) por cada input (email, contraseña, nombre, etc.) y escribir funciones para actualizar ese estado cada vez que el usuario teclea algo. Si tienes 10 inputs, el código se vuelve gigantesco y lento.
`react-hook-form` toma el control de los inputs de forma "no controlada", lo que significa que es súper rápido y con unas pocas líneas de código te permite recolectar todos los datos cuando el usuario presiona "Enviar".

### 2. `zod`
**¿Qué es?** Es una librería de validación de datos.
**¿Por qué la necesitamos?** Antes de enviar los datos al servidor (Backend), necesitamos asegurarnos de que el usuario no escribió tonterías. Zod nos permite crear un "molde" o "esquema" (ej: el email debe tener un `@`, la contraseña mínimo 6 caracteres). Si los datos que ingresa el usuario no encajan en el molde, Zod lanza un error. 

### 3. `@hookform/resolvers`
**¿Qué es?** Es el "traductor" o "puente" entre `react-hook-form` y `zod`.
**¿Por qué la necesitamos?** `react-hook-form` sabe manejar formularios y `zod` sabe validarlos, pero no hablan el mismo idioma por defecto. Esta librería conecta a ambas: le dice a `react-hook-form` que use las reglas de `zod` para saber si debe mostrar un error de validación en la pantalla.

### 4. `sileo`
**¿Qué es?** Es una librería de notificaciones tipo "toast" (los cartelitos que aparecen flotando en la pantalla).
**¿Por qué la necesitamos?** Para darle feedback al usuario. Si el login falla, le mostramos un cartel rojo (`sileo.error`). Si se registra con éxito, le mostramos un cartel verde (`sileo.success`). Da una sensación de aplicación premium.

### 5. `lucide-react`
**¿Qué es?** Es una colección de iconos.
**¿Por qué la necesitamos?** En lugar de usar emojis (que se ven feos y distintos en cada celular/computadora), usamos iconos SVG vectoriales que siempre se ven perfectos, limpios y profesionales (ej: el ojito para ver la contraseña, o los íconos de libros en los objetivos de estudio).

---

## 📁 Estructura de Carpetas (La Arquitectura)

Imagina que tu aplicación es un **Restaurante**.

### 1. `src/services/` (Los Mozos / Repartidores)
* **Archivo:** `authService.js`
* **Explicación:** Un "Service" (servicio) es el código encargado única y exclusivamente de **comunicarse con el mundo exterior** (el Backend).
* **Analogía:** El mozo es quien lleva la orden (el email y contraseña) a la cocina (el Backend) y trae el plato preparado (los datos del usuario).
* **En el código:** Aquí definimos las funciones `loginUser` y `registerUser`. Por ahora están "simuladas" (esperan 1.5 segundos y devuelven éxito), pero el día de mañana, cuando tengas el Backend listo, aquí es donde pondrás el código con `axios` o `fetch` para enviar las peticiones a tu servidor real. Los componentes visuales no saben NADA de bases de datos o URLs, ellos solo llaman a esta función.

### 2. `src/context/` (La Gerencia / El Cerebro Central)
* **Archivos:** `AuthContext.jsx` y `AuthProvider.jsx`
* **Explicación:** En React, los datos normalmente fluyen de "Padre a Hijo". Si el Padre sabe quién inició sesión, tiene que pasarle ese dato al Hijo, y el Hijo al Nieto. Esto se vuelve una pesadilla ("Prop Drilling"). El **Context** es como una nube global o un enchufe centralizado donde guardamos la información importante (ej: *¿Quién está logueado en este momento?*).
* **Analogía:** Es la caja fuerte del restaurante donde está el registro de qué cliente está sentado en qué mesa. Cualquier empleado puede ir a revisar ese registro sin tener que preguntarle a 5 personas antes.
* **En el código:** 
  - `AuthContext` crea el enchufe vacío.
  - `AuthProvider` es el componente que envuelve a toda la app. Él ejecuta las funciones del Service (llama al mozo), guarda los datos del usuario en su estado (`useState`), y además los guarda en la memoria del navegador (`localStorage`) para que si el usuario recarga la página, no tenga que volver a iniciar sesión.

### 3. `src/hooks/` (El Cable Auxiliar)
* **Archivo:** `useAuth.js`
* **Explicación:** Un Custom Hook es una función propia que creamos para simplificar una tarea repetitiva en React.
* **Analogía:** Si el Context es el enchufe centralizado, el Hook `useAuth` es el cable que cualquier componente conecta a la pared para tener electricidad.
* **En el código:** En lugar de hacer que cada componente de UI tenga que importar a mano React y hacer `useContext(AuthContext)`, simplemente hacemos un hook que lo envuelve. Así, si la Navbar quiere saber el nombre del usuario, solo escribe: `const { user } = useAuth();` y listo.

### 4. `src/utils/` (El Manual de Reglas / Herramientas)
* **Archivo:** `validators.js`
* **Explicación:** "Utils" (Utilidades) es la carpeta donde guardamos funciones o configuraciones que no son componentes visuales, ni peticiones al servidor, sino **código lógico y reutilizable** a lo largo de toda la aplicación.
* **Analogía:** Es el manual de reglas de sanidad del restaurante. Se lee antes de aceptar cualquier ingrediente en la cocina.
* **En el código:** Aquí guardamos los moldes de `zod` (`loginSchema` y `registerSchema`). Los ponemos en esta carpeta para mantener limpios los archivos de las páginas (como `LoginPage.jsx`). De esta forma, si mañana queremos cambiar que la contraseña pida 8 caracteres en vez de 6, venimos a este archivo y se actualiza automáticamente en toda la app.

---

### Resumen del Flujo Completo

1. El usuario entra a `LoginPage.jsx` (Componente Visual) y escribe su email y clave.
2. Al clickear "Iniciar Sesión", `react-hook-form` toma los datos y revisa las reglas de `zod` en `utils/validators.js`.
3. Si todo está bien, el componente visual llama a la función `login()` que le dio el `useAuth.js` (Hook).
4. El hook se conecta con el `AuthProvider.jsx` (Context).
5. El Context ejecuta `loginUser()` que vive en `authService.js` (Service).
6. El Service habla con el Backend (simulado), y devuelve la respuesta.
7. El Context guarda que el usuario se logueó, y le avisa a todos los componentes visuales para que se actualicen mágicamente. ¡Y con `sileo` mostramos el cartelito de éxito!

---

## 🎨 Arquitectura de UI (Páginas y Estilos)

Además de la lógica, el proyecto tiene una estructura visual muy definida y profesional, basada en el concepto de **CSS-First** y consistencia visual:

### 1. `src/pages/auth/` (Las Páginas de Autenticación)
Aquí viven los componentes visuales que ven los usuarios:
* **`LoginPage.jsx`**: El formulario de inicio de sesión.
* **`RegisterPage.jsx`**: Un "Wizard" (formulario por pasos) dividido en 4 pantallas (Datos, Carrera, Materias, Objetivo). Esto evita abrumar al usuario pidiéndole 20 datos en una sola pantalla.

### 2. `src/styles/` (El Sistema de Diseño)
En lugar de mezclar el código CSS dentro del HTML, usamos archivos CSS dedicados (`LoginPage.css`, `RegisterPage.css`). 
* **Light Theme Premium**: Todas las páginas comparten el mismo fondo (`var(--background)`), la misma paleta de colores azules (`var(--color-primary)`), y un sutil fondo cuadriculado que da un aspecto técnico y limpio.
* **Floating Labels (Etiquetas Flotantes)**: Implementamos un diseño moderno donde el texto del input (ej: "Email") flota hacia arriba cuando el usuario hace clic. Esto se logró puramente con CSS (`:focus` y `:placeholder-shown`), sin sobrecargar a React con estados innecesarios.

Esta separación total entre "Lógica" (`/context`, `/services`), "Validaciones" (`/utils`) y "Visuales" (`/pages`, `/styles`) es lo que hace que StudyMatch sea un proyecto escalable y de nivel profesional.
