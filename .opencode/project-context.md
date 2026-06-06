# Elite Global Solutions - Full Context

## Architecture & Infrastructure
- **Next.js 14** (app router) project at `C:\Users\DELL\AppData\Local\Temp\opencode\elite-global-next`
- Node.js portable: `C:\Users\DELL\nodejs-portable\node-v24.16.0-win-x64`
- Build: `npm run build` / Test: `npm run test` / Run: `npm run start -- -p 3001`
- Port: **3001** (Aurevia Capitals on 3000)
- All components use `'use client'` directive

## Design System
- **Emerald green** (#10b981) primary palette matching AayaamX Technologies
- Glass morphism: `backdrop-filter: blur(20px)` with `rgba(16,185,129,0.15)` borders
- Dark slate (#0f172a) backgrounds for footer/CTA sections
- Text gradients on headlines, glow shadows on interactive elements
- CSS-only animations: marquee scroll, pulse dots, accordion collapse
- No external animation dependencies (no Framer Motion, no Tailwind)

## Components (22 total, all W/ tests)

| Component | Description | Key IDs |
|-----------|-------------|---------|
| Navbar | Fixed top bar, 8 tabs + Get Started CTA, hamburger mobile | logo, mobile menu |
| Hero | 3 rotating slides (5s interval), laptop/phone mockups, floating badges, stats | #hero |
| ServicesMarquee | Horizontal scrolling service tags (CSS marquee) | - |
| Capabilities | 5 expertise cards with icon + bullets | #capabilities |
| Industries | 8 industry icons grid | - |
| WebMobile | 3 cards: Web Dev, Mobile Apps, UI/UX | #web-mobile |
| BlockchainDev | 3 cards: Blockchain, DeFi, NFT | #blockchain |
| FintechTrading | 4 cards: CRM, Social Trading, Prop Suite, etc. | #fintech |
| AIAutomation | 3 cards: Intelligent Automation, AI Agents, ML | #ai-automation |
| Marketplace | 3 cards: NFT Marketplace, Prop Firm Store, App Store publish | #marketplace |
| Education | 2 cards: Training, Content | #education |
| APIsWebSockets | 2 cards: REST APIs, WebSocket Services | #apis |
| Process | 4-step process with numbered circles | #process |
| TechStack | Marquee of 11 blockchain tech names | - |
| Stats | 4 stat cards (120+, 15+, 99.99%, 50+) | #stats |
| WhyCTA | Glass card with why-choose-us copy | - |
| Testimonials | 3 testimonials with 5-star ratings | #testimonials |
| Partners (Portfolio) | 6 project cards | #portfolio |
| FAQ | 5-question accordion | #faq |
| FinalCTA | Dark dual-CTA section | - |
| ContactModal | Hash-triggered modal, 4 fields + subject dropdown + textarea, localStorage demo | #contact |
| Footer | 6 columns, newsletter, social icons, disclaimer, copyright | - |

## Page Layout Order
Navbar → Hero → ServicesMarquee → Capabilities → Industries → WebMobile → BlockchainDev → FintechTrading → AIAutomation → Marketplace → Education → APIsWebSockets → Process → TechStack → Stats → WhyCTA → Testimonials → Partners → FAQ → FinalCTA → ContactModal → Footer

## Test Coverage
21 tests across all 22 components (one per component, checking key text/routes). All passing.

## Data Flow
- No backend — localStorage for demo account credentials, Formspree placeholder pattern for forms
- Contact modal generates sequential demo accounts (login: 1001, 1002, etc.)
- Hash-based navigation: `#contact` opens modal, `#web-mobile` etc. scroll to sections
- No API calls, no database

## Development Process
1. Add new section component (TypeScript React)
2. Add corresponding CSS classes to globals.css
3. Import and add to page.tsx in order
4. Add test case to __tests__/components.test.tsx
5. Run `npm run build` and `npm run test`
6. Start on port 3001 to verify in browser
