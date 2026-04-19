# Ratan Sai Mandela — Portfolio

A dark & sleek personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**, featuring:

- Two-level project filtering (category + DE platform sub-filter)
- Live Tableau Public dashboard embeds
- Power BI screenshot gallery with lightbox
- Industry certifications section
- Courses & continuous learning section
- Experience timeline
- RAG-powered portfolio chatbot (Claude API)
- Fully responsive + deployed on Vercel

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Syne (display) + DM Sans (body) |
| Chatbot | Claude API (claude-sonnet-4) |
| Hosting | Vercel |

---

## Getting Started Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variable

Create a `.env.local` file in the root:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

> Get your FREE API key at: https://aistudio.google.com — no credit card needed

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploying to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/Ratan39/portfolio.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your portfolio repository
4. Vercel auto-detects Next.js — no config needed

### Step 3 — Add Environment Variable

In Vercel project settings → **Environment Variables**:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_GEMINI_API_KEY` | your Gemini API key (from aistudio.google.com) |

### Step 4 — Deploy

Click **Deploy** — your site will be live at `your-project.vercel.app` in ~2 minutes.

### Step 5 — Custom domain (optional)

In Vercel → **Domains** → add your custom domain (e.g. `ratansai.dev`)

---

## Updating Your Content

All your personal data lives in one file:

```
src/data/portfolio.ts
```

To update projects, certifications, experience, or any text — just edit that file and push. Vercel auto-redeploys.

---

## Adding Power BI Screenshots

Place images in:
```
public/images/powerbi/
```

Update the `visualizations.powerbi` array in `src/data/portfolio.ts` with the new image paths.

---

## Chatbot — How It Works

The RAG chatbot uses the **Claude API** with a detailed system prompt containing all your portfolio information. When a recruiter asks a question, it searches through your embedded knowledge base and responds conversationally.

The system prompt is in:
```
src/components/chatbot/Chatbot.tsx
```

Update the `SYSTEM_PROMPT` constant whenever you add new projects or experience.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Visualization.tsx
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── chatbot/
│       └── Chatbot.tsx
└── data/
    └── portfolio.ts        # ← All your content lives here
```

---

## LinkedIn Tip

Once deployed, add your portfolio URL to:
- LinkedIn **Featured** section (most visible)
- LinkedIn **Contact Info → Website** (label it "Portfolio")
- LinkedIn **About** section (end of bio)

Good luck! 🚀
