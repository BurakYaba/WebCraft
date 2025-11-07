# Location Tracking Feature for Contact Form

## Overview

The contact form at `/iletisim` now automatically captures and includes location information when a user submits the form. This feature helps you understand where your leads are coming from.

## How It Works

### **IP-Based Geolocation Only**
- Automatically captures location based on the user's IP address
- **No user permission required**
- **No browser geolocation** - only IP-based tracking
- Provides:
  - IP Address
  - Country
  - Region/State
  - City
  - Timezone
  - ISP (Internet Service Provider)
  - Browser Language

### **Fallback Strategy**
- If primary API fails, tries alternative API
- If all APIs fail, still sends form (just without location)
- Form submission never fails due to location capture issues

## Location Data Included in Email

When you receive an email from the contact form, you'll see:

```
KONUM BİLGİLERİ (IP Bazlı):
IP Adresi: 123.45.67.89
Konum: Istanbul, Marmara, Turkey
Ülke Kodu: TR
Saat Dilimi: Europe/Istanbul
ISP: Turk Telekom
Dil: tr-TR
Zaman: 15.12.2024 14:30:25
```

## APIs Used

### Primary: ipapi.co
- **Free Tier**: 1,000 requests/day
- **No API key required**
- **Rate Limit**: 1,000/day
- **Data**: IP, country, city, region, timezone, ISP

### Fallback: ip-api.com
- **Free Tier**: 45 requests/minute
- **No API key required**
- **Rate Limit**: 45/minute
- **Data**: Similar to ipapi.co

## Privacy Considerations

1. **IP Address**: Captured automatically (standard web practice)
2. **No Browser Location**: We do NOT request browser geolocation - only IP-based location
3. **No Permission Required**: IP-based location works without user permission
4. **No Personal Data**: Only location data, no personal information beyond what user provides in form
5. **GDPR Compliant**: Location data is only used for business communication purposes

## EmailJS Template Variables

The following variables are available in your EmailJS template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{location_info}}` | Formatted location string | "IP Adresi: 123.45.67.89\nKonum: Istanbul, Turkey..." |
| `{{location_ip}}` | IP Address | "123.45.67.89" |
| `{{location_country}}` | Country Name | "Turkey" |
| `{{location_country_code}}` | Country Code | "TR" |
| `{{location_region}}` | Region/State | "Marmara" |
| `{{location_city}}` | City Name | "Istanbul" |
| `{{location_timezone}}` | Timezone | "Europe/Istanbul" |
| `{{location_isp}}` | ISP Name | "Turk Telekom" |

## Updating Your EmailJS Template

1. Go to your EmailJS dashboard
2. Open your email template
3. Add the location section using the variables above
4. See `EMAILJS_SETUP.md` for the complete template example

## Testing

1. Fill out the contact form at `/iletisim`
2. Submit the form
3. Check your email - you should see location information included
4. Check browser console for location data logs

## Troubleshooting

### Location data not appearing in email
- Check that you've updated your EmailJS template with the new variables
- Check browser console for errors
- Verify API is not rate-limited

### "Konum bilgisi alınamadı" message
- IP geolocation APIs may be temporarily unavailable
- User may be behind VPN/proxy (location may be inaccurate)
- Form will still submit successfully

### Browser location not available
- Browser geolocation is NOT used - only IP-based location
- If you see this message, it means IP geolocation failed

## Rate Limits

- **ipapi.co**: 1,000 requests/day (free tier)
- **ip-api.com**: 45 requests/minute (free tier)

For high-traffic sites, consider:
- Upgrading to paid tier
- Implementing caching
- Using your own IP geolocation service

## Security

- Location data is only sent in the email to you
- No location data is stored on the server
- IP addresses are standard web data (captured by all websites)
- Browser location requires explicit user permission

## Future Enhancements

Possible improvements:
- Add location data to analytics
- Store location data in database
- Add location-based routing (different emails for different countries)
- Add map visualization in admin panel

