# Deploying to Vercel

Steps to deploy `angular-demo` from this repo to Vercel (free):

1. Push your repo to GitHub (you already provided: https://github.com/easyas123l11/my-nx-workspace).
2. Go to https://vercel.com and sign in with GitHub.
3. Import Project → select `easyas123l11/my-nx-workspace`.
4. In the project settings set:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/apps/angular-demo`
5. Deploy. Vercel will run `npm run build` which runs `npx nx build angular-demo --configuration=production` and publish the `dist/apps/angular-demo` folder.

Optional: CLI deploy (for a one-off):

```bash
npm i -g vercel
vercel login
# from repo root
vercel --prod
```

Notes:

- SPA routing: `vercel.json` rewrites all routes to `index.html` so client-side routes work.
- Continuous deploy: each push to the connected GitHub repo will trigger a new Vercel deployment.
- If you want automatic environment variables or secrets (e.g., API keys), add them in Vercel dashboard under Project Settings → Environment Variables.
