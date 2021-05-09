# CrossroardDevChallenge
Crossroard Developer Challenge


Build & Update NodeJs, Angular Packages
---------------------------------
1. Open Command Prompt Navigate to root folder (see) below:
  Root Folder: .....\AspMvcWarnerMedia\AspMvcWarnerMedia\Client\
  Example Prompt: C:\AspMvcWarnerMedia\AspMvcWarnerMedia\Client\>
2. Execute Command: 'ng update'


Restore ASP Mvc Solution Packages:
---------------------------------
1. Open Visual Studio 2019 or Click .....\AspMvcWarnerMedia\AspMvcWarnerMedia.sln to open solution in studio
2. Once open in Studio, right click the Solution, then click 'Restore Nuget Packages'.



Change Database Connection String:
---------------------------------
1. Goto web config 'connectionStrings' section, and modify the 'TitlesEntities' connection
  %3CconnectionStrings%3E%0A%20%20%20%20%3Cadd%20name%3D%22TitlesEntities%22%20connectionString%3D%22metadata%3Dres%3A%2F%2F%2A%2FData.MsSql.TitlesModel.csdl%7Cres%3A%2F%2F%2A%2FData.MsSql.TitlesModel.ssdl%0A%20%20%20%20%20%20%7Cres%3A%2F%2F%2A%2FData.MsSql.TitlesModel.msl%3Bprovider%3DSystem.Data.SqlClient%3Bprovider%20connection%20string%3D%26quot%3Bdata%20source%3D%28LocalDB%29%5CMSSQLLocalDB%3B%0A%20%20%20%20%20%20initial%20catalog%3DTitles%3Bintegrated%20security%3DTrue%3BMultipleActiveResultSets%3DTrue%3BApp%3DEntityFramework%26quot%3B%22%20providerName%3D%22System.Data.EntityClient%22%20%2F%3E%0A%20%20%3C%2FconnectionStrings%3E
2. Modify 'Data Source' to point to the Db Server where the Title Database is hosted.



Install 'Title' Database to MSSQLLocalDB:
---------------------------------
1. Open Studio 2019 goto SQL Server Object Explorer find right click (LocalDB)\MSSQLLocalDB server
2. Click the 'New Query' menu option
3. Run 'SeedData_Titles.txt' in the App_Data folder.

