from random import randint
final =""
for i in range(80):
    word = list("Regular.Expressi0ns=Awesome!")
    for _ in range(1,len(word)):
        rand = randint(0,len(word)-1)
        final += word.pop(rand)
    final += "~~"
print(final)
