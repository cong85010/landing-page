# PC Showcase Images

This directory contains images for the PC Showcase gallery section.

## Current Images (Placeholders)

The following placeholder SVG images are included:
- `pc1.jpg` - The Red Dragon (Gaming)
- `pc2.jpg` - Arctic Storm (Gaming)
- `pc3.jpg` - Shadow Reaper (Workstation)
- `pc4.jpg` - Gold Edition (Gaming)
- `pc5.jpg` - Neon Genesis (Gaming)
- `pc6.jpg` - Pro Workstation (Workstation)

## Replacing with Real Photos

To use your actual PC build photos:

1. **Prepare your images:**
   - Recommended format: JPG or WebP
   - Recommended size: 800x600px or 1200x900px (4:3 ratio)
   - High quality photos with good lighting
   - Optimize file size (aim for <200KB per image)

2. **Replace the files:**
   - Keep the same filenames (e.g., `pc1.jpg`)
   - Or update the image paths in `/src/components/Showcase.astro`

3. **Update showcase data:**
   - Open `/src/components/Showcase.astro`
   - Modify the `showcases` array to match your builds:
   ```javascript
   const showcases = [
     {
       id: 1,
       title: "Your Build Name",
       specs: "RTX 4090 • i9-14900K • 64GB DDR5",
       description: "Description of the build",
       image: "/showcase/pc1.jpg",
       category: "Gaming" // or "Workstation"
     },
     // Add more builds...
   ];
   ```

## Photo Tips

For best results:
- Use consistent lighting across all photos
- Show the PC from a similar angle
- Highlight RGB lighting and unique features
- Include cable management details
- Capture the overall aesthetic

## Image Optimization

Optimize images before uploading:
- Use tools like TinyPNG or Squoosh
- Maintain aspect ratio
- Keep file sizes under 200KB for faster loading
