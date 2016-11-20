// JavaScript File

var movies = [{title: "In Bruges", rating: 5, havewatched: false}, 
              {title: "Frozen", rating: 4, havewatched: true},
              {title: "Mad Max Fury Road", rating: 5, havewatched: true},
              {title: "Les miserables", rating: 4.5, havewatched: false}]
              
             
             
function moviesDB()
{
    movies.forEach(function(i)
    {
        var result = "You have ";
        if (i.havewatched === true)
        {
         result += "have watched ";
        }
        else
        {
         result += "not seen ";
        }
        result += "\"" + i.title + "\" - ";
        result += i.rating + " stars.";
        console.log(result);
    });

}