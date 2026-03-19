# Changelog

## [2024-06-10] DealNest Branding & Dashboard Foundation

### Added
- New branding and content overhaul, relaunching the SaaS template as "DealNest"
- Updated homepage content (`content/home.ts`) including hero, features, testimonials, pricing, FAQ, team, and contact to DealNest copy and positioning.
- Navbar branding, routes, and features (in `components/layout/navbar.tsx`) fully rebranded to DealNest.

### Authentication
- Auth UI (sign-in, sign-up, forgot-password) headings, subheadings, buttons, and helpers now feature DealNest language and improved onboarding flow in `app/auth/client.tsx` and `app/auth/forgot-password/client.tsx`.

### Dashboard
- Sidebar navigation (`components/dashboard/sidebar-nav.tsx`) now includes Overview, Contacts, Deals, Settings, Team with DealNest-specific icons and label text.
- Dashboard shell (`app/dashboard/layout.tsx`) branding updated: text logo, section label, and colors for DealNest.
- Dashboard overview (`app/dashboard/page.tsx` and `app/dashboard/client.tsx`) with welcome message, subheading, and empty state CTA for adding contacts/deals.
- Created and enabled routes/pages for:
  - `/dashboard/contacts`: Empty state and CTA (add contact)
  - `/dashboard/contacts/new`: "Add new contact" shell
  - `/dashboard/deals`: Empty state and CTA (add deal)
  - `/dashboard/deals/new`: "Add new deal" shell

### Changed
- Default dashboard and landing flows now fully introduce the user to DealNest, CRM-centric workflow, and branding.
- Footer contact email set to chirag@bidx.ai as the owner and contact reference.

### No Breaking Changes
- Existing backend, authentication logic, and data models untouched—this release is brand and UX foundation only.