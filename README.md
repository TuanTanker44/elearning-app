# elearning-app

Với stack:

Node.js + Express
pnpm
Monolith MVC
MySQL + pool connection
(view hoặc API + frontend tùy bạn chọn)

## 1.Tạo thư mục dự án

Khởi tạo package: sử dụng pnpm là package manager

```cmd
pnpm init
```

## 2.Dependencies

core:

- express
- dotenv
- mysql2

middleware:

- cors
- helmet
- morgan
- cookie-parser
- express-session

dev:

- nodemon

## 3.Project structure

elearning-app/
│
├── src/
│ │
│ ├── app.js
│ ├── server.js
│ │
│ ├── config/
│ │ └── database.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── course.routes.js
│ │ └── user.routes.js
│ │
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── course.controller.js
│ │ └── user.controller.js
│ │
│ ├── models/
│ │ ├── user.model.js
│ │ ├── course.model.js
│ │ └── lesson.model.js
│ │
│ ├── services/
│ │ ├── auth.service.js
│ │ └── course.service.js
│ │
│ ├── middleware/
│ │ ├── auth.middleware.js
│ │ └── error.middleware.js
│ │
│ ├── views/
│ │ ├── layouts/
│ │ ├── auth/
│ │ ├── courses/
│ │ └── dashboard/
│ │
│ └── public/
│ ├── css/
│ ├── js/
│ └── images/
│
├── .env
├── .gitignore
├── package.json
└── pnpm-lock.yaml

## 4.Scripts

dev:

```cmd
pnpm dev
```
