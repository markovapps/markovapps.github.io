## Getting Started

### Run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## 📝 Deploy to GitHub Pages

### Deploy manually (currently configured)

In github repo setting enable Source: Deploy from brunch "gh-pages"

```bash
# generate output folder
npm run build

# push to gh-pages branch. 
npm run deploy
```

### Deploy with pipelines

1. In github repo setting enable Source: Git hub account
2. Commit and push `master` brunch

## Dependencies

```shell
# check for updates
npx npm-check-updates -u
```