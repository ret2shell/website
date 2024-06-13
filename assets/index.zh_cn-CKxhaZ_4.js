const n=`Rune 中的变量是使用 let 关键字定义的。与 Rust 不同，Rune 中的所有变量都是可变的，可以随时更改。

\`\`\`rust
pub fn main() {
    let x = 5;
    println(\`The value of x is: \${x}\`);
    x = 6;
    println(\`The value of x is: \${x}\`);
}
\`\`\`

\`\`\`
$ ret2script scripts/variables/variables.rx
The value of x is: 5
The value of x is: 6
\`\`\`

## 内存结构

Rune 是一种内存安全的语言。无论你在 Rune 脚本中编写什么，我们都会保持与安全 Rust 相同的内存安全保证，这是通过引用计数来完成的。

[除非值为 \`Copy\`](/docs/rune/types/primitives)，否则它们是引用计数的，并且可以在多个位置使用，这意味着他们拥有共同的所有权。因此，指向该值的每个变量都指向该值的同一个实例，你可以认为等同于 Rust 里每个重要的值都会自动包装在 \`Rc<RefCell<T>>\` 中。

> 在 Rune 的解释器实现中并非如此。如果你有兴趣了解更多信息，Rune 使用一个名为 [\`Shared<T>\`](https://docs.rs/rune/latest/rune/runtime/struct.Shared.html) 的容器，它类似于 \`Rc<RefCell<T>>\`，但有更多其他特性。

我们可以通过在两个变量之间共享和改变一个对象来了解这是如何工作的：

\`\`\`rust
pub fn main() {
    let object = #{ field: 1 };
    let object2 = object;
    println(\`\${object.field}\`);
    object2.field = 2;

    // Note: we changed \`object2\`, but read out \`object\`
    println(\`\${object.field}\`);
}
\`\`\`

\`\`\`
$ ret2script scripts/variables/shared_ownership.rx
1
2
\`\`\`

如果我们调用一个期望获得其参数所有权的外部函数，这可能会导致问题。这样的函数会移动它们的参数并获取所有权，导致原有作为参数的变量失去意义。如果我们尝试使用已移动的变量，则会在解释器中引发错误。

> 注意：下面我们使用的 \`drop\` 函数，它是一个内置函数，它将获取其参数并释放它。

\`\`\`rust
pub fn main() {
    let object = #{ field: 1 };
    let object2 = object;
    println(\`field: \${object.field}\`);
    drop(object2);
    println(\`field: \${object.field}\`);
}
\`\`\`

\`\`\`
$ ret2script scripts/variables/take_argument.rx
field: 1
== ! (cannot read, value is moved (at 14)) (469µs)
error: virtual machine error
  ┌─ scripts/variables/take_argument.rx:6:27
  │
6 │     println(\`field: \${object.field}\`);
  │                       ^^^^^^^^^^^^ cannot read, value is moved
\`\`\`

### 可读写性

你可以使用 \`is_readable\` 测试变量是否仍然可以进行读取，以及使用 \`is_writable\` 测试是否可以进行写入，这两个函数和 \`Result\` 一样，都是默认包含的，可以在任意地方使用。可写的对象也是可移动的，并且可以提供给需要移动值的函数，例如 \`drop\`。

\`\`\`rust
pub fn main() {
    let object = #{ field: 1 };
    let object2 = object;
    println(\`field: \${object.field}\`);
    drop(object2);

    if is_readable(object) {
        println(\`field: \${object.field}\`);
    } else {
        println("object is no longer readable 🔨");
    }
}
\`\`\`

\`\`\`
$ ret2script scripts/variables/is_readable.rx
field: 1
object is no longer readable 🔨
\`\`\`

## 判断变量类型

Rune 提供了一个关键字 \`is\`，用于检查变量的类型。这个关键字可以用于检查变量是否是某个特定类型，或者是否是某个特定类型的引用。

\`\`\`rust
pub fn main() {
    let x = 5;
    let y = "hello";

    if is x isize {
        println("x is an integer");
    }

    if is y str {
        println("y is a string");
    }
}
\`\`\`

\`\`\`
$ ret2script scripts/variables/is_type.rx
x is an integer
y is a string
\`\`\`
`;export{n as default};
