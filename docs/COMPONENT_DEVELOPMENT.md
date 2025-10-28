# Desarrollo de Componentes - GamingHub

## Estructura de Componentes

### Componentes Principales
```
components/
├── Header.jsx          # Navegación y branding
├── Footer.jsx          # Información de contacto y enlaces
├── NewsCard.jsx        # Tarjeta para mostrar noticias
├── GameCard.jsx        # Tarjeta para juegos (futuro)
└── Modal.jsx           # Componente modal reutilizable (futuro)
```

### Páginas
```
pages/
├── LoginPage.jsx       # Autenticación de usuarios
├── NewsPage.jsx        # Lista y creación de noticias
├── DebatesPage.jsx     # Debates de comunidad
├── GamesPage.jsx       # Galería de juegos
├── FavoritesPage.jsx   # Contenido favorito
├── ProfilePage.jsx     # Perfil de usuario
└── AboutPage.jsx       # Información del proyecto
```

## Patrón de Desarrollo de Componentes

### 1. Estructura Básica
```jsx
import React from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  // Estado local si es necesario
  const [state, setState] = useState(initialValue);

  // Lógica del componente
  const handleAction = () => {
    // Implementación
  };

  return (
    <div className="component-class">
      {/* JSX del componente */}
    </div>
  );
};

export default ComponentName;
```

### 2. Props y Tipos
```jsx
import PropTypes from 'prop-types';

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
  onAction: PropTypes.func
};

ComponentName.defaultProps = {
  prop2: 0
};
```

### 3. Estilos con Bootstrap
```jsx
// Usar clases de Bootstrap para consistencia
<div className="card shadow-sm">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <button className="btn btn-primary">Acción</button>
  </div>
</div>
```

## Ejemplo: Desarrollo del Componente NewsCard

### Requisitos
- Mostrar título, imagen y resumen de noticia
- Expandir/colapsar resumen largo
- Diseño responsivo con Bootstrap

### Implementación Paso a Paso

#### Paso 1: Estructura Básica
```jsx
import React, { useState } from 'react';

const NewsCard = ({ title, image, summary }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;
```

#### Paso 2: Agregar Interactividad
```jsx
const NewsCard = ({ title, image, summary }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {showMore ? summary : `${summary.substring(0, 100)}...`}
        </p>
        <button className="btn btn-primary" onClick={toggleShowMore}>
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
};
```

#### Paso 3: Agregar PropTypes y Tests
```jsx
import PropTypes from 'prop-types';

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};
```

### Test Unitario
```javascript
describe('NewsCard Component', () => {
  it('renders the title correctly', () => {
    render(<NewsCard title="Test" image="img.jpg" summary="Summary" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('expands summary when button is clicked', () => {
    render(<NewsCard title="Test" image="img.jpg" summary="Long summary..." />);
    const button = screen.getByText('Ver más');
    fireEvent.click(button);
    expect(screen.getByText('Long summary...')).toBeInTheDocument();
  });
});
```

## Mejores Prácticas

### 1. Separación de Responsabilidades
- **Presentational Components**: Solo renderizan UI
- **Container Components**: Manejan lógica y estado
- **Custom Hooks**: Lógica reutilizable

### 2. Optimización de Performance
```jsx
// Usar React.memo para componentes que no cambian frecuentemente
const NewsCard = React.memo(({ title, image, summary }) => {
  // implementación
});

// Usar useCallback para funciones pasadas como props
const handleClick = useCallback(() => {
  // implementación
}, [dependencies]);
```

### 3. Accesibilidad
```jsx
// Etiquetas apropiadas
<img src={image} alt={`Imagen de ${title}`} />

// Roles ARIA cuando sea necesario
<button role="button" aria-expanded={showMore}>
  {showMore ? 'Ver menos' : 'Ver más'}
</button>
```

### 4. Responsive Design
```jsx
// Bootstrap classes para diferentes tamaños
<div className="col-12 col-md-6 col-lg-4">
  <NewsCard {...props} />
</div>
```

## Patrón de Desarrollo

### Desarrollo TDD (Test-Driven Development)
1. **Escribir test primero**
2. **Implementar componente mínimo**
3. **Ejecutar tests y refactorizar**
4. **Agregar estilos y mejoras**

### Ciclo de Desarrollo
1. **Planificación**: Definir props y comportamiento
2. **Implementación**: Código básico funcional
3. **Testing**: Tests unitarios completos
4. **Styling**: Aplicar diseño con Bootstrap
5. **Refactoring**: Optimizar y limpiar código
6. **Documentación**: Actualizar documentación

## Herramientas de Desarrollo

### ESLint
```javascript
// Reglas recomendadas para React
{
  "extends": ["react-app", "react-app/jest"],
  "rules": {
    "react/prop-types": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}
```

### Prettier
```javascript
// Configuración para formato consistente
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## Métricas de Calidad

### Cobertura de Tests
- **Líneas**: >80%
- **Funciones**: >85%
- **Ramas**: >75%

### Performance
- **Bundle size**: <200KB gzipped
- **First paint**: <1.5s
- **Time to interactive**: <2s

### Accesibilidad
- **Lighthouse Accessibility**: >90
- **WCAG 2.1 AA**: Compliant
- **Keyboard navigation**: 100%
