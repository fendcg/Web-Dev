def sum67(nums):
    total = 0
    ignore = False

    for num in nums:
        if num == 6:
            ignore = True  # Start ignoring numbers
        elif num == 7 and ignore:
            ignore = False  # Stop ignoring numbers
        elif not ignore:
            total += num  # Add number if not in ignore mode

    return total
