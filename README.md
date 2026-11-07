# Elite Education — Official Web Application

> **"Classes for CA / CMA / CS — Specialised for CA"**  
> *“Maths aur English ko aasaan banate hain.”*  
> Directed by **Prof. Er. Manoj Kumar** — *An Engineer by profession, a Teacher by passion.*

---

## 1. Overview & Brand Information

Elite Education is a premier light-themed coaching institute based in Bhayandar East, Mumbai, specialising in Chartered Accountancy (CA), Cost & Management Accountancy (CMA), Company Secretaryship (CS), and Foundation Numerical/Language Skills.

### Business & Contact Coordinates:
- **Campus Address:** Navghar Road, Opp. Bus Depot, Chandan Nagar, Bhayandar East, Mira Bhayandar, Maharashtra 401105
- **Direct Desk:** `+91 79000 96857`
- **WhatsApp Admissions:** `+91 87965 76868` (Click-to-chat with prefilled admission message)
- **Map Coordinates:** `19.3122497, 72.8534029` (Embedded greyscale / light-styled Google Maps)
- **Official Socials:**
  - Facebook: [facebook.com/eliteedu1811](https://facebook.com/eliteedu1811)
  - Instagram: [instagram.com/elite_education_](https://instagram.com/elite_education_)
  - *(Strict policy: No YouTube channel name, handle, logo, or URL is shown anywhere on public UI).*

---

## 2. Visual Design System

- **Palette:** Warm ivory background (`#FBF9F4`), pure white cards (`#FFFFFF`), deep royal navy text (`#0F1B3D`), champagne gold accents (`#C8A15A`), soft sage wash (`#F2F6F3`).
- **Texture:** Subtle SVG noise grain overlay at 3.5%.
- **Typography:** Display serif (*Cormorant Garamond*) and geometric modern sans (*Plus Jakarta Sans*).
- **Cards & Geometry:** 20–32px rounded corners, hairline gold borders (`border-[#C8A15A]/25`), layered shadows.

---

## 3. The "Wow" Animation & Interaction Layer

1. **Preloader:** Golden interlocked "EE" monogram drawing itself via SVG stroke animation, then revealing the hero.
2. **Hero Stage:** Word-by-word headline reveal; floating 3D-feel formula symbols ($\sum$, $\int$, $\pi$, ₹, %, "A+", $\Delta$) drifting with mouse parallax; animated soft gradient mesh blobs.
3. **Custom Cursor:** Center navy dot + trailing champagne gold ring with contextual expanded states (`VIEW`, `PLAY`).
4. **Magnetic Buttons:** Smooth cursor pull with animated diagonal shine sweeps.
5. **Course Spotlight Cards:** Interactive spotlight gradient following the cursor, hover lift, and tag indicators.
6. **Scroll-Driven Storytelling:** "Why Elite Education" benefit showcase with interactive tabs and progress tracking.
7. **Subject Marquee:** Infinite marquee of subjects pausing on hover.
8. **Animated Number Counters:** Viewport-triggered counters with bracket placeholder fallbacks.
9. **Floating WhatsApp Button:** Pulsing beacon with one-click direct chat to admissions.

---

## 4. Course Catalogue & Structure

All courses and lectures are configured in `src/data/courses.ts`:
- **Track A — CA:**
  - `ca-foundation`: CA Foundation Comprehensive
  - `ca-intermediate`: CA Intermediate (Group 1 & 2)
  - `ca-final`: CA Final Specialized Prep
- **Track B — CMA:**
  - `cma-foundation`: CMA Foundation Intensive
  - `cma-intermediate`: CMA Intermediate
  - `cma-final`: CMA Final Advanced Suite
- **Track C — CS:**
  - `cseet`: CSEET (CS Entrance)
  - `cs-executive`: CS Executive Program
  - `cs-professional`: CS Professional Pinnacle
- **Track D — Foundations:**
  - `maths-made-easy`: Maths Made Easy (School & Class 10 / 12)
  - `vedic-maths-speed-tricks`: Vedic Maths & Ultra-Speed Tricks
  - `aptitude-maths-competitive`: Quantitative Aptitude for SSC & Competitive Exams
  - `english-grammar-made-easy`: English Grammar & Writing Made Easy

---

## 5. Video Player & Server-Enforced Access Engine

The application embeds videos via `youtube-nocookie.com` with controls hidden and wrapped by a custom ivory/navy/gold player:
- **Server API Route (`/api/courses/[slug]/lectures`):**
  - **Logged-out visitors:** Video IDs are strictly stripped by the server (`youtubeId: null`), returning a locked state with a prompt to sign up for free.
  - **Logged-in free users:** Lecture 1 (`order: 1` / Demo Lecture) is unlocked and streamable. Subsequent lectures are server-locked.
  - **Enrolled users / Admin:** Full course playlist unlocked.
- Custom branded end card with "Next Lecture" or "Enrol to Unlock".
- Zero public exposure of YouTube channel details or video links.

---

## 6. Admin Panel (`/admin`)

- Accessible by signing in as `admin@eliteeducation.co.in` or clicking the Admin link.
- **Features:**
  1. **Course & YouTube ID Editor:** Paste YouTube video IDs for any lecture in real time.
  2. **Student Enrollment Manager:** Instant one-click toggle to grant or revoke full course access to any student.
  3. **Admission Enquiries Desk:** Review inquiries submitted from the website and reply directly to applicants on WhatsApp.

---

## 7. Getting Started & Running Locally

### Prerequisites:
- Node.js 18+ (tested on Node v24)
- npm 9+

### Commands:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Test Credentials:
- **Admin Login:** Email `admin@eliteeducation.co.in` (password optional)
- **Student OTP Login:** Any 10-digit mobile number, demo OTP: `123456`
- **Google Sign-in:** One-click simulation.

---

## 8. Deployment

### Vercel:
1. Push the repository to GitHub / GitLab.
2. Import the project into Vercel.
3. Keep default settings (`Next.js` framework preset).
4. Deploy!

### Netlify:
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy site.

---

## 9. Central Placeholders Configuration

All fees, batch timings, and statistical counters are centralized in `src/config/siteConfig.ts` using clean placeholder tokens like `[FEES]`, `[BATCH TIMING]`, `[STUDENTS TAUGHT]`, and `[YEARS OF EXCELLENCE]`. Simply edit this file to update the data across the entire site.
