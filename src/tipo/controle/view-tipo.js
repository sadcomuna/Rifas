$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-view', function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('modal-body').empty()

        $('.modal-title').append('visualização de registro')

        let ID = `ID=${$(this).attr('id')}`


        $.ajax({

            type:'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'scr/tipo/modelo/view-tipo.php',
            success: function(dado) {
                
                if(dado.tipo == "success") {

                    $('.modal-body').load('scr/tipo/visao/form-tipo.html', function() {

                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')

                    })

                    $('.btn-save').hide()
                    $('#modal-tipo').modal('show')
                }

                else {

                    Swal.fire({

                        title: 'e-rifa',
                        text: dado.mensagem,
                        icon: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })
    })
})