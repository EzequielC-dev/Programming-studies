nota = float(input("Informe a nota do aluno:"))


# O Phyton é tudo pela identação que define o bloco
if nota >= 9: 
    print("Parabéns, você está com uma ÓTIMA nota")
    print("Quadro de Honra")
elif nota >= 7:
    print("Aprovado!")
else: 
    print("Dá pra melhorar")

print(nota)
