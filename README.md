# Fitness Factory

A modern, urban-styled gym website. React + Vite + Tailwind v4 + Framer Motion + Swiper.

## Run it

npm install
npm run dev

Open the local URL it prints (usually http://localhost:5173).

Build for production:
npm run build

## Where to add your real photos

All images currently use dark placeholder blocks so you can preview the layout.
Replace these files (same name, same folder) with your real photos:

| File | Used for | Recommended size |
|---|---|---|
| public/images/hero-bg.jpg | Fullscreen hero background | ~1920x1080, landscape |
| public/images/about-gym.jpg | About section gym photo | ~800x900, portrait-ish |
| public/images/trainer.jpg | Trainer photo | ~800x1000, portrait |
| public/images/gallery/1.jpg - 8.jpg | Gallery grid | ~800x800 |
| public/images/equipment/chest.jpg, back.jpg, legs.jpg, shoulders.jpg, cardio.jpg, functional.jpg | Equipment showcase | ~800x600 |
| public/images/testimonials/member-1.jpg - member-4.jpg | Review avatars | ~200x200, square |
| public/images/og-cover.jpg | Social share preview | 1200x630 |
| public/favicon.png | Browser tab icon | 64x64 or larger, square |

Just drop your real photo in with the exact same filename and it'll appear automatically -- no code changes needed. If you want more/fewer gallery images, edit the `images` array at the top of src/components/Gallery.jsx.

## Things you'll want to personalize before going live

- src/data/membership.js -- pricing is placeholder, update to your real plans/prices.
- src/components/Contact.jsx -- swap the Google Maps embed `src` for your gym's real location (get the embed URL from Google Maps > Share > Embed a map), and update the address text.
- src/components/Footer.jsx -- real address text.
- Social links (href="#") in Trainer.jsx and Footer.jsx -- point these at your real Instagram/Facebook/YouTube pages.
- src/components/Contact.jsx -- the contact form is frontend-only right now (just shows an alert on submit). To actually receive submissions, connect it to a service like Formspree or EmailJS, or a backend endpoint.
- Phone number +91 9412157363 is used in Contact, Membership, and the floating WhatsApp button -- search-and-replace if it needs to change.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Swiper.js (testimonials carousel)
- Lucide React (icons)
- react-countup (animated stat counters)
