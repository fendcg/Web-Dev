if __name__ == '__main__':
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    unique_scores = sorted(set(score for name, score in students))
    second_lowest = unique_scores[1]  # The second lowest score

    second_lowest_students = sorted([name for name, score in students if score == second_lowest])

    for student in second_lowest_students:
        print(student)
