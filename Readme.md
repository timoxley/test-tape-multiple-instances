# test-tape-multiple-instances

Test case demonstrating confused tape execution order when multiple tape
installations exist.

### Instructions
```
git clone git@github.com:timoxley/test-tape-multiple-instances.git
npm install
npm test
```

#### Example output
```
> test-tape-multiple-instances@1.0.0 test /Users/timoxley/Projects/tests/test-tape-multiple-instances
> tape a b

TAP version 13
# a
TAP version 13
# b
ok 1 should be falsy
not ok 1 should be falsy
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Timeout._onTimeout (/Users/timoxley/Projects/tests/test-tape-multiple-instances/b/index.js:5:7)
  ...

1..1
# tests 1
# pass  1

# ok
```
