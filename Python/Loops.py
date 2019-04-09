n = 5

# Expected output
# 0
# 1
# 4
# 9
# 16

count = 0
for i in range(0, n):
    print(count ** 2)
    count = count + 1
