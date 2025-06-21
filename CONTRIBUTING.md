# Contributing Guide / Katkı Kılavuzu

*English version below / Türkçe sürüm aşağıda*

---

## 🇹🇷 Türkçe

### 🎉 Hoş Geldiniz!

Arc UI Component System projesine katkıda bulunmayı düşündüğünüz için teşekkür ederiz! Bu kılavuz, katkıda bulunma sürecini kolaylaştırmak için hazırlanmıştır.

### 🚀 Hızlı Başlangıç

#### Ön Gereksinimler
```bash
# Node.js 18+ gerekli
node --version  # v18.0.0+

# npm 8+ gerekli  
npm --version   # 8.0.0+

# Git gerekli
git --version
```

#### Repository Kurulumu
```bash
# 1. Fork edin ve clone yapın
git clone https://github.com/yourusername/uiarc.git
cd arc-ui

# 2. Bağımlılıkları yükleyin
npm install

# 3. Development server'ı başlatın
npm run dev

# 4. Testleri çalıştırın
npm test
```

### 🛠️ Geliştirme Ortamı

#### Klasör Yapısı
```
ui-arc/
├── packages/
│   ├── core/              # Temel paket
│   ├── react/             # React implementasyonu
│   ├── vue/               # Vue implementasyonu
│   └── ...                # Diğer framework'ler
├── tools/                 # Build ve test araçları
├── apps/
│   ├── storybook/         # Bileşen dokümantasyonu
│   └── playground/        # Test ortamı
└── docs/                  # Dokümantasyon
```

#### Kullanışlı Komutlar
```bash
# Tüm paketleri build etme
npm run build

# Testleri çalıştırma
npm run test
npm run test:watch        # İzleme modunda
npm run test:coverage     # Coverage raporu ile

# Linting ve formatting
npm run lint
npm run format

# Storybook başlatma
npm run storybook

# Specific package üzerinde çalışma
npm run dev --workspace=@uiarc/react
```

### 📝 Katkı Türleri

#### 🐛 Bug Raporu
Bir hata bulduysanız:
1. [Issues](https://github.com/uiarc/uiarc/issues) sayfasını kontrol edin
2. Eğer benzer bir issue yoksa, yeni bir issue açın
3. Bug report template'ini kullanın
4. Mümkünse reproduction örneği ekleyin

#### ✨ Özellik İsteği
Yeni özellik önerileriniz için:
1. [Discussions](https://github.com/uiarc/uiarc/discussions) kısmında tartışın
2. RFC (Request for Comments) oluşturun
3. Community feedback'ini bekleyin
4. Onaylandıktan sonra implementation'a başlayın

#### 📚 Dokümantasyon
- Typo düzeltmeleri
- Örneklerin iyileştirilmesi  
- Yeni rehberlerin eklenmesi
- API dokümantasyonu güncellemeleri

#### 🧩 Yeni Bileşen
Yeni bileşen eklemek için:
1. Önce RFC oluşturun
2. Design system'e uygunluğunu kontrol edin
3. Tüm framework'ler için implement edin
4. Comprehensive testler yazın
5. Storybook hikayelerini ekleyin

### 🔄 Development Workflow

#### 1. Issue/Task Seçimi
```bash
# Good first issues için
https://github.com/uiarc/uiarc/labels/good%20first%20issue

# Help wanted issues için
https://github.com/uiarc/uiarc/labels/help%20wanted
```

#### 2. Branch Oluşturma
```bash
# Feature branch oluşturma
git checkout -b feature/button-loading-state

# Bug fix branch oluşturma  
git checkout -b fix/modal-scroll-issue

# Documentation branch oluşturma
git checkout -b docs/update-installation-guide
```

#### 3. Development
```bash
# Değişiklik yapın
# Testleri yazın/güncelleyin
# Documentation'ı güncelleyin

# Değişiklikleri test edin
npm run test
npm run lint
npm run build
```

#### 4. Commit Kuralları
Conventional Commits formatını kullanırız:

```bash
# Örnekler
git commit -m "feat(button): add loading state functionality"
git commit -m "fix(modal): resolve scroll issue on mobile"
git commit -m "docs(readme): update installation instructions"
git commit -m "test(input): add validation tests"

# Commit tipleri:
# feat: Yeni özellik
# fix: Bug düzeltmesi
# docs: Dokümantasyon değişikliği
# style: Code style değişikliği
# refactor: Code refactoring
# test: Test ekleme/değiştirme
# chore: Build process veya auxiliary tools
```

#### 5. Pull Request
```bash
# 1. Değişiklikleri push edin
git push origin feature/button-loading-state

# 2. GitHub'da PR oluşturun
# 3. PR template'ini doldurun
# 4. Review bekleyin
```

### 🧪 Test Gereksinimleri

#### Test Türleri
```bash
# Unit tests - her bileşen için zorunlu
npm run test:unit

# Integration tests - bileşenler arası etkileşim
npm run test:integration  

# E2E tests - kritik user flows
npm run test:e2e

# Visual regression tests
npm run test:visual

# Accessibility tests
npm run test:a11y
```

#### Test Yazma Kuralları
```typescript
// ✅ Good test example
describe('Button Component', () => {
  it('should render children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should be accessible', async () => {
    const { container } = render(<Button>Accessible button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 🎨 Design System Uyumu

#### Tasarım Token'ları
```typescript
// Yeni bileşenler design token'ları kullanmalı
const StyledButton = styled.button`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
`;
```

#### Accessibility Gereksinimleri
- WCAG 2.1 AA compliance
- Keyboard navigation desteği
- Screen reader uyumluluğu
- Focus management
- ARIA attributes

#### Responsive Design
- Mobile-first yaklaşım
- Flexible breakpoint sistemi
- Touch-friendly interface
- Performance optimization

### 📖 Dokümantasyon Kuralları

#### Component Documentation
```typescript
/**
 * Button component for user interactions
 * 
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Submit Form
 * </Button>
 */
interface ButtonProps {
  /** Button visual style variant */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Click event handler */
  onClick?: (event: MouseEvent) => void;
  /** Button content */
  children: ReactNode;
}
```

#### Storybook Stories
```typescript
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Primary UI component for user interaction.'
      }
    }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
  </div>
);
```

### 🔍 Code Review Süreci

#### PR Checklist
- [ ] Kod style guide'a uygun
- [ ] Testler yazılmış ve geçiyor
- [ ] Documentation güncellenmiş
- [ ] Accessibility requirements karşılandı
- [ ] Performance impact değerlendirildi
- [ ] Breaking change var mı kontrol edildi

#### Review Kriterleri
- **Functionality**: Kod beklenen şekilde çalışıyor mu?
- **Maintainability**: Kod okunabilir ve sürdürülebilir mi?
- **Performance**: Performance'a olumsuz etkisi var mı?
- **Security**: Güvenlik açığı yaratıyor mu?
- **Design System**: Design system'e uygun mu?

### 🏆 Recognition

#### Contributors Hall of Fame
Katkılarınız aşağıdaki şekillerde tanınır:
- README.md'de contributors listesi
- All Contributors bot
- Özel achievement badges
- Annual contributor spotlight

#### Maintainer Olmak
Düzenli katkı sağlayanlar maintainer olmaya davet edilebilir:
- 20+ meaningful contribution
- Code review participation
- Community involvement
- Technical leadership

### 📞 Yardım ve Destek

#### İletişim Kanalları
- **GitHub Discussions**: Genel sorular ve öneriler
- **Discord**: Real-time chat ve destek
- **Email**: maintainers@uiarc.dev

#### Mentorship Program
- Yeni contributors'lara mentor desteği
- Pair programming sessions
- Code review eğitimleri
- Open source best practices

### 📚 Ek Kaynaklar

- [Conventional Commits](https://conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Open Source Guide](https://opensource.guide/)

---

## 🇺🇸 English

### 🎉 Welcome!

Thank you for considering contributing to the Arc UI Component System project! This guide is designed to make the contribution process easier.

### 🚀 Quick Start

#### Prerequisites
```bash
# Node.js 18+ required
node --version  # v18.0.0+

# npm 8+ required  
npm --version   # 8.0.0+

# Git required
git --version
```

#### Repository Setup
```bash
# 1. Fork and clone
git clone https://github.com/yourusername/uiarc.git
cd uiarc

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Run tests
npm test
```

### 🛠️ Development Environment

#### Folder Structure
```
uiarc/
├── packages/
│   ├── core/              # Core package
│   ├── react/             # React implementation
│   ├── vue/               # Vue implementation
│   └── ...                # Other frameworks
├── tools/                 # Build and test tools
├── apps/
│   ├── storybook/         # Component documentation
│   └── playground/        # Test environment
└── docs/                  # Documentation
```

#### Useful Commands
```bash
# Build all packages
npm run build

# Run tests
npm run test
npm run test:watch        # Watch mode
npm run test:coverage     # With coverage report

# Linting and formatting
npm run lint
npm run format

# Start Storybook
npm run storybook

# Work on specific package
npm run dev --workspace=@uiarc/react
```

### 📝 Types of Contributions

#### 🐛 Bug Reports
If you found a bug:
1. Check the [Issues](https://github.com/uiarc/uiarc/issues) page
2. If no similar issue exists, create a new issue
3. Use the bug report template
4. Include reproduction example if possible

#### ✨ Feature Requests
For new feature suggestions:
1. Discuss in [Discussions](https://github.com/uiarc/uiarc/discussions)
2. Create an RFC (Request for Comments)
3. Wait for community feedback
4. Start implementation after approval

#### 📚 Documentation
- Typo fixes
- Example improvements
- Adding new guides
- API documentation updates

#### 🧩 New Components
To add new components:
1. Create an RFC first
2. Check design system compliance
3. Implement for all frameworks
4. Write comprehensive tests
5. Add Storybook stories

### 🔄 Development Workflow

#### 1. Issue/Task Selection
```bash
# For good first issues
https://github.com/uiarc/uiarc/labels/good%20first%20issue

# For help wanted issues
https://github.com/uiarc/uiarc/labels/help%20wanted
```

#### 2. Branch Creation
```bash
# Create feature branch
git checkout -b feature/button-loading-state

# Create bug fix branch  
git checkout -b fix/modal-scroll-issue

# Create documentation branch
git checkout -b docs/update-installation-guide
```

#### 3. Development
```bash
# Make changes
# Write/update tests
# Update documentation

# Test changes
npm run test
npm run lint
npm run build
```

#### 4. Commit Guidelines
We use Conventional Commits format:

```bash
# Examples
git commit -m "feat(button): add loading state functionality"
git commit -m "fix(modal): resolve scroll issue on mobile"
git commit -m "docs(readme): update installation instructions"
git commit -m "test(input): add validation tests"

# Commit types:
# feat: New feature
# fix: Bug fix
# docs: Documentation change
# style: Code style change
# refactor: Code refactoring
# test: Adding/changing tests
# chore: Build process or auxiliary tools
```

#### 5. Pull Request
```bash
# 1. Push changes
git push origin feature/button-loading-state

# 2. Create PR on GitHub
# 3. Fill PR template
# 4. Wait for review
```

### 🧪 Testing Requirements

#### Test Types
```bash
# Unit tests - mandatory for each component
npm run test:unit

# Integration tests - inter-component interaction
npm run test:integration  

# E2E tests - critical user flows
npm run test:e2e

# Visual regression tests
npm run test:visual

# Accessibility tests
npm run test:a11y
```

#### Test Writing Rules
```typescript
// ✅ Good test example
describe('Button Component', () => {
  it('should render children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should be accessible', async () => {
    const { container } = render(<Button>Accessible button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 🎨 Design System Compliance

#### Design Tokens
```typescript
// New components should use design tokens
const StyledButton = styled.button`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
`;
```

#### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA attributes

#### Responsive Design
- Mobile-first approach
- Flexible breakpoint system
- Touch-friendly interface
- Performance optimization

### 📖 Documentation Guidelines

#### Component Documentation
```typescript
/**
 * Button component for user interactions
 * 
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Submit Form
 * </Button>
 */
interface ButtonProps {
  /** Button visual style variant */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Click event handler */
  onClick?: (event: MouseEvent) => void;
  /** Button content */
  children: ReactNode;
}
```

#### Storybook Stories
```typescript
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Primary UI component for user interaction.'
      }
    }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
  </div>
);
```

### 🔍 Code Review Process

#### PR Checklist
- [ ] Code follows style guide
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Accessibility requirements met
- [ ] Performance impact evaluated
- [ ] Breaking changes checked

#### Review Criteria
- **Functionality**: Does the code work as expected?
- **Maintainability**: Is the code readable and maintainable?
- **Performance**: Does it have negative performance impact?
- **Security**: Does it create security vulnerabilities?
- **Design System**: Does it comply with design system?

### 🏆 Recognition

#### Contributors Hall of Fame
Your contributions are recognized through:
- Contributors list in README.md
- All Contributors bot
- Special achievement badges
- Annual contributor spotlight

#### Becoming a Maintainer
Regular contributors may be invited to become maintainers:
- 20+ meaningful contributions
- Code review participation
- Community involvement
- Technical leadership

### 📞 Help and Support

#### Communication Channels
- **GitHub Discussions**: General questions and suggestions
- **Discord**: Real-time chat and support
- **Email**: maintainers@uiarc.dev

#### Mentorship Program
- Mentor support for new contributors
- Pair programming sessions
- Code review training
- Open source best practices

### 📚 Additional Resources

- [Conventional Commits](https://conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Open Source Guide](https://opensource.guide/)