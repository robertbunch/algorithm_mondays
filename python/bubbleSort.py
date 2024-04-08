import time
start_time = time.time() #get our starting time

# last iteration of the outter loop
# inner loop work as i increases
# if we don't swap, break out of the loop

# arr = list(range(10000000,0,-1))
arr = list(range(10000000))
# arr = [7,2,6,1]
# outter loop, determines one more place each iteration
for i in range(len(arr) - 1): #-1 because the last number is in the right spot one iteration early
    did_swap = False  # keep track of whether we do a swap. If not... we are done!
    # inner loop compares all numbers (but the last)
    # we don't need to check against numbers that are sorted
    for j in range(len(arr)-1-i):
        # compare the numbers if first is bigger, swap
        if(arr[j] > arr[j+1]):
            did_swap = True #swithc our bool... keep looping
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
    if(not did_swap):
        break #stop looping... we are in order!
        
# print(arr)

end_time = time.time() #get our ending time
print(f"--- Number of seconds to solve {end_time - start_time}")
