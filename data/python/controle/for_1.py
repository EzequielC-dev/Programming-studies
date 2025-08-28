# # 0 até 9
# for i in range (10):
#     print(i)

# # do 1 até o 10
# for i in range(1, 11):
#     print(i)

# # do 1 até o 99, com 7 passos
# for i in range(1, 100, 7):
#     print(i)

# # do 20 até o 0, com -3 passos
# for i in range(20, 0, -3):
#     print(i)


# # percorrendo uma lista
# nums = [1, 2, 3, 4]

# # end mostra os elmentos em uma mesma linha
# for n in nums:
#     print(n, end=" ")


# texto = "Python é muito massa!"

# for letra in texto:
#     print(letra)

produto = {
    'nome': "Caneta",
    "preco": 1.50,
    'desconto': False
}

for atributo in produto:
    print(atributo, produto[atributo])

for atributo, valor in produto.items():
    print(atributo, "==>", valor)