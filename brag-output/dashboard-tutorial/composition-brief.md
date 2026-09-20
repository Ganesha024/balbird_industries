# Hyperframes Composition Brief: Balbird Dashboard

## Objective
Create a short product tutorial video for the Balbird dashboard showing the key functionality and user flow.

## Output
- Composition directory: `brag-output/dashboard-tutorial/composition/`
- Rendered video: `brag-output/dashboard-tutorial/balbird-dashboard-tutorial.mp4`
- Format: landscape — 1920x1080
- Duration: 25 seconds

## Source Material
- Project root: `C:\Users\ganes\balbird`
- Primary files read: 
  - `app/dashboard/page.tsx` (RoleBasedDashboard component)
  - `app/dashboard/layout.tsx` (Dashboard layout with navigation)
  - `components/dashboard/RoleBasedDashboard.tsx` (Dashboard stats and activities)
  - `components/dashboard/RoleAwareNav.tsx` (Navigation structure)
  - `app/dashboard/requirements/page.tsx` (Requirements page)
  - `app/dashboard/suppliers/page.tsx` (Suppliers page)
  - `app/dashboard/orders/page.tsx` (Orders page)
  - `app/globals.css` (Color palette and styling)
  - `tailwind.config.ts` (Theme configuration)
- Product name: Balbird Dashboard
- Tagline / strongest claim: "Not a Broker. Not a Marketplace. An Execution Partner."
- Key UI or visual moment to recreate: Role-based dashboard with stat cards, horizontal navigation, and key sections (Requirements, Suppliers, Orders)
- Copy that must appear verbatim:
  - "Dashboard"
  - "Requirements"
  - "Suppliers"
  - "Orders"
  - "Balbird Dashboard"
  - "Balbird Industries"
  - "Not a Broker. Not a Marketplace. An Execution Partner."

## Creative Direction
- Tone preset: polished
- Creative direction: premium B2B SaaS product tutorial - clean, professional, trustworthy, modern manufacturing technology
- Interpretation: Smooth camera movements, subtle zooms, clear cursor movement, obvious clicks, highlight important UI areas, no generic stock footage, no fabricated interface, no unnecessary visual effects
- Angle: Show the actual Balbird dashboard functionality with real UI elements and realistic user flow
- Hook: Dashboard entry with clean fade-in showing role-based stat cards
- Outro / punchline: Clean branded closing with Balbird logo and distinctive tagline
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Fabricated interface elements
  - Unnecessary visual effects

## Visual Identity
- Background: #ffffff
- Text: #0f172a
- Accent: #2563eb
- Display font: Geist Sans (system font stack)
- Body font: Geist Sans (system font stack)
- Visual references from the project:
  - Role-based stat cards with icons and metrics
  - Horizontal navigation tabs with active states
  - Status badges and progress indicators
  - Supplier ratings and performance metrics
  - Order progress bars and status indicators
  - Clean card-based layout with subtle shadows

## Storyboard
Scene summary:
1. Dashboard Entry — 3s — Show the role-based dashboard with OEM view (8 Active Requirements, 12 Supplier Matches, 15 Active Orders, 94% On-Time Delivery) with subtle zoom in on stat cards
2. Navigation Highlight — 3s — Cursor moves across navigation highlighting tabs, smooth pan across navigation bar
3. Requirements Section — 4s — Click on Requirements tab, show Requirements page with status cards and overview statistics, subtle zoom on Active requirements card
4. Suppliers Section — 4s — Click on Suppliers in navigation, show Supplier Management page with supplier stats and top performing suppliers list, pan down to show supplier list
5. Orders Section — 4s — Click on Orders in navigation, show Production Orders page with order stats and active production orders with progress bars, focus on order card with progress bar
6. Return to Dashboard — 3s — Click on Overview to return to main dashboard, smooth transition back to dashboard overview showing complete workspace
7. Closing Frame — 4s — Clean branded closing with Balbird logo and tagline, static centered composition

## Audio
- Audio role: warm corporate bed with subtle tech accents
- Audio arc: Consistent professional bed throughout with subtle UI interaction sounds
- Music: happy-beats-business-moves-vol-12-by-ende-dot-app.mp3
- Music treatment: Volume 0.35, consistent throughout, no fade-out (clean professional tone)
- Music cue guidance: unavailable; continue without beat/cue sync
- Audio-reactive treatment: subtle; use music RMS/bass to make UI card presence breathe slightly. No waveform/equalizer visuals.
- Audio-coupled moments:
  - Scene transitions — interface/drop sounds for smooth page transitions
  - Navigation clicks — interface/click sounds for tab interactions
  - Card reveals — interface/drop sounds for stat card appearances
- SFX selection guidance: Minimal but present (polished tone). Use interface/drop_001 for gentle reveals, interface/click_001 for navigation interactions. Keep volume low (0.55-0.65). Nothing aggressive.
- SFX analysis guidance: Pass `<skill-dir>/assets/sfx/sfx-analysis.md` for selection guidance. Prefer low/medium HF risk for polished moments.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: Music copied to `composition/assets/music/`. Hyperframes should copy selected SFX into `composition/assets/sfx/` after choosing exact files.

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not `none`, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run `hyperframes check` before render — it is brag's single gate.