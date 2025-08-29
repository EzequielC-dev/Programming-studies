# Não existe sobrecarga no Python, mas dá pra chamar a função com parâmetros diferentes

def saudacao():
    print("Hello World!")

def saudacao(nome = "Pessoa", idade = 20):
    print(f'Oi {nome}, você nem parece ter {idade} anos')

# parâmetros padrões
def somar_dois_numeros(a = 5, b= 2):
    return a + b

def multiplicar(x, y):
    resultado = x * y
    print(resultado)

if __name__ == '__main__':
    saudacao("Ana", idade = 30)