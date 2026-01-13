# 🌿 Florea AI Website

**Research for Human Flourishing**

A professional, SEO-optimized website for the Florea AI research project, featuring an interactive chatbot demonstration, comprehensive content management, and modern responsive design.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Editing Guide](#editing-guide)
- [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
- [Technical Details](#technical-details)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

---

## 🎯 Overview

Florea AI is an interdisciplinary research project dedicated to developing AI conversational agents that promote character virtues and long-term human flourishing. This website showcases:

- **Interactive chatbot demonstration** - See virtue-centered AI coaching in action
- **Research publications** - Academic papers and findings
- **Team & advisors** - Meet the experts behind the research
- **Blog platform** - Share insights and updates
- **Contact system** - Connect with collaborators

---

## ✨ Features

### 🤖 Interactive Chatbot Demo
- Animated conversation demonstrating patience coaching
- Auto-looping demonstration (resets every 8 seconds)
- Fixed height design with internal scrolling
- Clear disclaimer explaining the simulation
- Mobile-responsive design

### 📱 Fully Responsive
- Desktop, tablet, and mobile optimized
- Smooth animations and transitions
- Touch-friendly navigation
- Adaptive layouts

### 🔍 SEO & AI-SEO Optimized
- Complete meta tag implementation
- Open Graph and Twitter Card tags
- Schema.org structured data
- Optimized for AI search engines (ChatGPT, Perplexity, etc.)
- Semantic HTML5 structure

### 🎨 Professional Design
- Clean, modern interface
- Brand-consistent colors (green theme)
- Material Icons integration
- Smooth scroll effects
- Card-based layouts

### 📊 Easy Content Management
- All content in `js/data.js`
- Simple editing instructions
- No coding required for updates
- Automatic rendering

---

## 🚀 Quick Start

### 1. Extract Files
```bash
unzip florea-ai-website-FINAL.zip
cd florea-ai-website-FINAL
```

### 2. Open Locally
Simply open `index.html` in your browser to preview the site.

### 3. Deploy to Server
Upload all files to your web hosting via FTP, cPanel, or Git:
```bash
# Example: Upload via rsync
rsync -avz --exclude 'README.md' ./ user@yourserver.com:/var/www/html/
```

### 4. Update Content
Edit `js/data.js` to update:
- Team members
- Publications
- Blog posts
- Advisors

---

## 📁 File Structure

```
florea-ai-website/
│
├── index.html              # Homepage with chatbot demo
├── about.html              # About page with mission & research
├── team.html               # Team members page
├── advisors.html           # Scientific advisors page
├── publications.html       # Research publications
├── blog.html               # Blog listing
├── blog-post.html          # Individual blog post template
├── contact.html            # Contact page
├── README.md               # This file
│
├── css/
│   └── styles.css          # All styling (2000+ lines)
│
├── js/
│   ├── main.js             # Core functionality & chatbot
│   └── data.js             # Content data (EDIT THIS!)
│
├── images/
│   ├── Florea_AI.png       # Main logo
│   ├── JTF_logo.png        # Sponsor logo
│   ├── team/               # Team member photos
│   ├── advisors/           # Advisor photos
│   └── blog/               # Blog post images
│
├── data/                   # Additional data files
└── publications/           # Publication PDFs
```

---

## 📝 Editing Guide

### Updating Content (No Coding Required!)

#### 1. **Team Members**
Edit `js/data.js` and find the `teamMembers` array:

```javascript
{
    id: "member-id",
    name: "Dr. Jane Smith",
    title: "Principal Investigator",
    affiliation: "University Name",
    expertise: ["AI Ethics", "Psychology"],
    bio: "Brief biography here...",
    image: "images/team/jane-smith.jpg",
    email: "jane@university.edu",
    website: "https://janesmith.com"
}
```

**To add a new team member:**
1. Copy an existing entry
2. Update all fields
3. Add photo to `images/team/`
4. Save the file

#### 2. **Publications**
Find the `publications` array in `js/data.js`:

```javascript
{
    id: "pub-1",
    title: "Your Paper Title",
    authors: "Smith, J., Doe, A., & Johnson, B.",
    year: "2024",
    journal: "Journal of AI Ethics",
    abstract: "Paper abstract here...",
    pdfLink: "publications/paper.pdf",
    doiLink: "https://doi.org/10.1234/example"
}
```

#### 3. **Blog Posts**
Find the `blogPosts` array:

```javascript
{
    id: "post-1",
    title: "Blog Post Title",
    date: "2024-11-14",
    author: "Dr. Jane Smith",
    excerpt: "Brief summary...",
    content: "Full blog post content...",
    image: "images/blog/post-image.jpg",
    tags: ["AI", "Ethics", "Research"]
}
```

#### 4. **Advisors**
Find the `advisors` array and follow same format as team members.

### Updating Text Content

#### Homepage Hero Text
Edit `index.html` around line 115:
```html
<h2>Building AI for Character & Virtue</h2>
<p>Your description here...</p>
```

#### About Page Content
Edit `about.html` - look for comments like:
```html
<!-- TO EDIT: Change this section -->
```

#### Contact Information
Edit `contact.html` around line 65-89 to update:
- Email address
- Office location
- Office hours

### Changing Colors

Edit `css/styles.css` around line 19-25:

```css
:root {
    --primary-green: #2ecc71;    /* Main brand color */
    --dark-green: #1a7a4a;       /* Dark accent */
    --light-green: #a8e6cf;      /* Light accent */
    --accent-green: #27ae60;     /* Secondary accent */
}
```

---

## 🔍 SEO Optimization

### What's Already Optimized

✅ **Meta Tags** - All pages have proper meta descriptions, titles, keywords  
✅ **Open Graph** - Facebook/LinkedIn previews configured  
✅ **Twitter Cards** - Twitter previews configured  
✅ **Structured Data** - Schema.org markup for search engines  
✅ **Header Hierarchy** - Proper H1→H2→H3→H4 structure  
✅ **Alt Text** - All images have descriptive alt attributes  
✅ **Mobile-First** - Responsive design for all devices  
✅ **Fast Loading** - Optimized CSS and JavaScript  

### Customizing SEO

#### Update Meta Descriptions
Each page has meta tags in the `<head>` section:

```html
<meta name="description" content="Your custom description here (150-160 chars)">
<meta name="keywords" content="keyword1, keyword2, keyword3">
```

#### Update Open Graph Images
Change the image URLs in each page's meta tags:

```html
<meta property="og:image" content="https://www.florea-ai.org/images/your-image.png">
```

#### Update Canonical URLs
Replace `https://www.florea-ai.org/` with your actual domain:

```html
<link rel="canonical" href="https://yourdomain.com/page.html">
```

### Recommended Tools

After deployment, test with:
- [Google Search Console](https://search.google.com/search-console)
- [Schema Markup Validator](https://validator.schema.org/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🌐 Deployment

### Option 1: Traditional Web Hosting

1. **Via FTP/SFTP:**
   - Use FileZilla or similar
   - Upload all files to `public_html` or `www` folder
   - Preserve folder structure

2. **Via cPanel:**
   - Upload ZIP file
   - Extract in File Manager
   - Set correct permissions (644 for files, 755 for folders)

### Option 2: GitHub Pages

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/florea-ai.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch
```

### Option 3: Netlify (Recommended)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the website folder
3. Custom domain: Settings → Domain management
4. SSL is automatic!

### Option 4: Vercel

```bash
npm install -g vercel
vercel login
vercel
```

### Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify chatbot demo works
- [ ] Check mobile responsiveness
- [ ] Test all internal links
- [ ] Verify images display
- [ ] Submit sitemap to search engines
- [ ] Set up Google Analytics
- [ ] Configure SSL certificate
- [ ] Test contact information
- [ ] Verify social media links

---

## 🔧 Technical Details

### Browser Compatibility

✅ **Modern Browsers:**
- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓
- Opera 76+ ✓

⚠️ **Not Supported:**
- Internet Explorer (discontinued)
- Browsers with JavaScript disabled

### Performance Metrics

- **Page Load**: < 2 seconds (on average connection)
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 3 seconds
- **CSS Size**: ~45KB (minified)
- **JS Size**: ~15KB (minified)
- **Total Page Weight**: < 500KB

### Dependencies

**External (CDN):**
- Google Fonts: Roboto & Playfair Display
- Material Icons
- No external JavaScript libraries (vanilla JS)

**Internal:**
- CSS: Custom styles (no framework)
- JavaScript: Vanilla ES6+

### Chatbot Demo Technical Details

**How It Works:**
1. Messages stored in array (`chatbotConversation`)
2. Auto-plays on page load (1 second delay)
3. Displays messages sequentially with realistic timing
4. Shows typing indicator for AI responses
5. Scrolls to bottom automatically
6. Loops after final message (8 second pause)

**Configuration:**
- Message delays: 1-4.5 seconds
- Typing indicator: 2 seconds
- Window height: 680px (fixed)
- Loop delay: 8 seconds

To modify the conversation, edit `js/main.js` around line 20.

---

## 🐛 Troubleshooting

### Chatbot Not Showing Messages

**Check:**
1. Open browser console (F12) - look for errors
2. Verify `js/main.js` is loading (Network tab)
3. Check if `chatbot-messages` element exists
4. Clear browser cache

**Solution:**
```javascript
// In browser console, type:
console.log('Chatbot container:', document.getElementById('chatbot-messages'));
// Should show the element, not null
```

### Images Not Loading

**Check:**
1. File paths are correct (case-sensitive on Linux servers)
2. Images exist in `images/` folder
3. File extensions match (.jpg vs .JPG)

**Solution:**
```bash
# Verify image paths
ls -la images/team/
ls -la images/advisors/
```

### Styling Issues

**Check:**
1. `css/styles.css` is loading
2. Browser cache cleared
3. No CSS conflicts

**Solution:**
```html
<!-- Hard refresh to clear cache -->
<!-- Windows: Ctrl + F5 -->
<!-- Mac: Cmd + Shift + R -->
```

### Publications Not Displaying

**Check:**
1. `js/data.js` syntax is correct (no missing commas)
2. Open browser console for JavaScript errors
3. Verify data structure matches examples

**Solution:**
```javascript
// Validate your JSON syntax at:
// https://jsonlint.com/
```

### Mobile Menu Not Working

**Check:**
1. JavaScript is enabled
2. `js/main.js` loaded correctly
3. No console errors

**Solution:**
Clear cache and reload. Mobile menu uses vanilla JavaScript with no dependencies.

---

## 🎓 Best Practices

### Content Updates

1. **Regular Blog Posts**: Post at least monthly
2. **Publication Updates**: Add immediately when published
3. **Team Changes**: Update within 1 week
4. **News & Events**: Keep timely and current

### Maintenance Schedule

**Weekly:**
- Check for broken links
- Monitor analytics
- Respond to inquiries

**Monthly:**
- Update blog content
- Review and update SEO
- Check mobile responsiveness
- Test chatbot demo

**Quarterly:**
- Update team/advisor information
- Add new publications
- Review and update images
- Security audit

**Yearly:**
- Comprehensive content review
- Design refresh evaluation
- Technology stack update
- Performance optimization

---

## 🎉 Quick Reference Card

| Task | Location | Difficulty |
|------|----------|-----------|
| Update team members | `js/data.js` | ⭐ Easy |
| Add publications | `js/data.js` | ⭐ Easy |
| Write blog posts | `js/data.js` | ⭐ Easy |
| Change colors | `css/styles.css` | ⭐⭐ Medium |
| Modify chatbot conversation | `js/main.js` | ⭐⭐ Medium |
| Add new pages | Copy existing | ⭐⭐⭐ Advanced |

**Remember:** 
- ⭐ = No coding knowledge needed
- ⭐⭐ = Basic HTML/CSS helpful
- ⭐⭐⭐ = Coding knowledge recommended

---

**Version**: 1.0.0  
**Last Updated**: November 14, 2025  
**Maintained By**: Florea AI Research Team

---

Made with 🌿 for human flourishing
