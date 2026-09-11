<template>
  <div class="cvpage" :class="`is-${printTheme}`">
    <div class="shell cvpage__bar">
      <div>
        <p class="t-eyebrow">Curriculum vitae</p>
        <p class="cvpage__hint">Press <kbd>Cmd</kbd>+<kbd>P</kbd> and save as PDF — it's laid out for A4.</p>
      </div>

      <div class="cvpage__controls">
        <div class="themer" role="group" aria-label="PDF style">
          <button
            v-for="opt in themes"
            :key="opt.value"
            type="button"
            class="themer__opt"
            :class="{ 'is-on': printTheme === opt.value }"
            :aria-pressed="printTheme === opt.value"
            @click="printTheme = opt.value"
          >
            {{ opt.label }}
          </button>
        </div>
        <button class="btn btn--sm" type="button" @click="print">Download PDF</button>
      </div>
    </div>

    <article class="shell cv">
      <!-- ── Header ─────────────────────────────────────────── -->
      <header class="cv__head">
        <div>
          <h1 class="cv__name">{{ profile.name }}<span class="dot">.</span></h1>
          <p class="cv__role">{{ profile.role }}</p>
        </div>
        <ul class="cv__contact">
          <li><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li class="cv__phone"><a :href="`tel:${profile.phone.replace(/\s/g, '')}`">{{ profile.phone }}</a></li>
          <li><a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/sean-milburn-15625387</a></li>
          <li><a :href="profile.github" target="_blank" rel="noopener noreferrer">github.com/{{ profile.githubHandle }}</a></li>
          <li>{{ profile.location }}</li>
        </ul>
      </header>

      <!-- ── Profile ────────────────────────────────────────── -->
      <section class="cv__block">
        <h2 class="cv__h2">Profile</h2>
        <p class="cv__prose">
          Technology leader with fourteen years in product engineering, the last five
          running technology at &amp;Dine — a B2B catering platform — first as Head of
          Technology and now as CTO. I own architecture, delivery, security and
          compliance across a six-repository platform serving corporate customers,
          independent food makers and an operations team, and I still read every diff.
        </p>
        <p class="cv__prose">
          My background is deep frontend — React at Love Home Swap, Vue at scale
          across Just Eat and Menulog — and I first led a team at Mettrr, where I
          moved from senior developer to tech lead. That shapes how I lead now: close
          to the product, opinionated about the user's experience of a system, and
          unwilling to let architecture drift away from what customers actually feel.
          Most recently I have built an AI-assisted engineering practice where
          specification, review and governance are automated and version-controlled,
          and the platform's own rules are enforced on every change.
        </p>
      </section>

      <!-- ── Selected achievements ──────────────────────────── -->
      <section class="cv__block">
        <h2 class="cv__h2">Selected achievements</h2>
        <ul class="cv__bullets">
          <li v-for="a in achievements" :key="a">{{ a }}</li>
        </ul>
      </section>

      <!-- ── Core skills ────────────────────────────────────── -->
      <section class="cv__block">
        <h2 class="cv__h2">Core skills</h2>
        <dl class="cv__skills">
          <div v-for="group in capabilities" :key="group.group" class="cv__skill">
            <dt>{{ group.group }}</dt>
            <dd>{{ group.items.join(" · ") }}</dd>
          </div>
        </dl>
      </section>

      <!-- ── Experience ─────────────────────────────────────── -->
      <section class="cv__block">
        <h2 class="cv__h2">Experience</h2>
        <div v-for="role in cvRoles" :key="role.company" class="cv__job">
          <div class="cv__job-head">
            <h3>{{ role.company }}</h3>
            <span class="cv__period">{{ role.period }}</span>
          </div>
          <p class="cv__jobtitle">{{ role.title }}</p>
          <p class="cv__prose cv__prose--tight">{{ role.summary }}</p>
          <ul v-if="role.points" class="cv__bullets">
            <li v-for="point in role.points" :key="point">{{ point }}</li>
          </ul>
        </div>

        <p class="cv__earlier">
          <strong>Earlier:</strong> {{ earlierCareer }}
        </p>
      </section>

      <!-- ── Freelance ──────────────────────────────────────── -->
      <section class="cv__block cv__block--keep">
        <h2 class="cv__h2">Selected freelance &amp; consultancy</h2>
        <ul class="cv__bullets">
          <li v-for="f in freelance" :key="f.name">
            <strong>{{ f.name }}</strong> — {{ f.copy }}
          </li>
        </ul>
      </section>

      <!-- ── Education + interests ──────────────────────────── -->
      <div class="cv__foot">
        <section class="cv__block">
          <h2 class="cv__h2">Education</h2>
          <dl class="cv__skills">
            <div v-for="e in education" :key="e.qualification" class="cv__skill">
              <dt>{{ e.qualification }}</dt>
              <dd>{{ e.place }}</dd>
            </div>
          </dl>
        </section>

        <section class="cv__block">
          <h2 class="cv__h2">Interests</h2>
          <p class="cv__prose cv__prose--tight">
            Camping and travelling with my young family. Sauna, cold water and the
            wellbeing habits that keep the rest of it sustainable. Still building side
            projects for the pleasure of it.
          </p>
        </section>
      </div>

      <p class="cv__refs">References available on request.</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { profile, capabilities, cvRoles, earlierCareer, freelance, education } from "~/data/content"

useSeoMeta({
  title: "CV — Sean Milburn, CTO & Engineering Leader",
  description:
    "Curriculum vitae for Sean Milburn — CTO at &Dine, fourteen years in product engineering across payments, multi-tenant platforms and AI-assisted delivery."
})

const achievements = [
  "Took &Dine from a single product to a six-repository platform — an Express and TypeScript API on MySQL with 48 controllers, 65 models and 55 services, plus four production frontends sharing one OpenAPI 3.1 contract and one auth model.",
  "Designed the payments architecture end to end: Stripe refund-then-repay on order edits, refunds executed after the database transaction commits, account billing, employee top-up ledgers and premium group ordering — with payment state owned by the backend ledger and never derived client-side.",
  "Built an AI-assisted engineering practice — seven specialised, version-controlled agents, specification-first delivery, three independent review passes per pull request, and a learning loop that has captured 688 decisions back into the codebase's own guardrails — then wrote the AI governance and EU AI Act deployer documentation that clears enterprise vendor assessments.",
  "At Just Eat, built shared Vue components used platform-wide and delivered the Menulog theme for Australia and New Zealand in parallel on the same codebase, switchable by a single config value."
]

/* Dark matches the site and is what most people will want on screen and in a
   shared PDF. Light is the safe one for anybody who actually puts it on paper,
   or whose browser has "Background graphics" switched off. */
type PrintTheme = "dark" | "light"

const themes: { value: PrintTheme; label: string }[] = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Print-friendly" }
]

// `?theme=light` makes the choice linkable — handy for sending a recruiter the
// ink-friendly version without them having to find the toggle.
const route = useRoute()
const printTheme = ref<PrintTheme>(route.query.theme === "light" ? "light" : "dark")

// The page background has to come from the root element: only the root's
// background propagates to the print canvas and covers the @page margins.
useHead({
  htmlAttrs: { class: computed(() => `cv-print-${printTheme.value}`) }
})

const print = () => window.print()
</script>

<style scoped lang="scss">
.cvpage {
  padding-bottom: 4rem;

  &__bar {
    max-width: 52rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding-top: 2.5rem;
    padding-bottom: 2rem;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  &__hint {
    margin-top: 0.5rem;
    font-size: 0.88rem;
    color: var(--text-muted);

    kbd {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      padding: 0.1rem 0.35rem;
      border: 1px solid var(--line-strong);
      border-radius: 0.25rem;
      background: var(--ink-raised);
    }
  }
}

.themer {
  display: inline-flex;
  padding: 0.2rem;
  border: 1px solid var(--line);
  border-radius: 100px;
  background: var(--ink-raised);

  &__opt {
    padding: 0.4rem 0.85rem;
    border: 0;
    border-radius: 100px;
    background: none;
    color: var(--text-muted);
    font-size: 0.82rem;
    cursor: pointer;
    transition: background 0.2s var(--ease), color 0.2s var(--ease);

    &:hover { color: var(--text); }

    &.is-on {
      background: var(--lime-dim);
      color: var(--lime);
    }
  }
}

.cv {
  max-width: 52rem;

  &__head {
    display: grid;
    gap: 1.5rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--lime);

    @include md { grid-template-columns: 1fr auto; align-items: end; }
  }

  &__name {
    font-size: clamp(2.2rem, 6vw, 3.2rem);
    letter-spacing: -0.035em;
  }

  &__role {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--lime);
    margin-top: 0.5rem;
  }

  &__contact {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.28rem;
    font-size: 0.88rem;
    color: var(--text-muted);

    @include md { text-align: right; }

    a { text-decoration: none; &:hover { color: var(--lime); } }
  }

  &__block { margin-top: 2.75rem; }

  &__h2 {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--lime);
    padding-bottom: 0.65rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--line);
  }

  &__prose {
    color: var(--text-muted);
    max-width: 46rem;
    text-wrap: pretty;

    & + & { margin-top: 1rem; }
    &--tight { font-size: 0.95rem; }
  }

  &__bullets {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.65rem;

    li {
      position: relative;
      padding-left: 1.35rem;
      color: var(--text-muted);
      font-size: 0.95rem;
      text-wrap: pretty;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.62rem;
        width: 0.55rem;
        height: 1px;
        background: var(--lime);
      }
    }

    strong { color: var(--text); font-weight: 500; }
  }

  &__skills { display: grid; gap: 0.85rem; }

  &__skill {
    display: grid;
    gap: 0.15rem;

    @include md { grid-template-columns: 11rem 1fr; gap: 1.25rem; }

    dt { font-weight: 500; font-size: 0.93rem; }
    dd { margin: 0; color: var(--text-muted); font-size: 0.92rem; text-wrap: pretty; }
  }

  &__job + &__job { margin-top: 2rem; }

  &__job-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    h3 {
      font-family: var(--font-display);
      font-size: 1.3rem;
      letter-spacing: -0.025em;
    }
  }

  &__period {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--lime);
    white-space: nowrap;
  }

  &__jobtitle {
    font-weight: 500;
    font-size: 0.95rem;
    margin: 0.2rem 0 0.6rem;
  }

  &__foot {
    display: grid;
    gap: 0;

    @include md { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; }
  }

  &__earlier {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--line);
    color: var(--text-muted);
    font-size: 0.9rem;
    text-wrap: pretty;

    strong { color: var(--text); font-weight: 500; }
  }

  &__refs {
    margin-top: 3rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--line);
    font-family: var(--font-mono);
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    color: var(--text-faint);
  }
}

/* ══ Print ═════════════════════════════════════════════════

   Two things matter here and neither is obvious:

   1. The printed page is ~180mm wide, which is under the 48rem `md`
      breakpoint — so every `@include md` rule is OFF in print. Any
      two-column layout has to be restated inside this block.

   2. `break-inside: avoid` belongs on small units (a job, a bullet),
      never on a whole section. On a section it cannot fit, so the
      renderer pushes the entire block to a fresh page and leaves the
      previous one half empty.

   Geometry is shared; only colour is themed. `.is-dark` matches the
   site, `.is-light` is the ink-friendly fallback.
   ═══════════════════════════════════════════════════════════ */
@media print {
  .cvpage__bar { display: none; }
  .cvpage { padding: 0; }

  /* The number is fine on the site; the exported PDF travels further. */
  .cv__phone { display: none; }

  /* ── Geometry, theme-independent ─────────────────────────── */
  .cv {
    max-width: none;
    padding: 14mm 15mm;
    font-size: 9.5pt;
    line-height: 1.42;

    &__head {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: end;
      gap: 1.5rem;
      padding-bottom: 10pt;
    }

    &__name { font-size: 22pt; }
    &__role { font-size: 7.5pt; margin-top: 3pt; }
    &__contact { text-align: right; gap: 1pt; font-size: 8pt; }

    /* padding, not margin: a margin is dropped when the block starts a new
       page, so continuation pages would begin flush against the paper edge. */
    &__block { margin-top: 0; padding-top: 14pt; }
    &__block--keep { break-inside: avoid; }

    &__h2 {
      font-size: 7.5pt;
      padding-bottom: 3pt;
      margin-bottom: 7pt;
      break-after: avoid;
    }

    &__prose {
      max-width: none;
      font-size: 9.5pt;
      & + & { margin-top: 6pt; }
    }

    &__bullets {
      gap: 4pt;
      li { font-size: 9.5pt; break-inside: avoid; }
    }

    &__skills { gap: 5pt; }

    &__skill {
      display: grid;
      grid-template-columns: 9rem 1fr;
      gap: 1rem;
      break-inside: avoid;

      dt { font-size: 9.5pt; }
      dd { font-size: 9pt; }
    }

    &__job {
      break-inside: avoid;
      & + & { margin-top: 11pt; }
    }

    &__job-head h3 { font-size: 12pt; }
    &__period { font-size: 8pt; }
    &__jobtitle { font-size: 9.5pt; margin: 1pt 0 4pt; }

    &__foot {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
      break-inside: avoid;
    }

    &__earlier {
      margin-top: 9pt;
      padding-top: 6pt;
      font-size: 9pt;
      break-inside: avoid;
    }

    /* A single trailing line must not orphan onto a page of its own. */
    &__refs {
      margin-top: 8pt;
      padding-top: 5pt;
      font-size: 7.5pt;
      break-before: avoid;
    }

    a { color: inherit; text-decoration: none; }
  }

  /* ── Light — ink-friendly, survives "background graphics" off ── */
  .is-light .cv {
    color: #16161a;

    &__head { border-bottom: 1.5pt solid #7aa832; }
    &__name { color: #0b0b0d; }
    &__role, &__h2, &__period { color: #5f8c1f; }
    &__contact { color: #4a4a50; }
    &__h2 { border-bottom: 0.5pt solid #d6d6d2; }
    &__prose, &__bullets li, &__skill dd { color: #3c3c42; }
    &__bullets li::before { background: #7aa832; }
    &__jobtitle, &__skill dt, &__bullets strong, &__job-head h3 { color: #0b0b0d; }
    &__earlier { color: #3c3c42; border-top: 0.5pt solid #d6d6d2; strong { color: #0b0b0d; } }
    &__refs { color: #77777c; border-top: 0.5pt solid #d6d6d2; }

    .dot { color: #7aa832; }
  }

  /* ── Dark — matches the site. Requires the browser's
        "Background graphics" option, or the page prints white. ── */
  .is-dark .cv {
    color: var(--text);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    &__head { border-bottom: 1.5pt solid var(--lime); }
    &__name { color: var(--text); }
    &__role, &__h2, &__period { color: var(--lime); }
    &__contact { color: var(--text-muted); }
    &__h2 { border-bottom: 0.5pt solid var(--line-strong); }
    &__prose, &__bullets li, &__skill dd { color: var(--text-muted); }
    &__bullets li::before { background: var(--lime); }
    &__jobtitle, &__skill dt, &__bullets strong, &__job-head h3 { color: var(--text); }
    &__earlier { color: var(--text-muted); border-top: 0.5pt solid var(--line); strong { color: var(--text); } }
    &__refs { color: var(--text-faint); border-top: 0.5pt solid var(--line); }

    .dot { color: var(--lime); }
  }
}

/* Zero page margins so a dark backdrop can reach the paper edge; the inset is
   carried by the content instead. Page breaks land between blocks, which keep
   their own top margin, so continuation pages still start with breathing room. */
@page { size: A4; margin: 0; }
</style>
