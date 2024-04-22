# from decimal import Decimal, getcontext
# getcontext().prec = 2000
# print(Decimal(1)/Decimal(983))
# exit()

import time
start_time = time.time() #get our starting time
# Answer: 983 

def long_division(denom):
    dec_digits = []
    remainders = []
    cur_num = 10 #always start at 10
    # make sure that our cur_num is big enough for our first operation
    while cur_num < denom:
        cur_num *= 10
        dec_digits.append(0)
    while 1:
        # store the digit without decimal, and the remainder
        digit = cur_num // denom
        cur_num = cur_num % denom
        if cur_num == 0: #terminated. End function
            # print(denominator,"Terminates")
            return 0 #we will optimize in a bit
        if(cur_num in remainders):
            # if you check all numbers, you will need
            # to check for prefixes
            return len(remainders)
        else:
            # add the digit and remainder to the list
            dec_digits.append(digit)
            remainders.append(cur_num)
            # bump up the new number by adding a 0
            cur_num *= 10

largest_denom = 0
largest_sequence = 0     
# we know the answer is NOT divisible by 2 or 5 
for i in range(3,1000,2):
    if(i % 5 == 0):
        continue #stop this iteration
    recurr_cycle = long_division(i)
    # print(denominator,cycle_lengths,largest_sequence)
    if(recurr_cycle > largest_sequence):
        largest_sequence = recurr_cycle
        largest_denom = i
print(largest_denom,largest_sequence)

end_time = time.time() #get our ending time
print(f"--- Number of seconds to solve {time.time() - start_time}")
