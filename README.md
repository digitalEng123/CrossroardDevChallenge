# CrossroardDevChallenge

Crossroard Developer Challenge - Coding Test


Author
-----------------------------------
Willie Johnson Jr


Project Requirements
------------------------------------
1. Crossroad Dev Test_00001.png
2. Developer Challenge.pdf


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

&lt;connectionStrings&gt;
    &lt;add name=&quot;TitlesEntities&quot; connectionString=&quot;metadata=res://*/Data.MsSql.TitlesModel.csdl|res://*/Data.MsSql.TitlesModel.ssdl|res://*/Data.MsSql.TitlesModel.msl;provider=System.Data.SqlClient;provider connection string=&amp;quot;data source=(LocalDB)\MSSQLLocalDB;initial catalog=Titles;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&amp;quot;&quot; providerName=&quot;System.Data.EntityClient&quot; /&gt;
  &lt;/connectionStrings&gt;
  
2. Modify 'Data Source' to point to the Db Server where the Title Database is hosted.



Install 'Title' Database to MSSQLLocalDB:
---------------------------------
1. Open Studio 2019 goto SQL Server Object Explorer find right click (LocalDB)\MSSQLLocalDB server
2. Click the 'New Query' menu option
3. Run 'SeedData_Titles.txt' in the App_Data folder.

