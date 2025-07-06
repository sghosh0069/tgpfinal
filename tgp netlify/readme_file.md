# TGP Jewellers Customer Welcome Form

A responsive customer welcome form for TGP Jewellers built with HTML, CSS, and JavaScript. The form collects customer information and preferences for jewelry products.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Client-side validation with real-time error messages
- **Material Selection**: Dynamic form sections based on material choice (Gold/Silver)
- **Gold Purity Options**: Conditional fields for gold purity selection
- **Multi-select Interests**: Customers can select multiple jewelry categories
- **Contact Preferences**: Flexible contact method selection
- **Social Media Integration**: Links to Instagram, Facebook, and WhatsApp
- **Modern UI**: Clean, professional design with smooth animations

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome icons
- Google Apps Script (for form submission)

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
├── package.json        # Node.js dependencies
├── README.md           # This file
└── _headers            # Additional headers configuration
```

## Setup Instructions

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   npx serve .
   ```

### Netlify Deployment

1. **Manual Deployment:**
   - Drag and drop the project folder to [Netlify](https://netlify.com)
   - Or zip the files and upload

2. **Git Integration:**
   - Push code to GitHub/GitLab/Bitbucket
   - Connect repository to Netlify
   - Netlify will automatically deploy

3. **Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   netlify deploy --prod
   ```

## Configuration

### Form Submission
The form currently uses Google Apps Script for submission. Update the `SCRIPT_URL` in `script.js` with your Google Apps Script web app URL.

### Customization
- **Colors**: Modify the color scheme in `style.css`
- **Logo**: Replace the logo URL in `index.html`
- **Social Links**: Update social media URLs in `index.html`
- **Form Fields**: Add or remove fields as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS and JavaScript
- Efficient form validation
- Responsive images
- Smooth animations
- Fast loading times

## Security

- Input validation and sanitization
- CSRF protection via Google Apps Script
- XSS prevention
- Secure headers configuration

## Deployment Checklist

- [ ] Test form functionality
- [ ] Verify responsive design
- [ ] Check social media links
- [ ] Confirm Google Apps Script URL
- [ ] Test form submission
- [ ] Validate HTML/CSS
- [ ] Optimize images
- [ ] Check browser compatibility

## License

MIT License - see LICENSE file for details

## Support

For support or questions, contact TGP Jewellers through:
- Website: [Your Website]
- Email: [Your Email]
- Phone: [Your Phone]

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ for TGP Jewellers