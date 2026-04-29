# Issue: Halaman Showcase Komponen UI (`/devpage/components`)

Project ini menggunakan **Nuxt 4** + runtime **Bun** + **shadcn-vue** (via `shadcn-nuxt`) yang sudah dikonfigurasi (lihat `nuxt.config.ts` dan `components.json`). Komponen UI shadcn akan ditempatkan otomatis di `app/components/ui/` (folder sudah ada tapi masih kosong).

Tujuan dokumen ini: menyiapkan **halaman developer showcase** di path `/devpage/components` yang menampilkan seluruh komponen UI yang dibangun dari shadcn-vue, lengkap dengan deskripsi rinci dan contoh penggunaan untuk setiap komponen.

> Catatan: dokumen ini ditulis agar dapat dieksekusi oleh **model AI yang lebih murah** (mis. Haiku). Karena itu setiap tahap ditulis eksplisit, deterministik, dan menyebutkan perintah CLI yang persis.

---

## 1. Gambaran Halaman

- **Path:** `/devpage/components`
- **File Nuxt:** `app/pages/devpage/components.vue` (file-based routing Nuxt akan otomatis memetakannya).
- **Layout:** Halaman dev internal — tidak perlu masuk ke navigasi publik.
- **Struktur halaman:**
  1. Header halaman: judul "UI Components Showcase" + deskripsi singkat.
  2. Sidebar / table of contents (anchor links) ke setiap kategori komponen.
  3. Daftar **section** per komponen, masing-masing terdiri dari:
     - Nama komponen (heading `h2`).
     - **Deskripsi rinci**: apa kegunaannya, kapan dipakai, props utama, dan catatan aksesibilitas.
     - **Live preview**: contoh nyata komponen berjalan di halaman.
     - **Code snippet**: kode `<template>` contoh tersebut, ditampilkan via komponen `CodeSnippet` (yang juga dibuat di issue ini, dengan fitur copy & raw).

### Pengelompokan Section (urutan tampil di halaman)

1. **Inputs & Actions** — Button, Button Group, Toggle Button, Slider Button, Number Input
2. **Forms** — Form Inputs (text, phone, email, textarea), Combo Box, Select
3. **Feedback** — Alert, Alert Radio, Progress, Spinner, Sonner (toast)
4. **Data Display** — Avatar, Card, Thumbnail, Thumbnail with Title & Description, List, Code Snippet, Typography
5. **Navigation** — Tabs, Stepper, Pagination, Carousel
6. **Overlays** — Drawer, Hover Card

---

## 2. Daftar Komponen UI yang Harus Tersedia

Komponen di bawah harus terpasang via **shadcn-vue CLI** kecuali yang ditandai *(custom)* — yang berarti dibangun di atas primitive shadcn/Reka UI.

| # | Komponen | Sumber | Catatan |
| - | -------- | ------ | ------- |
| 1 | `button` | shadcn-vue | — |
| 2 | Button Group | *(custom)* | Wrapper yang menggabungkan beberapa `Button` jadi satu group (border merge, rounded di ujung saja). |
| 3 | Form Input by type | shadcn-vue `input` + `textarea` + `label` + `form` | Variant: `text`, `phone` (input `type="tel"` + masking), `email`, `textarea`. |
| 4 | Toggle Button | shadcn-vue `toggle` | — |
| 5 | Slider Button | shadcn-vue `slider` | — |
| 6 | Thumbnail | *(custom)* | Aspect ratio video (16:9) + skeleton loading saat gambar belum termuat. Pakai shadcn `aspect-ratio` + `skeleton`. |
| 7 | Thumbnail with Title & Description | *(custom)* | Komposisi: `Thumbnail` + heading + paragraf. |
| 8 | List | *(custom)* | Daftar dengan variant: ordered, unordered, dengan ikon. Pakai `Typography`. |
| 9 | Code Snippet | *(custom)* | Block code dengan tombol **Copy** (copy ke clipboard) dan toggle **Raw** (menampilkan teks mentah tanpa highlight). Pakai shadcn `button` + `tooltip`. |
| 10 | Number Input | *(custom)* | Input numerik dengan tombol increment & decrement. Pakai shadcn `input` + dua `button` ikon. |
| 11 | `alert` | shadcn-vue | — |
| 12 | Alert Radio | *(custom)* | `Alert` yang berisi `radio-group` di dalamnya untuk konfirmasi pilihan. |
| 13 | Avatar with Skeleton | shadcn-vue `avatar` + `skeleton` | Tampilkan skeleton selama image loading. |
| 14 | Card with Skeleton | shadcn-vue `card` + `skeleton` | Variant card normal dan card loading state. |
| 15 | `carousel` | shadcn-vue | — |
| 16 | Combo Box | shadcn-vue (kombinasi `popover` + `command`) | Pola standar shadcn-vue combobox. |
| 17 | `drawer` | shadcn-vue (vaul-vue) | — |
| 18 | `hover-card` | shadcn-vue | — |
| 19 | `pagination` | shadcn-vue | — |
| 20 | `progress` | shadcn-vue | — |
| 21 | `select` | shadcn-vue | — |
| 22 | `stepper` | shadcn-vue | — |
| 23 | Spinner | *(custom)* | SVG/`Loader2` dari `lucide-vue-next` yang dianimasikan spin. Variant size: `sm`, `md`, `lg`. |
| 24 | `sonner` | shadcn-vue | Toast library. |
| 25 | `tabs` | shadcn-vue | — |
| 26 | Typography | *(custom)* | Komponen helper: `TypographyH1..H4`, `TypographyP`, `TypographyMuted`, `TypographyLead`, `TypographyInlineCode`, `TypographyBlockquote`. |

---

## 3. Tahapan Implementasi (Step-by-Step)

> Asumsi kerja: working directory `d:/project/nuxt-azhura`. Gunakan **bun** untuk semua perintah package manager. Jika ada prompt CLI shadcn-vue yang menanyakan overwrite, jawab **No** kecuali disebutkan sebaliknya.

### Tahap 0 — Persiapan

1. Pastikan dev server bisa jalan: `bun run dev`. Hentikan setelah memverifikasi tidak ada error.
2. Pastikan folder `app/components/ui/` sudah ada (cek di `nuxt.config.ts` field `shadcn.componentDir`). Sudah ada — kosongkan tidak perlu.
3. Buat folder kerja:
   - `app/pages/devpage/` (untuk halaman showcase).
   - `app/components/devpage/` (untuk komponen-komponen *custom* khusus showcase: `Thumbnail.vue`, `ThumbnailCard.vue`, `CodeSnippet.vue`, `NumberInput.vue`, `AlertRadio.vue`, `Spinner.vue`, `ButtonGroup.vue`, `Typography.vue` atau folder `Typography/`).

### Tahap 1 — Pasang Komponen shadcn-vue (CLI)

Jalankan satu per satu (tiap perintah independen, tidak boleh diparalelkan agar prompt CLI bisa direspons):

```bash
bunx shadcn-vue@latest add button
bunx shadcn-vue@latest add input
bunx shadcn-vue@latest add textarea
bunx shadcn-vue@latest add label
bunx shadcn-vue@latest add form
bunx shadcn-vue@latest add toggle
bunx shadcn-vue@latest add slider
bunx shadcn-vue@latest add aspect-ratio
bunx shadcn-vue@latest add skeleton
bunx shadcn-vue@latest add alert
bunx shadcn-vue@latest add radio-group
bunx shadcn-vue@latest add avatar
bunx shadcn-vue@latest add card
bunx shadcn-vue@latest add carousel
bunx shadcn-vue@latest add popover
bunx shadcn-vue@latest add command
bunx shadcn-vue@latest add drawer
bunx shadcn-vue@latest add hover-card
bunx shadcn-vue@latest add pagination
bunx shadcn-vue@latest add progress
bunx shadcn-vue@latest add select
bunx shadcn-vue@latest add stepper
bunx shadcn-vue@latest add sonner
bunx shadcn-vue@latest add tabs
bunx shadcn-vue@latest add tooltip
bunx shadcn-vue@latest add separator
```

**Verifikasi:** Setelah selesai, folder `app/components/ui/` berisi sub-folder per komponen (mis. `app/components/ui/button/`, `app/components/ui/input/`, dst). Tidak boleh ada error import setelah dijalankan `bun run dev`.

> Jika CLI menanyakan path/utils/css — terima default karena `components.json` sudah dikonfigurasi (alias `@/components`, `@/lib/utils`, css `app/assets/css/main.css`).

### Tahap 2 — Pasang Sonner Plugin

`Sonner` perlu komponen `<Toaster />` global. Pasang sekali di root layout.

1. Buka `app/app.vue`.
2. Tambahkan `<Toaster />` (import dari `@/components/ui/sonner`) tepat sebelum penutup root template, agar bisa dipanggil dari halaman manapun via `import { toast } from 'vue-sonner'`.

### Tahap 3 — Bangun Komponen Custom

Tempatkan semua komponen di **`app/components/devpage/`** kecuali ditentukan lain. Patuhi spec berikut secara harfiah:

#### 3.1 `ButtonGroup.vue`

- Props: `orientation: 'horizontal' | 'vertical'` (default `horizontal`).
- Slot default berisi beberapa `<Button>`.
- Styling: gunakan `flex` + `[&>button]:rounded-none` + `[&>button:first-child]:rounded-l-md` + `[&>button:last-child]:rounded-r-md` (untuk horizontal). Border antar button digabung.

#### 3.2 `Thumbnail.vue`

- Props: `src: string`, `alt: string`, `ratio?: number` (default `16/9`).
- State: `loaded = ref(false)`. Saat `loaded === false`, render `<Skeleton class="absolute inset-0" />`. Saat `loaded === true`, sembunyikan skeleton.
- Bungkus `<img>` di dalam `<AspectRatio :ratio="ratio">`.
- `<img @load="loaded = true" class="object-cover w-full h-full" />`.

#### 3.3 `ThumbnailCard.vue`

- Props: `src`, `alt`, `title: string`, `description: string`.
- Komposisi: `<Thumbnail>` di atas, `<TypographyH4>` di bawahnya, lalu `<TypographyMuted>` untuk description. Pakai `Card` shadcn sebagai container.

#### 3.4 `CodeSnippet.vue`

- Props: `code: string`, `language?: string` (default `"vue"`).
- State: `raw = ref(false)`.
- UI:
  - Header kecil dengan label bahasa, tombol **Toggle Raw** (`Eye` / `EyeOff` dari lucide), tombol **Copy** (`Copy` icon, ganti ke `Check` selama 2 detik setelah berhasil).
  - Body: `<pre><code>{{ code }}</code></pre>`. Saat `raw === true`, render `code` sebagai teks tanpa wrapping pre/code (mis. `<textarea readonly>`).
- Fungsi copy: `await navigator.clipboard.writeText(code)`.
- Tidak perlu syntax highlighter (hindari dependency baru). Cukup `font-mono` + warna background subtle.

#### 3.5 `NumberInput.vue`

- Props: `modelValue: number`, `min?: number`, `max?: number`, `step?: number` (default 1).
- Emit: `update:modelValue`.
- Layout: tombol `-` (kiri), `<Input type="number">` (tengah), tombol `+` (kanan). Tombol `disabled` saat melewati `min`/`max`.

#### 3.6 `AlertRadio.vue`

- Props: `title: string`, `description?: string`, `options: { value: string; label: string }[]`, `modelValue: string`.
- Bungkus `<Alert>` shadcn, di dalamnya `<RadioGroup>` dari shadcn.
- Emit `update:modelValue` saat pilihan berubah.

#### 3.7 `Spinner.vue`

- Props: `size: 'sm' | 'md' | 'lg'` (default `md`).
- Render `<Loader2 class="animate-spin" />` dari `lucide-vue-next`. Map size → `h-4 w-4`, `h-6 w-6`, `h-8 w-8`.

#### 3.8 `Typography/` (folder)

- File: `TypographyH1.vue`, `TypographyH2.vue`, `TypographyH3.vue`, `TypographyH4.vue`, `TypographyP.vue`, `TypographyLead.vue`, `TypographyMuted.vue`, `TypographyInlineCode.vue`, `TypographyBlockquote.vue`.
- Tiap file: render tag HTML semantik yang sesuai (`<h1>`, `<p>`, `<blockquote>`, dst) + class TailwindCSS sesuai konvensi shadcn-vue typography (lihat docs). Tidak ada props, hanya `<slot />`.

#### 3.9 `List.vue`

- Props: `variant: 'ordered' | 'unordered'` (default `unordered`), `items: string[]`.
- Render `<ol>` atau `<ul>` dengan styling TailwindCSS (mis. `list-disc pl-6`).

### Tahap 4 — Halaman Showcase

Buat file **`app/pages/devpage/components.vue`**.

Struktur file (urutan persis):

```vue
<script setup lang="ts">
useHead({ title: 'UI Components' })
// import semua komponen ui + custom yang dipakai
</script>

<template>
  <main class="container mx-auto py-10 space-y-16">
    <!-- Header -->
    <header>
      <TypographyH1>UI Components Showcase</TypographyH1>
      <TypographyLead>Halaman internal untuk mendemokan seluruh komponen UI project.</TypographyLead>
    </header>

    <!-- Table of contents -->
    <nav>...</nav>

    <!-- Section per kategori -->
    <section id="inputs-actions">
      <TypographyH2>Inputs & Actions</TypographyH2>

      <!-- Per komponen -->
      <article id="button" class="space-y-4">
        <TypographyH3>Button</TypographyH3>
        <TypographyP>Deskripsi rinci tentang Button: kegunaan, kapan dipakai, variant (default, secondary, destructive, outline, ghost, link), size (sm, default, lg, icon), props utama, dan catatan aksesibilitas (focus ring, aria-disabled).</TypographyP>
        <div class="rounded-lg border p-6 flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <CodeSnippet :code="`<Button>Default</Button>\n<Button variant=&quot;secondary&quot;>Secondary</Button>`" />
      </article>

      <!-- ... ulangi pola yang sama untuk tiap komponen lain -->
    </section>

    <!-- ulangi untuk section: forms, feedback, data-display, navigation, overlays -->
  </main>
</template>
```

**Wajib untuk SETIAP komponen di tabel Bagian 2:**

1. Heading `h3` dengan nama komponen.
2. Paragraf deskripsi rinci minimal 2–4 kalimat (kegunaan, kapan dipakai, props utama, catatan aksesibilitas/edge case).
3. Live preview di dalam container `rounded-lg border p-6`.
4. `CodeSnippet` berisi snippet template yang persis sama dengan yang dirender di preview.

### Tahap 5 — Auto-import Verification

Karena Nuxt 4 + `shadcn-nuxt` melakukan auto-import komponen di `app/components/` (termasuk `app/components/ui/` dan `app/components/devpage/`), **tidak perlu** import manual di template. Tetap import manual di `<script setup>` jika linter/TS minta.

Verifikasi:

- `bun run dev` lalu buka `http://localhost:3000/devpage/components`.
- Tidak ada error console.
- Tiap section terlihat, live preview interaktif (klik button, drag slider, buka drawer, dst).
- Tombol **Copy** di `CodeSnippet` benar-benar menyalin ke clipboard (test manual di browser).
- `Sonner` toast tampil saat dipicu.

### Tahap 6 — Polish

1. Tambahkan **anchor scroll** halus: `html { scroll-behavior: smooth }` di `app/assets/css/main.css` (jika belum ada).
2. Pastikan responsif: di mobile, sidebar TOC bisa hide / collapse, preview tetap terbaca.
3. Tambahkan note kecil di footer halaman: "Halaman ini hanya untuk development. Jangan link dari halaman publik."

---

## 4. Definition of Done

- [ ] Folder `app/pages/devpage/components.vue` ada dan halaman bisa diakses di `/devpage/components`.
- [ ] Semua 26 entri di tabel Bagian 2 tampil sebagai section terpisah, dengan deskripsi rinci + live preview + code snippet.
- [ ] Semua komponen shadcn-vue di Tahap 1 sudah terpasang di `app/components/ui/`.
- [ ] Semua komponen custom di Tahap 3 ada di `app/components/devpage/`.
- [ ] `CodeSnippet` punya tombol Copy (berfungsi) dan toggle Raw (berfungsi).
- [ ] `Thumbnail` menampilkan skeleton sebelum image load, dan rasio 16:9 terjaga.
- [ ] `Sonner` `<Toaster />` terpasang di `app/app.vue` dan toast bisa dipicu dari section Sonner.
- [ ] `bun run dev` jalan tanpa error & tanpa warning baru di console.
- [ ] Tidak ada perubahan pada area di luar scope (jangan ubah `ContactForm.vue`, schema DB, dll).

---

## 5. Catatan Penting untuk Implementer (AI)

- **Jangan** menambah dependency baru di luar yang dipasang via `shadcn-vue` CLI. Library yang sudah ada (`lucide-vue-next`, `reka-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`) sudah cukup.
- **Jangan** memodifikasi `nuxt.config.ts` kecuali untuk menambahkan plugin yang **wajib** (mis. jika `shadcn-vue` CLI sendiri yang menambahkan). Kalau ragu, jangan ubah.
- **Jangan** membuat dokumentasi tambahan (README, dsb) — cukup halaman showcase.
- Selalu pakai `bun` (bukan `npm`/`pnpm`/`yarn`).
- Jika sebuah komponen shadcn-vue CLI gagal install karena nama tidak dikenal, **stop** dan laporkan komponen mana yang gagal — jangan ganti dengan implementasi alternatif tanpa konfirmasi.
- Patuhi urutan tahapan: 0 → 1 → 2 → 3 → 4 → 5 → 6. Tahap 4 tidak boleh dimulai sebelum Tahap 1 & 3 selesai (karena halaman bergantung pada komponen).
