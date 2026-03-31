# 🌐 CBTIS 154 - Sitio de Ciberseguridad

Sitio web de la carrera de Técnico en Ciberseguridad del CBTIS 154.

## 👩‍🏫 Instrucciones para la Profesora Marisol

### Ver el sitio web

```
https://Maris154.github.io
```

---

### Cómo modificar el sitio

#### Opción 1: Editar directamente en GitHub

1. Ve a: https://github.com/Maris154/Maris154.github.io
2. Click en el archivo que deseas modificar:
   - `index.html` - Contenido (textos, títulos)
   - `style.css` - Colores y estilos
   - `script.js` - Comportamiento (acordeones)
3. Click en el ícono ✏️ "Edit this file"
4. Modifica el contenido
5. Abajo click en **"Commit changes"**
6. El sitio se actualiza automáticamente en 1-2 minutos

---

#### Opción 2: Descargar, editar y subir

1. **Descargar:**
   - Ve al repositorio
   - Click en **"Code"** → **"Download ZIP"**

2. **Editar localmente:**
   - Descomprime el ZIP
   - Abre los archivos con un editor de texto:
     - **VS Code** (recomendado)
     - **Notepad++**
     - **Sublime Text**

3. **Subir cambios:**
   - Ve a GitHub → tu repositorio
   - Click en **"Add file"** → **"Upload files"**
   - Arrastra los archivos modificados
   - Click **"Commit changes"**

---

### Personalización básica

#### Cambiar colores en `style.css`:

```css
:root {
  /* Color principal (azul cyan) */
  --accent: #06b6d4;
  
  /* Color de módulos */
  --module-1: #3b82f6;  /* Azul */
  --module-2: #22c55e;  /* Verde */
  --module-3: #f97316;  /* Naranja */
  --module-4: #ef4444;  /* Rojo */
  --module-5: #a855f7;  /* Morado */
}
```

#### Cambiar textos en `index.html`:

Busca el texto que quieres cambiar y-edítalo directamente. Ejemplos:

```html
<!-- Título principal -->
<span class="logo-text">Técnico en Ciberseguridad</span>

<!-- Nombre del CBTIS -->
<span class="school-name">CBTIS 154</span>

<!-- Footer -->
<p>CBTIS No. 154 | Chiapas, México</p>
```

---

### Agregar/modificar módulos

En `index.html`, busca la sección "Módulos Profesionales" y modifica:

```html
<!-- Módulo 1 (ejemplo) -->
<div class="module-badge module-1">
  <span class="badge-sub">Módulo</span>
  <span class="badge-num">1</span>
</div>
```

---

### Agregar imágenes

1. Sube la imagen a la carpeta `assets/img/`
2. Referencia en HTML:
```html
<img src="assets/img/nombre-imagen.png" alt="Descripción">
```

---

### Solución de problemas

**El sitio no se actualiza:**
- Espera 1-2 minutos
- Presiona Ctrl+Shift+R para vaciar caché

**Error al subir archivos:**
- Verifica que el nombre de los archivos no tenga acentos
- Los archivos deben ser `.html`, `.css`, `.js`, `.svg`, `.png`, `.jpg`

**No veo los cambios:**
- Verifica que hayas dado "Commit changes"
- Revisa que estés en el repositorio correcto

---

### Recursos útiles

- 🎨 [Colores hexadecimales](https://htmlcolorcodes.com/es/)
- 📝 [Guía HTML](https://www.w3schools.com/html/)
- 🎭 [Iconos SVG](https://lucide.dev/)

---

### Créditos

- **Desarrollado por:** urielceron
- **Institución:** CBTIS 154 - Chiapas, México
- **Carrera:** Técnico en Ciberseguridad

---

**¿Necesitas ayuda?** Contacta a urielceron para soporte técnico.
