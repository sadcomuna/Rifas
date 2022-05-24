$(document).ready(function(){

    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('add novo tipo de acesso')
        $('modal-body').load('scr/tipo/visao/form-tipo.html')
        $('btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-tipo').modal('show')
    })
})