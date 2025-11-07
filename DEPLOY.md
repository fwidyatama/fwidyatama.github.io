# Deploy to GitHub Pages (Private Repo)

## ⚠️ Important Note

If you have a special profile repository (`username/username`), that's different from `username.github.io`.

## Setup Instructions

### Option 1: Use `username.github.io` domain (Recommended)
To use `fwidyatama.github.io` as your domain:

1. **Create a new repository** with exact name: `fwidyatama.github.io`
   - Go to GitHub → New repository
   - Repository name: `fwidyatama.github.io` (must be exact!)
   - Make it **private** if you want (works with GitHub Actions)
   - **Don't** initialize with README

2. The site will be available at: `https://fwidyatama.github.io/`

### Option 2: Use subdirectory (e.g., `fwidyatama.github.io/portfolio`)
1. Create a repository with any name (e.g., `portfolio`)
2. The site will be available at: `https://fwidyatama.github.io/portfolio/`

### 1. Push your code to GitHub

### 2. Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Update Base URL (if needed)
If your repo name is NOT `username.github.io`, the workflow will automatically set the base path.

If you want to use a custom domain or different base path, update the `BASE_URL` in `.github/workflows/deploy.yml`:
```yaml
BASE_URL: /your-repo-name/
```

For root domain (username.github.io), use:
```yaml
BASE_URL: /
```

### 4. Deploy
- Push to `main` branch → automatic deployment
- Or manually trigger via **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

### 5. Access your site
Your site will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` (if repo name is not username.github.io)
- `https://YOUR_USERNAME.github.io/` (if repo name is username.github.io)

## Notes
- ✅ Works with **private repos** (free)
- ✅ Automatic deployment on push to main
- ✅ Manual deployment option available
- The workflow builds your Vite app and deploys to GitHub Pages

