# CBTIS 154 - Módulo de Ciberseguridad

Sitio web básico para la carrera de Técnico en Ciberseguridad del CBTIS 154.

## Estructura

```
cbtis154/
├── index.html      # Estructura principal
├── style.css       # Estilos (dark/light mode)
├── script.js       # Interactividad
├── assets/
│   └── img/
│       └── logo.svg    # Logo del sitio
└── README.md
```

## Cómo usar

1. Abre `index.html` en un navegador web
2. El sitio funciona sin servidor (doble clic en el archivo)

## Personalización

### Colores
Edita las variables CSS en `style.css`:

```css
:root {
  /* Modo oscuro (por defecto) */
  --bg-primary: #0f172a;
  --accent: #06b6d4;
  ...
}

/* Modo claro */
[data-theme="light"] {
  --bg-primary: #f1f5f9;
  --accent: #0284c7;
  ...
}
```

### Imágenes
- Reemplaza `assets/img/logo.svg` con tu propio logo
- Recomendación: 128x128px mínimo

### Contenido
Edita `index.html` para cambiar:
- Nombre del CBTIS
- Descripciones de módulos
- Horas y sesiones
- Proyectos y roles

## Características

- Modo oscuro/claro (toggle en header)
- Diseño responsivo (móvil y escritorio)
- Acordeones interactivos
- Terminal estilo hacker
- 5 módulos profesionales
- Proyecto integrador con 3 opciones
- 7 roles de equipo

## Tecnologías

- HTML5
- CSS3 (variables, flexbox, grid)
- JavaScript vanilla (sin frameworks)
- SVG para iconos

---

**Desarrollado para CBTIS 154 - Chiapas, México**
