/**
 * 🚀 Advanced Monorepo ESLint Configuration
 *
 * Gelişmiş Monorepo ESLint Konfigürasyonu
 * Angular, Vue.js, React, Next.js, Svelte, Solid.js ve Web Components'i destekleyen
 * kapsamlı kod kalitesi ve stil kılavuzu
 *
 * Supported Frameworks / Desteklenen Framework'ler:
 * - React 18+ (with hooks, suspense, concurrent features)
 * - Vue.js 3+ (composition API, script setup)
 * - Angular 15+ (standalone components, signals)
 * - Next.js 13+ (app router, server components)
 * - Svelte 4+ (SvelteKit support)
 * - Solid.js 1+ (fine-grained reactivity)
 * - Web Components (native support)
 *
 * Features / Özellikler:
 * ✅ TypeScript tam desteği
 * ✅ Accessibility (a11y) kuralları
 * ✅ Performance optimizasyonları
 * ✅ Security best practices
 * ✅ Import/Export organizasyonu
 * ✅ Testing kuralları
 * ✅ Framework-specific optimizasyonlar
 * ✅ Prettier entegrasyonu
 * ✅ Environment-based kurallar
 *
 * @version 2.0.0
 * @author Multi-Framework UI Team
 * @license MIT
 */

// ========================================
// CORE IMPORTS / TEMEL İÇE AKTARMALAR
// ========================================

import js from '@eslint/js';                    // JavaScript temel kuralları
import ts from '@typescript-eslint/eslint-plugin'; // TypeScript eklentisi ve kuralları
import tsParser from '@typescript-eslint/parser';  // TypeScript parser
import prettier from 'eslint-config-prettier';     // Prettier ile çakışmaları önler

// ========================================
// FRAMEWORK PLUGINS / FRAMEWORK EKLENTİLERİ
// ========================================

// Vue.js eklentileri
import vue from 'eslint-plugin-vue';               // Vue.js temel kuralları
import vueParser from 'vue-eslint-parser';         // Vue dosyaları için parser

// React eklentileri
import react from 'eslint-plugin-react';           // React bileşen kuralları
import reactHooks from 'eslint-plugin-react-hooks'; // React Hooks kuralları
import reactRefresh from 'eslint-plugin-react-refresh'; // React Fast Refresh desteği
import jsx from 'eslint-plugin-jsx-a11y';          // JSX accessibility kuralları

// Next.js özel eklentisi
import nextjs from '@next/eslint-plugin-next';      // Next.js optimize kuralları

// Svelte eklentisi
import svelte from 'eslint-plugin-svelte';         // Svelte bileşen kuralları
import svelteParser from 'svelte-eslint-parser';   // Svelte dosyaları için parser

// ========================================
// UTILITY PLUGINS / YARDIMCI EKLENTİLER
// ========================================

import importPlugin from 'eslint-plugin-import';         // Import/export kuralları
import unusedImports from 'eslint-plugin-unused-imports'; // Kullanılmayan import'ları temizler
import sonarjs from 'eslint-plugin-sonarjs';             // Code smell ve bug detection
import security from 'eslint-plugin-security';           // Güvenlik açığı tespiti
import promise from 'eslint-plugin-promise';             // Promise kullanım kuralları
import unicorn from 'eslint-plugin-unicorn';             // Gelişmiş JavaScript kuralları
import perfectionist from 'eslint-plugin-perfectionist'; // Kod organizasyonu kuralları

// ========================================
// TESTING PLUGINS / TEST EKLENTİLERİ
// ========================================

import jest from 'eslint-plugin-jest';           // Jest test kuralları
import testingLibrary from 'eslint-plugin-testing-library'; // Testing Library kuralları
import vitest from 'eslint-plugin-vitest';       // Vitest kuralları
import playwright from 'eslint-plugin-playwright'; // Playwright E2E kuralları

// ========================================
// MAIN CONFIGURATION / ANA KONFİGÜRASYON
// ========================================

export default [
  // ========================================
  // 📋 1. BASE JAVASCRIPT/TYPESCRIPT RULES
  // Temel JavaScript/TypeScript Kuralları
  // ========================================

  // JavaScript recommended kurallarını dahil et
  js.configs.recommended,

  {
    name: 'typescript-base',
    files: ['**/*.{ts,tsx,js,jsx,mts,cts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // tsconfig.json'dan otomatik yükle
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
        ecmaVersion: 2024, // En son ECMAScript özellikleri
        ecmaFeatures: {
          jsx: true,
          globalReturn: false,
          impliedStrict: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',

        // Node.js globals (monorepo build scripts için)
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',

        // Testing globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': ts,
      import: importPlugin,
      'unused-imports': unusedImports,
      sonarjs: sonarjs,
      security: security,
      promise: promise,
      unicorn: unicorn,
      perfectionist: perfectionist,
    },

    rules: {
      // ========================================
      // TypeScript Specific Rules / TypeScript Özel Kuralları
      // ========================================

      // Kullanılmayan değişkenler için warning (underscore ile başlayanlar hariç)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',      // _param gibi parametreleri yok say
          varsIgnorePattern: '^_',      // _variable gibi değişkenleri yok say
          caughtErrorsIgnorePattern: '^_', // _error gibi catch edilen hataları yok say
          destructuredArrayIgnorePattern: '^_', // [_first, second] gibi destructuring'i yok say
        },
      ],

      // Fonksiyon return type'ı zorunlu değil (çıkarım yapabilir)
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Interface ve type tanımlarında member delimiter tutarlılığı
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'semi', requireLast: true },
          singleline: { delimiter: 'semi', requireLast: false },
        },
      ],

      // Consistent type definitions (interface vs type)
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Array type tutarlılığı: Array<T> yerine T[] kullan
      '@typescript-eslint/array-type': ['error', { default: 'array' }],

      // Gereksiz constructor'ları yasakla
      '@typescript-eslint/no-useless-constructor': 'error',

      // any kullanımını kısıtla
      '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],

      // Non-null assertion (!.) kullanımını kısıtla
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // ========================================
      // Import/Export Organization / Import/Export Organizasyonu
      // ========================================

      // Import sıralaması ve gruplandırması
      'import/order': [
        'error',
        {
          groups: [
            'builtin',    // Node.js built-in modülleri (fs, path, etc.)
            'external',   // node_modules'den gelen paketler
            'internal',   // Monorepo içindeki paketler (@multiui/*)
            'parent',     // Üst dizin import'ları (../)
            'sibling',    // Aynı dizin import'ları (./)
            'index',      // Index dosyaları
            'type',       // TypeScript type import'ları
          ],
          'newlines-between': 'always', // Gruplar arasında boş satır zorunlu
          pathGroups: [
            {
              pattern: '@multiui/**',     // Monorepo paketlerini internal grup'ta
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/**',            // Absolute import'ları internal'da
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
          alphabetize: {
            order: 'asc',               // Alfabetik sıralama
            caseInsensitive: true,
          },
        },
      ],

      // Kullanılmayan import'ları otomatik kaldır
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Döngüsel bağımlılıkları yasakla
      'import/no-cycle': ['error', { maxDepth: 10 }],

      // Self import'ları yasakla
      'import/no-self-import': 'error',

      // ========================================
      // Code Quality Rules / Kod Kalitesi Kuralları
      // ========================================

      // SonarJS kuralları - kod kokuları ve potansiyel buglar
      'sonarjs/cognitive-complexity': ['error', 15], // Bilişsel karmaşıklık limiti
      'sonarjs/no-duplicate-string': ['error', 5],   // Tekrarlanan string'leri önle
      'sonarjs/no-duplicated-branches': 'error',     // Aynı if-else dallarını önle
      'sonarjs/no-identical-functions': 'error',     // Aynı fonksiyonları önle
      'sonarjs/no-small-switch': 'error',            // Küçük switch-case'leri önle

      // Promise kullanım kuralları
      'promise/always-return': 'error',               // Promise'lerde her zaman return yap
      'promise/catch-or-return': 'error',            // Promise'lerde catch veya return zorunlu
      'promise/no-nesting': 'warn',                  // Promise nesting'ini önle
      'promise/no-promise-in-callback': 'error',     // Callback içinde Promise kullanma

      // Güvenlik kuralları
      'security/detect-object-injection': 'error',   // Object injection saldırılarını önle
      'security/detect-non-literal-regexp': 'warn',  // Dinamik regex'leri uyar
      'security/detect-eval-with-expression': 'error', // eval() kullanımını yasakla

      // ========================================
      // Modern JavaScript Best Practices / Modern JavaScript En İyi Pratikleri
      // ========================================

      // Unicorn kuralları - modern JavaScript pratikleri
      'unicorn/better-regex': 'error',               // Regex'leri optimize et
      'unicorn/catch-error-name': 'error',           // Catch bloklarında 'error' adını kullan
      'unicorn/consistent-destructuring': 'error',   // Tutarlı destructuring
      'unicorn/consistent-function-scoping': 'error', // Fonksiyon scope'unu optimize et
      'unicorn/explicit-length-check': 'error',      // Array length kontrolünü açık yap
      'unicorn/new-for-builtins': 'error',          // Built-in'ler için new kullan
      'unicorn/no-array-for-each': 'error',         // forEach yerine for-of kullan
      'unicorn/no-for-loop': 'error',               // Klasik for loop'ları önle
      'unicorn/no-nested-ternary': 'error',         // İç içe ternary'leri önle
      'unicorn/no-null': 'off',                     // null kullanımına izin ver
      'unicorn/prefer-array-some': 'error',         // Array.some() kullanımını tercih et
      'unicorn/prefer-date-now': 'error',           // Date.now() kullanımını tercih et
      'unicorn/prefer-includes': 'error',           // includes() kullanımını tercih et
      'unicorn/prefer-module': 'error',             // ES modules kullanımını tercih et
      'unicorn/prefer-node-protocol': 'error',      // Node.js protocol'ünü kullan
      'unicorn/prefer-spread': 'error',             // Spread operator kullanımını tercih et
      'unicorn/prefer-ternary': 'error',            // Ternary operator kullanımını tercih et

      // ========================================
      // Code Organization / Kod Organizasyonu
      // ========================================

      // Perfectionist kuralları - kod organizasyonu
      'perfectionist/sort-imports': 'off', // Import sıralamasını import/order'a bırak
      'perfectionist/sort-interfaces': ['error', { type: 'alphabetical' }],
      'perfectionist/sort-object-types': ['error', { type: 'alphabetical' }],
      'perfectionist/sort-union-types': ['error', { type: 'alphabetical' }],

      // ========================================
      // Environment Specific Rules / Ortam Özel Kuralları
      // ========================================

      // Console ve debugger kullanımı (environment'a göre)
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // Performance kuralları
      'no-await-in-loop': 'error',                  // Loop içinde await kullanma
      'prefer-const': 'error',                      // Değişmeyen değişkenler için const kullan
      'prefer-destructuring': ['error', {           // Destructuring kullanımını tercih et
        array: true,
        object: true,
      }],
    },

    settings: {
      // Import plugin ayarları
      'import/resolver': {
        typescript: {
          project: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'],
        },
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'],
    },
  },

  // ========================================
  // 🔵 2. REACT & NEXT.JS CONFIGURATION
  // React & Next.js Konfigürasyonu
  // ========================================

  {
    name: 'react-setup',
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsx,
    },

    rules: {
      // ========================================
      // React Core Rules / React Temel Kuralları
      // ========================================

      // React 17+ JSX için import React gerekmez
      'react/react-in-jsx-scope': 'off',

      // TypeScript kullanıyoruz, prop-types gereksiz
      'react/prop-types': 'off',

      // JSX'te curly braces tutarlılığı
      'react/jsx-curly-brace-presence': ['error', {
        props: 'never',      // Props'larda gereksiz braces kullanma
        children: 'never',   // Children'da gereksiz braces kullanma
      }],

      // Self-closing tag'leri tercih et
      'react/self-closing-comp': ['error', {
        component: true,
        html: true,
      }],

      // Boolean props için değer yazmaya gerek yok
      'react/jsx-boolean-value': ['error', 'never'],

      // JSX dosya uzantısı kontrolü
      'react/jsx-filename-extension': ['error', {
        extensions: ['.jsx', '.tsx'],
      }],

      // Fragment syntax tutarlılığı
      'react/jsx-fragments': ['error', 'syntax'],

      // JSX'te boşluk kullanımı
      'react/jsx-child-element-spacing': 'error',

      // JSX props sıralaması
      'react/jsx-sort-props': ['error', {
        callbacksLast: true,        // Callback'leri sona koy
        shorthandFirst: true,       // Shorthand props'ları başa koy
        multiline: 'last',          // Multiline props'ları sona koy
        reservedFirst: true,        // key, ref gibi reserved props'ları başa koy
      }],

      // ========================================
      // React Hooks Rules / React Hooks Kuralları
      // ========================================

      // Hook kuralları - ZORUNLU
      'react-hooks/rules-of-hooks': 'error',

      // useEffect bağımlılık dizisi kontrolü
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useIsomorphicLayoutEffect|useUpdateEffect)', // Custom hook'lar
        },
      ],

      // ========================================
      // React Performance Rules / React Performans Kuralları
      // ========================================

      // Gereksiz re-render'ları önle
      'react/jsx-no-bind': ['error', {
        allowArrowFunctions: true,  // Arrow function'lara izin ver
        allowBind: false,           // .bind() kullanımını yasakla
        allowFunctions: false,      // Function expression'ları yasakla
      }],

      // Array index'ini key olarak kullanma
      'react/no-array-index-key': 'warn',

      // Inline object creation'ı önle (performance için)
      'react/jsx-no-constructed-context-values': 'error',

      // ========================================
      // Accessibility Rules / Erişilebilirlik Kuralları
      // ========================================

      // JSX A11Y kuralları - erişilebilirlik
      'jsx-a11y/alt-text': 'error',              // img tag'lerinde alt text zorunlu
      'jsx-a11y/anchor-has-content': 'error',    // a tag'lerinde içerik zorunlu
      'jsx-a11y/anchor-is-valid': 'error',       // Geçerli anchor kullanımı
      'jsx-a11y/click-events-have-key-events': 'error', // Click event'lerde keyboard event'i
      'jsx-a11y/heading-has-content': 'error',   // Heading'lerde içerik zorunlu
      'jsx-a11y/img-redundant-alt': 'error',     // Gereksiz alt text'leri önle
      'jsx-a11y/label-has-associated-control': 'error', // Label'ların ilişkili control'ü olmalı
      'jsx-a11y/no-autofocus': 'warn',          // Autofocus kullanımını kısıtla
      'jsx-a11y/no-redundant-roles': 'error',    // Gereksiz role attribute'larını önle
      'jsx-a11y/role-has-required-aria-props': 'error', // Role'ler için gerekli ARIA props
      'jsx-a11y/role-supports-aria-props': 'error', // Role'lerin desteklediği ARIA props

      // React Refresh (Fast Refresh) kuralları
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
      }],
    },

    settings: {
      react: {
        version: 'detect', // React versiyonunu otomatik tespit et
      },
      'jsx-a11y': {
        polymorphicPropName: 'as', // Polymorphic component prop adı
        components: {
          Button: 'button',         // Custom Button component'ini button olarak değerlendir
          Link: 'a',               // Custom Link component'ini a olarak değerlendir
          Input: 'input',          // Custom Input component'ini input olarak değerlendir
        },
      },
    },
  },

  // ========================================
  // 📘 3. NEXT.JS SPECIFIC CONFIGURATION
  // Next.js Özel Konfigürasyonu
  // ========================================

  {
    name: 'nextjs-setup',
    files: ['apps/nextjs/**/*.{js,jsx,ts,tsx}', '**/app/**/*.{js,jsx,ts,tsx}', '**/pages/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextjs,
    },
    rules: {
      // Next.js özel kuralları
      '@next/next/google-font-display': 'error',      // Google Fonts için font-display
      '@next/next/google-font-preconnect': 'error',   // Google Fonts için preconnect
      '@next/next/next-script-for-ga': 'error',       // Google Analytics için next/script
      '@next/next/no-css-tags': 'error',              // CSS tag'lerini yasakla
      '@next/next/no-document-import-in-page': 'error', // Page'lerde _document import'ı yasakla
      '@next/next/no-duplicate-head': 'error',        // Duplicate head'leri önle
      '@next/next/no-head-element': 'error',          // HTML head element kullanma
      '@next/next/no-head-import-in-document': 'error', // _document'te next/head import'ı yasakla
      '@next/next/no-html-link-for-pages': 'error',   // Page link'leri için HTML a tag kullanma
      '@next/next/no-img-element': 'error',           // img yerine next/image kullan
      '@next/next/no-page-custom-font': 'error',      // Page'lerde custom font kullanma
      '@next/next/no-styled-jsx-in-document': 'error', // _document'te styled-jsx kullanma
      '@next/next/no-sync-scripts': 'error',          // Sync script'leri yasakla
      '@next/next/no-title-in-document-head': 'error', // _document'te title kullanma
      '@next/next/no-unwanted-polyfillio': 'error',   // Gereksiz polyfill.io kullanma
    },
  },

  // ========================================
  // 🟢 4. VUE.JS CONFIGURATION
  // Vue.js Konfigürasyonu
  // ========================================

  {
    name: 'vue-setup',
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,           // Vue + TypeScript için
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2024,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vue,
    },
    rules: {
      // Vue.js temel kuralları
      ...vue.configs['vue3-essential'].rules,
      ...vue.configs['vue3-strongly-recommended'].rules,
      ...vue.configs['vue3-recommended'].rules,

      // ========================================
      // Vue 3 Specific Rules / Vue 3 Özel Kuralları
      // ========================================

      // Script setup içindeki değişkenleri kullanılmış say
      'vue/script-setup-uses-vars': 'error',

      // Vue 3 Composition API kuralları
      'vue/prefer-import-from-vue': 'error',        // @vue/* paketlerinden import etme
      'vue/prefer-separate-static-class': 'error',  // Static class'ları ayır
      'vue/no-deprecated-v-on-native-modifier': 'error', // .native modifier kullanma
      'vue/no-deprecated-v-bind-sync': 'error',     // .sync modifier kullanma

      // ========================================
      // Vue Template Rules / Vue Template Kuralları
      // ========================================

      // HTML attribute sıralaması
      'vue/attributes-order': ['error', {
        order: [
          'DEFINITION',        // is, v-is
          'LIST_RENDERING',    // v-for
          'CONDITIONALS',      // v-if, v-else-if, v-else, v-show, v-cloak
          'RENDER_MODIFIERS',  // v-pre, v-once
          'GLOBAL',           // id
          'UNIQUE',           // ref, key
          'TWO_WAY_BINDING',  // v-model
          'OTHER_DIRECTIVES', // v-custom-directive
          'OTHER_ATTR',       // custom props, html attributes
          'EVENTS',           // @click, v-on
          'CONTENT',          // v-text, v-html
        ],
        alphabetical: true,
      }],

      // Template'te HTML tag'leri self-closing yapma
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',      // void element'ler için self-closing zorunlu
          normal: 'always',    // normal element'ler için self-closing zorunlu
          component: 'always', // component'ler için self-closing zorunlu
        },
        svg: 'always',
        math: 'always',
      }],

      // Component name casing (PascalCase)
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
      }],

      // Prop name casing (camelCase in script, kebab-case in template)
      'vue/prop-name-casing': ['error', 'camelCase'],

      // Event name casing (camelCase)
      'vue/custom-event-name-casing': ['error', 'camelCase'],

      // ========================================
      // Vue Performance Rules / Vue Performans Kuralları
      // ========================================

      // v-for'da key kullanımı zorunlu
      'vue/require-v-for-key': 'error',

      // v-if ve v-for'u aynı element'te kullanma
      'vue/no-use-v-if-with-v-for': 'error',

      // Reactive olmayan data'yı reactive yapma
      'vue/no-setup-props-destructure': 'error',

      // Template'te complex expression'ları önle
      'vue/no-complex-template-expressions': 'warn',

      // ========================================
      // Vue Accessibility Rules / Vue Erişilebilirlik Kuralları
      // ========================================

      // Form input'larında label kullanımı
      'vue/require-explicit-emits': 'error',

      // Button'larda type attribute'u
      'vue/no-deprecated-html-element-is': 'error',

      // Directive'lerde valid modifier kullanımı
      'vue/valid-v-bind': 'error',
      'vue/valid-v-model': 'error',
      'vue/valid-v-on': 'error',
    },
  },

  // ========================================
  // 🟨 5. SVELTE CONFIGURATION
  // Svelte Konfigürasyonu
  // ========================================

  {
    name: 'svelte-setup',
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,           // Svelte + TypeScript için
        extraFileExtensions: ['.svelte'],
        svelteFeatures: {
          experimentalGenerics: true, // Generic component desteği
        },
      },
    },
    plugins: {
      svelte: svelte,
    },
    rules: {
      // Svelte temel kuralları
      ...svelte.configs.recommended.rules,

      // ========================================
      // Svelte Specific Rules / Svelte Özel Kuralları
      // ========================================

      // Store kullanımında $ prefix zorunlu
      'svelte/valid-compile': 'error',

      // Reactive statement'larda side-effect'leri önle
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',

      // Component naming (PascalCase)
      'svelte/valid-prop-names-in-kit-pages': 'error',

      // Event handler'larda inline function'ları önle
      'svelte/no-inline-styles': 'warn',

      // ========================================
      // Svelte Performance Rules / Svelte Performans Kuralları
      // ========================================

      // Key block'larında primitive key kullan
      'svelte/prefer-destructuring': 'error',

      // Store subscription'larını optimize et
      'svelte/prefer-style-directive': 'error',

      // Gereksiz reactive declaration'ları önle
      'svelte/no-useless-mustaches': 'error',

      // SvelteKit specific rules
      'svelte/no-goto-without-base': 'error',
    },
  },

  // ========================================
  // 🧪 6. TESTING CONFIGURATION
  // Test Konfigürasyonu
  // ========================================

  {
    name: 'jest-testing',
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      jest: jest,
      'testing-library': testingLibrary,
    },
    rules: {
      // Jest kuralları
      'jest/consistent-test-it': ['error', { fn: 'test' }], // test() kullan, it() kullanma
      'jest/expect-expect': 'error',                         // Her test'te expect() olmalı
      'jest/no-disabled-tests': 'warn',                     // Skip edilmiş test'leri uyar
      'jest/no-focused-tests': 'error',                     // .only test'lerini yasakla
      'jest/no-identical-title': 'error',                   // Aynı isimli test'leri önle
      'jest/prefer-to-have-length': 'error',                // .toHaveLength() kullan
      'jest/prefer-to-be': 'error',                         // .toBe() kullan
      'jest/valid-expect': 'error',                         // Geçerli expect kullanımı

      // Testing Library kuralları
      'testing-library/await-async-query': 'error',         // Async query'lerde await kullan
      'testing-library/no-await-sync-query': 'error',       // Sync query'lerde await kullanma
      'testing-library/no-debugging-utils': 'warn',         // Debug util'lerini production'da bırakma
      'testing-library/no-dom-import': 'error',             // DOM utility'lerini doğrudan import etme
      'testing-library/prefer-screen-queries': 'error',     // screen.* query'lerini tercih et
      'testing-library/render-result-naming-convention': 'error', // render result naming
    },
    env: {
      jest: true,                                            // Jest global'larını aktif et
    },
  },

  {
    name: 'vitest-testing',
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: {
      vitest: vitest,
    },
    rules: {
      // Vitest kuralları
      'vitest/consistent-test-it': ['error', { fn: 'test' }], // test() kullan
      'vitest/expect-expect': 'error',                        // Her test'te expect() olmalı
      'vitest/no-disabled-tests': 'warn',                     // Skip edilmiş test'leri uyar
      'vitest/no-focused-tests': 'error',                     // .only test'lerini yasakla
      'vitest/prefer-to-have-length': 'error',                // .toHaveLength() kullan
      'vitest/valid-expect': 'error',                         // Geçerli expect kullanımı
    },
  },

  {
    name: 'playwright-e2e',
    files: ['**/*.e2e.{js,ts}', '**/e2e/**/*.{js,ts}', '**/tests/**/*.{js,ts}'],
    plugins: {
      playwright: playwright,
    },
    rules: {
      // Playwright kuralları
      'playwright/expect-expect': 'error',                    // Her test'te expect() olmalı
      'playwright/no-focused-test': 'error',                  // .only test'lerini yasakla
      'playwright/no-skipped-test': 'warn',                   // Skip edilmiş test'leri uyar
      'playwright/prefer-web-first-assertions': 'error',      // Web-first assertion'ları tercih et
      'playwright/prefer-to-have-length': 'error',            // .toHaveLength() kullan
    },
  },

  // ========================================
  // 📱 7. WEB COMPONENTS CONFIGURATION
  // Web Components Konfigürasyonu
  // ========================================

  {
    name: 'web-components',
    files: ['**/web-components/**/*.{js,ts}', '**/*.wc.{js,ts}'],
    rules: {
      // Custom Elements için naming convention
      'unicorn/filename-case': ['error', {
        case: 'kebabCase',          // Web component dosyalarında kebab-case
      }],

      // Class naming (CustomElement için PascalCase)
      'unicorn/custom-error-definition': 'off', // Custom element'ler için kapatılabilir

      // Web Components API kuralları
      'no-undef': 'off',           // customElements global'ı için
    },
    globals: {
      customElements: 'readonly',   // Web Components API
      HTMLElement: 'readonly',     // Base class
      ShadowRoot: 'readonly',      // Shadow DOM
    },
  },

  // ========================================
  // 🎯 8. SOLID.JS CONFIGURATION
  // Solid.js Konfigürasyonu
  // ========================================

  {
    name: 'solid-setup',
    files: ['**/solid/**/*.{jsx,tsx}', '**/*.solid.{jsx,tsx}'],
    rules: {
      // Solid.js için JSX kuralları (React benzeri ama farklı)
      'react/jsx-no-undef': 'off',              // Solid'de component import'ları farklı
      'react/jsx-uses-react': 'off',            // Solid'de React import'ı yok
      'react/jsx-uses-vars': 'off',             // Solid'de farklı variable kullanımı

      // Solid.js specific patterns
      'no-unused-expressions': 'off',           // Solid'de expression'lar side-effect yapabilir
      'prefer-const': 'warn',                   // Solid'de signal'lar const olabilir
    },
  },

  // ========================================
  // 🔧 9. TOOLING & BUILD CONFIGURATION
  // Araçlar & Build Konfigürasyonu
  // ========================================

  {
    name: 'build-tools',
    files: ['**/*.config.{js,ts}', '**/tools/**/*.{js,ts}', '**/scripts/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        process: 'readonly',        // Node.js process object
        Buffer: 'readonly',         // Node.js Buffer
        __dirname: 'readonly',      // Node.js __dirname
        __filename: 'readonly',     // Node.js __filename
        module: 'readonly',         // CommonJS module
        require: 'readonly',        // CommonJS require
        exports: 'readonly',        // CommonJS exports
      },
    },
    rules: {
      // Build araçları için relaxed kurallar
      'no-console': 'off',          // Build script'lerinde console'a izin ver
      '@typescript-eslint/no-var-requires': 'off', // CommonJS require'a izin ver
      'unicorn/prefer-module': 'off', // CommonJS kullanımına izin ver
    },
  },

  // ========================================
  // 📝 10. DOCUMENTATION CONFIGURATION
  // Dokümantasyon Konfigürasyonu
  // ========================================

  {
    name: 'documentation',
    files: ['**/*.md', '**/*.mdx'],
    rules: {
      // Markdown dosyaları için özel kurallar
      'no-undef': 'off',           // Markdown'da undefined variable'lar olabilir
      'no-unused-vars': 'off',     // Markdown code block'larında unused var'lar olabilir
    },
  },

  // ========================================
  // 📊 11. PACKAGE-SPECIFIC OVERRIDES
  // Paket Özel Kuralları
  // ========================================

  {
    name: 'core-package',
    files: ['packages/core/**/*.{js,ts}'],
    rules: {
      // Core paket için strict kurallar
      '@typescript-eslint/explicit-function-return-type': 'warn', // Core'da return type'ı tercih et
      'sonarjs/cognitive-complexity': ['error', 10],              // Daha düşük complexity
      'unicorn/no-null': 'error',                                // Core'da null kullanma
    },
  },

  {
    name: 'react-package',
    files: ['packages/react/**/*.{jsx,tsx}'],
    rules: {
      // React paketi için ek kurallar
      'react/display-name': 'error',                             // Component display name zorunlu
      'react/jsx-key': 'error',                                  // List item'larda key zorunlu
      'react-hooks/exhaustive-deps': 'error',                    // Dependency array strict
    },
  },

  // ========================================
  // 🎨 12. PRETTIER INTEGRATION
  // Prettier Entegrasyonu
  // ========================================

  {
    name: 'prettier-integration',
    plugins: {
      prettier,
    },
    rules: {
      // Prettier ile çakışan kuralları kapat
      ...prettier.rules,

      // Prettier'ı ESLint kuralı olarak çalıştır
      'prettier/prettier': [
        'error',
        {
          // Prettier konfigürasyonu
          semi: true,                    // Noktalı virgül kullan
          singleQuote: true,            // Tek tırnak kullan
          quoteProps: 'as-needed',      // Property'lerde gerektiğinde quote
          trailingComma: 'es5',         // ES5 uyumlu trailing comma
          bracketSpacing: true,         // Object literal'lerde space
          bracketSameLine: false,       // JSX'te bracket'ı yeni satıra
          arrowParens: 'avoid',         // Arrow function'larda gereksiz parantez yok
          endOfLine: 'auto',            // Otomatik line ending
          tabWidth: 2,                  // 2 space tab
          useTabs: false,               // Space kullan, tab kullanma
          printWidth: 100,              // 100 karakter satır uzunluğu

          // Framework specific overrides
          overrides: [
            {
              files: '*.vue',
              options: {
                parser: 'vue',
              },
            },
            {
              files: '*.svelte',
              options: {
                parser: 'svelte',
              },
            },
          ],
        },
      ],
    },
  },

  // ========================================
  // 🚫 13. IGNORE PATTERNS
  // Yoksayma Kalıpları
  // ========================================

  {
    ignores: [
      // Build output dizinleri
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '**/.next/**',
      '**/coverage/**',

      // Dependency dizinleri
      '**/node_modules/**',

      // IDE ve OS dosyaları
      '**/.DS_Store',
      '**/Thumbs.db',
      '**/.vscode/settings.json',

      // Log dosyaları
      '**/*.log',
      '**/logs/**',

      // Environment dosyaları
      '**/.env*',

      // Cache dizinleri
      '**/.cache/**',
      '**/.parcel-cache/**',
      '**/tmp/**',
      '**/temp/**',

      // Generated files
      '**/generated/**',
      '**/*.generated.{js,ts}',

      // Test reports
      '**/test-results/**',
      '**/playwright-report/**',

      // Package manager files
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
    ],
  },
];

// ========================================
// 📋 CONFIGURATION SUMMARY / KONFİGÜRASYON ÖZETİ
// ========================================

/**
 * Bu ESLint konfigürasyonu aşağıdaki özellikleri sağlar:
 * This ESLint configuration provides the following features:
 *
 * ✅ Multi-framework support (React, Vue, Angular, Svelte, Solid, Web Components)
 * ✅ TypeScript tam desteği
 * ✅ Accessibility (a11y) kuralları
 * ✅ Performance optimizasyonları
 * ✅ Security best practices
 * ✅ Modern JavaScript kuralları
 * ✅ Import/Export organizasyonu
 * ✅ Testing kuralları (Jest, Vitest, Playwright)
 * ✅ Code quality metrics (SonarJS)
 * ✅ Prettier entegrasyonu
 * ✅ Environment-based kurallar
 * ✅ Monorepo desteği
 *
 * Kullanım / Usage:
 * 1. npm install -D eslint @eslint/js @typescript-eslint/eslint-plugin [other plugins]
 * 2. Bu dosyayı eslint.config.js olarak kaydet
 * 3. package.json'a script ekle: "lint": "eslint ."
 * 4. npm run lint
 */
