# Vercel Deployment Guide

This guide explains how to deploy your Next.js application to Vercel.

## Prerequisites

- A GitHub/GitLab/Bitbucket repository with your code
- A Vercel account (free at [vercel.com](https://vercel.com))

## Automatic Deployment (Recommended)

### 1. Push your code to a Git repository

Make sure your project is committed and pushed to your preferred Git provider:

```bash
git add .
git commit -m "Set up Vercel deployment configuration"
git push origin main
```

### 2. Import your project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### 3. Configure Environment Variables (if needed)

If your app uses environment variables:
1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add your production environment variables
4. Redeploy if necessary

## Manual Deployment

You can also deploy directly using the Vercel CLI:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

## Configuration Files

This project includes optimized configuration files:

### `vercel.json`
- Specifies build commands and runtime settings
- Configures function runtime for API routes
- Sets deployment region preferences

### `next.config.ts`
- Optimized for production with standalone output
- Includes security headers
- Configured for optimal image optimization

## Environment Variables

Create these environment variables in your Vercel dashboard:

- `NEXT_PUBLIC_APP_URL`: Your app's production URL
- Add any API keys or database URLs your app requires

## Build Commands

The project uses these commands for deployment:
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Development**: `npm run dev`

## Post-Deployment

After successful deployment:

1. Vercel will provide you with a URL (e.g., `your-app.vercel.app`)
2. Set up custom domains if desired
3. Configure analytics and monitoring
4. Set up branch previews for staging deployments

## Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Runtime Errors
- Check function logs in Vercel dashboard
- Ensure API routes are properly configured
- Verify database connections (if applicable)

## Performance Tips

- The configuration includes image optimization
- Security headers are automatically applied
- Standalone output mode reduces deployment size
- Consider enabling Vercel Analytics for insights

## Support

For issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Visit [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Contact Vercel support if needed
