module.exports = {
  // -------------------------------------------
  // Extend the Conventional Commits preset
  // -------------------------------------------
  // Bu yapılandırma Conventional Commits standartlarını temel alır.
  // Böylece commit mesajları belirli bir formatta olur ve otomatik araçlar (semantic-release, changelog) kolayca çalışır.
  extends: ['@commitlint/config-conventional'],

  // -------------------------------------------
  // Custom commit message rules
  // -------------------------------------------
  rules: {
    // -----------------------------------------
    // Enforce commit types
    // -----------------------------------------
    // Commit tipleri aşağıdaki listeden biri olmalıdır.
    // Bu sayede takım içinde hangi türde değişiklik yapıldığı kolayca anlaşılır.
    'type-enum': [
      2, // 2 = error seviyesi, uyulması zorunlu
      'always', // Kural her commit için geçerlidir
      [
        'build',    // Build sistemi veya bağımlılık değişiklikleri / Changes to build system or dependencies
        'chore',    // Küçük bakım işleri, refactor dışı / Misc tasks, not code changes or fixes
        'ci',       // CI/CD pipeline ayarları / Continuous Integration changes
        'docs',     // Dokümantasyon güncellemeleri / Documentation only changes
        'feat',     // Yeni özellik / A new feature
        'fix',      // Hata düzeltme / A bug fix
        'perf',     // Performans iyileştirmeleri / Performance improvements
        'refactor', // Kod yeniden düzenleme / Code refactoring (no functionality changes)
        'revert',   // Önceki commit'i geri alma / Revert a previous commit
        'style',    // Kod stili (boşluk, noktalama, vs) / Code style changes (no logic)
        'test',     // Test ekleme veya düzeltme / Adding or fixing tests
        'deps',     // Bağımlılık güncellemeleri / Dependency updates
        'release',  // Sürüm güncelleme / Release related changes
        'security', // Güvenlik ile ilgili düzeltmeler / Security fixes
        'hotfix',   // Acil hata düzeltmesi / Critical hotfix
      ],
    ],

    // -----------------------------------------
    // Scope ile ilgili kurallar
    // -----------------------------------------
    // Scope (kapsam) opsiyoneldir ancak takım içinde standartlaştırmak istersen aşağıdaki kuralları açabilirsin.

    // 'scope-empty': [2, 'never'], // Scope boş olamaz (zorunlu)
    // 'scope-case': [2, 'always', 'camel-case'], // Scope camelCase olmalı

    // -----------------------------------------
    // Subject (konu) ile ilgili kurallar
    // -----------------------------------------
    // Commit mesajının kısa özeti için kurallar

    // subject-case: Mesajın küçük harfle başlaması zorunlu değil (0=kapalı)
    'subject-case': [0],

    // Commit mesajı başlığı 72 karakteri geçmemeli (okunabilirlik için)
    'header-max-length': [2, 'always', 72],

    // Commit mesajının başlığı boşlukla başlamamalı veya bitmemeli
    'header-leading-blank': [2, 'never'],
    'header-trailing-blank': [2, 'never'],

    // -----------------------------------------
    // Body (açıklama) ile ilgili kurallar
    // -----------------------------------------
    // Commit mesajı açıklama kısmı varsa aşağıdaki kurallar uygulanır

    // Açıklama varsa başlık ile arasında boş satır olmalı
    'body-leading-blank': [1, 'always'],

    // Açıklama satır uzunluğu 100 karakteri geçmemeli (uzun açıklamalar için daha okunabilir)
    'body-max-line-length': [1, 'always', 100],

    // Açıklama boş olmamalı (zorunlu yapmak istersen)
    // 'body-empty': [2, 'never'],

    // -----------------------------------------
    // Footer (alt bilgi) ile ilgili kurallar
    // -----------------------------------------
    // Footer varsa başlık ile arasında boş satır olmalı
    'footer-leading-blank': [1, 'always'],

    // Footer uzunluğu 100 karakteri geçmemeli
    'footer-max-line-length': [1, 'always', 100],

    // -----------------------------------------
    // Commit mesajının zorunlu alanları
    // -----------------------------------------
    // Örneğin scope zorunlu yapmak istersen aşağıdaki satırı açabilirsin
    // 'scope-empty': [2, 'never'],

    // Subject (başlık) boş olamaz
    'subject-empty': [2, 'never'],

    // -----------------------------------------
    // Diğer önemli kurallar
    // -----------------------------------------
    // Commit mesajı boş olamaz
    'header-empty': [2, 'never'],

    // Commit mesajında footer alanında "BREAKING CHANGE" kullanımı kontrolü
    'footer-leading-blank': [1, 'always'],

    // İsteğe bağlı olarak footer'da doğru formatta issue veya task referansı kontrolü eklenebilir

  },

  // -------------------------------------------
  // Parser Options (opsiyonel)
  // -------------------------------------------
  // commitlint default olarak @commitlint/config-conventional ile gelir, ekstra parser ayarı genelde gerekmez.
  // Eğer özel parser kullanıyorsan burada belirtilebilir.
};
