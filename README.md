# Wiśniewski HVAC - Strona internetowa

Profesjonalna strona internetowa dla firmy Wiśniewski specjalizującej się w czyszczeniu i dezynfekcji instalacji HVAC w skali przemysłowej.

## 🚀 Technologie

- **Next.js 14** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS**
- **Tabler Icons**
- Optymalizacja SEO i dostępności

## 🎨 Design

- Czysta, medyczna estetyka
- Kolory: akcent cyan (#0ea5e9) + zielony (#10b981)
- Responsywny design (mobile-first)
- Delikatne animacje hover
- Wysokie standardy dostępności

## 📝 Jak edytować treści

### 1. Dane kontaktowe

Zaktualizuj następujące pliki:

**`components/Header.tsx`** - numer telefonu w przycisku:
```typescript
href="tel:+48500000000" // TODO: Zmień na rzeczywisty numer
```

**`components/Contact.tsx`** - wszystkie dane kontaktowe:
```typescript
// Telefon
href="tel:+48500000000" // TODO
// E-mail  
href="mailto:kontakt@wisniewski-hvac.pl" // TODO
// Adres
ul. Przykładowa 1, 00-000 Miasto // TODO
```

**`app/layout.tsx`** - meta dane i structured data:
```typescript
telephone: '+48 500 000 000', // TODO
email: 'kontakt@wisniewski-hvac.pl', // TODO
streetAddress: 'ul. Przykładowa 1', // TODO
postalCode: '00-000', // TODO
addressLocality: 'Miasto', // TODO
```

### 2. Obrazy

Wymień placeholder obrazy na rzeczywiste:

- **Hero**: `https://placehold.co/800x600?text=Wi%C5%9Bniewski+HVAC+Cleaning`
- **Branże**: `https://placehold.co/1200x400?text=Bran%C5%BCe`  
- **Case studies**: `https://placehold.co/800x500?text=Case+Study`

Umieść obrazy w folderze `public/` i zaktualizuj ścieżki w komponentach.

### 3. Logo i favicon

- **Logo**: Zaktualizuj komponent tekstowy "W" w `components/Header.tsx` i `components/Footer.tsx`
- **Favicon**: Dodaj `favicon.ico` do folderu `public/`

### 4. Domena i SEO

**`next-sitemap.config.js`**:
```javascript
siteUrl: 'https://wisniewski-hvac.pl', // TODO: Zaktualizuj domenę
```

**`app/layout.tsx`** - canonical URL:
```typescript
url: 'https://wisniewski-hvac.pl', // TODO: Zaktualizuj domenę
```

### 5. Mapka Google

W `components/Contact.tsx` dodaj rzeczywistą mapę Google Maps zastępując placeholder.

### 6. TODO do doprecyzowania

- **ATP/sampling procedury** (`components/Services.tsx`)
- **Dokumenty prawne** - dodaj linki w stopce (`components/Footer.tsx`)

## 🔧 Rozwój lokalny

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera developerskiego  
npm run dev

# Build produkcyjny
npm run build
```

## 📦 Deploy

Projekt skonfigurowany dla statycznego eksportu (`output: 'export'` w `next.config.js`).

## 📋 Checklist przed publikacją

- [ ] Zaktualizować numer telefonu
- [ ] Zaktualizować adres e-mail  
- [ ] Zaktualizować adres fizyczny
- [ ] Dodać rzeczywiste obrazy
- [ ] Zaktualizować domenę w konfiguracji
- [ ] Dodać favicon
- [ ] Dodać mapę Google Maps
- [ ] Dodać dokumenty prawne (polityka prywatności, regulamin)
- [ ] Przetestować wszystkie linki
- [ ] Sprawdzić responsywność na urządzeniach mobilnych

## 🎯 Optymalizacje

- Semantic HTML dla lepszego SEO
- Lazy loading obrazów
- Structured data (JSON-LD)
- Open Graph i Twitter Cards  
- Sitemap i robots.txt
- Wysokie standardy dostępności (a11y)
- Core Web Vitals optimization

---

**Wiśniewski HVAC** - Czyszczenie i dezynfekcja instalacji HVAC w skali przemysłowej# wisniewski
