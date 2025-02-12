import heapq

class Solution:
    def findClosestElements(self, arr, k, x):
        heap = []
        for num in arr:
            heapq.heappush(heap, (abs(num - x), num))
        result = [heapq.heappop(heap)[1] for _ in range(k)]
        return sorted(result)
