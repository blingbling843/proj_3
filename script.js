jQuery(document).ready(function(){
    axios.get('http://csc225.mockable.io/movies')
    .then(function(response){
        console.log(response.data);
        var moviesHTML=response.data.map(function(movie){
            return '<p class="movie" data-movie="'+movie.id+'">'+movie.title+'</p>';
        });       
        //console.log(booksHTML);
        $('#movies').html(moviesHTML);   
    });

    $('body').on('click','.movie',function(){
        var id=$(this).data('movie');
        var url='https://csc225.mockable.io/movies/' + id;

        axios.get(url).then(function(response){
            var movie=response.data; 
            var movieHTML='<div class="card" style="width: 18rem;">';
            movieHTML += '<div class="card-body">';
            movieHTML +='<h5 class="card-title">'+ movie.title+'</h5>';
            movieHTML += '</div>';
            movieHTML += '<ul class="list-group list-group-flush">';
            movieHTML += '<li class="list-group-item">'+movie.director+'</li>';
            movieHTML += '<li class="list-group-item">'+movie.release+'</li>';
            movieHTML += '</ul>';
            movieHTML += '<div class="card-body">';
            movieHTML += '<a class="card-link" href="'+movie.poster+'">[LINK]</a>';
            movieHTML += '</div></div>';
            $('#current-movie').html(movieHTML);
        })
       $('#current-movie').html('<img src=spinner.gif>');

    });

     console.log('i come after the request');

});