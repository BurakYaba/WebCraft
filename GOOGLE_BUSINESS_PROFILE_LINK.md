# How to Get Your Google Business Profile Link

## Steps to Get Your Google Business Profile (Google My Business) URL:

### Method 1: From Google My Business Dashboard

1. **Sign in to Google My Business**
   - Go to [business.google.com](https://business.google.com)
   - Sign in with the account that manages your business

2. **Get Your Business Profile Link**
   - Once logged in, click on your business name
   - Click on **"Manage"** or **"Get started"**
   - In the left sidebar, click on **"Home"**
   - Scroll down to find **"Share your Business Profile"** section
   - Click **"Share profile"** button
   - You'll see a link that looks like: `https://www.google.com/maps/place/Your+Business+Name/@lat,long`

3. **Alternative: Direct Link Format**
   - If you know your Place ID, you can use: 
   - `https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID`

### Method 2: From Google Maps

1. **Search for Your Business on Google Maps**
   - Go to [google.com/maps](https://www.google.com/maps)
   - Search for your business name and location

2. **Open Your Business Profile**
   - Click on your business listing
   - Click on **"Share"** button
   - Copy the link

### Method 3: Find Your Place ID

1. **Use Google Place ID Finder**
   - Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Enter your business address
   - Your Place ID will be displayed
   - Use this format: `https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID`

## Update the Component

Once you have your Google Business Profile link, update it in:

**File:** `src/components/GoogleReviewsBadge.tsx`

**Line 6:** Change the default URL:
```typescript
googleBusinessUrl = "https://www.google.com/maps/place/YOUR_ACTUAL_BUSINESS_PROFILE",
```

**Or** pass it as a prop in `src/components/HeroSection.tsx`:
```typescript
<GoogleReviewsBadge 
  reviewCount={50} 
  rating={4.9}
  googleBusinessUrl="https://www.google.com/maps/place/YOUR_ACTUAL_BUSINESS_PROFILE"
/>
```

## Important Notes:

- The link should point directly to your Google Business Profile
- Make sure your business is verified on Google My Business
- The link format should be: `https://www.google.com/maps/place/[Your-Business-Name]/@[latitude],[longitude]`
- You can also use Place ID format for a more stable URL

