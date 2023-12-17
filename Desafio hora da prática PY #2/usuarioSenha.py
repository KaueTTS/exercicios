usuario_correto = 'alura'
senha_correta = 'alura123'

usuario = input('Digite o nome de usuário: ')
senha = input('Digite a senha: ')

if usuario == usuario_correto and senha == senha_correta:
    print('Login bem sucedido!')
else:
    print('Usuário ou senha incorretos, tente novamente...')