# Vercel Speed Insights Setup Guide for Angular

This project has been configured with Vercel Speed Insights to monitor and track your web performance metrics.

## What's Implemented

### 1. Package Installation
The `@vercel/speed-insights` package has been added to `package.json` as a dependency.

### 2. Integration in Angular
The Speed Insights tracking has been integrated into the main Angular application component (`src/app/app.component.ts`) using the `injectSpeedInsights()` function.

**Location:** `src/app/app.component.ts`

```typescript
import { injectSpeedInsights } from '@vercel/speed-insights';

export class AppComponent implements OnInit {
  ngOnInit() {
    // Initialize Vercel Speed Insights
    injectSpeedInsights();
  }
}
```

This function is called in the `ngOnInit()` lifecycle hook to ensure it runs once when the application initializes.

## How It Works

1. **Client-side Tracking**: The `injectSpeedInsights()` function injects a tracking script that monitors Web Vitals metrics.
2. **Data Collection**: The script collects performance data such as:
   - Core Web Vitals (LCP, FID, CLS)
   - Page load metrics
   - Navigation timing
   - Resource timing

3. **Data Transmission**: After your app is deployed to Vercel, metrics are automatically sent to the Vercel Analytics dashboard.

## Prerequisites

- A Vercel account ([sign up here](https://vercel.com/signup))
- A Vercel project ([create one here](https://vercel.com/new))
- Speed Insights enabled in your Vercel project dashboard

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Enable Speed Insights in Vercel Dashboard
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Speed Insights** tab
4. Click **Enable** to activate Speed Insights

### 3. Build and Deploy
```bash
npm run build
vercel deploy
```

Or if your repository is connected to Vercel:
```bash
git push origin main
```

## Viewing Your Metrics

Once your app is deployed and users have visited your site:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Speed Insights** tab
4. After a few days of visitor data, you'll be able to explore your metrics

## Optional: Custom Configuration

You can customize Speed Insights behavior by adding a `beforeSend` callback:

```typescript
declare global {
  interface Window {
    speedInsightsBeforeSend?: (data: any) => any;
  }
}

// In your app initialization
window.speedInsightsBeforeSend = (data) => {
  // Remove sensitive information from URLs if needed
  if (data.url) {
    // Sanitize URL
  }
  return data;
};
```

## Next Steps

- Monitor your Web Vitals in the Vercel Dashboard
- Optimize performance based on insights provided
- Learn more: [Using Vercel Speed Insights](https://vercel.com/docs/speed-insights/using-speed-insights)
- Check [pricing and limits](https://vercel.com/docs/speed-insights/limits-and-pricing)
- View [troubleshooting guide](https://vercel.com/docs/speed-insights/troubleshooting)

## Documentation

- [Speed Insights Package Documentation](https://vercel.com/docs/speed-insights/package)
- [Web Vitals Metrics](https://vercel.com/docs/speed-insights/metrics)
- [Privacy and Compliance](https://vercel.com/docs/speed-insights/privacy-policy)
