# Product

## Register

product

## Users

Two audiences consume Fuselage, and the system must serve both without forking its personality:

- **Rocket.Chat internal engineers** building product surfaces (the main app, admin, onboarding). They assemble UI from Fuselage primitives and expect correct defaults, stable APIs, and zero per-feature styling decisions.
- **External open-source developers** who install the public `@rocket.chat/*` packages from npm and rely on Storybook as the documentation surface. They need a discoverable, well-documented, semver-stable contract.

The job to be done is the same for both: ship coherent, accessible UI fast, without reinventing components or drifting from the system.

## Product Purpose

Fuselage is Rocket.Chat's React component library and design-system toolkit: design tokens, components, hooks, icons, layout primitives, and Storybook docs, published as independent packages from a monorepo.

It exists to make **consistency at scale** the path of least resistance. A change to a token or a component should propagate correctly to every consuming surface, so the entire Rocket.Chat ecosystem stays visually and behaviorally coherent as it grows. Success is measured by coherence across surfaces, not by any single screen looking impressive: when one primitive changes, everything downstream updates predictably and nothing drifts.

## Brand Personality

**Precise, neutral, trustworthy.**

Fuselage is infrastructure, not a statement. It should feel predictable, exact, and quietly dependable, in the discipline of MUI or Radix. The system gets out of the way so the consuming product carries the personality. Voice in docs and APIs is plain, technical, and unembellished: name things for what they are, document the contract, no marketing tone.

## Anti-references

- **Generic Bootstrap / AdminLTE.** Dated, undifferentiated admin-template look: heavy default cards, stock blues, no point of view. Fuselage must read as a considered system, not a template.
- **Inconsistent / ad hoc styling.** One-off component looks, drifting spacing scales, primitives that don't compose. This is precisely the failure mode a design system exists to eliminate; tolerating it anywhere undermines the system everywhere.

## Design Principles

1. **Consistency is the product.** The value is coherence across surfaces, not any one screen. Favor the choice that propagates correctly over the choice that looks best in isolation.
2. **Accessible by default, not by opt-in.** Correct ARIA, keyboard navigation, focus management, and contrast ship inside the component so consumers cannot get it wrong without trying.
3. **Get out of the way.** The system is neutral infrastructure. When in doubt, recede: let the consuming product own the personality and the data own the attention.
4. **Compose, don't special-case.** New needs are met by combining existing primitives, not by adding one-off variants. A component that doesn't compose is a future inconsistency.
5. **Stable contracts.** APIs and tokens are a public promise to internal and external consumers. Change them deliberately, version them honestly, document the contract.

## Accessibility & Inclusion

Target **WCAG 2.2 AA** as the shipped baseline for every component. This extends the 2.1 AA bar with target size (minimum), focus-not-obscured, and dragging-movement alternatives. Components must ship correct ARIA roles, full keyboard operability, visible and unobscured focus states, and AA contrast as defaults. `eslint-plugin-jsx-a11y` is already enforced in lint and is the floor, not the ceiling. Honor `prefers-reduced-motion` in any motion the system introduces.
