# Veshant Singh Dahiya - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and advanced SEO optimization.

## 🌐 Live Site
**[veshant.in](https://veshant.in)**

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, CSS Modules
- **Fully Responsive**: Desktop, tablet, and mobile optimized
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap
- **Performance**: Optimized images, code splitting, fast loading
- **Accessibility**: WCAG compliant, keyboard navigation
- **PWA Ready**: Web app manifest, service worker support

## 🎯 SEO Implementation

This portfolio includes comprehensive SEO optimization:

### Meta Tags & Open Graph
- Dynamic meta titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Canonical URLs
- Language and region targeting

### Structured Data (JSON-LD)
- Person schema markup
- Organization information
- Skills and expertise data
- Contact information

### Technical SEO
- Robots.txt configuration
- XML Sitemap generation
- Favicon and app icons
- Mobile-first indexing ready
- Core Web Vitals optimized

### Files Generated
- `robots.txt` - Search engine crawling rules
- `sitemap.xml` - Dynamic sitemap generation
- `manifest.json` - PWA configuration
- Multiple icon sizes for different devices
- Open Graph images for social sharing

## 🛠️ Setup Instructions

### 1. Clone and Install
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and update the values:
```bash
cp .env.example .env.local
```

### 3. SEO Configuration

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (veshant.in)
3. Get your verification code
4. Update verification codes in `app/layout.tsx`

#### Social Media
Update the social media links in:
- `app/layout.tsx` (structured data)
- `components/Contact.tsx` (contact links)

### 4. Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 5. Deploy to Vercel

#### Automatic Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with custom domain (veshant.in)

#### Custom Domain Setup
1. Add custom domain in Vercel dashboard
2. Update DNS records to point to Vercel
3. Enable HTTPS (automatic with Vercel)

## 🔍 SEO Checklist

- ✅ Title tags optimized for each page
- ✅ Meta descriptions under 160 characters
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD) implemented
- ✅ Robots.txt configured
- ✅ XML sitemap generated
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ HTTPS enabled
- ✅ Favicon and app icons
- ✅ Canonical URLs
- ✅ Semantic HTML structure

## 📊 Performance Monitoring

### Tools to Use
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://web.dev/measure/)

### Key Metrics to Monitor
- **Core Web Vitals**: LCP, FID, CLS
- **Performance Score**: 90+ target
- **SEO Score**: 100 target
- **Accessibility Score**: 90+ target

## 🚦 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## 📈 After Deployment

1. **Google Search Console**: Submit sitemap, monitor indexing
2. **PageSpeed Insights**: Monitor Core Web Vitals
3. **Rich Results Test**: Verify structured data
4. **Social Media**: Test sharing previews

## 📞 Contact

**Veshant Singh Dahiya**
- Website: [veshant.in](https://veshant.in)
- Email: veshantdahiya@gmail.com
- LinkedIn: [veshant-dahiya](https://linkedin.com/in/veshant-dahiya)
- GitHub: [xcress](https://github.com/xcress)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
