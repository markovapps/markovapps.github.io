## Getting Started

### Run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Update app-ads.txt
1. On platform.cas.ai (Applications → APP-ADS status → Full file) download the file
   for the iOS and for the Android account and put both into the `app-ads.txt/` folder
   (git-ignored). File names must contain `ios` / `android`.
2. Run the sync — it replaces the CAS.ai section of `public/app-ads.txt`:
   ```shell
   npm run app-ads-sync
   ```
3. Commit and push `public/app-ads.txt`.
4. Build & deploy:
   ```shell
   npm run release
   ```



## 📝 Deploy to GitHub Pages

### Deploy manually (currently configured)

In github repo setting enable Source: Deploy from brunch "gh-pages"

```bash
# build & deploy
npm run release # build & deploy

# generate output folder
npm run build

# push to gh-pages branch. 
npm run deploy
```

### Deploy with pipelines (doesn't work)

1. in nextjs.yaml uncomment branches: ["master"]
2. In github repo setting enable Source: Git hub account
3. Commit and push `master` brunch

## Dependencies

```shell
# check for updates
npx npm-check-updates -u
```