# Alexa Bigwarfe: Speaker Page

A single-page speaker site for Alexa Bigwarfe. Plain HTML, CSS, and vanilla
JavaScript. No framework, no build step. Netlify deploys it as-is.

## What's here

```
index.html    The page: nav, hero, about, what I speak on, praise, contact
styles.css    All styling (brand colors + type)
script.js     Mobile menu + Netlify-friendly contact form submit
assets/       Drop alexa.jpg here to replace the hero monogram
```

## Brand

Built from Alexa's brand bible.

- Navy `#16294d`, teal `#4bb4af`, raspberry `#e8446d`, soft teal `#74B8B4`, gold `#c08a2e`
- Display type: Poppins. Body type: Inter (loaded from Google Fonts)
- Voice: warm, direct, useful, funny. No em or en dashes. Sell the dream, not the fear.

## Deploy to Netlify (zero config)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Leave build command blank and publish directory as the repo root. Deploy.

That's it. No build step to configure.

## Contact form

The contact form uses **Netlify Forms**. It works automatically once deployed
because the form has `data-netlify="true"` and a hidden `form-name` field.
Submissions show up under **Forms** in the Netlify dashboard, and `script.js`
posts them without a page reload. To get an email on each submission, add a
notification in Netlify under **Forms → Form notifications**.

Locally (opening `index.html` in a browser with no Netlify backend), the form
shows a friendly fallback message pointing to the email address.

## Swap in a real photo

Add a portrait at `assets/alexa.jpg`, then in `styles.css` find `.hero__photo`
and uncomment the two `background-image` lines. The monogram is replaced.
