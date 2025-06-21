# Architecture Documentation / Mimari Dokümantasyonu

*English version below / Türkçe sürüm aşağıda*

---

## 🇹🇷 Türkçe

### 🏗️ Genel Mimari

Bu proje, modüler ve ölçeklenebilir bir mimari yaklaşımı benimser. Her framework için ayrı paketler oluşturulurken, temel tasarım sistemi ve bileşen mantığı paylaşılır.

### 📁 Proje Yapısı

```
uiarc/
├── packages/
│   ├── core/                 # Paylaşılan temel mantık
│   │   ├── tokens/           # Tasarım token'ları
│   │   ├── utils/            # Yardımcı fonksiyonlar
│   │   └── types/            # TypeScript tip tanımları
│   ├── react/                # React implementasyonu
│   ├── vue/                  # Vue.js implementasyonu
│   ├── angular/              # Angular implementasyonu
│   ├── svelte/               # Svelte implementasyonu
│   ├── solid/                # Solid.js implementasyonu
│   └── web-components/       # Web Components implementasyonu
├── tools/
│   ├── build/                # Build araçları
│   ├── testing/              # Test araçları
│   └── documentation/        # Dokümantasyon araçları
├── apps/
│   ├── storybook/            # Bileşen showcase
│   └── playground/           # Geliştirme playground'u
└── docs/                     # Dokümantasyon
```

### 🎯 Tasarım Prensipleri

#### 1. Framework Agnostic Core
- Temel bileşen mantığı framework'den bağımsız
- Paylaşılan tasarım token'ları
- Tutarlı davranış kalıpları

#### 2. Composition Over Inheritance
- Bileşenler küçük, yeniden kullanılabilir parçalardan oluşur
- Higher-order component (HOC) kalıpları
- Mixin ve trait kullanımı

#### 3. Progressive Enhancement
- Temel işlevsellik önce, gelişmiş özellikler sonra
- Graceful degradation
- Accessibility-first yaklaşım

### 🔧 Teknoloji Yığını

#### Build Tools
- **Monorepo Management**: Lerna + Nx
- **Bundling**: Rollup + Vite
- **Type Checking**: TypeScript
- **Code Quality**: ESLint + Prettier

#### Testing
- **Unit Testing**: Vitest
- **E2E Testing**: Playwright
- **Visual Testing**: Chromatic
- **Accessibility Testing**: axe-core

#### CI/CD
- **Version Control**: Git
- **CI Platform**: GitHub Actions
- **Package Registry**: npm
- **Documentation**: VitePress

### 🧩 Bileşen Mimarisi

#### Katmanlı Yapı

```typescript
// 1. Core Layer - Framework agnostic
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

// 2. Framework Layer - Framework specific implementation
class ReactButton extends BaseButton implements ButtonProps {
  render() {
    return <button {...this.getProps()}>{this.children}</button>;
  }
}

// 3. Theme Layer - Styling and customization
const buttonTheme = {
  variants: {
    primary: { backgroundColor: 'blue', color: 'white' },
    secondary: { backgroundColor: 'gray', color: 'black' }
  }
};
```

#### State Management
- Framework'e özgü state management (React hooks, Vue composition API, etc.)
- Paylaşılan state logic için core utilities
- Predictable state updates

### 🎨 Tema Sistemi Mimarisi

#### Design Token Hierarchy
```typescript
// Level 1: Primitive tokens
const primitives = {
  colors: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      // ...
      900: '#1e3a8a'
    }
  }
};

// Level 2: Semantic tokens
const semantic = {
  colors: {
    primary: primitives.colors.blue[600],
    primaryHover: primitives.colors.blue[700]
  }
};

// Level 3: Component tokens
const components = {
  button: {
    primary: {
      background: semantic.colors.primary,
      backgroundHover: semantic.colors.primaryHover
    }
  }
};
```

#### Theme Application
- CSS Variables için runtime tema switching
- Styled-components/emotion için compile-time optimizasyonu
- Framework-specific theme providers

### 🔄 Data Flow

#### Props ve Events
```typescript
// Unidirectional data flow
Parent Component
    ↓ props
Child Component
    ↓ events/callbacks
Parent Component
```

#### Context/Provide-Inject Pattern
```typescript
// Theme context örneği
ThemeProvider
    ↓ theme context
    ButtonGroup
        ↓ inherited theme
        Button Components
```

### 🧪 Test Mimarisi

#### Testing Pyramid
```
                    /\
                   /  \
                  / E2E \         # Integration tests
                 /______\
                /        \
               / Unit Test \      # Component tests
              /_____________\
             /               \
            /   Visual Tests   \   # Regression tests
           /__________________\
```

#### Test Strategy
- **Unit Tests**: Her bileşen için isolated testler
- **Integration Tests**: Bileşenler arası etkileşim testleri
- **Visual Tests**: UI regression testleri
- **Accessibility Tests**: WCAG compliance testleri

### 🚀 Performance Optimizations

#### Bundle Optimization
- Tree-shaking için ESM modules
- Framework-specific optimizations
- Dynamic imports için code splitting

#### Runtime Performance
- Virtual DOM optimizations (React, Vue)
- Fine-grained reactivity (Solid, Svelte)
- Efficient change detection (Angular)

#### Caching Strategy
- Build artifacts caching
- CDN distribution
- Browser caching headers

### 🔐 Security Considerations

#### Input Sanitization
- XSS prevention
- Content Security Policy
- Trusted Types API support

#### Dependency Management
- Regular security audits
- Automated vulnerability scanning
- Minimal dependency footprint

---

## 🇺🇸 English

### 🏗️ Overall Architecture

This project adopts a modular and scalable architectural approach. While separate packages are created for each framework, the core design system and component logic are shared.

### 📁 Project Structure

```
uiarc/
├── packages/
│   ├── core/                 # Shared core logic
│   │   ├── tokens/           # Design tokens
│   │   ├── utils/            # Utility functions
│   │   └── types/            # TypeScript type definitions
│   ├── react/                # React implementation
│   ├── vue/                  # Vue.js implementation
│   ├── angular/              # Angular implementation
│   ├── svelte/               # Svelte implementation
│   ├── solid/                # Solid.js implementation
│   └── web-components/       # Web Components implementation
├── tools/
│   ├── build/                # Build tools
│   ├── testing/              # Testing tools
│   └── documentation/        # Documentation tools
├── apps/
│   ├── storybook/            # Component showcase
│   └── playground/           # Development playground
└── docs/                     # Documentation
```

### 🎯 Design Principles

#### 1. Framework Agnostic Core
- Core component logic independent of framework
- Shared design tokens
- Consistent behavior patterns

#### 2. Composition Over Inheritance
- Components composed of small, reusable parts
- Higher-order component (HOC) patterns
- Use of mixins and traits

#### 3. Progressive Enhancement
- Basic functionality first, advanced features later
- Graceful degradation
- Accessibility-first approach

### 🔧 Technology Stack

#### Build Tools
- **Monorepo Management**: Lerna + Nx
- **Bundling**: Rollup + Vite
- **Type Checking**: TypeScript
- **Code Quality**: ESLint + Prettier

#### Testing
- **Unit Testing**: Vitest
- **E2E Testing**: Playwright
- **Visual Testing**: Chromatic
- **Accessibility Testing**: axe-core

#### CI/CD
- **Version Control**: Git
- **CI Platform**: GitHub Actions
- **Package Registry**: npm
- **Documentation**: VitePress

### 🧩 Component Architecture

#### Layered Structure

```typescript
// 1. Core Layer - Framework agnostic
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

// 2. Framework Layer - Framework specific implementation
class ReactButton extends BaseButton implements ButtonProps {
  render() {
    return <button {...this.getProps()}>{this.children}</button>;
  }
}

// 3. Theme Layer - Styling and customization
const buttonTheme = {
  variants: {
    primary: { backgroundColor: 'blue', color: 'white' },
    secondary: { backgroundColor: 'gray', color: 'black' }
  }
};
```

#### State Management
- Framework-specific state management (React hooks, Vue composition API, etc.)
- Core utilities for shared state logic
- Predictable state updates

### 🎨 Theme System Architecture

#### Design Token Hierarchy
```typescript
// Level 1: Primitive tokens
const primitives = {
  colors: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      // ...
      900: '#1e3a8a'
    }
  }
};

// Level 2: Semantic tokens
const semantic = {
  colors: {
    primary: primitives.colors.blue[600],
    primaryHover: primitives.colors.blue[700]
  }
};

// Level 3: Component tokens
const components = {
  button: {
    primary: {
      background: semantic.colors.primary,
      backgroundHover: semantic.colors.primaryHover
    }
  }
};
```

#### Theme Application
- Runtime theme switching with CSS Variables
- Compile-time optimization for styled-components/emotion
- Framework-specific theme providers

### 🔄 Data Flow

#### Props and Events
```typescript
// Unidirectional data flow
Parent Component
    ↓ props
Child Component
    ↓ events/callbacks
Parent Component
```

#### Context/Provide-Inject Pattern
```typescript
// Theme context example
ThemeProvider
    ↓ theme context
    ButtonGroup
        ↓ inherited theme
        Button Components
```

### 🧪 Test Architecture

#### Testing Pyramid
```
                    /\
                   /  \
                  / E2E \         # Integration tests
                 /______\
                /        \
               / Unit Test \      # Component tests
              /_____________\
             /               \
            /   Visual Tests   \   # Regression tests
           /__________________\
```

#### Test Strategy
- **Unit Tests**: Isolated tests for each component
- **Integration Tests**: Inter-component interaction tests
- **Visual Tests**: UI regression tests
- **Accessibility Tests**: WCAG compliance tests

### 🚀 Performance Optimizations

#### Bundle Optimization
- ESM modules for tree-shaking
- Framework-specific optimizations
- Code splitting with dynamic imports

#### Runtime Performance
- Virtual DOM optimizations (React, Vue)
- Fine-grained reactivity (Solid, Svelte)
- Efficient change detection (Angular)

#### Caching Strategy
- Build artifacts caching
- CDN distribution
- Browser caching headers

### 🔐 Security Considerations

#### Input Sanitization
- XSS prevention
- Content Security Policy
- Trusted Types API support

#### Dependency Management
- Regular security audits
- Automated vulnerability scanning
- Minimal dependency footprint