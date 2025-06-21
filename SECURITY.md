# Security Policy / Güvenlik Politikası

*English version below / Türkçe sürüm aşağıda*

---

## 🇹🇷 Türkçe

### 🛡️ Desteklenen Versiyonlar

Aşağıdaki versiyonlar için güvenlik güncellemeleri sağlanmaktadır:

| Versiyon | Destekleniyor |
| -------- | ------------- |
| 1.x.x    | ✅ |
| < 1.0    | ❌ |

### 🔒 Güvenlik Önlemleri

#### Input Sanitization / Giriş Temizleme
- Tüm form bileşenleri XSS saldırılarına karşı korunur
- Kullanıcı girişleri otomatik olarak sanitize edilir
- Trusted Types API desteği

#### Content Security Policy (CSP)
- CSP uyumlu kod yapısı
- Inline script kullanımından kaçınma
- Güvenli kaynak yüklemesi

#### Dependency Management / Bağımlılık Yönetimi
- Düzenli güvenlik açığı taraması
- Automated dependency updates
- Minimal bağımlılık kullanımı

### 🚨 Güvenlik Açığı Bildirimi

Güvenlik açığı keşfettiyseniz, lütfen aşağıdaki adımları izleyin:

#### 1. DOĞRUDAN İLETİŞİM
**Email**: security@uiarc.dev
**GPG Key**: [PGP Key](./security/pgp-key.asc)

#### 2. BİLDİRİM İÇERİĞİ
Güvenlik açığı raporunuzda aşağıdaki bilgileri sağlayın:

- **Açığın Türü**: XSS, CSRF, veri sızıntısı vb.
- **Etkilenen Bileşenler**: Hangi paket ve bileşenler
- **Saldırı Senaryosu**: Nasıl exploit edilebileceği
- **Etki Seviyesi**: Kritik, Yüksek, Orta, Düşük
- **Çoğaltma Adımları**: Adım adım reproduce etme
- **Önerilen Çözüm**: Varsa çözüm öneriniz

#### 3. ÖRNEK RAPOR FORMATI

```
Konu: [SECURITY] XSS Vulnerability in Button Component

Açığın Türü: Cross-Site Scripting (XSS)
Etkilenen Paket: @uiarc/react@1.0.0
Etkilenen Bileşen: Button

Açıklama:
Button bileşeninin 'children' prop'u kullanıcı girişini 
doğrudan HTML olarak render ediyor, bu da XSS saldırısına 
yol açabiliyor.

Çoğaltma Adımları:
1. Button bileşenini import edin
2. children prop'una şu değeri verin: "<img src=x onerror=alert('XSS')>"
3. Bileşen render edildiğinde alert çalışacak

Etki:
Saldırgan kullanıcı tarayıcısında JavaScript kodu çalıştırabilir

Önerilen Çözüm:
Children prop'unu dangerouslySetInnerHTML yerine 
text olarak render edin
```

#### 4. YANIT SÜRECİ

- **24 saat içinde**: İlk yanıt ve onay
- **7 gün içinde**: Açığın değerlendirilmesi
- **30 gün içinde**: Düzeltme ve yayınlama

### 🏆 Responsible Disclosure / Sorumlu Açıklama

#### Hall of Fame
Güvenlik açığı bildiren katkıda bulunanları onurlandırırız:

| Katkıda Bulunan | Açık Türü | Tarih | Seviye |
|----------------|-----------|-------|-------|
| -              | -         | -     | -     |

#### Ödüller
- **Kritik**: Projede özel teşekkür + LinkedIn önerisi
- **Yüksek**: README'de teşekkür
- **Orta/Düşük**: SECURITY.md'de teşekkür

### ⚠️ Güvenlik En İyi Pratikleri

#### Geliştiriciler İçin
```typescript
// ✅ Güvenli kullanım
<Button onClick={handleClick}>
  Güvenli Metin
</Button>

// ❌ Güvensiz kullanım  
<Button dangerouslySetInnerHTML={{__html: userInput}} />

// ✅ Sanitize edilmiş içerik
<Button>
  {DOMPurify.sanitize(userInput)}
</Button>
```

#### CSP Konfigürasyonu
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline';">
```

### 📊 Güvenlik Kontrolü

#### Automated Scanning
- **npm audit**: Her commit'te
- **Snyk**: Haftalık scan
- **OWASP ZAP**: Monthly scan
- **CodeQL**: Her PR'da

#### Manual Review
- **Security checklist**: Her release öncesi
- **Penetration testing**: Yılda iki kez
- **Third-party audit**: Yılda bir kez

### 📞 İletişim

- **Security Team**: security@uiarc.dev
- **Genel Sorular**: support@uiarc.dev
- **Community**: [Discord](https://discord.gg/uiarc)

---

## 🇺🇸 English

### 🛡️ Supported Versions

Security updates are provided for the following versions:

| Version | Supported |
| ------- | --------- |
| 1.x.x   | ✅ |
| < 1.0   | ❌ |

### 🔒 Security Measures

#### Input Sanitization
- All form components are protected against XSS attacks
- User inputs are automatically sanitized
- Trusted Types API support

#### Content Security Policy (CSP)
- CSP-compliant code structure
- Avoiding inline script usage
- Secure resource loading

#### Dependency Management
- Regular vulnerability scanning
- Automated dependency updates
- Minimal dependency usage

### 🚨 Reporting Security Vulnerabilities

If you discover a security vulnerability, please follow these steps:

#### 1. DIRECT CONTACT
**Email**: security@uiarc.dev
**GPG Key**: [PGP Key](./security/pgp-key.asc)

#### 2. REPORT CONTENT
Please provide the following information in your security vulnerability report:

- **Vulnerability Type**: XSS, CSRF, data leak, etc.
- **Affected Components**: Which packages and components
- **Attack Scenario**: How it can be exploited
- **Impact Level**: Critical, High, Medium, Low
- **Reproduction Steps**: Step-by-step reproduction
- **Suggested Solution**: Your solution recommendation if any

#### 3. SAMPLE REPORT FORMAT

```
Subject: [SECURITY] XSS Vulnerability in Button Component

Vulnerability Type: Cross-Site Scripting (XSS)
Affected Package: @uiarc/react@1.0.0
Affected Component: Button

Description:
The Button component's 'children' prop renders user input 
directly as HTML, which can lead to XSS attacks.

Reproduction Steps:
1. Import Button component
2. Pass this value to children prop: "<img src=x onerror=alert('XSS')>"
3. Alert will execute when component renders

Impact:
Attacker can execute JavaScript code in user's browser

Suggested Solution:
Render children prop as text instead of 
using dangerouslySetInnerHTML
```

#### 4. RESPONSE PROCESS

- **Within 24 hours**: Initial response and confirmation
- **Within 7 days**: Vulnerability assessment
- **Within 30 days**: Fix and release

### 🏆 Responsible Disclosure

#### Hall of Fame
We honor contributors who report security vulnerabilities:

| Contributor | Vulnerability Type | Date | Level |
|-------------|-------------------|------|-------|
| -           | -                 | -    | -     |

#### Rewards
- **Critical**: Special thanks in project + LinkedIn recommendation
- **High**: Thanks in README
- **Medium/Low**: Thanks in SECURITY.md

### ⚠️ Security Best Practices

#### For Developers
```typescript
// ✅ Safe usage
<Button onClick={handleClick}>
  Safe Text
</Button>

// ❌ Unsafe usage  
<Button dangerouslySetInnerHTML={{__html: userInput}} />

// ✅ Sanitized content
<Button>
  {DOMPurify.sanitize(userInput)}
</Button>
```

#### CSP Configuration
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline';">
```

### 📊 Security Audit

#### Automated Scanning
- **npm audit**: On every commit
- **Snyk**: Weekly scan
- **OWASP ZAP**: Monthly scan
- **CodeQL**: On every PR

#### Manual Review
- **Security checklist**: Before each release
- **Penetration testing**: Twice a year
- **Third-party audit**: Once a year

### 📞 Contact

- **Security Team**: security@uiarc.dev
- **General Questions**: support@uiarc.dev
- **Community**: [Discord](https://discord.gg/uiarc)