# Header

This components extends [Galio](http://galio.io)'s NavBar component.

This has the same props as the NavBar component but the whole navigation and programming logic is written inside of it. For any changes regarding routes or icons you would have to edit the component's code. This is super easy to do being the fact that our components are beautifully written.

|         Prop        |  Type  |    Default   | Description |
|:-------------------:|:------:|:------------:|:-----------:|
| ...NavBar.propTypes |        |              |             |
|      optionLeft     | string | 'Categories' |             |
|     optionRight     | string | 'Best Deals' |             |
|         tabs        |  array |     null     | array of objects following the next template: {id: 'example', title: 'Example'}            |
|       tabIndex      | number |     null     |             |
|        white        |  bool  |     false    |             |
|       search        |  bool  |     false    |             |