#DB Context

Generating database context can be done by using database first and then update edmx to generate data models which will connect controllers with the database entities.

For more information see [here](https://docs.microsoft.com/en-us/ef/ef6/modeling/designer/workflows/database-first).

#Controllers

Adding Controllers can be done by using Using Web API 2 with Entity Framework 6

For more information see [here](https://docs.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-1).

#Database enums

Adding enums can be done by using enum class

For more information see [here](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum).

#Application technology details

The front-end part has been build using JavaScript framework named Angular 9,TypeScript,HTML5,SCSS and Bootstrap.

The back-end has been build using C#,.NET Framework.

Entity Framework is used to connect database with back-end API codes:

Entity Framework is an open-source ORM framework for .NET applications supported by Microsoft.
It enables developers to work with data using objects of domain specific classes without focusing on the underlying database tables and columns where this data is stored.
With the Entity Framework, developers can work at a higher level of abstraction when they deal with data, and can create and maintain data-oriented applications with less code compared with traditional applications.

#Database

SQL SERVER:

SQL Server is a relational database management system (RDBMS) developed and marketed by Microsoft.
As a database server, the primary function of the SQL Server is to store and retrieve data used by applications which has been built on the top of it.

#API INTEGRATION

The backend and frontend has been intergrated by attaching their ports with the installation of CORS and enabling CORS inside the the WebApiConfig.cs file.

#User Manual

 User(Admin or Normal both) can login the web portal using the google authentication anfd those details has been pushed to
 database.
 The Admin users has to be set inside the database before the application start because when user login the portal 
 the application get to know the level of access user have.

