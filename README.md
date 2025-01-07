# Frontend Challenge: Uizard Hacker News Reader  

## Descripción del Desafío  

Tu tarea es crear una aplicación web sencilla, responsiva e interactiva utilizando **Next.js**, que funcione como lector de noticias de Hacker News. La aplicación debe obtener y mostrar una lista de las principales noticias desde la API de Hacker News. Cada noticia debe incluir el título, el autor y un enlace al artículo completo.  

Este desafío simula un escenario de desarrollo real en el que implementarás características como estados de carga, uso de suspense para manejar contenido asincrónico y diseño adaptable.  

---

## Requisitos del Desafío  

### 1. Pantalla Principal  
- La aplicación debe tener un encabezado fijo con el título **"Uizard Hacker News Reader"**.  
- La pantalla principal debe estar dividida en dos columnas:  
  - **Columna izquierda:** Una lista de las principales noticias obtenidas desde la API de Hacker News.  
  - **Columna derecha:** Una sección para mostrar contenido dinámico (puedes usar un componente `children` para esto).  

### 2. Características de la Lista de Noticias  
Muestra en la lista:  
- El título de la noticia (cortado si es muy largo).  
- El autor de la noticia.  
- Un enlace que diga **"Visitar sitio >>"**.  

### 3. Suspense y Estado de Carga  
- Implementa un estado de carga animado mientras los datos de las noticias se obtienen de la API.  
- Utiliza el componente `Suspense` de React para manejar la carga de las noticias de manera progresiva.  

### 4. Rendimiento  
- Implementa optimización para revalidar los datos cada 10 segundos usando `next.revalidate`.  
- Simula tiempos de carga aleatorios para cada noticia utilizando una función de retraso (`sleep`).  

### 5. Estilo  
- Usa un diseño limpio y responsivo.  
- Los elementos de la lista deben estar organizados en una estructura en columnas y filas.  

---

## Requisitos Técnicos  

### Tecnologías  
- **Next.js** como framework principal.  
- **CSS o Tailwind CSS** para los estilos.  
- **Fetch** para solicitudes API.  
- **React Suspense** para manejar la carga.  

### Extras Opcionales  
- Implementar un **modo oscuro/claro**.  
- Hacer el diseño completamente **responsivo para dispositivos móviles**.  

---

## Entrega  

1. Sube tu proyecto a un repositorio público en GitHub.  
2. Asegúrate de incluir un archivo `README.md` con las siguientes secciones:  
   - **Descripción del proyecto.**  
   - **Instrucciones para instalar dependencias y ejecutar el proyecto.**  
   - **Tecnologías utilizadas.**  
   - **Capturas de pantalla** (opcional).  

---

## Referencia

![Screenshot_7-1-2025_153518_localhost](https://github.com/user-attachments/assets/b78b789c-0c5c-419b-af3b-bd6c58385768)

## Recursos  

- [Documentación de la API de Hacker News](https://github.com/HackerNews/API)  
- [Next.js Documentation](https://nextjs.org/docs)  
- [React Suspense](https://react.dev/reference/react/Suspense)  

---

¡Buena suerte y diviértete desarrollando! 🚀


