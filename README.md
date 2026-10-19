# LAB2PUB2MKT 網站

以 Astro 與 TypeScript 製作的繁體中文靜態網站，可透過 GitHub Actions 免費部署到 GitHub Pages。此專案不需要後端、資料庫、登入功能或付費主機。

## 1. 安裝必要工具

1. 若要在自己的電腦預覽網站，請從 [Node.js 官方網站](https://nodejs.org/)下載並安裝 LTS 版本。只用 GitHub Pages 部署時，不必在自己的電腦安裝 Node.js；GitHub Actions 會在雲端建置。
2. 安裝完成後，關閉並重新開啟 PowerShell 或 VS Code 終端機。
3. 輸入以下指令；兩行都顯示版本號，才代表安裝完成：

   ```powershell
   node --version
   npm --version
   ```

4. 安裝 [Git for Windows](https://git-scm.com/download/win)，之後才能把網站版本上傳到 GitHub。

## 2. 在自己的電腦預覽

1. 在 PowerShell 輸入下列指令，切換到網站資料夾：

   ```powershell
   cd "G:\我的雲端硬碟\AI\VSCODE\LAB2PUB2MKT-site"
   ```

2. 第一次使用時安裝網站依賴：

   ```powershell
   npm install
   ```

3. 啟動本機預覽：

   ```powershell
   npm run dev
   ```

4. 按住 Ctrl 並點選終端機顯示的 `http://localhost:4321/`，或把網址貼到瀏覽器。
5. 預覽結束時，先點回終端機，再按 Ctrl+C。
6. 發布前檢查正式版本：

   ```powershell
   npm run build
   ```

   成品會輸出到 `dist` 資料夾；不需要手動上傳這個資料夾到 GitHub。

## 3. 建立 GitHub 儲存庫並上傳

1. 到 [GitHub](https://github.com/)建立自己的帳戶，並登入。
2. 選擇新增儲存庫，名稱輸入 `LAB2PUB2MKT-VS`。選擇 **Public**，並且**不要**先勾選自動建立 README、授權條款或範例檔案，因為本資料夾已經有 README。這會建立獨立的專案網站，不會取代你帳號的其他 GitHub Pages 網站。
3. 建立後，GitHub 會顯示儲存庫網址。先保持此頁開啟。
4. 在網站資料夾的 PowerShell 依序輸入以下指令。把最後一行的 `你的帳號/你的儲存庫` 換成 GitHub 顯示的實際路徑：

   ```powershell
   git init
   git add .
   git commit -m "建立研究轉譯網站"
   git branch -M main
   git remote add origin https://github.com/你的帳號/你的儲存庫.git
   git push -u origin main
   ```

5. 如果 Git 提示尚未設定作者姓名或電子郵件，請依 GitHub 帳戶使用方式設定。需要登入時，請在 GitHub 或 Git Credential Manager 的官方視窗自行完成；不要把密碼或權杖貼到程式碼、README 或公開對話。
6. 之後每次更新網站，完成修改後在 PowerShell 輸入：

   ```powershell
   git add .
   git commit -m "描述這次更新"
   git push
   ```

## 4. 啟用 GitHub Pages

1. 在 GitHub 儲存庫開啟 **Settings > Pages**。
2. 在 **Build and deployment** 的 **Source** 選擇 **GitHub Actions**。
3. 確認網站檔案已推送到 `main` 分支。`.github/workflows/deploy.yml` 會自動在 GitHub 的建置環境安裝 Node.js、建置 Astro，並發布 `dist` 資料夾。
4. 到儲存庫的 **Actions** 分頁查看 `Deploy Astro to GitHub Pages` 工作流程。完成後，在 **Settings > Pages** 開啟 `https://你的GitHub帳號.github.io/LAB2PUB2MKT-VS/` 網址。

之後每次把新版本推送到 `main` 分支，GitHub Actions 會自動重新建置與部署。一般部署不需本機安裝 Node.js；本機預覽才需要。

## 5. 網站正式上線前要補的內容

- 在 [專家團隊頁面](src/pages/expert-team.astro)加入本人確認過的資料，並先取得照片使用同意。
- 在 [推薦回饋頁面](src/pages/testimonials.astro)取得推薦者的刊載授權後，才加入原文與署名方式。
- 在 [案例頁面](src/pages/featured-cases.astro)以已核對且獲准公開的真實資料取代情境草稿；未核實前請保留明確的草稿標示。
- 在 [聯絡方式頁面](src/pages/contact.astro)補上團隊實際使用且同意公開的聯絡管道。現在沒有表單或收件功能。
- 網站照片來自 Unsplash：[研究實驗室照片](https://images.unsplash.com/photo-1579154204601-01588f351e67)與[工作坊照片](https://images.unsplash.com/photo-1521737711867-e3b97375f902)。公開前請確認圖片來源頁與當時適用的授權條款。
- 部署流程會依 GitHub 帳號自動設定網站網址、sitemap 與 robots.txt；`LAB2PUB2MKT-VS` 是獨立專案路徑，若更改儲存庫名稱，需同步修改 `.github/workflows/deploy.yml` 的 `BASE_PATH`。
- 更新文章時，在 [insight 文章資料夾](src/content/insight/)新增 Markdown 檔，並提供 `title`、`description`、`pubDate` 三項資料。文章不保證搜尋或人工智慧服務排名。

## 免費方案與自訂網域

GitHub Pages 可免費託管公開儲存庫中的靜態網站，這個專案的網址格式為 `你的GitHub帳號.github.io/LAB2PUB2MKT-VS/`。使用自己的網址（例如 `example.com`）通常需要另外向網域註冊商購買並定期續費；網域註冊費不包含在免費託管中。GitHub 帳戶、儲存庫與網域需由你自行建立或管理；本專案不會替你建立帳戶或代為部署。