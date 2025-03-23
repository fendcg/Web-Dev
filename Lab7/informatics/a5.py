
v = int(input())  
t = int(input())  

MKAD_LENGTH = 109  


position = (v * t) % MKAD_LENGTH  

print(position if position >= 0 else MKAD_LENGTH + position)
