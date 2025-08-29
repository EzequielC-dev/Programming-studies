total = 0
qtd = 0
nota = 0


while nota != -1:
    nota = float(input("Informe a nota ou -1 para sair:"))

    if nota != -1:
        qtd += 1
        total += nota

print(f'A média da turma é {total / qtd}')