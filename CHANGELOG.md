# Changelog / Değişiklik Günlüğü

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Bu projedeki tüm önemli değişiklikler bu dosyada belgelenecektir.
Format [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standardına dayanır
ve bu proje [Semantic Versioning](https://semver.org/spec/v2.0.0.html) kurallarını takip eder.

---

## [Unreleased] / [Yayınlanmamış]

### Added / Eklendi
- Initial project setup / İlk proje kurulumu
- Core architecture documentation / Temel mimari dokümantasyonu
- Project structure definition / Proje yapısı tanımı

---

## [1.0.0] - 2025-06-21

### Added / Eklendi

#### 🎯 Core Features / Temel Özellikler
- **uiarc support** for React, Vue.js, Angular, Svelte, Solid.js, and Web Components
- **React, Vue.js, Angular, Svelte, Solid.js ve Web Components** için çok çerçeveli destek
- **Unified design system** with consistent tokens across all frameworks
- Tüm framework'lerde tutarlı token'lar ile **birleşik tasarım sistemi**
- **WCAG 2.1 AA compliant** accessibility features
- **WCAG 2.1 AA uyumlu** erişilebilirlik özellikleri
- **Enterprise-grade** testing and quality assurance
- **Kurumsal düzeyde** test ve kalite güvencesi

#### 📦 Packages / Paketler
- `@uiarc/core` - Shared utilities and design tokens / Paylaşılan yardımcılar ve tasarım token'ları
- `@uiarc/react` - React component library / React bileşen kütüphanesi
- `@uiarc/vue` - Vue.js component library / Vue.js bileşen kütüphanesi
- `@uiarc/angular` - Angular component library / Angular bileşen kütüphanesi
- `@uiarc/svelte` - Svelte component library / Svelte bileşen kütüphanesi
- `@uiarc/solid` - Solid.js component library / Solid.js bileşen kütüphanesi
- `@uiarc/web-components` - Web Components library / Web Components kütüphanesi

#### 🧩 Components / Bileşenler

##### Layout / Düzen
- **Container** - Responsive content wrapper / Responsive içerik sarmalayıcı
- **Grid** - Flexible grid system / Esnek grid sistemi
- **Flexbox** - Flexbox utilities / Flexbox yardımcıları
- **Spacer** - Consistent spacing component / Tutarlı boşluk bileşeni

##### Navigation / Navigasyon
- **Navbar** - Top navigation bar / Üst navigasyon çubuğu
- **Breadcrumb** - Navigation breadcrumbs / Navigasyon breadcrumb'ları
- **Pagination** - Page navigation / Sayfa navigasyonu
- **Tabs** - Tabbed interface / Sekmeli arayüz

##### Forms / Formlar
- **Input** - Text input fields / Metin giriş alanları
- **Select** - Dropdown selection / Açılır menü seçimi
- **Checkbox** - Multiple choice selection / Çoklu seçim
- **Radio** - Single choice selection / Tekli seçim
- **Switch** - Toggle switch / Geçiş düğmesi

##### Feedback / Geri Bildirim
- **Alert** - Alert messages / Uyarı mesajları
- **Toast** - Toast notifications / Toast bildirimleri
- **Modal** - Modal dialogs / Modal diyaloglar
- **Tooltip** - Contextual tooltips / Bağlamsal ipuçları

##### Data Display / Veri Gösterimi
- **Table** - Data tables / Veri tabloları
- **Card** - Content cards / İçerik kartları
- **Badge** - Status indicators / Durum göstergeleri
- **Avatar** - User avatars / Kullanıcı avatarları

##### Actions / Eylemler
- **Button** - Action buttons / Eylem düğmeleri
- **IconButton** - Icon-only buttons / Sadece icon düğmeleri
- **Dropdown** - Dropdown menus / Açılır menüler
- **Menu** - Context menus / Bağlam menüleri

#### 🎨 Theme System / Tema Sistemi
- **Design tokens** with three-tier hierarchy / Üç katmanlı hiyerarşi ile tasarım token'ları
- **CSS Variables** support for runtime theming / Runtime tema için CSS Variables desteği
- **Dark mode** support out of the box / Hazır dark mode desteği
- **Custom theme** creation and application / Özel tema oluşturma ve uygulama
- **Theme inheritance** for component variants / Bileşen varyantları için tema mirası

#### 🧪 Testing / Test
- **100% unit test coverage** across all packages / Tüm paketlerde %100 unit test coverage
- **E2E testing suite** with Playwright / Playwright ile E2E test suite'i
- **Visual regression testing** with Chromatic / Chromatic ile visual regression test
- **Accessibility testing** with axe-core / axe-core ile erişilebilirlik testi
- **Performance benchmarks** for all components / Tüm bileşenler için performans benchmark'ları

#### 🛠️ Developer Experience / Geliştirici Deneyimi
- **TypeScript** support with comprehensive type definitions / Kapsamlı tip tanımları ile TypeScript desteği
- **Storybook** integration for component documentation / Bileşen dokümantasyonu için Storybook entegrasyonu
- **Hot reload** support in development / Geliştirmede hot reload desteği
- **Tree-shaking** optimized bundles / Tree-shaking optimize edilmiş bundle'lar
- **ESLint and Prettier** configurations / ESLint ve Prettier konfigürasyonları

#### 📚 Documentation / Dokümantasyon
- **Interactive examples** for all components / Tüm bileşenler için interaktif örnekler
- **API documentation** with detailed prop definitions / Detaylı prop tanımları ile API dokümantasyonu
- **Migration guides** for different framework versions / Farklı framework versiyonları için migrasyon kılavuzları
- **Best practices** and usage patterns / En iyi pratikler ve kullanım kalıpları
- **Accessibility guidelines** for each component / Her bileşen için erişilebilirlik kılavuzları

### Changed / Değişti
- N/A - Initial release / İlk sürüm

### Deprecated / Kullanımdan Kaldırıldı
- N/A - Initial release / İlk sürüm

### Removed / Kaldırıldı
- N/A - Initial release / İlk sürüm

### Fixed / Düzeltildi
- N/A - Initial release / İlk sürüm

### Security / Güvenlik
- **Input sanitization** for all form components / Tüm form bileşenleri için input sanitization
- **XSS prevention** measures implemented / XSS önleme önlemleri uygulandı
- **Content Security Policy** compatibility / Content Security Policy uyumluluğu
- **Dependency vulnerability** scanning setup / Bağımlılık güvenlik açığı tarama kurulumu

---

## Legend / Açıklama

- 🎯 **Major Features** / Ana Özellikler
- 📦 **Packages** / Paketler  
- 🧩 **Components** / Bileşenler
- 🎨 **Theming** / Temalama
- 🧪 **Testing** / Test
- 🛠️ **Developer Tools** / Geliştirici Araçları
- 📚 **Documentation** / Dokümantasyon
- 🔐 **Security** / Güvenlik
- 🚀 **Performance** / Performans
- 🐛 **Bug Fixes** / Hata Düzeltmeleri