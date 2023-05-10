$(document).ready(function(){
    $('form ul').click(function(){
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li style=" display: none"></li>');
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('li').on('click', function() {
            $(this).addClass('line');
        });
        $('#nome-tarefa').val('')  
    })

    
})

