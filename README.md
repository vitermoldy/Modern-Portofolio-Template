# Modern Portfolio Template

A one-page portfolio for a product designer who also builds the front-end. Plain HTML, CSS and JavaScript: no build step, no framework.

- Dark by default, with a light theme toggle. The visitor's choice is remembered.
- Five screens: hero, selected work, process, about, and contact.
- Responsive from 390px phones to 1440px desktops.
- Keyboard accessible, with a skip link, visible focus and WCAG AA contrast in both themes.

## Run it

Open `index.html` in a browser. The kit's scripts are ES modules, so some browsers block them on `file://`. If the menu or hovers do not work, serve the folder instead:

```bash
npx serve .
# or
python -m http.server
```

## Make it yours

Every line to change in `index.html` is marked with an `EDIT` comment. Search for `EDIT`.

| What | Where |
|---|---|
| Your name, title and description | `<title>`, `<meta name="description">`, the nav logo, the footer |
| Email address | every `mailto:hello@yourname.example` (four places) |
| Availability line | the hero, above the headline |
| Projects | the four cards in `#work` |
| Process steps | `#process` |
| Bio, jobs and tools | `#about` |
| Your photo | the `YN` frame in `#about` |
| Social links | the Contact column in the footer |
| Favicon | the `<link rel="icon">` line in `<head>` |

### Replace the drawn screens with screenshots

The project visuals are drawn in HTML and CSS so the template looks finished before you add anything. To use your own screenshot, replace the `div.mk-place` inside a card's `.panel` with:

```html
<img class="frame__img" src="assets/work/project-one.png" alt="What the screen shows" width="1200" height="900" loading="lazy">
```

For the hero, replace the `div.mk-phone` and its contents inside `.hero__media` with an `<img>` that has `fetchpriority="high"` instead of `loading="lazy"`.

### Change the colours

Dark theme tokens sit in the `:root` block in `index.html`. Light theme tokens sit at the top of `css/portfolio.css`. The accent is `--p-accent` and `--p-action`. If you change it, check that button text on the accent reaches 4.5:1 contrast.

## Files

```
index.html          the page
css/portfolio.css   the theme toggle, light theme, project visuals, process and about
js/portfolio.js     the theme toggle, the current-section mark in the nav, the footer year
assets/             the design system (grid, type, buttons, nav, cards, motion) from tasteskill
```

## Credits

The design system in `assets/` comes from [tasteskill](https://github.com/Leonxlnx/taste-skill). Fonts are Gabarito, Figtree and DM Mono from Google Fonts.
