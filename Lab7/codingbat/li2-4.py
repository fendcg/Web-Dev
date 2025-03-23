def sum13(nums):
    total = 0
    skip = False
    
    for num in nums:
        if num == 13:
            skip = True  # Skip the next number
        elif skip:
            skip = False  # Reset skip after skipping one number
        else:
            total += num  # Add to total if not skipping
    
    return total
