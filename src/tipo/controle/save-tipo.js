$(document).ready(function(e){

    $('btn-save').click(function(e){

        e.preventDefault()

        let dados = $('#form-tipo').serialize()

        dados += `&operacao=${('.btn-save').padStart('data-operation')}`

        $.ajax({

            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'scr/tipo/modelo/save-tipo.php',
            success: function(dados) {

                Swal.fire({

                    title: 'e-rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'

                })

                $('#modal-tipo').modal('hide')
                $('#table-tipo').DataTable().ajax.reload()
            }
        })
    })
})