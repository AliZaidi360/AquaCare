# Arroyo Aqua Care - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from premium service websites like Airbnb (for trust/professionalism) and modern SaaS landing pages (Stripe, Linear) for clean minimalism. Water/pool industry aesthetic with sophisticated, modern execution.

## Core Design Principles
- **Liquid Minimalism**: Clean, flowing layouts with generous whitespace
- **Visual Proof**: Let the transformation images do the talking
- **Trust & Professionalism**: Sophisticated color palette, premium typography
- **Single-Page Flow**: Smooth, intuitive scroll experience

## Color Palette

### Primary Colors
- **Deep Ocean Blue**: 200 85% 25% - Primary brand color, headers, CTAs
- **Aqua Fresh**: 190 70% 50% - Accent for highlights, hover states, section dividers
- **Crystal Clear**: 190 100% 96% - Light background sections, cards

### Supporting Colors
- **Pure White**: Background for most sections
- **Deep Navy**: 210 50% 15% - Text, dark mode support
- **Soft Gray**: 210 10% 95% - Subtle backgrounds, borders
- **Success Green**: 160 60% 45% - For contact form success states

## Typography

### Font Families
- **Primary (Headings)**: 'Inter' or 'Poppins' - Clean, modern sans-serif with excellent readability
- **Secondary (Body)**: 'Inter' or 'System UI' - Consistent hierarchy

### Type Scale
- **Hero H1**: text-6xl (60px) font-bold, tracking-tight
- **Section H2**: text-4xl (36px) font-semibold
- **Service Cards H3**: text-2xl (24px) font-semibold
- **Body**: text-lg (18px) leading-relaxed for readability
- **Small Print**: text-sm (14px) for footer, captions

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Component padding: p-8, p-12
- Section spacing: py-20 (mobile), py-32 (desktop)
- Card gaps: gap-8, gap-12

### Container Strategy
- Max-width: max-w-7xl for main content
- Hero: Full-width with centered max-w-6xl content
- Services grid: max-w-7xl
- Contact form: max-w-2xl centered

## Component Library

### Hero Section
- **Full viewport height** (min-h-screen) with stunning pool image background
- Gradient overlay: from-blue-900/70 to-blue-600/50 for text contrast
- Large heading + subheading centered
- Primary CTA button (blurred background with backdrop-blur-lg)
- Trust indicator: "Professional Pool & Water Feature Care Since [Year]"

### Services Section
- **3-column grid** (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Each service card with:
  - Icon area (using Heroicons water/cleaning-themed icons)
  - Service title (H3)
  - Description from PDF (condensed to 2-3 lines)
  - Soft white background with subtle shadow on hover
  - Border radius: rounded-2xl
  - Padding: p-8

### Gallery Section
- **Masonry-style or bento grid layout** showcasing before/after transformations
- 2-3 column responsive grid
- Images with rounded-xl corners
- Subtle zoom on hover (scale-105 transition)
- Caption overlays on hover showing service type

### Contact Section
- **2-column layout**: Left side - contact form, Right side - contact info & hours
- Form fields: Name, Email, Phone, Service Type (dropdown), Message
- Large textarea for message
- Prominent submit button matching primary color
- Contact info card with phone, email, service areas
- Background: Soft gradient or solid aqua tint

### Footer
- Single row with copyright, social links (if applicable), quick nav
- Background: Deep Navy with white text
- Minimal height: py-8

## Images

### Hero Image
**Large hero background image** featuring a pristine, crystal-clear pool from the provided images. Select the most visually stunning pool shot with good lighting and clean water. Apply dark gradient overlay for text legibility.

### Gallery Images
Use all 5 provided pool cleaning images in the portfolio gallery section. Showcase the quality of work - clean, sparkling pools after service. Images should be optimized but retain quality to demonstrate transformation.

### Image Treatment
- All images: rounded-xl or rounded-2xl corners
- Aspect ratios: 16:9 for hero, 4:3 for gallery
- Lazy loading for performance
- Subtle shadow: shadow-lg on cards

## Animations
**Minimal & Purposeful**:
- Fade-in on scroll for sections (opacity + translateY)
- Button hover: Slight scale (scale-105) and brightness increase
- Card hover: Shadow elevation (shadow-xl)
- No complex scroll-triggered animations

## Accessibility
- Color contrast ratios meet WCAG AA standards (4.5:1 minimum)
- Focus states: ring-2 ring-aqua-500 for all interactive elements
- Alt text for all gallery images describing the service/result
- Semantic HTML structure with proper heading hierarchy

## Page Structure Flow
1. **Hero** - Immediate visual impact with pool image + company name
2. **Services Grid** - All 7 services in organized cards
3. **Gallery/Portfolio** - Before/after or completed work showcase
4. **Contact** - Easy-to-use form + business info
5. **Footer** - Minimal, professional closure

This design balances minimalism with richness, letting the quality pool images and comprehensive services speak while maintaining a sophisticated, trustworthy aesthetic.