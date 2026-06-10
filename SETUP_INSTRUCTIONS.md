# Wedding Invitation - Setup Instructions

## Hero Background Image

The hero section requires a background image. Follow these steps to add it:

### Option 1: Add Your Own Wedding Image
1. Prepare a wedding-themed background image (recommended size: 1920x1080px or larger)
2. Place it in the `public/` folder with the name `hero-bg.jpg`
3. The image will automatically be used as the hero background

### Option 2: Use a Sample Image for Now
You can download a sample wedding image and place it in:
- **Path**: `public/hero-bg.jpg`

The hero section will automatically reference this file. If the file doesn't exist initially, you can:
1. Use the image from `public/videos/` temporarily
2. Replace it with your own image later

## Component Structure

All components are now created and integrated:

✅ **Hero Component** - Full-screen banner with background image
✅ **Counter Component** - Enhanced countdown timer with better design
✅ **Map Component** - Location display with event details
✅ **Wedding Letter Component** - Wedding passions and invitation letter
✅ **Ending Letter Component** - Closing message and thank you section

## Running the Application

```bash
npm start
```

Then navigate to `http://localhost:4200` to see all sections in order:
1. Intro Video (plays automatically)
2. Hero Section
3. Invitation Card
4. Countdown Timer
5. Location Map
6. Wedding Passions Letter
7. Ending Letter & Call to Action

## Customization

- Edit text in each component's template
- Change colors by updating Tailwind classes (gold-600, gold-700, etc.)
- Modify dates in the countdown component (`targetDate` property)
- Update location details in the map component
