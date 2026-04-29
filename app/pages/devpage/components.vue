<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

useHead({ title: 'UI Components' })

const numberValue = ref(5)
const sliderValue = ref([25])
const toggleValue = ref(false)
const alertRadioValue = ref('option1')
const selectedTab = ref('button')
const currentStep = ref(1)
const currentPage = ref(1)

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
          <div>
            <TypographyH2>Inputs & Actions</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk interaksi pengguna dan penerimaan input, termasuk button, toggle, slider, dan number input.</TypographyP>
          </div>

          <!-- Button -->
          <article class="space-y-4">
            <TypographyH3>Button</TypographyH3>
            <TypographyP>Elemen button dasar dengan berbagai variant (default, secondary, destructive, outline, ghost, link) dan size (sm, default, lg, icon). Button adalah komponen fundamental untuk trigger action dan form submission. Props utama: `variant`, `size`, `disabled`. Aksesibilitas: mendukung keyboard navigation dan focus state yang jelas.</TypographyP>
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Button&gt;Default&lt;/Button&gt;
&lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
&lt;Button variant="destructive"&gt;Destructive&lt;/Button&gt;
&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;
&lt;Button variant="ghost"&gt;Ghost&lt;/Button&gt;
&lt;Button variant="link"&gt;Link&lt;/Button&gt;</code></pre>
            </div>
          </article>

          <!-- Button Group -->
          <article class="space-y-4">
            <TypographyH3>Button Group</TypographyH3>
            <TypographyP>Wrapper komponen button yang menggabungkan beberapa button menjadi satu grup dengan styling terpadu. Berguna untuk membuat control set seperti toolbar atau filter buttons. Border dan rounded corner otomatis merge pada button adjacent. Props: `orientation` (horizontal/vertical).</TypographyP>
            <div class="rounded-lg border p-6 flex flex-col gap-4 bg-muted/30">
              <div>
                <TypographyMuted class="mb-3">Horizontal</TypographyMuted>
                <ButtonGroup orientation="horizontal">
                  <Button variant="outline">Left</Button>
                  <Button variant="outline">Center</Button>
                  <Button variant="outline">Right</Button>
                </ButtonGroup>
              </div>
              <div>
                <TypographyMuted class="mb-3">Vertical</TypographyMuted>
                <ButtonGroup orientation="vertical">
                  <Button variant="outline">Top</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Bottom</Button>
                </ButtonGroup>
              </div>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;ButtonGroup orientation=&quot;horizontal&quot;&gt;
  &lt;Button variant=&quot;outline&quot;&gt;Left&lt;/Button&gt;
  &lt;Button variant=&quot;outline&quot;&gt;Center&lt;/Button&gt;
  &lt;Button variant=&quot;outline&quot;&gt;Right&lt;/Button&gt;
&lt;/ButtonGroup&gt;</code></pre>
            </div>
          </article>

          <!-- Toggle Button -->
          <article class="space-y-4">
            <TypographyH3>Toggle Button</TypographyH3>
            <TypographyP>Button dengan state on/off yang dapat diset melalui v-model. Ideal untuk feature toggle, dark mode switch, atau preference selection. Props: `defaultPressed`, `disabled`. Event: `update:pressed`. Aksesibilitas: role="button", aria-pressed untuk screen reader.</TypographyP>
            <div class="rounded-lg border p-6 flex gap-4 bg-muted/30">
              <Toggle default-pressed>
                <span>Pressed</span>
              </Toggle>
              <Toggle>
                <span>Not Pressed</span>
              </Toggle>
              <Toggle disabled>
                <span>Disabled</span>
              </Toggle>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Toggle default-pressed&gt;
  &lt;span&gt;Pressed&lt;/span&gt;
&lt;/Toggle&gt;
&lt;Toggle&gt;
  &lt;span&gt;Not Pressed&lt;/span&gt;
&lt;/Toggle&gt;</code></pre>
            </div>
          </article>

          <!-- Slider Button -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
const sliderValue = ref([25])
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;flex gap-4 items-center&quot;&gt;
    &lt;Slider v-model=&quot;sliderValue&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;flex-1&quot; /&gt;
    &lt;span&gt;{{ sliderValue[0] }}%&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>

          <!-- Number Input -->
          <article class="space-y-4">
            <TypographyH3>Number Input</TypographyH3>
            <TypographyP>Input numerik dengan tombol increment/decrement di samping. Support min/max bounds, custom step, dan keyboard input. Props: `modelValue`, `min`, `max`, `step`. Emit: `update:modelValue`. Tombol otomatis disable saat mencapai batas min/max. Ideal untuk quantity selector, age input, atau settings.</TypographyP>
            <div class="rounded-lg border p-6 flex items-center gap-4 bg-muted/30">
              <NumberInput v-model="numberValue" :min="0" :max="10" :step="1" />
              <TypographyMuted>Current: {{ numberValue }}</TypographyMuted>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
const numberValue = ref(5)
&lt;/script&gt;

&lt;template&gt;
  &lt;NumberInput v-model=&quot;numberValue&quot; :min=&quot;0&quot; :max=&quot;10&quot; :step=&quot;1&quot; /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>
        </section>

        <!-- ============================================
             SECTION 2: FORMS
             ============================================ -->
        <section id="forms" class="space-y-12">
          <div>
            <TypographyH2>Forms</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk form input dan data entry, termasuk text input, email, phone, textarea, select, dan combo box.</TypographyP>
          </div>

          <!-- Form Input -->
          <article class="space-y-4">
            <TypographyH3>Form Input by Type</TypographyH3>
            <TypographyP>Kelompok input form dengan berbagai tipe: text, email, phone, dan textarea. Setiap tipe memiliki placeholder informatif dan validation placeholder. Props: `type`, `placeholder`, `disabled`, `readonly`. Phone input support masking otomatis untuk format nomor. Textarea support resize, auto-height, dan character limit. Props textarea: `rows`, `maxlength`.</TypographyP>
            <div class="rounded-lg border p-6 space-y-4 bg-muted/30">
              <div>
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" type="text" placeholder="Enter your name..." class="mt-2" />
              </div>
              <div>
                <Label htmlFor="email-input">Email Input</Label>
                <Input id="email-input" type="email" placeholder="your@email.com" class="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone-input">Phone Input</Label>
                <Input id="phone-input" type="tel" placeholder="+62 812-3456-7890" class="mt-2" />
              </div>
              <div>
                <Label htmlFor="textarea-input">Textarea</Label>
                <Textarea id="textarea-input" placeholder="Enter your message here..." rows="3" class="mt-2" />
              </div>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Label htmlFor=&quot;email&quot;&gt;Email&lt;/Label&gt;
&lt;Input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;your@email.com&quot; /&gt;

&lt;Label htmlFor=&quot;msg&quot;&gt;Message&lt;/Label&gt;
&lt;Textarea id=&quot;msg&quot; placeholder=&quot;Enter message...&quot; rows=&quot;3&quot; /&gt;</code></pre>
            </div>
          </article>

          <!-- Select -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Select&gt;
  &lt;SelectTrigger&gt;
    &lt;SelectValue placeholder=&quot;Select...&quot; /&gt;
  &lt;/SelectTrigger&gt;
  &lt;SelectContent&gt;
    &lt;SelectItem value=&quot;1&quot;&gt;Option 1&lt;/SelectItem&gt;
    &lt;SelectItem value=&quot;2&quot;&gt;Option 2&lt;/SelectItem&gt;
  &lt;/SelectContent&gt;
&lt;/Select&gt;</code></pre>
            </div>
          </article>

          <!-- Combo Box -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Popover&gt;
  &lt;PopoverTrigger as-child&gt;
    &lt;Button variant=&quot;outline&quot;&gt;
      Select framework...
    &lt;/Button&gt;
  &lt;/PopoverTrigger&gt;
  &lt;PopoverContent class=&quot;p-0&quot;&gt;
    &lt;Command&gt;
      &lt;CommandInput placeholder=&quot;Search...&quot; /&gt;
      &lt;CommandList&gt;
        &lt;CommandItem value=&quot;vue&quot;&gt;Vue 3&lt;/CommandItem&gt;
      &lt;/CommandList&gt;
    &lt;/Command&gt;
  &lt;/PopoverContent&gt;
&lt;/Popover&gt;</code></pre>
            </div>
          </article>
        </section>

        <!-- ============================================
             SECTION 3: FEEDBACK
             ============================================ -->
        <section id="feedback" class="space-y-12">
          <div>
            <TypographyH2>Feedback</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk memberikan feedback kepada user, termasuk alert, progress, spinner, dan toast notification.</TypographyP>
          </div>

          <!-- Alert -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Alert&gt;
  &lt;AlertTitle&gt;Heads up!&lt;/AlertTitle&gt;
  &lt;AlertDescription&gt;
    This is an informational message.
  &lt;/AlertDescription&gt;
&lt;/Alert&gt;

&lt;Alert variant=&quot;destructive&quot;&gt;
  &lt;AlertTitle&gt;Error!&lt;/AlertTitle&gt;
  &lt;AlertDescription&gt;
    An error occurred.
  &lt;/AlertDescription&gt;
&lt;/Alert&gt;</code></pre>
            </div>
          </article>

          <!-- Alert Radio -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
const selected = ref(&quot;option1&quot;)
const options = [
  { value: &quot;option1&quot;, label: &quot;Option 1&quot; },
  { value: &quot;option2&quot;, label: &quot;Option 2&quot; }
]
&lt;/script&gt;

&lt;template&gt;
  &lt;AlertRadio
    v-model=&quot;selected&quot;
    title=&quot;Choose&quot;
    :options=&quot;options&quot;
  /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>

          <!-- Progress -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Progress :model-value=&quot;45&quot; /&gt;
&lt;Progress :model-value=&quot;75&quot; /&gt;
&lt;Progress :model-value=&quot;100&quot; /&gt;</code></pre>
            </div>
          </article>

          <!-- Spinner -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Spinner size=&quot;sm&quot; /&gt;
&lt;Spinner size=&quot;md&quot; /&gt;
&lt;Spinner size=&quot;lg&quot; /&gt;</code></pre>
            </div>
          </article>

          <!-- Sonner Toast -->
          <article class="space-y-4">
            <TypographyH3>Sonner Toast</TypographyH3>
            <TypographyP>Toast notification library untuk menampilkan temporary message di corner layar. Support berbagai type: success, error, warning, info, promise. Props: `message`, `description`, `action`. Aksesibilitas: screen reader announce, auto dismiss setelah timeout. Global `<Toaster />` component di root layout untuk support dari halaman manapun.</TypographyP>
            <div class="rounded-lg border p-6 flex flex-wrap gap-3 bg-muted/30">
              <Button
                @click="toast.success('Success', { description: 'Operation completed!' })"
                variant="outline"
              >
                Success Toast
              </Button>
              <Button
                @click="toast.error('Error', { description: 'Something went wrong!' })"
                variant="outline"
              >
                Error Toast
              </Button>
              <Button
                @click="toast.warning('Warning', { description: 'Be careful!' })"
                variant="outline"
              >
                Warning Toast
              </Button>
              <Button
                @click="toast('Info', { description: 'Here is some info.' })"
                variant="outline"
              >
                Info Toast
              </Button>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
import { toast } from &quot;vue-sonner&quot;
&lt;/script&gt;

&lt;template&gt;
  &lt;Button @click=&quot;toast.success(\&quot;Success!\&quot;)&quot;&gt;
    Show Toast
  &lt;/Button&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>
        </section>

        <!-- ============================================
             SECTION 4: DATA DISPLAY
             ============================================ -->
        <section id="data-display" class="space-y-12">
          <div>
            <TypographyH2>Data Display</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk menampilkan data, termasuk avatar, card, thumbnail, list, dan typography utilities.</TypographyP>
          </div>

          <!-- Avatar -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Avatar&gt;
  &lt;AvatarImage src=&quot;https://github.com/shadcn.png&quot; /&gt;
  &lt;AvatarFallback&gt;CN&lt;/AvatarFallback&gt;
&lt;/Avatar&gt;</code></pre>
            </div>
          </article>

          <!-- Card -->
          <article class="space-y-4">
            <TypographyH3>Card with Skeleton</TypographyH3>
            <TypographyP>Card component sebagai container untuk grouped content. Support header, title, description, content, footer. Props: N/A (semantic structure via slots). Loading state: show Skeleton placeholders saat data fetching. Ideal untuk data display, dashboard widgets, atau content preview.</TypographyP>
            <div class="rounded-lg border p-6 space-y-4 bg-muted/30">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Card&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Title&lt;/CardTitle&gt;
    &lt;CardDescription&gt;Description&lt;/CardDescription&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent&gt;
    Content here
  &lt;/CardContent&gt;
  &lt;CardFooter&gt;
    &lt;Button&gt;Action&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;</code></pre>
            </div>
          </article>

          <!-- Thumbnail -->
          <article class="space-y-4">
            <TypographyH3>Thumbnail</TypographyH3>
            <TypographyP>Image thumbnail dengan aspect ratio 16:9 dan skeleton loading placeholder. Props: `src`, `alt`, `ratio` (default 16/9). Skeleton muncul saat image belum loaded, hilang saat image finish loading. Berguna untuk preview gallery, video thumbnail, atau image post. Object-fit cover untuk consistent display.</TypographyP>
            <div class="rounded-lg border p-6 max-w-md bg-muted/30">
              <AspectRatio :ratio="16/9" class="relative overflow-hidden bg-muted">
                <img src="/img/thumbnail_sample.avif" alt="Sample thumbnail" class="object-cover w-full h-full" />
              </AspectRatio>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;AspectRatio :ratio=&quot;16/9&quot;&gt;
  &lt;img
    src=&quot;/img/thumbnail_sample.avif&quot;
    alt=&quot;Sample thumbnail&quot;
    class=&quot;object-cover w-full h-full&quot;
  /&gt;
&lt;/AspectRatio&gt;</code></pre>
            </div>
          </article>

          <!-- Thumbnail with Title & Description -->
          <article class="space-y-4">
            <TypographyH3>Thumbnail with Title & Description</TypographyH3>
            <TypographyP>Komposisi thumbnail + title + description dalam Card. Props: `src`, `alt`, `title`, `description`. Ideal untuk article preview, product card, atau content showcase. Layout: thumbnail di atas, title dan description di bawah dalam readable typography.</TypographyP>
            <div class="rounded-lg border p-6 max-w-md bg-muted/30">
              <Card>
                <AspectRatio :ratio="16/9" class="relative overflow-hidden bg-muted rounded-t-lg">
                  <img src="/img/thumbnail_sample2.jpg" alt="UI Components" class="object-cover w-full h-full" />
                </AspectRatio>
                <CardContent class="pt-4">
                  <TypographyH4>Building UI Component Library</TypographyH4>
                  <TypographyMuted class="mt-2">Learn how to create reusable and accessible UI components with Vue 3 and shadcn-vue.</TypographyMuted>
                </CardContent>
              </Card>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Card&gt;
  &lt;AspectRatio :ratio=&quot;16/9&quot; class=&quot;rounded-t-lg&quot;&gt;
    &lt;img
      src=&quot;/img/image.jpg&quot;
      alt=&quot;Card image&quot;
      class=&quot;object-cover w-full h-full&quot;
    /&gt;
  &lt;/AspectRatio&gt;
  &lt;CardContent class=&quot;pt-4&quot;&gt;
    &lt;h4&gt;Card Title&lt;/h4&gt;
    &lt;p&gt;Card description&lt;/p&gt;
  &lt;/CardContent&gt;
&lt;/Card&gt;</code></pre>
            </div>
          </article>

          <!-- List -->
          <article class="space-y-4">
            <TypographyH3>List</TypographyH3>
            <TypographyP>Semantic list component dengan support ordered (ol) dan unordered (ul) variant. Props: `variant` ('ordered' | 'unordered'), `items` (array of strings). Support custom styling per item. Berguna untuk instruction steps, feature list, atau content outline. Aksesibilitas: semantic HTML (ol/ul/li).</TypographyP>
            <div class="rounded-lg border p-6 bg-muted/30">
              <List :items="listItems" variant="unordered" />
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
const items = [
  &quot;Build component showcase&quot;,
  &quot;Create documentation&quot;,
  &quot;Add examples&quot;
]
&lt;/script&gt;

&lt;template&gt;
  &lt;List :items=&quot;items&quot; variant=&quot;unordered&quot; /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>

          <!-- Code Snippet -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;CodeSnippet
  code=&quot;&lt;Button&gt;Click&lt;/Button&gt;&quot;
  language=&quot;vue&quot;
/&gt;</code></pre>
            </div>
          </article>

          <!-- Typography -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;TypographyH1&gt;Heading 1&lt;/TypographyH1&gt;
&lt;TypographyH2&gt;Heading 2&lt;/TypographyH2&gt;
&lt;TypographyH3&gt;Heading 3&lt;/TypographyH3&gt;
&lt;TypographyH4&gt;Heading 4&lt;/TypographyH4&gt;
&lt;TypographyP&gt;Paragraph text&lt;/TypographyP&gt;
&lt;TypographyLead&gt;Lead text&lt;/TypographyLead&gt;
&lt;TypographyMuted&gt;Muted text&lt;/TypographyMuted&gt;</code></pre>
            </div>
          </article>
        </section>

        <!-- ============================================
             SECTION 5: NAVIGATION
             ============================================ -->
        <section id="navigation" class="space-y-12">
          <div>
            <TypographyH2>Navigation</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen untuk navigation dan content organization, termasuk tabs, stepper, pagination, dan carousel.</TypographyP>
          </div>

          <!-- Tabs -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Tabs default-value=&quot;tab1&quot;&gt;
  &lt;TabsList&gt;
    &lt;TabsTrigger value=&quot;tab1&quot;&gt;Tab 1&lt;/TabsTrigger&gt;
    &lt;TabsTrigger value=&quot;tab2&quot;&gt;Tab 2&lt;/TabsTrigger&gt;
  &lt;/TabsList&gt;
  &lt;TabsContent value=&quot;tab1&quot;&gt;
    Content 1
  &lt;/TabsContent&gt;
  &lt;TabsContent value=&quot;tab2&quot;&gt;
    Content 2
  &lt;/TabsContent&gt;
&lt;/Tabs&gt;</code></pre>
            </div>
          </article>

          <!-- Stepper -->
          <article class="space-y-4">
            <TypographyH3>Stepper</TypographyH3>
            <TypographyP>Multi-step form atau wizard indicator. Props: `steps` (array), `activeStep` (current step index). Support click-through navigation atau sequential. Render step number, label, dan status (pending, active, completed). Ideal untuk sign up flow, checkout process, atau onboarding wizard. Aksesibilitas: aria-current, proper semantic structure.</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <Stepper :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4']" :model-value="currentStep" @update:model-value="(v) => currentStep = v" />
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
const currentStep = ref(1)
&lt;/script&gt;

&lt;template&gt;
  &lt;Stepper
    :steps=&quot;[\&quot;Step 1\&quot;, \&quot;Step 2\&quot;, \&quot;Step 3\&quot;]&quot;
    :model-value=&quot;currentStep&quot;
    @update:model-value=&quot;(v) =&gt; currentStep = v&quot;
  /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>

          <!-- Pagination -->
          <article class="space-y-4">
            <TypographyH3>Pagination</TypographyH3>
            <TypographyP>Navigation untuk data list besar dengan multiple page. Props: `page`, `totalPages`, `maxVisible`. Support next, previous, dan direct page click. Aksesibilitas: keyboard navigation, aria-label, aria-current="page". Ideal untuk table view, product list, atau search results. Disable prev/next button saat di first/last page.</TypographyP>
            <div class="rounded-lg border p-6 space-y-6 bg-muted/30">
              <Pagination
                :page="currentPage"
                :total-items="50"
                :items-per-page="10"
                :max-visible-buttons="5"
              />
              <TypographyMuted>Current page: {{ currentPage }}</TypographyMuted>
            </div>
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;script setup&gt;
const currentPage = ref(1)
&lt;/script&gt;

&lt;template&gt;
  &lt;Pagination
    :page=&quot;currentPage&quot;
    :total-items=&quot;50&quot;
    :items-per-page=&quot;10&quot;
    :max-visible-buttons=&quot;5&quot;
  /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </article>

          <!-- Carousel -->
          <article class="space-y-4">
            <TypographyH3>Carousel</TypographyH3>
            <TypographyP>Image/content slider dengan auto-scroll dan manual navigation (prev/next). Support touch swipe di mobile, keyboard navigation (arrow), dan pagination dots. Props: `autoplay`, `delay`, `loop`. Ideal untuk image gallery, feature showcase, atau testimonial slides. Accessibility: proper focus management, skip links untuk nav buttons.</TypographyP>
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Carousel class=&quot;w-full&quot;&gt;
  &lt;CarouselContent&gt;
    &lt;CarouselItem v-for=&quot;i in 5&quot; :key=&quot;i&quot;&gt;
      &lt;div class=&quot;aspect-video flex items-center justify-center bg-muted&quot;&gt;
        Slide {{ i }}
      &lt;/div&gt;
    &lt;/CarouselItem&gt;
  &lt;/CarouselContent&gt;
  &lt;CarouselPrevious /&gt;
  &lt;CarouselNext /&gt;
&lt;/Carousel&gt;</code></pre>
            </div>
          </article>
        </section>

        <!-- ============================================
             SECTION 6: OVERLAYS
             ============================================ -->
        <section id="overlays" class="space-y-12">
          <div>
            <TypographyH2>Overlays</TypographyH2>
            <TypographyP class="mt-2">Komponen-komponen overlay untuk modal, sheet, dan popover interactions.</TypographyP>
          </div>

          <!-- Drawer -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;Drawer&gt;
  &lt;DrawerTrigger as-child&gt;
    &lt;Button&gt;Open Drawer&lt;/Button&gt;
  &lt;/DrawerTrigger&gt;
  &lt;DrawerContent&gt;
    &lt;DrawerHeader&gt;
      &lt;DrawerTitle&gt;Title&lt;/DrawerTitle&gt;
    &lt;/DrawerHeader&gt;
    &lt;div class=&quot;p-4&quot;&gt;Content&lt;/div&gt;
    &lt;DrawerFooter&gt;
      &lt;DrawerClose as-child&gt;
        &lt;Button variant=&quot;outline&quot;&gt;Close&lt;/Button&gt;
      &lt;/DrawerClose&gt;
    &lt;/DrawerFooter&gt;
  &lt;/DrawerContent&gt;
&lt;/Drawer&gt;</code></pre>
            </div>
          </article>

          <!-- Hover Card -->
          <article class="space-y-4">
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
            <div class="rounded-lg border bg-muted/50 overflow-hidden">
              <div class="px-4 py-2 border-b bg-muted/70 text-sm font-mono text-muted-foreground">vue</div>
              <pre class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background whitespace-pre-wrap"><code>&lt;HoverCard&gt;
  &lt;HoverCardTrigger as-child&gt;
    &lt;Button variant=&quot;link&quot;&gt;@shadcn&lt;/Button&gt;
  &lt;/HoverCardTrigger&gt;
  &lt;HoverCardContent&gt;
    &lt;div&gt;Preview content here&lt;/div&gt;
  &lt;/HoverCardContent&gt;
&lt;/HoverCard&gt;</code></pre>
            </div>
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

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
