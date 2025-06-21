# uiarc Component System / Çok Çerçeveli UI Bileşen Sistemi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

*English version below / Türkçe sürüm aşağıda*

---

## 🇹🇷 Türkçe

### 🚀 Giriş

Modern web geliştirme ekosisteminde farklı framework'ler kullanırken tutarlı bir kullanıcı deneyimi sağlamak büyük bir zorluktur. Bu proje, 6 farklı popüler framework için optimize edilmiş, tutarlı tasarım sistemi sunan kapsamlı bir UI bileşen kitaplığıdır.

### 🌟 Ana Özellikler

- **Çok Çerçeveli Destek**: 6 farklı framework için optimize edilmiş bileşenler
- **Tutarlı Tasarım Sistemi**: Tüm platform ve framework'lerde unified deneyim
- **Erişilebilirlik Odaklı**: WCAG 2.1 AA uyumlu bileşenler
- **Enterprise Ready**: Büyük ölçekli projelere hazır, test edilmiş bileşenler
- **Developer Experience**: Mükemmel DX ile hızlı geliştirme süreci
- **Tema Desteği**: Kolay özelleştirilebilir ve genişletilebilir tema sistemi

### 🛠️ Desteklenen Framework'ler

| Framework | Durum | Versiyon |
|-----------|-------|----------|
| React | ✅ | 18+ |
| Vue.js | ✅ | 3+ |
| Angular | ✅ | 15+ |
| Svelte | ✅ | 4+ |
| Solid.js | ✅ | 1+ |
| Web Components | ✅ | Native |

### 📦 Kurulum

```bash
# React
npm install @uiarc/react

# Vue.js
npm install @uiarc/vue

# Angular
npm install @uiarc/angular

# Svelte
npm install @uiarc/svelte

# Solid.js
npm install @uiarc/solid

# Web Components
npm install @uiarc/web-components
```

### 🎯 Hızlı Başlangıç

#### React Örneği
```jsx
import { Button, Card } from '@uiarc/react';

function App() {
  return (
    <Card>
      <Button variant="primary" size="lg">
        Merhaba Dünya!
      </Button>
    </Card>
  );
}
```

#### Vue.js Örneği
```vue
<template>
  <MultiCard>
    <MultiButton variant="primary" size="lg">
      Merhaba Dünya!
    </MultiButton>
  </MultiCard>
</template>

<script>
import { MultiButton, MultiCard } from '@uiarc/vue';
</script>
```

### 🎨 Tema Sistemi

```typescript
// Özel tema oluşturma
const customTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  }
};

// Tema uygulama
import { ThemeProvider } from '@uiarc/react';

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

### 📚 Bileşenler

- **Layout**: Container, Grid, Flexbox, Spacer
- **Navigation**: Navbar, Breadcrumb, Pagination, Tabs
- **Forms**: Input, Select, Checkbox, Radio, Switch
- **Feedback**: Alert, Toast, Modal, Tooltip
- **Data Display**: Table, Card, Badge, Avatar
- **Actions**: Button, Icon Button, Dropdown, Menu

### 🧪 Test Edilmiş Kalite

- ✅ %100 Unit Test Coverage
- ✅ E2E Test Suite
- ✅ Visual Regression Tests
- ✅ Accessibility Tests
- ✅ Performance Benchmarks

### 📖 Dokümantasyon

- [Başlangıç Kılavuzu](./docs/getting-started.md)
- [Bileşen Referansı](./docs/components.md)
- [Tema Kılavuzu](./docs/theming.md)
- [Migrasyon Kılavuzu](./docs/migration.md)

### 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak istiyorsanız, lütfen [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasını okuyun.

### 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](./LICENSE) dosyasına bakın.

---

## 🇺🇸 English

### 🚀 Introduction

Maintaining a consistent user experience across different frameworks in the modern web development ecosystem is a major challenge. This project is a comprehensive UI component library that provides a consistent design system optimized for 6 different popular frameworks.

### 🌟 Key Features

- **uiarc Support**: Components optimized for 6 different frameworks
- **Consistent Design System**: Unified experience across all platforms and frameworks
- **Accessibility Focused**: WCAG 2.1 AA compliant components
- **Enterprise Ready**: Battle-tested components ready for large-scale projects
- **Developer Experience**: Rapid development process with excellent DX
- **Theme Support**: Easily customizable and extensible theme system

### 🛠️ Supported Frameworks

| Framework | Status | Version |
|-----------|--------|---------|
| React | ✅ | 19+ |
| Vue.js | ✅ | 3+ |
| Angular | ✅ | 19+ |
| Svelte | ✅ | 4+ |
| Solid.js | ✅ | 1+ |
| Web Components | ✅ | Native |

### 📦 Installation

```bash
# React
npm install @uiarc/react

# Vue.js
npm install @uiarc/vue

# Angular
npm install @uiarc/angular

# Svelte
npm install @uiarc/svelte

# Solid.js
npm install @uiarc/solid

# Web Components
npm install @uiarc/web-components
```

### 🎯 Quick Start

#### React Example
```jsx
import { Button, Card } from '@uiarc/react';

function App() {
  return (
    <Card>
      <Button variant="primary" size="lg">
        Hello World!
      </Button>
    </Card>
  );
}
```

#### Vue.js Example
```vue
<template>
  <MultiCard>
    <MultiButton variant="primary" size="lg">
      Hello World!
    </MultiButton>
  </MultiCard>
</template>

<script>
import { MultiButton, MultiCard } from '@uiarc/vue';
</script>
```

### 🎨 Theme System

```typescript
// Creating custom theme
const customTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  }
};

// Applying theme
import { ThemeProvider } from '@uiarc/react';

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

### 📚 Components

- **Layout**: Container, Grid, Flexbox, Spacer
- **Navigation**: Navbar, Breadcrumb, Pagination, Tabs
- **Forms**: Input, Select, Checkbox, Radio, Switch
- **Feedback**: Alert, Toast, Modal, Tooltip
- **Data Display**: Table, Card, Badge, Avatar
- **Actions**: Button, Icon Button, Dropdown, Menu

### 🧪 Battle-Tested Quality

- ✅ 100% Unit Test Coverage
- ✅ E2E Test Suite
- ✅ Visual Regression Tests
- ✅ Accessibility Tests
- ✅ Performance Benchmarks

### 📖 Documentation

- [Getting Started Guide](./docs/getting-started.md)
- [Component Reference](./docs/components.md)
- [Theming Guide](./docs/theming.md)
- [Migration Guide](./docs/migration.md)

### 🤝 Contributing

If you'd like to contribute to this project, please read [CONTRIBUTING.md](./CONTRIBUTING.md).

### 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.