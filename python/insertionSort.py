import time
import random
start_time = time.time() #get our starting time

def insertion_sort(arr):
    # we start the outter loop (position we are on)
    # at 1, not 0
    for i in range(1,len(arr)):
        key = arr[i] #we watn to insert into it's right spot! (relative to the left)
        j = i - 1 #j will START at i - 1, but we will decrament
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key #insert our key!

# i = 1, j = 0, key = 3
# [1,3,4,5,2,6]
# i = 2, j = 1, key = 4
# [1,3,4,5,2,6]
# i = 3, j = 2, key = 5
# [1,3,4,5,2,6]
# i = 4, j = 3, key = 2
    # [1,3,4,5,5,6]
    # i = 4, j = 2, key = 2
        # [1,3,4,4,5,6]
        # i = 4, j = 1, key = 2
            # [1,3,3,4,5,6]
            # i = 4, j = 0, key = 2
                # [1,2,3,4,5,6]
# i = 5, j = 4, key = 6
#  [1,2,3,4,5,6]
       
# arr = [1,3,4,5,2,6]
arr = [random.randint(1,1000000) for i in range(10000)]
insertion_sort(arr)
print(arr)

end_time = time.time() #get our ending time
print(f"--- Number of seconds to solve {end_time - start_time}")
