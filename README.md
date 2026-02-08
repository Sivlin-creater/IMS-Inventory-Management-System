# 📦 Inventory Management System (IMS)

A full-stack **Inventory Management System** built using **Spring Boot (Backend)** and **Angular (Frontend)**.
The system provides secure inventory tracking, product & supplier management, authentication using JWT, and analytics dashboards.

---

## 🚀 Technologies Used

### 🔧 Backend

* Java 17
* Spring Boot 4
* Spring Web
* Spring Security (JWT Authentication)
* Spring Data JPA (Hibernate)
* MySQL Database
* Lombok
* ModelMapper
* Validation API
* JJWT (JWT API, Impl, Jackson)

### 🎨 Frontend

* Angular CLI 21
* TypeScript
* CSS
* Crypto-JS
* Chart.js
* ApexCharts
* ECharts
* 
---

## ⚙️ Backend Setup (Spring Boot)

### ✅ Step 1 — Create Project

Go to **Spring Initializr**

* Gradle (Groovy)
* Java 17
* Spring Boot 4.0.0
* Group: `com.ims`
* Artifact: `inventoryManagement`

Add Dependencies:

* Spring Web
* Spring Security
* Spring Data JPA
* MySQL Driver
* Lombok
* Validation

---

### ✅ Step 2 — Add Extra Dependencies

Add from Maven Repository:

* JJWT API
* JJWT Impl
* JJWT Jackson
* JJWT Legacy Transitive Dependency
* ModelMapper

---

### ✅ Step 3 — Configure `application.properties`

```properties
spring.application.name=InventoryManagement
server.port=8080

# MYSQL CONNECTION
spring.datasource.url=jdbc:mysql://localhost:3304/inventoryjavadb?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / HIBERNATE
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# FILE UPLOAD
spring.servlet.multipart.max-file-size=2GB
spring.servlet.multipart.max-request-size=2GB

secreteJwtString=inventdev123456789inventdev123456789
```

---

### ✅ Step 4 — Database Setup

Create database in phpMyAdmin:

```sql
CREATE DATABASE inventoryjavadb;
```

---

### ▶️ Run Backend

```bash
./gradlew bootRun
```

Backend runs on:

```
http://localhost:8080
```

---

## 🎨 Frontend Setup (Angular)

### ✅ Step 1 — Install Angular CLI

```bash
npm install -g @angular/cli
```

---

### ✅ Step 2 — Create Project

```bash
ng new ims-angular
```

Choose:

```
CSS
No SSR
```

---

### ✅ Step 3 — Install Packages

```bash
cd ims-angular

npm i crypto-js
npm install chart.js
npm install apexcharts ng-apexcharts
npm install echarts ngx-echarts
npm i --save-dev @types/crypto-js
npm install zone.js
```

---

### ✅ Step 4 — Generate Components & Services

```bash
ng g s service/api
ng g s service/guard

ng g c dashboard
ng g c profile
ng g c product
ng g c category
ng g c supplier
ng g c pagination
ng g c login
ng g c register
ng g c purchase
ng g c transaction
ng g c addEditProduct
ng g c addEditSupplier
ng g c transactionDetails
```

---

### ▶️ Run Angular App

```bash
ng serve
```

Open:

```
http://localhost:4200
```

---

## 🔐 Features

* JWT Authentication & Authorization
* Product Management
* Category Management
* Supplier Management
* Purchase & Transaction Tracking
* Dashboard Analytics
* File Upload Support
* Secure API Endpoints
* Responsive Angular UI

---

## 🧪 API Testing

Use **Postman** to test:

* Login
* Register
* Products CRUD
* Categories CRUD
* Suppliers CRUD
* Transactions

---

## 🛠️ VS Code Extensions Recommended

* Angular Language Service
* Angular Snippets
* Spring Boot Extension Pack
* Lombok Support

---

## 📌 Author

Developed by **Sivlin Chhay**

---
