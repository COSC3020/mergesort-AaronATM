// used geeksforgeeks in place and iterative mergesort examples:
// https://www.geeksforgeeks.org/in-place-merge-sort/
// https://www.geeksforgeeks.org/iterative-merge-sort/

function mergesort(array) {
    var size;
    var left;
    var len = array.length

    for (size = 1; size <= len - 1; size = 2 * size)
    {
        for (left = 0; left < len - 1; left += 2 * size)
        {
            var mid = Math.min(left + size - 1, len - 1);

            var right = Math.min(left + 2 * size - 1, len - 1);

            merge(array, left, mid, right);
        }
    }
    return array;
}

function merge(array, start, mid, end)
{
    var start2 = mid + 1;

    if (array[mid] <= array[start2])
    {
        return array;
    }

    while (start <= mid && start2 <= end)
    {
        if (array[start] <= array[start2])
        {
            start = start + 1;
        }

        else
        {
            var tmp = array[start2];
            var i = start2;
            
            while (i != start)
            {
                array[i] = array[i - 1];
                i = i - 1;
            }
            
            array[start] = tmp;

            start = start + 1;
            start2 = start2 + 1;
            mid = mid + 1;
        }
    }
}