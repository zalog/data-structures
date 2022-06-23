# stack

Stack is a LIFO, linear one-ended, abstract data structure with two primary operations, push and pop.

## main operations

```js
// push
♦ ↴
  ♦  // <- top
  ♦
  ♦

// pop
  ↱ ♦
  ♦  // <- top
  ♦
  ♦
```

## complexity

| operation | big O |
| -         |    -: |
| push      |  O(1) |
| pop       |  O(1) |
| peek      |  O(1) |
| search    |  O(n) |
| size      |  O(1) |

## practical implmentation examples

- matching brackets in compiler syntax mechanism
- undo mechanisms in text editors
- doing a Depth First Search (DFS) on a graph
- behind the scenes to support recursion by keeping track of previous stuff
