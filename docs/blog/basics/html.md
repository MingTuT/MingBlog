# HTML

## 浏览器标准模式和怪异模式
浏览器本身分为两种模式，一种是标准模式，一种是怪异模式。
### 怪异模式
::: tip 提示
盒模型为IE盒模型：height = border + padding + content
:::
![ie-box](./ie-box.png)

### 标准模式
::: tip 提示
W3C标准盒模型： height = content
:::
![box](./box.png)

## Doctype 作用
Doctype 声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。  
严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。  
混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。  
## Label标签
### 作用
label 标签用来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

### 用法
<font color=#3eaf7c>**id绑定**</font>   
``` html
<form>
  <label for="name">name:</label>
  <input type="input" name="uname" id="name" />
</form>
```
<font color=#3eaf7c>**嵌套**</font>   
``` html
<form>
  <label><input type="input" name="uname" id="name" /></label>
</form>
```

## iframe 是什么、有什么缺点
+ 定义：：iframe 元素会创建包含**另一个文档**的内联框架
+ 缺点：
  - 会阻塞主页面的 onload 事件
  - 搜索引擎无法解读这种页面，不利于 SEO
  - iframe 和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。

## src 与 href 的区别
- src 用于引用资源，替换当前元素，用在 img，script，iframe 上，src 是页面内容不可缺少的一部分。
- href 用于在当前文档和引用资源之间确立联系，用在 link 和 a 等元素上。

## img标签上的title和alt属性的区别
+ title属性是为元素提供标题信息，即当光标悬浮在标签上后显示的信息。
+ alt属性是图片的替换文本，即当图片不能正常显示时（如加载失败），用文字代替，设置有意义的alt值，有利于SEO。

## 前端页面的三层结构
1. <font color=#c7254e>结构层</font>：由 HTML 或 XHTML 之类的标记语言负责创建，对网页内容的语义含义做出了描述。
2. <font color=#c7254e>表示层</font>：由 CSS 负责创建， CSS 对“如何显示有关内容”的问题做出了回答。
3. <font color=#c7254e>行为层</font>：Javascript 语言和 DOM 主宰的领域，负责回答“内容应该如何对事件做出反应”这一问题。

## div+css 的布局较 table 布局有什么优点
+ 结构层与表现层相分离，改版更方便。
+ 页面清晰、简洁且加载速度更快。
+ 易于优化（seo）搜索引擎更友好，排名更容易靠前。

## Canvas 和 SVG 的区别
两者都允许在浏览器中创建图形  
**Canvas**：通过 Javascript 来绘制2D图像，逐像素进行渲染，其位置发生改变，会重新进行绘制。  
**SVG**：使用 XML 描述的 2D 图形的语言，SVG DOM 中的每个元素都是可用的，可以为某个元素附加 Javascript 事件处理器,每个被绘制的图形均被视为对象。
|Canvas|SVG|
|:---|:---|
|依赖分辨率|不依赖分辨率|
|不支持事件处理器|支持事件处理器|
|弱的文本渲染能力|最适合带有大型渲染区域的应用程序（比如谷歌地图）|
|能够以 .png 或 .jpg 格式保存结果图像|复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）|
|最适合图像密集型的游戏，其中的许多对象会被频繁重绘|不适合游戏应用|

## viewport
> **移动端浏览器通常都会在一个比移动端屏幕更宽的虚拟窗口中渲染页面，这个虚拟窗口就是 viewport; 目的是正常展示没有做移动端适配的网页，让他们完整的展示给用户**

### viewport属性值
|属性名|属性值|
|:---|:---|
|width|设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"|
|initial-scale|设置页面的初始缩放值，为一个数字，可以带小数|
|minimum-scale|允许用户的最小缩放值，为一个数字，可以带小数|
|maximum-scale|允许用户的最大缩放值，为一个数字，可以带小数|
|height|设置 layout viewport 的高度，这个属性对我们并不重要，很少使用|
|user-scalable|值为"no"或"yes", no 代表不允许，yes 代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。|

::: warning 例子
让当前 viewport 的宽度等于设备的宽度，同时不允许用户手动缩放。
:::
``` html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
```

## 建议 CSS 的`<link>`标签放在`<head>`标签之间
+ 把 link 标签 放在 head 标签之间是规范要求的内容，此外，这种可以让页面逐步呈现，提高用户体验。  
+ 将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。  
+ 这种做法可以防止呈现给用户空白的页面或没有样式的内容。

## 建议 JS 的`<script>`标签放在`</body>`标签之前
+ 脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。
+ 将`<script>`标签放在底部，这能确保在脚本执行前页面已经完成了DOM树渲染。

## 渐进式渲染（progressive rendering）
> **渐进式渲染是用来提高网页性能，以尽快呈现页面的技术**
::: tip <font color=#3eaf7c>栗子</font>
+ 图片懒加载——页面上的图片不会一次性的全部加载，当用户滚动页面到图片位置时，JS将加载并显示图像。  
+ 确定显示内容的优先级——为了尽快将页面呈现给用户，页面只将一小部分CSS脚本内容加载，然后在延时加载或者监听事件来加载。
+ 异步加载HTML片段——当页面通过后台渲染时，把HTML拆分，通过异步请求，分块发送给浏览器。
:::

## DOM 和 BOM
|DOM|BOM|
|---|---|
|Document Object Model，文档对象模型|Browser Object Model，浏览器对象模型|
|DOM 是为了操作文档出现的 API，document 是其一个对象|BOM 是为了操作浏览器出现的 API，window 是其一个对象|
|DOM 和文档有关，这里的文档指的是网页，也就是 html 文档。DOM 和浏览器无关，他关注的是网页本身的内容。|window 对象既为 javascript 访问浏览器提供 API，同时在 ECMAScript 中充当 Global 对象|

## DOM Tree 的构建
+ **HTML 解释器**
  - HTML 解释器的工作就是将网络或者本地磁盘获取的 HTML 网页和资源从字节流解释成 DOM 树结构。
+ **JavaScript 的执行**
  - 在 HTML 解释器的工作过程中，可能会有 JavaScript 代码需要执行，它发生在将字符串解释成词语之后、创建各种节点的时候。这也是为什么全局执行的 JavaScript 代码不能访问 DOM 的原因——因为 DOM 树还没有被创建完呢。

## 前端需要注意的 SEO （搜索引擎优化）
进行SEO优化的目的就是为了提升网站在搜索引擎中的权重，使得用户在搜索网站时我们的网站能排在前面。  
+ 前端代码优化
  - 合理的 title、description、keywords：搜索对这三项的权依次减小，title 值强调重点即可；description 把页面内容高度概括，长度合适；keywords 列举出重要关键词即可。
  - 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页。
  - 重要内容 HTML 代码放在最前
  - 重要内容不要用 js 输出：爬虫不会执行 js 获取内容
  - 少用 iframe：搜索引擎不会抓取 iframe 中的内容
+ 网页加载速度
  - 提高网站速度：网站速度是搜索引擎排序的一个重要指标
    * javascript按需加载
    * 图片懒加载
    * 使用CDN上的文件等

## 浏览器内核的理解
+ 浏览器内核主要分成两部分：**渲染引擎**和 **JS 引擎**。
  - 渲染引擎的主要作用是帮助浏览器来渲染网页的内容，将页面内容和排版代码转换为用户所见的视图。
  - JS 引擎的主要作用是解析和执行 JavaScript 来实现网页的动态效果。

## attribute 和 property 的区别
+ attribute 是 dom 元素在文档中作为 html 标签拥有的属性。
+ property 是 dom 元素在 js 中作为对象拥有的属性。

## async 和 defer 的作用和区别
+ 脚本没有 defer 或 async，浏览器会**立即加载并执行**指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。
+ defer 属性表示**延迟执行**引入的 JavaScript，即这段 JavaScript 加载时， HTML 并未停止解析，这两个过程是**并行**的。当整个 document **解析完毕**后再**执行**脚本文件。
+ async 属性表示异步执行引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行，也就是说它的**执行仍然会阻塞文档的解析**，只是它的**加载过程不会阻塞**。多个脚本的执行顺序无法保证。

## image 和 canvas 在处理图片的区别
+ image 是通过对象的形式描述图片的
+ canvas 通过专门的 API 将图片绘制在画布上

## HTML5
### HTML5 新特性
+ 拖拽释放(Drag and drop) API 
  - dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
  - darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
  - dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
  - dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
  - dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
  - drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
  - dragend：事件主体是被拖放元素，在整个拖放操作结束时触发
+ 自定义属性 ( data-id 获取 li.getAttribute('data-id')或者 li.dataset.type = 'guoji' )
+ 语义化更好的内容标签（header,nav,footer,aside,article,section）
+ 音频、视频 API(audio,video)
+ 画布(Canvas)
+ 地理(Geolocation) 
+ 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
+ sessionStorage 的数据在浏览器关闭后自动删除
+ 表单控件 ( calendar、date、time、email、url、search 、tel、file、number )
+ 新的技术 webworker, websocket, Geolocation
+ 文件读取

### 新增的操作 DOM 的方法
+ document.querySelector
+ document.querySelectorAll
+ document.getElementByClassName();

### HTML5 本地存储概念
::: tip 概念
传统方式我们以document.cookie来进行存储。
但是由于其存储大小只有 4k 左右，并且解析也相当的复杂，给开发带来诸多不便。  
HTML5 规范则提出解决方案。HTML5 storage 提供了一种方式让网站能够把信息存储到你本地的计算机上，并再以后需要的时候进行获取。  
这个概念和 cookie 相似，区别是它是为了更大容量存储设计的。
:::

**cookies 兼容所有的浏览器，HTML5 提供的 storage 存储方式**
+ Document.cookie
  - 当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。Cookie 的作用就是用于解决 "如何记录客户端的用户信息"
  - 创建cookie时没有设置过期时间，即没有设置expires或者max-age值，则该cookie只存在与会话中，此时，cookie存储在浏览器的内存中，关闭浏览器时cookie自动消失。
  - 如果设置了过期时间，则cookie存储在用户的硬盘上。
+ Window.sessionstorage
  - sessionStorage 的存储大小约 5M
  - 仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持
+ Window.localstorage
  - localstorage 的存储大小约 20M
  - 始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据  

**作用域：**
+ sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面
+ localStorage 在所有同源窗口中都是共享的
+ cookie 也是在所有同源窗口中都是共享的

### 什么是 Web Worker
当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。  
web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

### HTML5 应用程序缓存和浏览器缓存有什么区别
应用程序缓存是 HTML5 的重要特性之一，提供了离线使用功能，让应用程序可以获取本地的网站内容，例如 HTML、CSS、图片以及 Javascript。这个特性可以提高网站性能，它的实现借助于 manifest 文件，代码如下：  
`<!doctype html>
<html manifest="example.appcache">
....</html>`   
与传统浏览器缓存相比，它不强制用户访问的网站内容被缓存。

1. 浏览器缓存针对单个文件,H5离线缓存针对整个应用
2. H5缓存断网还能用,浏览器缓存断网就用不了
3. H5缓存核心是applicationCache对象,浏览器缓存核心是cache-control


