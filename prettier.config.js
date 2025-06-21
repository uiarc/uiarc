/**
 * Prettier Configuration / Prettier Konfigürasyonu
 *
 * This configuration defines how Prettier will format your code.
 * Bu konfigürasyon, Prettier'ın kodunu nasıl biçimlendireceğini tanımlar.
 *
 * ✅ Recommended for professional teams / Profesyonel ekipler için önerilir
 * ✅ Used in monorepos and multi-framework projects / Monorepo ve çoklu framework projelerinde yaygın
 */

module.exports = {
  // ➤ Use semicolons at the end of statements?
  // Satır sonlarında noktalı virgül kullansın mı?
  // true → `const x = 1;` (recommended / önerilir)
  // false → `const x = 1`
  semi: true,

  // ➤ Use single quotes instead of double quotes for strings?
  // String ifadelerinde tek tırnak mı çift tırnak mı kullanılsın?
  // true → 'hello' / false → "hello"
  singleQuote: true,

  // ➤ Add quotes to object properties?
  // Obje key'leri tırnakla mı yazılsın?
  // Options:
  // "as-needed" → only quote when required / sadece gerektiğinde tırnakla (default)
  // "consistent" → all or none / hepsi ya tırnaklı ya değil
  // "preserve" → leave as written / yazıldığı gibi bırak
  quoteProps: "as-needed",

  // ➤ Add a trailing comma after the last item in arrays, objects, etc.?
  // Obje, dizi ve fonksiyon argümanlarının sonunda ekstra virgül koysun mu?
  // "none" → never / hiçbir zaman koyma
  // "es5" → only where valid in ES5 / sadece objelerde ve dizilerde
  // "all" → everywhere possible / her yerde (en çok önerilen)
  trailingComma: "all",

  // ➤ Maximum line length before wrapping
  // Kod satırının maksimum uzunluğu kaç karakter olsun?
  // Long lines will wrap based on this limit / Bu sınırı aşan satırlar bölünür
  printWidth: 100,

  // ➤ Use tabs for indentation?
  // Girinti için tab karakteri mi kullanılsın?
  // false → use spaces / boşluk kullan
  // true → use tabs / tab kullan
  useTabs: false,

  // ➤ Number of spaces per indentation level
  // Her girinti seviyesi kaç boşlukla temsil edilsin?
  tabWidth: 2,

  // ➤ Add spaces between brackets in object literals?
  // Obje tanımlarında süslü parantezler arasında boşluk olsun mu?
  // true → { foo: bar } / false → {foo:bar}
  bracketSpacing: true,

  // ➤ Always include parentheses around arrow function arguments?
  // Arrow fonksiyonlarında her zaman parantez olsun mu?
  // "always" → (x) => x / "avoid" → x => x
  arrowParens: "always",

  // ➤ Line ending style
  // Satır sonu karakteri ne olsun?
  // "lf" → Line Feed (Linux, Unix)
  // "crlf" → Carriage Return + Line Feed (Windows)
  // "auto" → Use system default / sistem varsayılanı
  endOfLine: "lf",

  // ➤ Use single quotes in JSX?
  // JSX içinde tek tırnak kullanılsın mı?
  // true → <div className='test'> / false → <div className="test">
  jsxSingleQuote: true,

  // ➤ How sensitive is HTML whitespace formatting?
  // HTML/CSS boşluklarına duyarlılık düzeyi?
  // "css" → respect CSS display rules (default)
  // "strict" → treat all spaces as significant
  // "ignore" → completely ignore whitespace
  htmlWhitespaceSensitivity: "css",

  // ➤ Wrap markdown text automatically?
  // Markdown metinlerini otomatik satır sonuyla bölmeli mi?
  // "always" | "never" | "preserve" (default)
  proseWrap: "preserve",

  // ➤ Indent the content of <script> and <style> tags in Vue files?
  // Vue dosyalarındaki `<script>` ve `<style>` blokları girintilensin mi?
  vueIndentScriptAndStyle: true,

  // ➤ Insert a special comment at the top of formatted files?
  // Dosyanın başına Prettier işareti (pragma) eklensin mi?
  // Genellikle false bırakılır
  insertPragma: false,

  // ➤ Format embedded code within Markdown?
  // Markdown içindeki gömülü kod blokları da formatlansın mı?
  // Örn: ```js blokları
  embeddedLanguageFormatting: "auto"
};
