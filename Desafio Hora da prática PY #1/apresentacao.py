print('''
Python na Escola de Programação da Alura
    ''')

print('Qual é o seu nome ?')
nome = input('')

print('E quantos anos você tem ?')
idade = input('')

print(f'\nSeu nome é {nome} e você tem {idade} anos.')

# Abordagem mais simples
# print('Meu nome é',nome,'e tenho',idade,'anos.')

# Abordagem do f-string
# print(f'Meu nome é {nome} e tenho {idade} anos.')

# Abordagem do .format()
# print('Meu nome é {} e tenho {} anos.'.format(nome,idade))

# Abordagem da % (Formatação de String Antiga - Python 2)
# print('Meu nome é %s e tenho %i anos.'%(nome,idade))