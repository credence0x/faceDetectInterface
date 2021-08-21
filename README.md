# face-detect-interface
Hey there :wave: :grinning:. <br><br>
This is the first of two parts of a loosely coupled application.

It is a face detection application and consists of;<br>
      <br>a) an interface that the user communicates with (this past)
      <br>b) a machine learning function that interpretes the images sent by the interface.
<br><br>
 
This part is the interface the user communicates with directly. It has a user model that stores user information and authenticates the user in this app and through an api function from the other (django function) app.
<br>
<br>
The interface will primarily communicate with the machine learning model (the second part) through api calls and will display the results after being analysed by the second part.
The interface is written in javascript node.js and the other side is written in python django. <br>The reason for writing the machine learning functions in python is that python has more support and is easier to use for data science. <br> I have also been using python for data science for a while so that seemed to be a better option.
<br><br>
Note: The project has been completed but has been removed from production due to cost of management  but a picture of it working can be found at https://twitter.com/ojetokunlanre/status/1424799067461210141/photo/1
<br><br>

