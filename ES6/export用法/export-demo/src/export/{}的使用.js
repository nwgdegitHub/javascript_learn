参考自：https://www.cnblogs.com/dongfangchun/p/8290549.html

假如有一个B.js，想要通过import语法引用模块A.js，那么可以这么写：

// B.js
import A from './A'
而上面的代码生效的前提是，只有在如下A.js中有默认导出的export default语法时才会生效。也就是：

// A.js
export default 42
在这种不使用{}来引用模块的情况下，import模块时的命名是随意的，即如下三种引用命名都是正确的：

// B.js
import A from './A'
import MyA from './A'
import Something from './A'
因为它总是会解析到A.js中默认的export default。

而下面是使用了花括号命名的方式{A}来导入A.js：

import { A } from './A'
上面代码生效的前提是，只有在模块A.js中有如下命名导出为A的export name的代码，也就是：

export const A = 42
而且，在明确声明了命名导出后，那么在另一个js中使用{}引用模块时，import时的模块命名是有意义的，如下：

// B.js
import { A } from './A'                 // 正确，因为A.js中有命名为A的export
import { myA } from './A'               // 错误！因为A.js中没有命名为myA的export
import { Something } from './A'         // 错误！因为A.js中没有命名为Something的export
要想上述代码正确执行，你需要明确声明每一个命名导出：

// A.js
export const A = 42
export const myA = 43
export const Something = 44
ps: 一个模块中只能有一个默认导出export default，但是却可以有任意命名导出（0个、1个、多个），你也可以如下，一次性将他们导入：

// B.js
import A, { myA, Something } from './A'
这里我们使用导入默认导出A，以及命名导出myA和Something。

我们甚至可以在导入的时候重命名导入：

import X, { myA as myX, Something as XSomething } from './A'
总结：模块的默认导出通常是用在你期望该从模块中获取到任何想要的内容；而命名导出则是用于一些有用的公共方法，但是这些方法并不总是必要的。
