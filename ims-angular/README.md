Inventory Management System
Go to Spring Initializr link to download the Gradle-Groovy, Java, 4.0.0, com.ims, inventory Management System Home, Jar, properties, 17, add dependency: Spring Web, Lombok, Validation, Spring Security, Spring Data JPA, MySQL Driver, 
Go to website: Maven Repository: Search/Browse/Explore to copy dependency into pom.xml :  JJWT::Legacy Transitive Dependency Jar, JJWT::API, JJWT::Impl, JJWT::Extension::Jackson, org.modelmapper>>ModelMapper
Edit application.properties: spring.application.name=InventoryManagement
server.port=8080

# ==============================
# MYSQL CONNECTION
# ==============================
spring.datasource.url=jdbc:mysql://localhost:3304/inventoryjavadb?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# ==============================
# JPA / HIBERNATE
# ==============================
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# ==============================
# FILE UPLOAD
# ==============================
spring.servlet.multipart.max-file-size=2GB
spring.servlet.multipart.max-request-size=2GB
secreteJwtString=inventdev123456789inventdev123456789

create database in phpMyAdmin
then config in the folder config file:ModelMapperConfig ->enums ->entities ->repositories ->dto ->exceptions ->secutiry setup ->service -> controllers ->test endpoints with Postman
Create Frontend with angular with commands: npm install -g @angular/cli, ng new ims-angular(Choose CSS N), cd ims-angular, npm i crypto-js, npm install chart.js, npm install apexcharts ng-apexcharts, npm install echarts ngx-echarts
Test the Angular: ng serve, N,  localhost:4200/
Inside the ims-angular run commands: ng g s service/api, ng g s service/guard, ng g c dashboard, ng g c profile, ng g c product, ng g c category, ng g c supplier, ng g c pagination, ng g c login, ng g c register, ng g c purchase, ng g c transaction, ng g c addEditProduct, ng g c addEditSupplier, ng g c transactionDetails, 
npm i --save-dev @types/crypto-js, 
install the Angular Language Service and Angular Snippets in Visual Studio Codes

giv eme the README file

# ImsAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

install zone.js