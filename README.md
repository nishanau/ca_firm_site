# Chartered Accountancy Firm Website

A static Next.js website for a chartered accountancy firm, featuring a modern, minimalist design with dark theme. The site is built using Next.js 15.4.6 with the App Router and TypeScript.

## Features

- Modern, responsive UI with dark theme
- Centralized settings configuration for easy content management
- Home page showcasing services, values, and team
- About page with company history and team details
- Services page detailing all offered services
- Contact page with Google Maps integration and contact form (EmailJS)
- Mobile-friendly navigation with responsive layout

## Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: CSS-in-JS with styled-jsx
- **Form Handling**: EmailJS for serverless form submission
- **Maps Integration**: Google Maps embed
- **Deployment**: Ready for deployment on Vercel

## Project Structure

- `src/app/*` - Next.js App Router pages
- `src/components/*` - Reusable UI components
- `src/config/*` - Site settings and configuration
- `public/*` - Static assets (images, icons)

## Configuration

All site content is centralized in `src/config/siteSettings.ts`. This makes it easy to update:

- Firm details and contact information
- Team members and their qualifications
- Services offered and their descriptions
- Testimonials and client information
- Contact form settings (EmailJS integration)
- Color theme and appearance

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Update the site settings in `src/config/siteSettings.ts`
4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see the website

## EmailJS Integration

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS settings in `src/config/siteSettings.ts`:
   - `emailServiceID`: Your EmailJS service ID
   - `templateID`: Your EmailJS template ID
   - `userID`: Your EmailJS public key

## Deployment

The site is ready for deployment on [Vercel](https://vercel.com/):

```bash
npm run build
# or
yarn build
```

## Customization

- Add new team members in the `team` array in settings
- Modify services in the `services` array
- Update color theme in the `theme.colors` object
- Add/modify pages in the `src/app` directory

## License

MIT
