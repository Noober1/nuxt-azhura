<template>
  <main class="bg-background">
    <!-- Header -->
    <header class="border-b sticky top-0 bg-background/95 backdrop-blur z-40">
      <div class="container mx-auto py-6">
        <TypographyH1>UI Components Showcase</TypographyH1>
        <TypographyLead class="mt-2">Halaman internal untuk mendemokan seluruh komponen UI project. Komponen-komponen ini dibangun menggunakan shadcn-vue dan Vue 3.</TypographyLead>
      </div>
    </header>

    <div class="flex gap-8">
      <!-- Sidebar / Table of Contents -->
      <aside class="hidden lg:block w-64 border-r p-6 h-[calc(100vh-120px)] overflow-y-auto sticky top-20">
        <nav class="space-y-6">
          <div>
            <TypographyP class="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wide">Kategori Komponen</TypographyP>
            <div class="space-y-2">
              <button
                v-for="section in sections"
                :key="section.id"
                @click="scrollToSection(section.id)"
                class="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors flex items-center justify-between"
              >
                <span>{{ section.label }}</span>
                <ChevronRight class="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 py-8 px-4 lg:px-8 space-y-16 pb-20">
        <!-- ============================================
             SECTION 1: INPUTS & ACTIONS
             ============================================ -->
        <section id="inputs-actions" class="space-y-12">
          <div class="flex flex-col gap-1">
            <TypographyH2>Inputs & Actions</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk interaksi pengguna dan penerimaan input, termasuk button, toggle, slider, dan number input.</TypographyP>
          </div>

          <!-- Button -->
          <article class="space-y-4 flex flex-col">
            <div class="flex flex-col gap-1">
              <TypographyH3>Button</TypographyH3>
              <TypographyP>Elemen button dasar dengan berbagai variant (default, secondary, destructive, outline, ghost, link) dan size (sm, default, lg, icon). Button adalah komponen fundamental untuk trigger action dan form submission. Props utama: `variant`, `size`, `disabled`. Aksesibilitas: mendukung keyboard navigation dan focus state yang jelas.</TypographyP>
            </div>
            <div class="rounded-lg border p-6 flex flex-wrap gap-3 bg-muted/30">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">A</Button>
            </div>
            <CodeSnippet code="<Button>Default</Button>
<Button variant=&quot;secondary&quot;>Secondary</Button>
<Button variant=&quot;destructive&quot;>Destructive</Button>
<Button variant=&quot;outline&quot;>Outline</Button>
<Button variant=&quot;ghost&quot;>Ghost</Button>
<Button variant=&quot;link&quot;>Link</Button>" language="vue" />
          </article>

          <!-- Button Group -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Button Group</TypographyH3>
            <TypographyP>Wrapper komponen button yang menggabungkan beberapa button menjadi satu grup dengan styling terpadu. Berguna untuk membuat control set seperti toolbar atau filter buttons. Border dan rounded corner otomatis merge pada button adjacent. Props: `orientation` (horizontal/vertical).</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <div>
                <TypographyMuted class="mb-3">Horizontal - Default Size</TypographyMuted>
                <ButtonGroup orientation="horizontal">
                  <Button variant="outline">Left</Button>
                  <Button variant="outline">Center</Button>
                  <Button variant="outline">Right</Button>
                </ButtonGroup>
              </div>
              <div>
                <TypographyMuted class="mb-3">Horizontal - Small Size</TypographyMuted>
                <ButtonGroup orientation="horizontal">
                  <Button variant="outline" size="sm">Small Left</Button>
                  <Button variant="outline" size="sm">Small Center</Button>
                  <Button variant="outline" size="sm">Small Right</Button>
                </ButtonGroup>
              </div>
              <div>
                <TypographyMuted class="mb-3">Horizontal - Large Size</TypographyMuted>
                <ButtonGroup orientation="horizontal">
                  <Button variant="outline" size="lg">Large Left</Button>
                  <Button variant="outline" size="lg">Large Center</Button>
                  <Button variant="outline" size="lg">Large Right</Button>
                </ButtonGroup>
              </div>
              <div>
                <TypographyMuted class="mb-3">Vertical - Default Size</TypographyMuted>
                <ButtonGroup orientation="vertical">
                  <Button variant="outline">Top</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Bottom</Button>
                </ButtonGroup>
              </div>
              <div>
                <TypographyMuted class="mb-3">Vertical - Small Size</TypographyMuted>
                <ButtonGroup orientation="vertical">
                  <Button variant="outline" size="sm">Small Top</Button>
                  <Button variant="outline" size="sm">Small Middle</Button>
                  <Button variant="outline" size="sm">Small Bottom</Button>
                </ButtonGroup>
              </div>
              <div>
                <TypographyMuted class="mb-3">Vertical - Large Size</TypographyMuted>
                <ButtonGroup orientation="vertical">
                  <Button variant="outline" size="lg">Large Top</Button>
                  <Button variant="outline" size="lg">Large Middle</Button>
                  <Button variant="outline" size="lg">Large Bottom</Button>
                </ButtonGroup>
              </div>
            </div>
            <CodeSnippet code="<!-- Horizontal --&gt;
<ButtonGroup orientation=&quot;horizontal&quot;>
  <Button variant=&quot;outline&quot;>Left</Button>
  <Button variant=&quot;outline&quot;>Center</Button>
  <Button variant=&quot;outline&quot;>Right</Button>
</ButtonGroup>

<!-- Vertical --&gt;
<ButtonGroup orientation=&quot;vertical&quot;>
  <Button variant=&quot;outline&quot;>Top</Button>
  <Button variant=&quot;outline&quot;>Middle</Button>
  <Button variant=&quot;outline&quot;>Bottom</Button>
</ButtonGroup>

<!-- With Size --&gt;
<ButtonGroup orientation=&quot;horizontal&quot;>
  <Button variant=&quot;outline&quot; size=&quot;sm&quot;>Small</Button>
  <Button variant=&quot;outline&quot; size=&quot;lg&quot;>Large</Button>
</ButtonGroup>" language="vue" />
          </article>

          <!-- Icon Button -->
          <article class="space-y-4 flex flex-col">
            <div class="flex flex-col gap-1">
              <TypographyH3>Icon Button</TypographyH3>
              <TypographyP>Button yang hanya menampilkan icon tanpa label teks. Props: `variant` (default, secondary, destructive), `size` (xs, sm, md, lg). Dibangun di atas `Primitive` dari reka-ui sehingga mendukung prop `as` untuk render sebagai element lain. Cocok untuk toolbar action, icon-only CTA, atau floating action button.</TypographyP>
            </div>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <div>
                <TypographyMuted class="mb-3">Small (size="sm")</TypographyMuted>
                <div class="flex gap-4">
                  <IconButton variant="default" size="sm"><Star /></IconButton>
                  <IconButton variant="secondary" size="sm"><Heart /></IconButton>
                  <IconButton variant="destructive" size="sm"><Trash2 /></IconButton>
                </div>
              </div>
              <div>
                <TypographyMuted class="mb-3">Medium / Default</TypographyMuted>
                <div class="flex gap-4">
                  <IconButton variant="default"><Settings /></IconButton>
                  <IconButton variant="secondary"><Bell /></IconButton>
                  <IconButton variant="destructive"><AlertTriangle /></IconButton>
                </div>
              </div>
              <div>
                <TypographyMuted class="mb-3">Large (size="lg")</TypographyMuted>
                <div class="flex gap-4">
                  <IconButton variant="default" size="lg"><Download /></IconButton>
                  <IconButton variant="secondary" size="lg"><Share2 /></IconButton>
                  <IconButton variant="destructive" size="lg"><Flame /></IconButton>
                </div>
              </div>
            </div>
            <CodeSnippet code="&lt;!-- Small --&gt;
&lt;IconButton variant=&quot;default&quot; size=&quot;sm&quot;&gt;&lt;Star /&gt;&lt;/IconButton&gt;
&lt;IconButton variant=&quot;secondary&quot; size=&quot;sm&quot;&gt;&lt;Heart /&gt;&lt;/IconButton&gt;
&lt;IconButton variant=&quot;destructive&quot; size=&quot;sm&quot;&gt;&lt;Trash2 /&gt;&lt;/IconButton&gt;

&lt;!-- Medium (default) --&gt;
&lt;IconButton variant=&quot;default&quot;&gt;&lt;Settings /&gt;&lt;/IconButton&gt;
&lt;IconButton variant=&quot;secondary&quot;&gt;&lt;Bell /&gt;&lt;/IconButton&gt;
&lt;IconButton variant=&quot;destructive&quot;&gt;&lt;AlertTriangle /&gt;&lt;/IconButton&gt;

&lt;!-- Large --&gt;
&lt;IconButton variant=&quot;default&quot; size=&quot;lg&quot;&gt;&lt;Download /&gt;&lt;/IconButton&gt;
&lt;IconButton variant=&quot;secondary&quot; size=&quot;lg&quot;&gt;&lt;Share2 /&gt;&lt;/IconButton&gt;
&lt;IconButton variant=&quot;destructive&quot; size=&quot;lg&quot;&gt;&lt;Flame /&gt;&lt;/IconButton&gt;" language="vue" />
          </article>

          <!-- Switch -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Switch</TypographyH3>
            <TypographyP>Switch component untuk on/off state selection dengan visual toggle switch. Ideal untuk preference toggle, feature flag, dark mode switch, atau boolean settings. Props: `checked`, `defaultChecked`, `disabled`. Support v-model untuk two-way binding. Aksesibilitas: role="switch", aria-checked untuk screen reader.</TypographyP>
            <div class="rounded-lg border p-6 flex flex-col gap-4 bg-muted/30">
              <div class="flex items-center gap-3">
                <Switch />
                <span class="text-sm">Off</span>
              </div>
              <div class="flex items-center gap-3">
                <Switch :model-value="true" />
                <span class="text-sm">On</span>
              </div>
              <div class="flex items-center gap-3">
                <Switch disabled />
                <span class="text-sm text-muted-foreground">Disabled</span>
              </div>
            </div>
            <CodeSnippet code="<div class=&quot;flex items-center gap-3&quot;>
  <Switch :model-value=&quot;true&quot; />
  <span>On</span>
</div>
<div class=&quot;flex items-center gap-3&quot;>
  <Switch />
  <span>Off</span>
</div>
<div class=&quot;flex items-center gap-3&quot;>
  <Switch disabled />
  <span class=&quot;text-muted-foreground&quot;>Disabled</span>
</div>" language="vue" />
          </article>

          <!-- Slider Button -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Slider Button</TypographyH3>
            <TypographyP>Komponen slider untuk input nilai dengan range continuous. Support single slider dan range slider (dual thumbs). Props: `min`, `max`, `step`, `disabled`. Berguna untuk volume control, price range filter, atau brightness adjustment. Aksesibilitas: keyboard controls (arrow keys), aria-valuemin/max/now.</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <div>
                <TypographyMuted class="mb-3">Single Value Slider</TypographyMuted>
                <div class="flex gap-4 items-center">
                  <Slider v-model="sliderValue" :min="0" :max="100" class="flex-1" />
                  <TypographyP class="text-sm font-semibold">{{ sliderValue[0] }}%</TypographyP>
                </div>
              </div>
            </div>
            <CodeSnippet code="<script setup>
const sliderValue = ref([25])
</script>

<template>
  <div class=&quot;flex gap-4 items-center&quot;>
    <Slider v-model=&quot;sliderValue&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;flex-1&quot; />
    <span>{{ sliderValue[0] }}%</span>
  </div>
</template>" language="vue" />
          </article>

          <!-- Number Input -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Number Input</TypographyH3>
            <TypographyP>Input numerik dengan tombol increment/decrement di samping. Support min/max bounds, custom step, dan keyboard input. Props: `modelValue`, `min`, `max`, `step`. Emit: `update:modelValue`. Tombol otomatis disable saat mencapai batas min/max. Ideal untuk quantity selector, age input, atau settings.</TypographyP>
            <div class="rounded-lg border p-6 flex items-center gap-4 bg-muted/30">
              <NumberInput v-model="numberValue" :min="0" :max="10" :step="1" />
              <TypographyMuted>Current: {{ numberValue }}</TypographyMuted>
            </div>
            <CodeSnippet code="<script setup>
const numberValue = ref(5)
</script>

<template>
  <NumberInput v-model=&quot;numberValue&quot; :min=&quot;0&quot; :max=&quot;10&quot; :step=&quot;1&quot; />
</template>" language="vue" />
          </article>
        </section>

        <!-- ============================================
             SECTION 2: FORMS
             ============================================ -->
        <section id="forms" class="space-y-12">
          <div class="flex flex-col gap-1">
            <TypographyH2>Forms</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk form input dan data entry, termasuk text input, email, phone, textarea, select, dan combo box.</TypographyP>
          </div>

          <!-- Form Input -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Form Input by Type</TypographyH3>
            <TypographyP>Kelompok input form dengan berbagai tipe: text, email, phone, dan textarea. Setiap tipe memiliki placeholder informatif dan validation placeholder. Props: `type`, `placeholder`, `disabled`, `readonly`. Phone input support masking otomatis untuk format nomor. Textarea support resize, auto-height, dan character limit. Props textarea: `rows`, `maxlength`.</TypographyP>
            <div class="rounded-lg border p-6 space-y-4 bg-muted/30" suppress-hydration-warning>
              <div>
                <Label for="text-input">Text Input</Label>
                <Input id="text-input" type="text" placeholder="Enter your name..." class="mt-2" />
              </div>
              <div>
                <Label for="email-input">Email Input</Label>
                <Input id="email-input" type="email" placeholder="your@email.com" class="mt-2" />
              </div>
              <div>
                <Label for="phone-input">Phone Input</Label>
                <Input id="phone-input" type="tel" placeholder="+62 812-3456-7890" class="mt-2" />
              </div>
              <div>
                <Label for="textarea-input">Textarea</Label>
                <Textarea id="textarea-input" placeholder="Enter your message here..." rows="3" class="mt-2" />
              </div>
            </div>
            <CodeSnippet code="<Label for=&quot;email&quot;>Email</Label>
<Input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;your@email.com&quot; />

<Label for=&quot;msg&quot;>Message</Label>
<Textarea id=&quot;msg&quot; placeholder=&quot;Enter message...&quot; rows=&quot;3&quot; />" language="vue" />
          </article>

          <!-- Select -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Select</TypographyH3>
            <TypographyP>Dropdown select untuk memilih satu opsi dari list. Support grouping opsi, custom rendering, dan disabled state. Props: `value`, `disabled`, `placeholder`. Aksesibilitas: keyboard navigation (arrow keys, enter), aria-label. Ideal untuk country selection, category filter, atau status change.</TypographyP>
            <div class="rounded-lg border p-6 max-w-xs bg-muted/30">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                  <SelectItem value="option4" disabled>Option 4 (Disabled)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CodeSnippet code="<Select>
  <SelectTrigger>
    <SelectValue placeholder=&quot;Select...&quot; />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value=&quot;1&quot;>Option 1</SelectItem>
    <SelectItem value=&quot;2&quot;>Option 2</SelectItem>
  </SelectContent>
</Select>" language="vue" />
          </article>

          <!-- Combo Box -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Combo Box</TypographyH3>
            <TypographyP>Kombinasi input text dan dropdown yang memungkinkan pengguna mengetik atau memilih dari list. Support search/filter, custom rendering, dan multi-select. Props: `value`, `searchable`, `creatable`. Lebih fleksibel daripada Select biasa untuk dataset besar atau searchable list. Aksesibilitas: keyboard: type untuk search, arrow untuk navigate, enter untuk select.</TypographyP>
            <div class="rounded-lg border p-6 max-w-xs bg-muted/30">
              <Popover>
                <PopoverTrigger as-child>
                  <Button variant="outline" role="combobox" class="w-full justify-between">
                    Select framework...
                    <span class="ml-2">↓</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-xs p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup heading="Frameworks">
                        <CommandItem value="vue">
                          <span>Vue 3</span>
                        </CommandItem>
                        <CommandItem value="react">
                          <span>React</span>
                        </CommandItem>
                        <CommandItem value="angular">
                          <span>Angular</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <CodeSnippet code="<Popover>
  <PopoverTrigger as-child>
    <Button variant=&quot;outline&quot;>
      Select framework...
    </Button>
  </PopoverTrigger>
  <PopoverContent class=&quot;p-0&quot;>
    <Command>
      <CommandInput placeholder=&quot;Search...&quot; />
      <CommandList>
        <CommandItem value=&quot;vue&quot;>Vue 3</CommandItem>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>" language="vue" />
          </article>
        </section>

        <!-- ============================================
             SECTION 3: FEEDBACK
             ============================================ -->
        <section id="feedback" class="space-y-12">
          <div class="flex flex-col gap-1">
            <TypographyH2>Feedback</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk memberikan feedback kepada user, termasuk alert, progress, spinner, dan toast notification.</TypographyP>
          </div>

          <!-- Alert -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Alert</TypographyH3>
            <TypographyP>Dialog alert untuk menampilkan pesan penting, warning, atau error. Support berbagai type/variant (default, destructive, info). Props: `type`. Biasanya berisi title, description, dan optional action button. Aksesibilitas: role="alert", proper heading hierarchy.</TypographyP>
            <div class="rounded-lg border p-6 space-y-4 bg-muted/30">
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the code snippets provided.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again later.
                </AlertDescription>
              </Alert>
            </div>
            <CodeSnippet code="<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>

<Alert variant=&quot;destructive&quot;>
  <AlertTitle>Error!</AlertTitle>
  <AlertDescription>
    An error occurred.
  </AlertDescription>
</Alert>" language="vue" />
          </article>

          <!-- Alert Radio -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Alert Radio</TypographyH3>
            <TypographyP>Alert yang berisi radio group untuk user memilih satu opsi dari beberapa pilihan. Berguna untuk konfirmasi keputusan atau preference selection dalam konteks penting. Props: `title`, `description`, `options`, `modelValue`. Emit: `update:modelValue`. Kombinasi Alert + RadioGroup untuk emphasis dan clarity.</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <AlertRadio
                v-model="alertRadioValue"
                title="Choose your preference"
                description="This choice affects your app experience."
                :options="alertRadioOptions"
              />
              <TypographyMuted class="mt-4">Selected: {{ alertRadioValue }}</TypographyMuted>
            </div>
            <CodeSnippet code="<script setup>
const selected = ref(&quot;option1&quot;)
const options = [
  { value: &quot;option1&quot;, label: &quot;Option 1&quot; },
  { value: &quot;option2&quot;, label: &quot;Option 2&quot; }
]
</script>

<template>
  <AlertRadio
    v-model=&quot;selected&quot;
    title=&quot;Choose&quot;
    :options=&quot;options&quot;
  />
</template>" language="vue" />
          </article>

          <!-- Progress -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Progress</TypographyH3>
            <TypographyP>Visual progress indicator untuk menunjukkan completion status dari task atau file upload. Props: `value` (0-100), `variant`. Support determinate (progress bar bergerak sesuai nilai) dan indeterminate (animated loading). Aksesibilitas: aria-valuemin/max/now, aria-label untuk context.</TypographyP>
            <div class="rounded-lg border p-6 space-y-4 bg-muted/30">
              <div>
                <TypographyMuted class="mb-3">Progress: 45%</TypographyMuted>
                <Progress :model-value="45" />
              </div>
              <div>
                <TypographyMuted class="mb-3">Progress: 75%</TypographyMuted>
                <Progress :model-value="75" />
              </div>
              <div>
                <TypographyMuted class="mb-3">Progress: 100%</TypographyMuted>
                <Progress :model-value="100" />
              </div>
            </div>
            <CodeSnippet code="<Progress :model-value=&quot;45&quot; />
<Progress :model-value=&quot;75&quot; />
<Progress :model-value=&quot;100&quot; />" language="vue" />
          </article>

          <!-- Spinner -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Spinner</TypographyH3>
            <TypographyP>Loading indicator dengan animasi spin. Props: `size` (sm, md, lg). Render lucide-vue-next `Loader2` icon dengan CSS animation. Ideal untuk loading states, async operations, atau data fetching feedback. Tidak blocking — user masih bisa scroll atau view other content.</TypographyP>
            <div class="rounded-lg border p-6 flex gap-8 items-center bg-muted/30">
              <div class="text-center">
                <Spinner size="sm" />
                <TypographyMuted class="mt-2">Small</TypographyMuted>
              </div>
              <div class="text-center">
                <Spinner size="md" />
                <TypographyMuted class="mt-2">Medium</TypographyMuted>
              </div>
              <div class="text-center">
                <Spinner size="lg" />
                <TypographyMuted class="mt-2">Large</TypographyMuted>
              </div>
            </div>
            <CodeSnippet code="<Spinner size=&quot;sm&quot; />
<Spinner size=&quot;md&quot; />
<Spinner size=&quot;lg&quot; />" language="vue" />
          </article>

          <!-- Sonner Toast -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Sonner Toast</TypographyH3>
            <TypographyP>Toast notification library untuk menampilkan temporary message di corner layar. Support berbagai type: success, error, warning, info, promise. Props: `message`, `description`, `action`. Aksesibilitas: screen reader announce, auto dismiss setelah timeout. Toaster component di-setup di root app.vue untuk support dari halaman manapun.</TypographyP>
              <div class="rounded-lg border p-6 flex flex-wrap gap-3 bg-muted/30">
                <Button
                  @click="toast.success('Success', { description: 'Operation completed!' })"
                  class="bg-green-600 hover:bg-green-700 text-white"
                >
                  Success Toast
                </Button>
                <Button
                  @click="toast.error('Error', { description: 'Something went wrong!' })"
                  class="bg-red-600 hover:bg-red-700 text-white"
                >
                  Error Toast
                </Button>
                <Button
                  @click="toast.warning('Warning', { description: 'Be careful!' })"
                  class="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Warning Toast
                </Button>
                <Button
                  @click="toast('Info', { description: 'Here is some info.' })"
                  class="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Info Toast
                </Button>
              </div>
              <CodeSnippet code="<script setup>
import { toast } from &quot;vue-sonner&quot;
</script>

<template>
  <Button @click=&quot;toast.success(\&quot;Success!\&quot;)&quot;>
    Show Toast
  </Button>
</template>" language="vue" />
            </article>
        </section>

        <!-- ============================================
             SECTION 4: DATA DISPLAY
             ============================================ -->
        <section id="data-display" class="space-y-12">
          <div class="flex flex-col gap-1">
            <TypographyH2>Data Display</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk menampilkan data, termasuk avatar, card, thumbnail, list, dan typography utilities.</TypographyP>
          </div>

          <!-- Avatar -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Avatar with Skeleton</TypographyH3>
            <TypographyP>Avatar component untuk menampilkan user profile picture atau icon. Support image loading dengan skeleton fallback selama image load. Props: `src`, `alt`, `fallback` (initials saat image fail load). Support berbagai size (sm, md, lg). Aksesibilitas: img alt text untuk screen reader.</TypographyP>
            <div class="rounded-lg border p-6 flex gap-6 items-center bg-muted/30">
              <div class="text-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <TypographyMuted class="mt-2">With Image</TypographyMuted>
              </div>
              <div class="text-center">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <TypographyMuted class="mt-2">Fallback Only</TypographyMuted>
              </div>
            </div>
            <CodeSnippet code="<Avatar>
  <AvatarImage src=&quot;https://github.com/shadcn.png&quot; />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>" language="vue" />
          </article>

          <!-- Card -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Card with Skeleton</TypographyH3>
            <TypographyP>Card component sebagai container untuk grouped content. Support header, title, description, content, footer. Props: N/A (semantic structure via slots). Loading state: show Skeleton placeholders saat data fetching. Ideal untuk data display, dashboard widgets, atau content preview.</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <div>
                <TypographyMuted class="mb-3">Loaded State</TypographyMuted>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>This is a card description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here. You can put any content inside.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button class="ml-2">Save</Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <TypographyMuted class="mb-3">Loading State</TypographyMuted>
                <Card>
                  <CardHeader>
                    <Skeleton class="h-6 w-24 mb-2" />
                    <Skeleton class="h-4 w-32" />
                  </CardHeader>
                  <CardContent class="space-y-2">
                    <Skeleton class="h-4 w-full" />
                    <Skeleton class="h-4 w-5/6" />
                    <Skeleton class="h-4 w-4/5" />
                  </CardContent>
                  <CardFooter class="gap-2">
                    <Skeleton class="h-8 w-20" />
                    <Skeleton class="h-8 w-20" />
                  </CardFooter>
                </Card>
              </div>
            </div>
            <CodeSnippet code="<!-- Loaded --&gt;
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>

<!-- Loading State --&gt;
<Card v-if=&quot;isLoading&quot;>
  <CardHeader>
    <Skeleton class=&quot;h-6 w-24 mb-2&quot; />
    <Skeleton class=&quot;h-4 w-32&quot; />
  </CardHeader>
  <CardContent class=&quot;space-y-2&quot;>
    <Skeleton class=&quot;h-4 w-full&quot; />
    <Skeleton class=&quot;h-4 w-5/6&quot; />
  </CardContent>
</Card>" language="vue" />
          </article>

          <!-- Thumbnail -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Thumbnail</TypographyH3>
            <TypographyP>Image thumbnail dengan aspect ratio 16:9 dan skeleton loading placeholder. Props: `src`, `alt`, `ratio` (default 16/9). Skeleton muncul saat image belum loaded, hilang saat image finish loading. Berguna untuk preview gallery, video thumbnail, atau image post. Object-fit cover untuk consistent display.</TypographyP>
            <div class="rounded-lg border max-w-md bg-muted/30">
              <AspectRatio :ratio="16/9" class="relative overflow-hidden bg-muted">
                <img src="https://picsum.photos/800/800?random=1" alt="Design thumbnail" class="object-cover w-full h-full" />
              </AspectRatio>
            </div>
            <CodeSnippet code="<AspectRatio :ratio=&quot;16/9&quot;>
  <img
    src=&quot;/img/thumbnail_sample.avif&quot;
    alt=&quot;Sample thumbnail&quot;
    class=&quot;object-cover w-full h-full&quot;
  />
</AspectRatio>" language="vue" />
          </article>

          <!-- Thumbnail with Title & Description -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Thumbnail with Title & Description</TypographyH3>
            <TypographyP>Komposisi thumbnail + title + description dalam Card. Props: `src`, `alt`, `title`, `description`. Ideal untuk article preview, product card, atau content showcase. Layout: thumbnail di atas, title dan description di bawah dalam readable typography.</TypographyP>
            <div class="rounded-lg border p-6 max-w-md bg-muted/30">
              <Card>
                <AspectRatio :ratio="16/9" class="relative overflow-hidden bg-muted rounded-t-lg">
                  <img src="https://picsum.photos/800/450?random=2" alt="UI Components" class="object-cover w-full h-full" />
                </AspectRatio>
                <CardContent class="pt-4">
                  <TypographyH4>Building UI Component Library</TypographyH4>
                  <TypographyMuted class="mt-2">Learn how to create reusable and accessible UI components with Vue 3 and shadcn-vue.</TypographyMuted>
                </CardContent>
              </Card>
            </div>
            <CodeSnippet code="<Card>
  <AspectRatio :ratio=&quot;16/9&quot; class=&quot;rounded-t-lg&quot;>
    <img
      src=&quot;/img/image.jpg&quot;
      alt=&quot;Card image&quot;
      class=&quot;object-cover w-full h-full&quot;
    />
  </AspectRatio>
  <CardContent class=&quot;pt-4&quot;>
    <h4>Card Title</h4>
    <p>Card description</p>
  </CardContent>
</Card>" language="vue" />
          </article>

          <!-- List -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>List</TypographyH3>
            <TypographyP>Semantic list component dengan support ordered (ol) dan unordered (ul) variant. Props: `variant` ('ordered' | 'unordered'), `items` (array of strings). Support custom styling per item. Berguna untuk instruction steps, feature list, atau content outline. Aksesibilitas: semantic HTML (ol/ul/li).</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <List :items="listItems" variant="unordered" />
            </div>
            <CodeSnippet code="<script setup>
const items = [
  &quot;Build component showcase&quot;,
  &quot;Create documentation&quot;,
  &quot;Add examples&quot;
]
</script>

<template>
  <List :items=&quot;items&quot; variant=&quot;unordered&quot; />
</template>" language="vue" />
          </article>

          <!-- Code Snippet -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Code Snippet</TypographyH3>
            <TypographyP>Display kode source dengan syntax highlight, copy button, dan toggle raw view. Props: `code` (string), `language` (default 'vue'). Features: Copy ke clipboard (show checkmark 2 detik), toggle raw (textarea view tanpa pre/code tags). Tidak pakai external syntax highlighter — cukup font-mono dan background styling. Ideal untuk documentation, tutorial, atau code showcase.</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <CodeSnippet
                code='<template>
  <div>
    <Button @click="handleClick">
      Click me
    </Button>
  </div>
</template>'
                language="vue"
              />
            </div>
            <CodeSnippet code="<CodeSnippet
  code=&quot;<Button>Click</Button>&quot;
  language=&quot;vue&quot;
/>" language="vue" />
          </article>

          <!-- Typography -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Typography</TypographyH3>
            <TypographyP>Koleksi komponen typography helper untuk consistent text styling. Komponen: TypographyH1..H4, TypographyP, TypographyLead, TypographyMuted, TypographyInlineCode, TypographyBlockquote. Tiap komponen render semantic HTML (h1-h4, p, blockquote) + predefined Tailwind classes. Gunakan alih-alih inline style untuk consistency dan maintainability.</TypographyP>
            <div class="rounded-lg border p-6 space-y-4 bg-muted/30">
              <TypographyH4>Heading 4 Example</TypographyH4>
              <TypographyP>Regular paragraph text dengan leading yang proper untuk readability.</TypographyP>
              <TypographyLead>Lead text untuk intro paragraf, ukuran lebih besar dan warna muted.</TypographyLead>
              <TypographyMuted>Muted text untuk secondary information atau metadata.</TypographyMuted>
              <TypographyInlineCode>const value = 42</TypographyInlineCode>
              <TypographyBlockquote>This is a blockquote dengan styling khusus dan border left.</TypographyBlockquote>
            </div>
            <CodeSnippet code="<TypographyH1>Heading 1</TypographyH1>
<TypographyH2>Heading 2</TypographyH2>
<TypographyH3>Heading 3</TypographyH3>
<TypographyH4>Heading 4</TypographyH4>
<TypographyP>Paragraph text</TypographyP>
<TypographyLead>Lead text</TypographyLead>
<TypographyMuted>Muted text</TypographyMuted>" language="vue" />
          </article>
        </section>

        <!-- ============================================
             SECTION 5: NAVIGATION
             ============================================ -->
        <section id="navigation" class="space-y-12">
          <div class="flex flex-col gap-1">
            <TypographyH2>Navigation</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk navigation dan content organization, termasuk tabs, stepper, pagination, dan carousel.</TypographyP>
          </div>

          <!-- Tabs -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Tabs</TypographyH3>
            <TypographyP>Tab navigation untuk switch antar konten view. Props: `value`, `defaultValue`. Support trigger dan content slot. Aksesibilitas: keyboard navigation (arrow keys, home, end), aria-selected, role="tab". Ideal untuk modal content, multi-step form, atau feature comparison.</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <Tabs default-value="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" class="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tab 1 Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      This is the content for tab 1.
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" class="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tab 2 Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      This is the content for tab 2.
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" class="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tab 3 Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      This is the content for tab 3.
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <CodeSnippet code="<Tabs default-value=&quot;tab1&quot;>
  <TabsList>
    <TabsTrigger value=&quot;tab1&quot;>Tab 1</TabsTrigger>
    <TabsTrigger value=&quot;tab2&quot;>Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value=&quot;tab1&quot;>
    Content 1
  </TabsContent>
  <TabsContent value=&quot;tab2&quot;>
    Content 2
  </TabsContent>
</Tabs>" language="vue" />
          </article>

          <!-- Stepper -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Stepper</TypographyH3>
            <TypographyP>Multi-step form atau wizard indicator dengan langkah-langkah yang dapat diklik. Terdiri dari Stepper container dengan StepperItem untuk setiap langkah. Setiap step menampilkan icon, title, dan description. Support click-through navigation, menampilkan status (pending, active, completed) per langkah. Ideal untuk sign up flow, checkout process, atau onboarding wizard. Aksesibilitas: keyboard navigation, proper semantic structure.</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <Stepper class="flex w-10/12 items-start gap-2">
                <StepperItem
                  v-for="item in steps"
                  :key="item.step"
                  :step="item.step"
                  class="relative flex w-full flex-col items-center justify-center"
                >
                  <StepperTrigger>
                    <StepperIndicator v-slot="{ step }" class="bg-muted">
                      <template v-if="item.icon">
                        <component :is="item.icon" class="w-4 h-4" />
                      </template>
                      <span v-else>{{ step }}</span>
                    </StepperIndicator>
                  </StepperTrigger>
                  <StepperSeparator
                    v-if="item.step !== steps[steps.length - 1]?.step"
                    class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                  />
                  <div class="flex flex-col items-center">
                    <StepperTitle>
                      {{ item.title }}
                    </StepperTitle>
                    <StepperDescription>
                      {{ item.description }}
                    </StepperDescription>
                  </div>
                </StepperItem>
              </Stepper>
            </div>
            <CodeSnippet code="<script setup>
import { BookUser, Truck, CreditCard } from 'lucide-vue-next'

const currentStep = ref(1)
const steps = [
  { step: 1, title: 'Address', description: 'Add your address', icon: BookUser },
  { step: 2, title: 'Shipping', description: 'Set your preferred', icon: Truck },
  { step: 3, title: 'Payment', description: 'Add any payment', icon: CreditCard },
  { step: 4, title: 'Checkout', description: 'Confirm your order' }
]
</script>

<template>
  <Stepper v-model=&quot;currentStep&quot;>
    <StepperItem v-for=&quot;item in steps&quot; :key=&quot;item.step&quot; :step=&quot;item.step&quot;>
      <StepperTrigger>
        <StepperIndicator v-slot=&quot;{ step }&quot;>
          <component v-if=&quot;item.icon&quot; :is=&quot;item.icon&quot; class=&quot;w-4 h-4&quot; />
          <span v-else>{{ step }}</span>
        </StepperIndicator>
      </StepperTrigger>
      <div>
        <StepperTitle>{{ item.title }}</StepperTitle>
        <StepperDescription>{{ item.description }}</StepperDescription>
      </div>
      <StepperSeparator v-if=&quot;item.step !== steps[steps.length - 1]?.step&quot; />
    </StepperItem>
  </Stepper>
</template>" language="vue" />
          </article>

          <!-- Pagination -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Pagination</TypographyH3>
            <TypographyP>Navigation untuk data list besar dengan multiple page. Terdiri dari Pagination container dengan PaginationContent yang render items. Support PaginationPrevious, PaginationNext, dan PaginationEllipsis untuk navigasi. Props: `total`, `items-per-page`, `default-page`. Aksesibilitas: keyboard navigation, aria-label, aria-current="page". Ideal untuk table view, product list, atau search results.</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <Pagination v-slot="{ page }" :items-per-page="10" :total="30" :default-page="1">
                <PaginationContent v-slot="{ items }">
                  <PaginationPrevious />

                  <template v-for="(item, index) in items" :key="index">
                    <PaginationItem
                      v-if="item.type === 'page'"
                      :value="item.value"
                      :is-active="item.value === page"
                    >
                      {{ item.value }}
                    </PaginationItem>
                  </template>

                  <PaginationEllipsis :index="4" />

                  <PaginationNext />
                </PaginationContent>
              </Pagination>
            </div>
            <CodeSnippet code="<script setup>
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
</script>

<template>
  <Pagination v-slot=&quot;{ page }&quot; :items-per-page=&quot;10&quot; :total=&quot;30&quot; :default-page=&quot;1&quot;>
    <PaginationContent v-slot=&quot;{ items }&quot;>
      <PaginationPrevious />
      <template v-for=&quot;(item, index) in items&quot; :key=&quot;index&quot;>
        <PaginationItem
          v-if=&quot;item.type === 'page'&quot;
          :value=&quot;item.value&quot;
          :is-active=&quot;item.value === page&quot;
        >
          {{ item.value }}
        </PaginationItem>
      </template>
      <PaginationEllipsis :index=&quot;4&quot; />
      <PaginationNext />
    </PaginationContent>
  </Pagination>
</template>" language="vue" />
          </article>

          <!-- Carousel -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Carousel</TypographyH3>
            <TypographyP>Image/content slider dengan navigation buttons (prev/next). Support touch swipe di mobile, keyboard navigation, dan responsive sizing dengan Embla carousel library. Props: `orientation` (horizontal/vertical), `:opts` untuk Embla options (loop, align, etc), `:plugins` untuk tambahan fitur. Ideal untuk image gallery, feature showcase, atau testimonial slides. Accessibility: proper focus management dan keyboard controls.</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <Carousel class="w-full">
                <CarouselContent>
                  <CarouselItem v-for="i in 5" :key="i" class="basis-full">
                    <div class="flex aspect-video items-center justify-center bg-muted rounded-lg">
                      <span class="text-2xl font-semibold">Slide {{ i }}</span>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <CodeSnippet code="<script setup>
import { ref } from 'vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
</script>

<template>
  <Carousel class=&quot;w-full&quot;>
    <CarouselContent>
      <CarouselItem v-for=&quot;i in 5&quot; :key=&quot;i&quot; class=&quot;basis-full&quot;>
        <div class=&quot;flex aspect-video items-center justify-center bg-muted rounded-lg&quot;>
          <span class=&quot;text-2xl font-semibold&quot;>Slide {{ i }}</span>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>" language="vue" />
          </article>
        </section>

        <!-- ============================================
             SECTION 6: OVERLAYS
             ============================================ -->
        <section id="overlays" class="space-y-12">
          <div class="flex flex-col gap-1">
            <TypographyH2>Overlays</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen overlay untuk modal, sheet, dan popover interactions.</TypographyP>
          </div>

          <!-- Drawer -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Drawer</TypographyH3>
            <TypographyP>Side sheet yang slide dari edge (default: right). Props: `open`, `onOpenChange`. Support header, content, footer. Aksesibilitas: focus trap, escape key close, modal backdrop. Ideal untuk form input, settings panel, atau mobile navigation sidebar. Vaul-vue library untuk smooth animation dan gesture support.</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <Drawer>
                <DrawerTrigger as-child>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                    <DrawerDescription>This is a drawer description</DrawerDescription>
                  </DrawerHeader>
                  <div class="p-4">
                    <p>Drawer content goes here.</p>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose as-child>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <CodeSnippet code="<Drawer>
  <DrawerTrigger as-child>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
    </DrawerHeader>
    <div class=&quot;p-4&quot;>Content</div>
    <DrawerFooter>
      <DrawerClose as-child>
        <Button variant=&quot;outline&quot;>Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>" language="vue" />
          </article>

          <!-- Hover Card -->
          <article class="space-y-4 flex flex-col">
            <TypographyH3>Hover Card</TypographyH3>
            <TypographyP>Popover yang muncul saat hover trigger element. Props: `open`, `defaultOpen`. Support delay open, close delay. Aksesibilitas: keyboard accessible (focus trigger, escape close). Ideal untuk user preview (profile card), definition tooltip, atau detail preview. Non-blocking — user bisa dismiss dengan esc atau click elsewhere.</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <HoverCard>
                <HoverCardTrigger as-child>
                  <Button variant="link" class="text-lg">@shadcn</Button>
                </HoverCardTrigger>
                <HoverCardContent class="w-80">
                  <div class="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div class="space-y-1">
                      <h4 class="text-sm font-semibold">@shadcn</h4>
                      <p class="text-sm">The React component library for building web applications.</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <CodeSnippet code="<HoverCard>
  <HoverCardTrigger as-child>
    <Button variant=&quot;link&quot;>@shadcn</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div>Preview content here</div>
  </HoverCardContent>
</HoverCard>" language="vue" />
          </article>
        </section>

        <!-- Footer note -->
        <div class="border-t pt-8 mt-12">
          <TypographyMuted class="text-center">
            ℹ️ Halaman ini hanya untuk development. Jangan link dari halaman publik.
          </TypographyMuted>
        </div>
      </main>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight, BookUser, CreditCard, Truck, Star, Heart, Trash2, Settings, Bell, AlertTriangle, Download, Share2, Flame } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/button'
import { toast } from 'vue-sonner'

useHead({ title: 'UI Components' })

const numberValue = ref(5)
const sliderValue = ref([25])
const alertRadioValue = ref('option1')
const currentStep = ref(1)

const steps = [
  {
    step: 1,
    title: 'Address',
    description: 'Add your address',
    icon: BookUser,
  },
  {
    step: 2,
    title: 'Shipping',
    description: 'Set your preferred',
    icon: Truck,
  },
  {
    step: 3,
    title: 'Payment',
    description: 'Add any payment',
    icon: CreditCard,
  },
  {
    step: 4,
    title: 'Checkout',
    description: 'Confirm your order',
  },
]

const alertRadioOptions = [
  { value: 'option1', label: 'Option 1 - Default choice' },
  { value: 'option2', label: 'Option 2 - Alternative' },
  { value: 'option3', label: 'Option 3 - Another option' }
]

const listItems = [
  'Build component showcase for UI library',
  'Create detailed documentation',
  'Add interactive examples',
  'Ensure responsive design'
]

const sections = [
  { id: 'inputs-actions', label: 'Inputs & Actions' },
  { id: 'forms', label: 'Forms' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'data-display', label: 'Data Display' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'overlays', label: 'Overlays' }
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
