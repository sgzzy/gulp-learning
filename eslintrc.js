// module.exports = {
//     "env": {
//         "browser": true,
//         "node": true,
//         "commonjs": true,
//         "es6": true
//     },
//     "extends": "eslint:recommended",
//     "parserOptions": {
//         "sourceType": "module"
//     },
//     "rules": {
//         "no-console": "off",
//         "linebreak-style": [2, "windows"],
//         "semi": [2, "always"],
//         "comma-dangle": [1, "always"],
//         "no-unused-vars": [1, {
//             "vars": "all",
//             "args": "all"
//         }],
//         "require-jsdoc": ["error", {
//             "require": {
//                 "FunctionDeclaration": true,
//                 "MethodDefinition": false,
//                 "ClassDeclaration": false
//             }
//         }]
//     },
// };
/**
 * 0: 关闭规则
 * 1：打开规则，并wraning
 * 2：打开规则，并erroring
 */
// 与js代码中的语法或逻辑有关的规则
// "no-await-in-loop": 2, // 禁止在循环类使用await
// "no-cond-assign":0, // 禁止条件表达式中出现赋值操作符
// "no-console":0, // 禁用 console
// "no-constant-condition":0, // 禁止在条件中使用常量表达式 if(true) if(1)
// "no-control-regex":0, // 禁止正则表达式中使用控制字符
// "no-debugger":0, // 禁止使用debugger
// "no-dupe-args":0, // 禁止 function 定义中出现重名参数
// "no-dupe-keys":0, // 禁止对象字面量中出现重复的 key
// "no-duplicate-case":0, // 禁止出现重复的 case 标签
// "no-empty-character-class":0, // 禁止在正则表达式中使用空字符类即`/[]/`
// "no-empty":0, // 禁止出现空语句块
// "no-ex-assign":0, // 禁止在catch语句块中给异常(错误)参数赋值，即在catch语块中重新给e赋值
// "no-extra-boolean-cast":0, // 禁止不必要的布尔转换
// "no-extra-parens":0, // 禁止不必要的括号
// "no-extra-semi":0, // 禁止不必要的分号
// "no-func-assign":0, // 禁止对 function 声明重新赋值
// "no-inner-declarations":0, // 禁止在嵌套的块中出现变量声明或 function 声明
// "no-invalid-regexp":0, // 禁止在RegEx构造函数中无效的正则表达式字符串
// "no-irregular-whitespace":0, // 禁止字符串和注释之外的不规则空格
// "no-obj-calls":0, // 禁止把全局对象作为函数调用，比如Math() JSON()
// "no-prototype-builtins":0, // 禁止直接调用 Object.prototypes 的内置属性,若需要使用最好用Object.prototype.call()
// "no-regex-spaces":0, // 禁止在正则表达式中使用多个连续的空格
// "no-sparse-arrays":0, // 禁止稀疏数组，即赋值不连续的数组，`['red',,'blue']`
// "no-template-curly-in-string":0, // 禁止在常规字符串中使用模板字面量占位符语法
// "no-unexpected-multiline":0, // 禁止混淆多行表达式
// "no-unreachable":0, // 禁止在return,throw,continue和break语句后面的无法执行的代码
// "no-unsafe-finally":0, // 禁止在finally块内直接使用return,throw,continue和break语句
// "no-unsafe-negation":0, // 禁止否定关系运算符(!)的左操作数
// "use-isnan":0, // 要求使用 isNaN() 检查 NaN
// "valid-jsdoc":0, // 强制使用有效的 JSDoc 注释(即需要将参数和返回都交代清楚)
// "valid-typeof":0, // 使用typeof操作符时必须使用合法的typeof的值

// // 最佳实践，使用更好的避免问题的方式的规则
// "accessor-pairs":0, // 强制 getter 和 setter 在对象中成对出现
// "array-callback-return":0, // 强制数组方法的回调函数中有 return 语句
// "block-scoped-var":0, // 强制把变量的使用限制在其定义的作用域范围内
// "class-methods-use-this":0, // 强制类方法使用this，为了标记出没有使用this的类方法
// "complexity":0, // 指定程序中允许的最大环路复杂度，{"max": 2}，默认为20
// "consistent-return":0, // 要求 return 语句要么总是指定返回的值，要么不指定。此规则忽略构造函数
// "curly":0, // 强制所有控制语句使用一致的括号风格
// "default-case":0, // 要求 switch 语句中有 default 分支，若要省略，则需要no default 或 No Default
// "dot-location":0, // 在点之前和之后执行一致的换行,默认的“object”选项要求点与对象在同一行。“属性”选项要求点与属性在同一行。
// "dot-notation":0, // 强制执行点符号调用对象属性,强制尽可能地使用点号
// "eqeqeq":0, // 要求使用===和！==
// "guard-for-in":0, // 要求 for-in 循环中有一个 if 语句
// "no-alert":0, // 禁止使用alert, confirm, and prompt
// "no-caller":0, // 禁止使用arguments.caller或arguments.callee
// "no-case-declarations":0, //禁止在case / default子句中的词法声明（let，const，function和class）。 原因是，词法声明在整个开关块中是可见的，但它只在被分配时才被初始化，这只有在达到定义的情况下才会发生。
// "no-div-regex":0, // 禁止除法操作符显式的出现在正则表达式开始的位置
// "no-else-return":0, // 禁止 if 语句中 return 语句之后有 else 块
// "no-empty-function":0, // 禁止空函数
// "no-empty-pattern":0, // 禁止使用空解构模式
// "no-eq-null":0, // 禁止在没有类型检查操作符的情况下与 null 进行比较
// "no-eval":0, // 禁止使用eval（）
// "no-extend-native":0, // 禁止扩展原生类型
// "no-extra-bind":0, // 禁止对.bind（）的不必要的调用
// "no-extra-label":0, // 禁止不必要的标签声明
// "no-fallthrough":0, // 禁止case语句fallthrough(即如果没有break,则继续进行case语句)  禁止switch穿透  禁止 case 语句落空
// "no-floating-decimal":0, //禁止省略浮点数中的的前导或尾随小数点(0 .5 3)  禁止数字字面量中使用前导和末尾小数点
// "no-global-assign":0, // 禁止对原生对象或只读全局变量赋值
// "no-implicit-coercion":0, // 禁止隐式转换  禁止使用短符号进行类型转换
// "no-implicit-globals":0, // 禁止在全局范围内使用变量声明和 function 声明
// "no-implied-eval":0, // 禁止使用隐式eval,即类eval方法
// "no-invalid-this":0, // 禁止无效的this，只能用在构造器，类，对象字面量
// "no-iterator":0, // 禁止使用__iterator__ 属性
// "no-labels":0, // 禁止标签声明
// "no-lone-blocks":0, // 禁用不必要的嵌套块
// "no-loop-func":0, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
// "no-magic-numbers":0, // 禁止使用魔法数（指不知道干什么的数，没有说明来源、原因的数），增强代码可读性
// "no-multi-spaces":0, // 禁止使用多个空格
// "no-multi-str":0, // 字符串不能用\换行  禁止使用多行字符串
// "no-new-func":0, // 禁止使用new Function()
// "no-new-wrappers":0, // 禁止使用new创建包装实例，new String new Boolean new Number
// "no-new":0, // 禁止在非赋值或条件语句中使用 new 操作符  禁止在使用new构造一个实例后不赋值
// "no-octal-escape":0, // 禁止使用八进制转义序列
// "no-octal":0, // 禁止使用八进制数字
// "no-param-reassign":0, // 禁止对 function 的参数重新赋值
// "no-proto":0, // 禁止使用__proto__属性
// "no-redeclare":0, // 禁止重复声明变量
// "no-restricted-properties":0, // 禁止使用特定对象的特定属性[2,{"object": "disallowObj", "property": "disallowProp"}, {}]
// "no-return-assign":0, // return语句中不能有赋值表达式
// "no-return-await":0, // return语句中不能有await
// "no-script-url":0, // 禁止使用javascript:void(0)
// "no-self-assign":0, // 不能将自身赋值给自己
// "no-self-compare":0, // 不能比较自身
// "no-sequences":0, // 禁止使用逗号运算符
// "no-throw-literal":0, // 禁止抛出字面量错误 throw "error"
// "no-unmodified-loop-condition":0, // 禁用一成不变的循环条件
// "no-unused-expressions":0, // 禁止无用的表达式
// "no-unused-labels":0, // 禁止无用的标签
// "no-useless-call":0, // 禁止不必要的call和apply
// "no-useless-concat":0, // 禁止不必要的字面量字符和模板字面量字符的连接
// "no-useless-escape":0, // 禁止不必要的转义字符
// "no-useless-return":0, // 禁止多余return语句
// "no-void":0, // 禁用void操作符
// "no-warning-comments":0, // 不能有警告备注
// "no-with":0, // 禁用with
// "prefer-promise-reject-errors":0, // 要使用错误对象触发Promise对象的reject方法
// "radix":0, // parseInt必须指定第二个参数
// "require-await":0, // 禁用没有awiat表达式的异步函数
// "vars-on-top":0, // var必须放在作用域顶部
// "wrap-iife":0, // 立即执行函数表达式的小括号风格
// "yoda":0, // 禁止尤达条件
// //设计严格模式伪指令的规则
// "strict":0, // 严格模式
// // 与变量声明有关的规则
// "init-declarations":0,  // 要求或禁止 var 声明中的初始化
// "no-catch-shadow":0,  // 禁止catch子句参数与外部作用域变量同名
// "no-delete-var":0, // 不能对var声明的变量使用delete操作符
// "no-label-var":0, // 不允许标签名与变量名相同
// "no-restricted-globals":0, // 禁止指定全局变量
// "no-shadow-restricted-names":0, // 标识符不能与关键字同名 
// "no-shadow":0, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名  禁止变量声明与外层作用域的变量同名
// "no-undef-init":0, // 变量初始化时不能直接给它赋值为undefined
// "no-undef":0, // 不能有未定义的变量  禁用未声明的变量，除非它们在 /*global */ 注释中被提到
// "no-undefined":0, // 禁止将 undefined 作为标识符
// "no-unused-vars":0, // 不能有声明后未被使用的变量或参数  禁止出现未使用过的变量
// "no-use-before-define":0, // 不能在定以前使用变量 	禁止在变量定义之前使用它们
// // 涉及在Node.js中运行的代码或在支持CommonJs的浏览器中运行的代码的规则
// "callback-return":0, // 避免多次调用回调什么的, 此规则旨在确保在主函数块之外使用的回调始终是返回语句的一部分或紧接在返回语句之前
// "global-require":0, // 要求require()必须要在顶级作用域调用
// "handle-callback-err":0, // 需要在回调函数中处理错误（Node.js处理错误）
// "no-mixed-requires":0, // 不允许require声明与常规变量声明混合使用  禁止混合常规变量声明和 require 调用
// "no-new-require":0, // 禁止使用new require
// "no-path-concat":0, // node中不能使用__dirname或__filename做路径拼接
// "no-process-env":0,  // 禁止使用process.env
// "no-process-exit":0, // 禁止使用process.exit()
// "no-restricted-modules":0, // 如果禁用了指定模块，使用就会报错(当使用require时)
// "no-sync":0, // nodejs 禁止同步方法
// // 涉及主观风格的规则
// "array-bracket-spacing":0, // 在数组括号内强制一致的间距
// "block-spacing":0, // 强制在单行块中使用一致的间隔（空格）
// "brace-style":0, // 强制在代码块中使用一致的大括号风格
// "camelcase":0, // 强制驼峰法命名
// "capitalized-comments":0, // 强制或禁止注释的第一个字母大写
// "comma-dangle":0, // 对象字面量项尾不能有逗号
// "comma-spacing":0, // 逗号前后空格风格保持一致
// "comma-style":0, // 逗号风格，换行时在行首还是行尾
// "computed-property-spacing":0, // 强制在计算的属性的方括号中使用一致的空格
// "consistent-this":0, // 当获取当前执行环境的上下文时，强制使用一致的命名  强制一致的this别名
// "eol-last":0, // 文件以单一的换行符结束（\n）  要求或禁止文件末尾存在空行
// "func-call-spacing":0, // 禁止或强制函数名与函数调用符之间存在空格
// "func-name-matching":0, // 要求函数名与要赋值的变量或属性的名称匹配。该规则将忽略属性名称为在配置中指定的ECMAScript版本（缺省ES5）中不是有效标识符的文本的属性分配。
// "func-names":0, // 要求或禁止使用命名的 function 表达式
// "func-style":0, // 强制使用一致的函数定义风格（函数声明或者函数表达式，两者都可以用箭头函数）  强制一致地使用 function 声明或表达式
// "id-blacklist":0, // 标识符黑名单，名单中的标识符都禁止使用  禁用指定的标识符
// "id-length":0, // 强制标识符的最小长度和最大长度
// "id-match":0, // 要求标识符与指定正则表达式匹配
// "indent":0, // 缩进风格，强制一致的缩进风格
// "jsx-quotes":0, // 强制在JSX属性中一致使用双引号或单引号
// "key-spacing":0, // 在对象的键值对之间强制一致的空格风格(对象字面量中冒号的前后空格)
// "keyword-spacing":0, // 在关键字之前和之后实施一致的空格风格
// "line-comment-position":0, // 强制规定行注释的位置
// "linebreak-style":0, // 强制一致的换行风格，unix为`\n`LF windows为`\r\n` CRLF
// "lines-around-comment":0, // 设置注释的行前行后的空行风格
// "lines-around-directive":0, // 要求或禁止指令序言周围的空白换行符
// "max-depth":0, // 嵌套块可嵌套最大深度
// "max-len":0, // 一行代码的最大长度
// "max-lines":0, // 对每个文件的最大行数
// "max-nested-callbacks":0, // 最大回调嵌套深度 
// "max-params":0, // 函数定义中参数的最大个数
// "max-statements-per-line":0, // 每行最大的语句数
// "max-statements":0, // 在一个函数中语句的最大数
// "multiline-ternary":0, // 在三元表达式的操作数之间强制换行
// "new-cap":0, // 要求构造函数名以大写字母开头
// "new-parens":0, // new时必须加小括号  要求调用无参构造函数时有圆括号
// "newline-after-var":0, // 变量声明后是否需要空一行
// "newline-before-return":0, // return语句前是否需要空一行
// "newline-per-chained-call":0, // 在方法链中的每次调用后是否需要换行
// "no-array-constructor":0, // 禁止使用数组构造器
// "no-bitwise":0, // 禁止使用按位运算符
// "no-continue":0, // 禁止使用continue
// "no-inline-comments":0, // 禁止在代码后使用内联注释
// "no-lonely-if":0, // 禁止else语句内只有if语句 
// "no-mixed-operators":0, // 禁止混合使用不同的操作符
// "no-mixed-spaces-and-tabs":0, // 禁止空格和 tab 的混合缩进
// "no-multi-assign":0, // 禁止使用链式赋值表达式
// "no-multiple-empty-lines":0, // 空行最多不能超过2行
// "no-negated-condition":0, // 禁止在三元表达式和包含else语块的if语句中使用否定运算符（！）
// "no-nested-ternary":0, // 禁止嵌套三元表达式
// "no-new-object":0, // 禁止使用new Object()
// "no-plusplus":0, // 禁止使用自增和自减运算符
// "no-restricted-syntax":0, // 禁止es6不推荐的语法  禁用特定的语法
// "no-tabs":0, // 禁止使用tab
// "no-ternary":0, // 禁止使用三元表达式
// "no-trailing-spaces":0, // 行结束后面不要有空格
// "no-underscore-dangle":0, // 禁止标识符中有悬空下划线 
// "no-unneeded-ternary":0, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
// "no-whitespace-before-property":0, // 在属性前禁用空格
// "object-curly-newline":0, // 对象字面量中开头结尾的换行规则
// "object-curly-spacing":0, // 对象字面量中开头结尾是否要空格
// "object-property-newline":0, // 对象字面量中是否每个属性都需要换行
// "one-var-declaration-per-line":0, // 连续声明变量时，是否需要每个变量都换行
// "one-var":0, // 在函数中变量是连续声明还是分开声明
// "operator-assignment":0, // 是否可以使用快捷赋值运算符（/=, *=, +=, -=...）
// "operator-linebreak":0, // 运算符的换行风格强制一致，换行时运算符在行尾还是行首
// "padded-blocks":0, // 块语句内行首行尾是否要空行
// "quote-props":0, // 对象字面量中的属性名是否强制双引号
// "quotes":0, // 引号类型 `` "" ''
// "require-jsdoc":0, // 必须要JSDoc注释
// "semi-spacing":0, // 分号前后空格
// "semi":0, // 语句强制分号结尾
// "sort-keys":0, // 对象的键值排序
// "sort-vars":0, // 变量声明时排序
// "space-before-blocks":0, // 不以新行开始的块{前面要不要有空格 
// "space-before-function-paren":0, // 函数定义时括号前面要不要有空格
// "space-in-parens":0, // 小括号里面要不要有空格
// "space-infix-ops":0, // 中缀操作符周围要不要有空格
// "space-unary-ops":0, // 一元运算符的前/后要不要加空格
// "spaced-comment":0, // 注释首尾要不要空格
// "template-tag-spacing":0, // 要求或禁止模板标签（``）与其文字之间的间距
// "unicode-bom":0, // 是否使用Unicode字符U+FEFF作为文件的开头
// "wrap-regex":0, // 正则表达式字面量用小括号包起来
// // 涉及es6的规则
// "arrow-body-style":0, // 箭头函数体用小括号括起来
// "arrow-parens":0, // 箭头函数参数用小括号括起来
// "arrow-spacing":0, // =>的前/后是否使用空格
// "constructor-super":0, // 非派生类不能调用super，派生类必须调用super
// "generator-star-spacing":0, // 生成器函数*的前后空格
// "no-class-assign":0, // 禁止给类赋值
// "no-confusing-arrow":0, // 在可能与比较运算符混淆的地方禁用箭头函数
// "no-const-assign":0, // 禁止修改const声明的变量
// "no-dupe-class-members":0, // 禁止重复的类成员
// "no-duplicate-imports":0, // 禁止重复导入模块
// "no-new-symbol":0, // 禁止使用new Symbol()
// "no-restricted-imports":0, // 禁止通过import导入指定的模块
// "no-this-before-super":0, // 在调用super()之前不能使用this或super
// "no-useless-computed-key":0, // 禁止对象字面量中不必要的计算属性键
// "no-useless-constructor":0, // 禁止不必要的构造函数
// "no-useless-rename":0, // 禁止将import,export和解构赋值命名为同一名称
// "no-var":0, // 禁止使用声明定义变量
// "object-shorthand":0, // 强制或禁止对象字面量缩写语法
// "prefer-arrow-callback":0, // 要求将箭头函数作为回调
// "prefer-const":0, // 对于不会重新赋值的变量，用const声明（优先使用const声明变量）
// "prefer-destructuring":0, // 要求从数组或对象中解构赋值，遇到数组和对象赋值时，优先使用结构赋值
// "prefer-numeric-literals":0, // 禁止对二进制，八进制和十六进制的字符串使用parseInt()
// "prefer-rest-params":0, // 优先使用rest参数
// "prefer-spread":0, // 优先调用扩展运算符（rest参数的逆运算）而不是.apply()
// "prefer-template":0, // 优先使用模板``而不是字符串连接符（+）
// "require-yield":0, // 生成器函数必须有yield
// "rest-spread-spacing":0, // rest运算符和扩展运算符与表达式之间是否需要空格
// "sort-imports":0, // 在模块中的import声明强制排序
// "symbol-description":0, // 要求在创建新的Symbol时描述它
// "template-curly-spacing":0, // 要求或禁止模板字符串的嵌入表达式保持一致的间隔风格
// "yield-star-spacing":0, // 在yield语句的*前后是否存在空格