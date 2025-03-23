n = int(input())
arr = list(map(int, input().split()))

print("YES" if any(arr[i] * arr[i - 1] > 0 for i in range(1, n)) else "NO")
