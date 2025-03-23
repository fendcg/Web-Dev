def centered_average(nums):
    nums.sort()  # Sort the array
    return sum(nums[1:-1]) // (len(nums) - 2)  # Remove min and max, then compute mean
