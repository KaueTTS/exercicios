lista_nmrs = [10, 5, 6, 7, 2]
soma = 0

try:
    for numero in lista_nmrs:
        soma += numero
    print(f'Soma dos elementos: {soma}')
except Exception as e:
    print(f'Ocorreu um erro: {e}')

# Exception é uma classe base para todas as exceções em Python. Capturar Exception permite lidar com qualquer tipo de exceção que possa ocorrer no bloco try. O as e é opcional, mas é frequentemente usado para acessar informações detalhadas sobre a exceção, como mensagens de erro.