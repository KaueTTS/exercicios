soma_impares = 0

for i in range(1, 11, 2):
    soma_impares += i
print(soma_impares, '\n')

# O segundo argumento de da função range é exclusivo, então range(1, 11) inclui números de 1 a 10) com um passo de 2 (o terceiro argumento de range). Isso garante que apenas números ímpares sejam considerados.

for i in range(10, 0, -1):
    print(i)