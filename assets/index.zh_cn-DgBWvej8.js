const n=`在本节中，我们将讨论模式匹配。

## 基础使用

模式匹配是一种灵活的机制，它允许你方便的验证参数的结构与类型，还允许你直接对其解构来轻松访问你所需要的内容。

以下是一个简单的例子：

\`\`\`rust
fn match_input(n) {
    match n {
        1 => println("The number one."),
        n if n is i64 => println(\`Another number: \${n}.\`),
        [1, 2, n, ..] => println(\`A vector starting with one and two, followed by \${n}.\`),
        "one" => println("One, but this time as a string."),
        _ => println("Something else. Can I go eat now?"),
    }
}

pub fn main() {
    match_input(1);
    match_input(2);
    match_input([1, 2, 42, 84]);
    match_input("one");
    match_input(#{ field: 42 });
}
\`\`\`

\`\`\`text
$ ret2script scripts/control_flow/pattern_matching.rx
The number one.
Another number: 2.
A vector starting with one and two, followed by 42.
One, but this time as a string.
Something else. Can I go eat now?
\`\`\`

这个例子很好的体现了模式匹配的强大之处。相比于类型严格的 Rust，Rune拥有更加灵活与简洁的匹配机制：你可以匹配任何类型的值，而不仅仅是特定的类型，也不需要事先定义枚举或者结构体。

我们在接下来的章节里详细介绍这些变体。

## 模式

可以匹配的东西被称为**模式（Patterns）**，Rune 能够提供的模式相当多。以下是一些常见的模式：

* 一个空元组 \`()\`；
* 布尔值 \`true\` 或 \`false\`；
* 一个字节 \`b'r'\` 或 \`b'\\x78'\`；
* 一个字符，例如 \`'a'\` 或 \`'👴'\`；
* 一个整数，例如 \`3307\` 或 \`0xcafebabe\`；
* 一个字符串，例如 \`"luo and arttnba3 are barking in cyber B221"\`；
* 一个数组向量，例如 \`[1, _, ...]\` 或者只是一个空数组 \`[]\`，数组中的值本身也是模式；
* 一个元组，例如 \`(1, _, 3, "Reverier")\`；
* 一个对象，例如 \`#{ field: 42, name: "The Universe" }\` 或者一个空对象 \`#{}\`，对象中的字段本身也是模式；

可以在匹配项前加上结构名称前缀来匹配结构：

* 一个单元结构： \`Reverier\`；
* 一个元组结构： \`Reverier(1, _, 1, 4, 51.4, "Rubbish")\`；
* 一个对象结构： \`Reverier{ field: 114514, name: "Reverier wants a girlfriend" }\`；

类似的，枚举中的变体也可以以相同的形式进行匹配：

* 单位变体：\`DevOps::Reverier\`；
* 元组变体：\`DevOps::Reverier(114514, _, ..)\`；
* 对象变体：\`DevOps::Reverier{ field: 114514, name: "Reverier wants a girlfriend" }\`；

模式几乎可以是上述模式的任意组合，甚至 \`{"categories": ["Reverse", "Web", "Crypto", "Misc", "Pwn"]}\` 都可以作为一个匹配的模式来使用。

任何符合集合条件的内容都可以使用 \`..\` 来作为后缀，以此来匹配模式中未涵盖的部分，这称为**剩余模式（Rest Patterns）**。

\`\`\`rust
pub fn main() {
    let value = #{ a: 0, b: 1 };

    let matched = match value {
        // this doesn't match, because a pattern without a rest pattern in it
        // must match exactly.
        #{ a } => false,
        // this matches, because it only requires \`a\` to be present.
        #{ a, .. } => true,
    };

    assert!(matched, "rest pattern matched");
}
\`\`\`

\`\`\`
$ ret2script scripts/control_flow/rest_pattern.rx
\`\`\`

## 绑定与忽略

在模式中，每个值都可以替换成绑定或者忽略符号。绑定符号 \`name\` 允许你将匹配到的值绑定到一个变量上，而忽略符号 \`_\` 则表示不关心这个值，无论是什么，都要无条件匹配。

\`\`\`rust
fn test_ignore(vector) {
    match vector {
        [_, 2] => println("Second item in vector is 2."),
    }
}

pub fn main() {
    test_ignore([1, 2]);
}
\`\`\`

\`\`\`
$ ret2script scripts/control_flow/bind_ignore.rx
Second item in vector is 2.
\`\`\`

我们还可以把值绑定到匹配范围的变量上，这么做也是无条件匹配的，只不过我们还可以在匹配后的代码块中直接使用这个变量。

\`\`\`rust
fn test_ignore(vector) {
    match vector {
        [_, b] => println(\`Second item in vector is \${b}.\`),
    }
}

pub fn main() {
    test_ignore([1, 2]);
}
\`\`\`

\`\`\`
$ ret2script scripts/control_flow/bind_to_var.rx
Second item in vector is 2.
\`\`\`

这里还有一些其他的例子：

* \`[_, a, b]\`：匹配一个长度为 3 的数组，其中第一个元素被忽略，第二个元素被绑定到 \`a\`，第三个元素被绑定到 \`b\`；
* \`{"name": name}\`：匹配一个对象，其中 \`name\` 字段被绑定到 \`name\`；

\`\`\`rust
fn describe_car(car) {
    match car {
        #{ "make": year, .. } if year < 1950 => "What, where did you get that?",
        #{ "model": "Ford", "make": year, .. } if year >= 2000 => "Pretty fast!",
        _ => "Can't tell 😞",
    }
}

pub fn main() {
    println(describe_car(#{"model": "Ford", "make": 2000}));
    println(describe_car(#{"model": "Honda", "make": 1980}));
    println(describe_car(#{"model": "Volvo", "make": 1910}));
}
\`\`\`

\`\`\`
$ ret2script scripts/control_flow/fast_cars.rx
Pretty fast!
Can't tell 😞
What, where did you get that?
\`\`\`
`;export{n as default};
