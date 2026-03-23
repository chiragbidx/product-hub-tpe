# Changelog

## 2024-06-09

### Added
- AgencyFlow branded homepage content and extended site content contract in `content/content.ts`
- Complete shadcn-based navigation bar (`components/Navbar.tsx`), hero section (`components/HeroSection.tsx`), and homepage composition (`app/page.tsx`), reflecting AgencyFlow SaaS agency workflow.
- Features, testimonials, and CTA sections with AgencyFlow positioning and call-to-actions.
- Sidebar navigation (`components/Sidebar.tsx`) with icon labels for Dashboard, Clients, Projects, Team, and Settings.
- Minimal dashboard layout shell with sidebar and branded welcome page (`app/dashboard/layout.tsx` and `app/dashboard/page.tsx`).
- Initial workflow pages for Clients, Projects, Team under `/dashboard/clients`, `/dashboard/projects`, `/dashboard/team` all with AgencyFlow branding and empty states.
- Auth UI flows:
  - Sign In (`app/auth/signin/page.tsx`): Heading, message, form, navigation helpers.
  - Sign Up (`app/auth/signup/page.tsx`): Registration form, branding, navigation helpers.
  - Forgot Password (`app/auth/forgot-password/page.tsx`): Email form, instructions, CTA, navigation.
  - Reset Password (`app/auth/reset-password/page.tsx`): Form for new password.
- Restored or generated UI primitives: `components/ui/input.tsx`, `components/ui/form.tsx`.

### Updated
- Navbar, hero, and footer CTA to match AgencyFlow visual identity.
- Route composition structure on homepage to include all sections.
- Used owner info/email ("chirag@bidx.ai") for all contact-related links.

### Notes
- All pages, content, forms, and navigation are production-grade and ready for end-to-end UI testing.
- No backend authentication or persistence yet. All flows are frontend-only by project definition.