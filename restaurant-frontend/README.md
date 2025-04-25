# Restaurant Manager Frontend

This is the React + TypeScript frontend for the Restaurant Manager demo project. It allows basic operations like adding and viewing restaurant tables.

## 📁 Folder Structure
```
restaurant-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.test.js
├── tests/
├── coverage/
├── test-results/
├── package.json
```

## 📄 Key Files & Folders

| Path | Purpose |
|------|---------|
| `src/components/` | Reusable UI components |
| `src/pages/` | Page-level views (e.g., AddTable, ViewTable) |
| `src/services/` | Axios-based API handlers |
| `src/App.test.js` | Sample Jest test for the main app |
| `tests/` | Optional folder for additional tests |
| `coverage/` | Istanbul coverage reports |
| `test-results/` | Allure test output directory |

## 🛠️ Setup Instructions

```bash
cd restaurant-frontend
npm install
```

## ✅ Available Scripts
```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Generate Allure-compatible results
npm run test:allure

# Start frontend app
npm start
```

## 📊 Code Coverage (Istanbul)
- Generates coverage in `/coverage`
- Uses Jest and `react-scripts test --coverage`

## 📋 Allure Reporting
- Outputs raw results to `allure-results`
- Run `allure generate` to produce a visual report

## 📦 CI/CD Integration
- GitHub Actions pipeline set up in `.github/workflows/frontend-test-pipeline.yml`
- Uploads coverage + Allure reports for every PR

---

For backend APIs and coverage tracking, refer to [restaurant-backend](../restaurant-backend/README.md).
