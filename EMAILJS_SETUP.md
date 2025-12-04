# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (starts with "service\_")

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** Yeni İletişim Formu Mesajı - {{from_name}}

**Content:**

```
Yeni bir iletişim formu mesajı aldınız:

Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Şirket: {{company}}
Hizmet Türü: {{service}}

Mesaj:
{{message}}

---
KONUM BİLGİLERİ (IP Bazlı):
{{location_info}}

Detaylı Konum:
- IP Adresi: {{location_ip}}
- Ülke: {{location_country}} ({{location_country_code}})
- Bölge: {{location_region}}
- Şehir: {{location_city}}
- Saat Dilimi: {{location_timezone}}
- ISP: {{location_isp}}

---
Bu mesaj WebCraft web sitesinden gönderilmiştir.
Gönderen: {{from_email}}
Yanıtla: {{reply_to}}
```

**Important:** In your EmailJS template settings, make sure to:

1. Set "To Email" field to: `{{to_email}}`
2. Set "Reply To" field to: `{{reply_to}}`
3. This ensures emails go to brkyaba@gmail.com instead of your account email

4. Save the template and copy your **Template ID** (starts with "template\_")

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Form

1. Restart your development server
2. Go to http://localhost:3000/iletisim
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your email service is properly configured
- Verify the template variables match the form fields
- Check browser console for any errors

## Free Tier Limits

- 200 emails per month
- Perfect for small to medium businesses
- No credit card required
