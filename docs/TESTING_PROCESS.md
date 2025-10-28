# Proceso de Testing Unitario - GamingHub

## Configuración del Entorno de Pruebas

### Instalación de Dependencias
```bash
npm install jasmine karma karma-jasmine karma-webpack karma-chrome-launcher karma-coverage --save-dev
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
```

### Dependencias Requeridas
- **Jasmine**: Framework de testing BDD
- **Karma**: Test runner que ejecuta tests en navegadores
- **Webpack**: Bundler para procesar módulos en tests
- **Chrome Headless**: Navegador para ejecución automática
- **Babel**: Transpilador para JSX y ES6+

## Ejecución Paso a Paso

### 1. Configuración Inicial
- Archivo `karma.conf.js` configura el entorno de testing
- Webpack procesa archivos JSX con Babel
- ChromeHeadless ejecuta tests sin interfaz gráfica

### 2. Ejecutar Tests
```bash
# Ejecutar tests una vez
npm run test:karma

# Ejecutar tests en modo watch (desarrollo)
npm run test:watch
```

### 3. Generación de Reportes de Cobertura
```bash
npm run test:karma -- --coverage
```
Los reportes se generan en `coverage/lcov-report/index.html`

## Ejemplo de Mock usando Jasmine

```javascript
describe('NewsService', () => {
  let newsService;

  beforeEach(() => {
    newsService = new NewsService();
  });

  it('should fetch news from API', () => {
    // Mock de la función fetch
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve([{ title: 'Test News' }])
      })
    );

    newsService.getNews().then(news => {
      expect(news.length).toBe(1);
      expect(news[0].title).toBe('Test News');
    });
  });
});
```

## Estructura de Tests

```
tests/
├── components/
│   ├── Header.spec.js
│   ├── NewsCard.spec.js
│   └── Footer.spec.js
├── services/
│   └── api.spec.js
└── App.spec.js
```

## Criterios de Cobertura

- **Líneas**: >80%
- **Funciones**: >85%
- **Ramas**: >75%

## Lecciones Aprendidas

### ¿Por qué Jasmine/Karma?
- **Simplicidad**: Configuración más directa que Jest
- **Integración**: Soporte nativo para Chrome Headless
- **Flexibilidad**: Configurable para diferentes entornos

### Mejores Prácticas
1. Usar `describe` para agrupar tests relacionados
2. Usar `beforeEach` para setup común
3. Mockear dependencias externas
4. Mantener tests independientes
5. Usar nombres descriptivos para tests

## Integración con CI/CD

### GitHub Actions
```yaml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run test:karma
```

### Verificación de Cobertura
- Reportes automáticos en cada PR
- Umbral mínimo de cobertura requerido
- Alertas en caso de disminución de cobertura
