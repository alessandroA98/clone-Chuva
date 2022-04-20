
    function novoTopico() {
        $('.discussao__conteudo-topo').css('display', 'none')
        $('.criar__topico').css('display', 'none')
        $('.pergunta').css('display', 'block')
        $('.submit').css('display', 'none')
        $('.filter').css('display', 'none')
        $('.blur').css('display', 'none')
    }
    function enviar() {
        $('.submit').css('display', 'block')
        $('.pergunta').css('display', 'none')
        document.getElementsByClassName('criar__topico-fonte')[0].innerHTML = 'Criar novo topico'
        $('.criar__topico-fonte').css('margin', 'auto')
        $('.criar__topico').css('display', 'flex').css('margin-top', '-119px').css('width', '235px')
        $('.horizontal').css('display', 'none')
        $('.vertical').css('display', 'none')
        $('.filter').css('filter', 'blur(2px)')
        $('.filter').css('display', 'block')        
        $('.blur').css('display', 'flex')        
    }
    function vermais() {

        $('.ver__texto').toggle('click').css('display', 'block')
        $('#ver__mais').toggle('click').css('display', 'none')
    }
    function expandirRespostas() {
        $('.discussao__conteudo').bind('click', function () {
            $(this).css('border-bottom', '1px solid #ECECEC')
        })
        $('.topico__resposta').toggle('click').css('display', 'block')

    }




$(function () {
    
    $('.criar__topico').bind('click', function () {
        novoTopico()
    })
    $('.fundo__enviar').bind('click', function () {
        enviar()
    })
    $('.resumo__conteudo').bind('click', function () {
        vermais()
    })
    $('.pointer').bind('click', function () {
        expandirRespostas()
    })
})
