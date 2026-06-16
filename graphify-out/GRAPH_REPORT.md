# Graph Report - .  (2026-06-15)

## Corpus Check
- 0 files · ~147,040 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 237 nodes · 357 edges · 22 communities (16 shown, 6 thin omitted)
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 75 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Build, CI & Commit Hygiene|Build, CI & Commit Hygiene]]
- [[_COMMUNITY_Site Components & Content (files)|Site Components & Content (files)]]
- [[_COMMUNITY_Component Architecture & UX Patterns|Component Architecture & UX Patterns]]
- [[_COMMUNITY_Package Scripts & Quality Gate|Package Scripts & Quality Gate]]
- [[_COMMUNITY_Stone Coatings & Countertop Gallery|Stone Coatings & Countertop Gallery]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_TypeScript App Config|TypeScript App Config]]
- [[_COMMUNITY_TypeScript Node Config|TypeScript Node Config]]
- [[_COMMUNITY_Test Wiring & Shared Data|Test Wiring & Shared Data]]
- [[_COMMUNITY_Brand Identity & Logo|Brand Identity & Logo]]
- [[_COMMUNITY_Bathtub & Sink Reglazing|Bathtub & Sink Reglazing]]
- [[_COMMUNITY_App Test Cases|App Test Cases]]
- [[_COMMUNITY_Claude Hooks Config|Claude Hooks Config]]
- [[_COMMUNITY_TS Project References (docs)|TS Project References (docs)]]
- [[_COMMUNITY_TS Solution Config|TS Solution Config]]
- [[_COMMUNITY_Finishes & Gallery Data|Finishes & Gallery Data]]
- [[_COMMUNITY_React Compiler (disabled)|React Compiler (disabled)]]
- [[_COMMUNITY_Nav Links Data|Nav Links Data]]
- [[_COMMUNITY_Stats Data|Stats Data]]

## God Nodes (most connected - your core abstractions)
1. `App` - 19 edges
2. `compilerOptions` - 17 edges
3. `compilerOptions` - 16 edges
4. `Icon()` - 11 edges
5. `Services()` - 11 edges
6. `Contact()` - 10 edges
7. `Nav()` - 9 edges
8. `WhyUs()` - 9 edges
9. `scripts` - 8 edges
10. `Hero()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `block-no-verify Hook` --rationale_for--> `pre-commit Framework`  [EXTRACTED]
  .claude/hooks/block-no-verify.sh → CLAUDE.md
- `block-no-verify Hook` --conceptually_related_to--> `Commitlint Config`  [INFERRED]
  .claude/hooks/block-no-verify.sh → commitlint.config.js
- `frontend-react-template` --references--> `Vite + React 19 + TypeScript Stack`  [INFERRED]
  README.md → CLAUDE.md
- `src/main.tsx Module Entry` --implements--> `Vite + React 19 + TypeScript Stack`  [INFERRED]
  index.html → CLAUDE.md
- `Type-aware ESLint Rules` --rationale_for--> `ESLint Flat Config`  [INFERRED]
  README.md → CLAUDE.md

## Hyperedges (group relationships)
- **Local/CI Quality Gate Parity (lint, build/typecheck, test)** — claude_single_source_of_truth, pre_commit_config, ci_workflow, claude_pnpm [EXTRACTED 0.85]
- **All section components composed by App** — app_app, components_nav_nav, components_hero_hero, components_stats_stats, components_services_services, components_process_process, components_finishes_finishes, components_gallery_gallery, components_whyus_whyus, components_ctabanner_ctabanner, components_contact_contact, components_footer_footer [EXTRACTED 1.00]
- **CTA paths funneling to Contact/SMS quote** — components_nav_nav, components_hero_hero, components_services_services, components_ctabanner_ctabanner, components_contact_contact [INFERRED 0.85]
- **Components consuming business identity data** — components_nav_nav, components_hero_hero, components_whyus_whyus, components_ctabanner_ctabanner, components_contact_contact, components_footer_footer [EXTRACTED 1.00]
- **Lint/typecheck/test quality gate** — package_lint_script, package_typecheck_script, package_test_script [INFERRED 0.85]
- **Icon-keyed content sections** — site_services, site_processsteps, site_benefits, icons_iconname [EXTRACTED 1.00]
- **Commit gate enforcement** — hooks_block_no_verify, claude_settings, commitlint_config [INFERRED 0.85]
- **Imitation stone coating color finishes** — concept_slate_gray_finish, concept_oyster_bay_finish, concept_granite_finish, concept_imitation_stone_coating [INFERRED 0.85]
- **Surface refinishing services demonstrated** — concept_sink_refinishing, concept_countertop_refinishing, concept_tile_refinishing, concept_bathtub_reglazing, concept_plumber_cutout_repair [INFERRED 0.75]
- **Imitation Stone Coating Countertop Projects** — gallery_project_07_fieldstone_counter, gallery_project_11_dark_stone_counter, concept_imitation_stone_coating [INFERRED 0.85]
- **Reglazing and Repair Projects** — gallery_project_08_bathtub_reglaze, gallery_project_12_sink_reglaze_repair, concept_bathtub_reglazing, concept_surface_repair [INFERRED 0.75]
- **Glossy Color Refinish Projects** — gallery_project_10_yellow_counter, gallery_project_09_fireplace_tile, concept_glossy_color_refinish [INFERRED 0.65]

## Communities (22 total, 6 thin omitted)

### Community 0 - "Build, CI & Commit Hygiene"
Cohesion: 0.07
Nodes (32): CI Concurrency Cancellation, pnpm/action-setup, actions/setup-node, GitHub Actions CI Workflow, CI Workflow, commitlint, Conventional Commits, ESLint Flat Config (+24 more)

### Community 1 - "Site Components & Content (files)"
Cohesion: 0.14
Nodes (18): Errors, initialValues, Icon(), IconName, IconProps, PATHS, Benefit, business (+10 more)

### Community 2 - "Component Architecture & UX Patterns"
Cohesion: 0.25
Nodes (23): App, Contact(), CtaBanner(), Finishes(), Footer(), Gallery(), Hero(), Nav() (+15 more)

### Community 3 - "Package Scripts & Quality Gate"
Cohesion: 0.09
Nodes (22): Type-checking gate, ESLint Flat Config, build script, lint script, typecheck script, dependencies, react, react-dom (+14 more)

### Community 4 - "Stone Coatings & Countertop Gallery"
Cohesion: 0.15
Nodes (20): Before/after showcase, Countertop refinishing, Fieldstone Finish, Glossy Color Refinish, Granite finish, Imitation stone coating, Oyster Bay finish, Plumber cut-out repair (+12 more)

### Community 5 - "Dev Dependencies"
Cohesion: 0.11
Nodes (19): devDependencies, @commitlint/config-conventional, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, jsdom (+11 more)

### Community 6 - "TypeScript App Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+10 more)

### Community 7 - "TypeScript Node Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 8 - "Test Wiring & Shared Data"
Cohesion: 0.24
Nodes (11): App Test Suite, Icon Component, IconName Type, Icon PATHS Registry, test script, Test Setup (jest-dom), Benefits Data, Business Details (+3 more)

### Community 9 - "Brand Identity & Logo"
Cohesion: 0.31
Nodes (9): Blue + Orange Brand Palette, PRO Bold Wordmark, Bathtub/Countertop Refinishing Craft, Rounded-Square App Icon Form, Light-Blue Spray Fan Motif, HVLP Spray Gun Motif, Water Droplet Mark, Pro Bath Droplet Favicon (+1 more)

### Community 10 - "Bathtub & Sink Reglazing"
Cohesion: 0.29
Nodes (7): Bathtub reglazing, Sanding and Polishing, Sink Reglazing, Surface Repair, White refinished bathtub with blue tile surround, Glossy White Bathtub Reglaze, Glossy White Kitchen Sink Reglaze with Repair

### Community 11 - "App Test Cases"
Cohesion: 0.40
Nodes (4): form, links, submit, user

### Community 13 - "TS Project References (docs)"
Cohesion: 0.67
Nodes (3): tsconfig.app.json, tsconfig.node.json, TypeScript Project References

## Knowledge Gaps
- **113 isolated node(s):** `tsBuildInfoFile`, `target`, `lib`, `module`, `types` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Dependencies` to `Build, CI & Commit Hygiene`, `Package Scripts & Quality Gate`?**
  _High betweenness centrality (0.202) - this node is a cross-community bridge._
- **Why does `App Test Suite` connect `Test Wiring & Shared Data` to `Component Architecture & UX Patterns`?**
  _High betweenness centrality (0.195) - this node is a cross-community bridge._
- **Why does `test script` connect `Test Wiring & Shared Data` to `Package Scripts & Quality Gate`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `App` (e.g. with `Site Content Module` and `Icon Component`) actually correct?**
  _`App` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `tsBuildInfoFile`, `target`, `lib` to the rest of the system?**
  _117 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Build, CI & Commit Hygiene` be split into smaller, more focused modules?**
  _Cohesion score 0.07196969696969698 - nodes in this community are weakly interconnected._
- **Should `Site Components & Content (files)` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._