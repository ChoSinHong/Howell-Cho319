# Fonts Directory

This directory contains custom font files for the HowellCho Profile Website.

## Current Font Stack

The website uses a system font stack for optimal performance:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

## External Fonts

### Font Awesome
- **Source**: CDN (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css)
- **Usage**: Icons throughout the website
- **Version**: 6.0.0

## Adding Custom Fonts

If you want to add custom fonts:

1. **Web Fonts (Recommended)**
   - Use Google Fonts or similar service
   - Add to HTML head: `<link href="https://fonts.googleapis.com/css2?family=FontName:wght@400;700&display=swap" rel="stylesheet">`
   - Update CSS font-family

2. **Self-Hosted Fonts**
   - Place font files in this directory
   - Create @font-face declarations in CSS
   - Include multiple formats (woff2, woff, ttf) for browser compatibility

## Font Loading Strategy

- **System fonts first**: Immediate rendering, no loading delay
- **Web fonts**: Use `font-display: swap` for better performance
- **Preload critical fonts**: Add `<link rel="preload">` for above-the-fold text

## Example @font-face Declaration

```css
@font-face {
    font-family: 'CustomFont';
    src: url('../fonts/customfont.woff2') format('woff2'),
         url('../fonts/customfont.woff') format('woff'),
         url('../fonts/customfont.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

## Performance Considerations

- Limit the number of font weights and styles
- Use font subsetting to reduce file size
- Consider variable fonts for multiple weights
- Test font loading on slow connections
