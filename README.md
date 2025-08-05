🏡 Home Rentals Admin Dashboard
Administre propiedades en alquiler de manera profesional y consulte el clima actual de cada ubicación en tiempo real.

Plataforma diseñada para facilitar la gestión de inmuebles disponibles para alquiler, incluyendo información visual, detallada y climática, todo desde un panel intuitivo y moderno.

🌐 Deploy en Producción
🔗 

🔐 Credenciales de Prueba
Puedes iniciar sesión con las siguientes credenciales:

Email: test@gmail.com

Contraseña: password

📋 Funcionalidades Destacadas
🔐 Autenticación de usuarios con validación en el frontend

🏠 Vista en tarjetas de propiedades: nombre, imagen y ubicación

🔎 Vista detallada de cada propiedad: descripción, imagen destacada, precio  y más

🌦️ Clima en tiempo real integrado con OpenWeatherMap según ciudad o coordenadas

🚪 Cierre de sesión fácil y seguro

📱 Diseño responsive para uso en escritorio, tablets o móviles

🧑‍💻 Tecnologías Utilizadas
Tecnología	Propósito
Next.js	Framework principal basado en React
Tailwind CSS	Estilizado moderno y responsivo
Axios	Consumo de APIs externas
OpenWeatherMap	API de datos meteorológicos en tiempo real

⚙️ Instalación Local
Clonar el repositorio:

bash
Copiar
Editar
git clone 
cd Home-Rentals-Test
Instalar dependencias:

bash
Copiar
Editar
npm install
Crear archivo .env.local y agregar tu clave de API de OpenWeatherMap:

ini
Copiar
Editar
NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_api_key_aqui
Ejecutar en modo desarrollo:

bash
Copiar
Editar
npm run dev
Abrir en navegador:

http://localhost:3000

🧠 Arquitectura Interna
/pages → Rutas principales (login, dashboard, properties)

/components → Componentes reutilizables como WeatherWidget, tarjetas, layout

/data/properties.json → Datos de prueba para propiedades

/styles → Configuración de estilos con Tailwind


🌦️ Clima en tiempo real
utiliza openweathermap como api del clima en tiempo real 


🧪 Estado del Proyecto
✅ Funcional
🔧 En expansión — funcionalidades futuras pueden incluir:

CRUD completo de propiedades

Modo oscuro

Integración con servicios de mapas (Google Maps, Mapbox)

📝 Licencia
Este proyecto está disponible para uso educativo o demostrativo. Puedes adaptarlo o expandirlo libremente.