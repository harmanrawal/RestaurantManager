# Restaurant Manager Backend

This is the Node.js + TypeScript backend for the Restaurant Manager demo project. It provides APIs for managing tables in a restaurant.

## Features
- User authentication and authorization
- CRUD operations for menu items, orders, and reservations
- **Add Table**: API to add a new table to the restaurant (tested)
- **View Table**: API to fetch details of all tables (tested)
- Integration with a database (SQLite)
- Error handling and logging

## 📁 Folder Structure
```
restaurant-backend/
├── src/
│   ├── controller/
│   ├── dto/
│   ├── entity/
│   ├── repository/
│   ├── service/
│   └── main.ts
├── tests/
├── coverage/
├── package.json
├── tsconfig.json
└── jest.config.js
```

## 📄 Key Files & Folders

| Path | Purpose |
|------|---------|
| `src/controller/` | Route handlers for REST APIs |
| `src/service/` | Business logic layer |
| `src/dto/` | Data transfer object definitions |
| `src/entity/` | Database models |
| `src/repository/` | DB interaction layer |
| `src/main.ts` | App entry point |
| `tests/` | Unit tests using Jest |
| `coverage/` | Istanbul test coverage output |

## 🛠️ Setup Instructions

```bash
cd restaurant-backend
npm install
```

## ✅ Available Scripts

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Generate Allure-compatible results
npm run test:allure

# Serve the app (if applicable)
npm start
```

## 📊 Code Coverage (Istanbul)
- Generates coverage reports in `/coverage`
- Uses `jest --coverage` under the hood

## 📋 Allure Reporting
- Test results output to `allure-results`
- Run `allure generate` to create the report

## 📦 CI/CD Integration
- Integrated with GitHub Actions
- Allure and coverage are uploaded as artifacts

---

For any updates related to frontend setup or shared documentation, see [restaurant-frontend](../restaurant-frontend/README.md).
