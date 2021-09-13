### eslint
    js代码的检查工具
    下载: npm i eslint -D
    使用:
        生成配置文件 npx eslint --init
        检查js文件   npx eslint 目录名
        命中的规则:
            字符串必须使用单引号
            语句结尾不能有分号
            文件的最后必须要有换行
    或者设置 package.json (npm脚本)
        "scripts": {
          "lint": "eslint src",    ------（属性名为start可以省略run  src:指定目录）
          "lint:create": "eslint --init"
        }
        然后npm run lint  &&  npm run lint:create  (跑脚本)
            
###  eslint结合git
    husky: 哈士奇, 为Git仓库设置钩子程序  ------钩子
    下载：npm i husky -D
    使用
        在仓库初始化完毕之后 再去安装哈士奇
        在package.json文件写配置
            "husky": {
                "hooks": {
                  "pre-commit": "npm run lint"   ---------（执行提交是运行脚本）
                  //在git commit之前一定要通过npm run lint的检查
                  // 只有npm run lint不报错时 commit才能真正的运行
                }
              }           

###   git add 时忽略某些文件
    创建文件.gitignore，写入：
    所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略。
    可以使用标准的 glob 模式匹配。
    * 代表匹配任意个字符
    ？代表匹配任意一个字符
    ** 代表匹配多级目录
    匹配模式前跟反斜杠（/） 这个斜杠代表项目根目录
    匹配模式最后跟反斜杠（/）说明要忽略的是目录,不管在哪个层级都会被忽略
    要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

     示例：
          # 此为注释 – 将被 Git 忽略
          # 忽略所有 .a 结尾的文件
          *.a

          # 但 lib.a 除外
          !lib.a

          # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
          /TODO

          # 忽略 build/ 目录下的所有文件
          build/

          # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
          doc/*.txt

          # 忽略 doc/ 目录下所有扩展名为 txt 的文件
          doc/**/*.txt（**通配符从 Git 版本 1.8.2 以上已经可以使用）

          GitHub  有一个十分详细的针对数十种项目及语言的 .gitignore  文件列
          在 表，你可以在 https://github.com/github/gitignore  

### SSH     p28       用户认证机制换了个套路，不用输入密码
    35分：创建公私钥
    37分：把公私钥上传到github

    ssh-keygen –t rsa –C 你的邮箱：生成公私钥
    .ssh 文件位置：C:\Users\Administrator\.ssh
    ssh -T git@github.com ：测试公私钥是否已经配对