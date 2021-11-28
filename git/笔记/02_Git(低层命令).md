### 底层命令
    git对象     将文件的内容保存到版本区生成git对象
        git hash-object -w fileUrl : 生成一个key(hash值):val(压缩后的文件内容)键值对存到.git/objects

    问题
      只对应单个文件的版本
      只有hash值，没有文件名，解决方法：树对象


    tree对象     解决了文件命名的问题，可以将多个文件组织到一起         （版本库里的git对象）         树对象保存的是项目的一次快照
        git update-index --add --cacheinfo 100644 hash test.txt : 往暂存区添加一条记录(让git对象 对应 上文件名)存到.git/index （同一个文件名会覆盖）
        git write-tree : 生成树对象存到.git/objects   （树对象包含了多个文件的文件名和对应的hash值）

    问题
      版本库里保存的树对象也对应的是hash值，是谁保存的，为什么保存都不知道
        

        
    commit对象  （链式的，知道上一次提交对象的hash值）   提交对象保存的是项目的一个版本（包含了树对象的提交者和注释）
        echo 'first commit' | git commit-tree treehash : 生成一个提交对象存到.git/objects
    对以上对象的查询
        git cat-file -p hash       : 拿对应对象的内容
        git cat-file -t hash       : 拿对应对象的类型
        
### 查看暂存区
    git ls-files -s        
        
    
        