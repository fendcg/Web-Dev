n = int(input())
count = sum(1 for _ in range(n) if int(input()) == 0)
print(count)
