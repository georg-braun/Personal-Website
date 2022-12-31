---
title: "Code challenge: Rotate matrix in-place in 90 degrees"
date: 2022-05-10
---

Sometimes I do some coding challenges to challenge myself.

This time I had a challenge to rotate a matrix in 90 degrees in-place. I had a good first idea to solve this but I struggled a little bit with the details. To help my future me and maybe some other people I share my considerations.


![](./images/code-challenge-rotate-matrix.excalidraw.png)

```csharp
var matrix = new int[,] {{10, 11, 12, 13}, {14, 15, 16, 17}, {18, 19, 20, 21}, {22, 23, 24, 25}};
printMatrix(matrix);
rotate(matrix);

static void rotate(int[,] matrix)
{
    var l = 0;
    var r = matrix.GetLength(0) - 1;
    var t = 0;
    var b = matrix.GetLength(1) - 1;

    while (l < r)
    {
        // run through the "slice"
        for (var i = l; i <= r - 1; i++)
        {
            // cache
            var tl = matrix[t, l + i];

            // exchange in circle
            matrix[t, l + i] = matrix[b - i, l]; // left -> top
            matrix[b - i, l] = matrix[b, r - i]; // bottom -> left
            matrix[b, r - i] = matrix[t + i, r]; // right -> bottom 
            matrix[t + i, r] = tl; // top -> right
        }

        l++;
        r--;
        t++;
        b--;
    }
}
```