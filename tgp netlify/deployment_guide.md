# Netlify Deployment Guide for TGP Jewellers Form

## Complete File Structure

Your project should have the following files:

```
tgp-jewellers-form/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
├── package.json        # Node.js dependencies
├── _headers            # Headers configuration
├── 404.html            # Custom 404 page
├── robots.txt          # SEO crawler instructions
├── sitemap.xml         # SEO sitemap
└── README.md           # Documentation
```

## Step-by-Step Deployment

### Method 1: Drag and Drop (Easiest)

1. **Prepare Files:**
   - Create a folder with all the files above
   - Make sure `index.html` is in the root directory

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Drag your project folder to the deploy area
   - Wait for deployment to complete

### Method 2: Git Integration (Recommended)

1. **Setup Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/yourusername/tgp-jewellers-form.git
   git push -u origin main
   ```

3. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are handled by `netlify.toml`

### Method 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy
   netlify deploy --prod
   ```

## Pre-Deployment Checklist

- [ ] All files are in the correct directory
- [ ] `index.html` is in the root folder
- [ ] Google Apps Script URL is correctly set in `script.js`
- [ ] Social media links are updated in `index.html`
- [ ] Logo URL is working
- [ ] Form validation is working
- [ ] Responsive design is tested
- [ ] All external CDN links are working

## Important Configuration Notes

### 1. Update URLs in sitemap.xml
Replace `https://your-site-url.netlify.app/` with your actual Netlify URL

### 2. Update Google Apps Script URL
In `script.js`, update the `SCRIPT_URL` variable with your Google Apps Script web app URL

### 3. Test Form Submission
After deployment, test the form submission to ensure it works with your Google Apps Script

## Security Features Included

- Content Security Policy (CSP) headers
- XSS protection
- Frame options to prevent clickjacking
- Referrer policy for privacy
- Permission policies for browser features

## Performance Optimizations

- Efficient caching strategies
- Optimized CSS and JavaScript
- Compressed assets
- Fast loading times

## SEO Features

- Proper meta tags
- Sitemap for search engines
- Robots.txt for crawler instructions
- Semantic HTML structure

## Custom Domain Setup (Optional)

1. **Purchase Domain:**
   - Buy a domain from any registrar

2. **Configure DNS:**
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain
   - Update DNS records at your registrar

3. **SSL Certificate:**
   - Netlify provides free SSL certificates
   - Enable HTTPS redirect in settings

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to Netlify dashboard
2. Site settings → Environment variables
3. Add variables as needed

## Form Submissions

### Current Setup (Google Apps Script)
- Form submits to Google Apps Script
- No server-side processing needed
- Data is stored in Google Sheets

### Alternative: Netlify Forms
To use Netlify Forms instead:

1. Add `netlify` attribute to form tag
2. Add hidden input: `<input type="hidden" name="form-name" value="customer-form">`
3. Remove Google Apps Script code

## Troubleshooting

### Common Issues:

1. **Form not submitting:**
   - Check Google Apps Script URL
   - Verify CORS settings in Google Apps Script

2. **CSS/JS not loading:**
   - Check file paths
   - Verify external CDN links

3. **404 errors:**
   - Ensure `index.html` is in root directory
   - Check `netlify.toml` publish directory

4. **Build failures:**
   - Check `netlify.toml` syntax
   - Verify all files are present

## Monitoring and Analytics

### Netlify Analytics
- Built-in analytics available
- View in Netlify dashboard

### Google Analytics (Optional)
Add Google Analytics tracking code to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Maintenance

### Regular Updates:
- Test form submission monthly
- Update dependencies if needed
- Monitor site performance
- Check for broken links

### Backup Strategy:
- Keep code in version control (Git)
- Export form data regularly
- Document any custom changes

## Support

If you encounter issues:
1. Check Netlify deploy logs
2. Test locally first
3. Review browser console for errors
4. Check Google Apps Script logs

---

Your TGP Jewellers form is now ready for professional deployment on Netlify! 🚀