if __name__ == '__main__':
    n = int(input())  # Read the number of participants
    arr = list(map(int, input().split()))  # Read scores as a list

    max_score = max(arr)  # Find the highest score
    runner_up = max(x for x in arr if x < max_score)  # Find the second highest score

    print(runner_up)  # Print the runner-up score
