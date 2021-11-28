### 安装
    git --version

### 初始化配置
    git config --global user.name "damu"
    git config --global user.email damu@example.com    
    git config --list
 
### 初始化仓库
    git init
    
### C(新增)
    在工作目录中新增文件
    git status
    git add ./
    git commit -m "msg"    
 
### U(修改)
    在工作目录中修改文件
    git status
    git add ./                先在版本库生成git的对象，多少个git的对象对应多少个文件，再将版本库里的git对象的hash值记录到暂存区（hash值对应文件名），此时还未将树对象保存至版本库
    git commit -m "msg"       将暂存区的记录保存到版本区生成树对象，最后生成提交对象
   
### D(删除 & 重命名)
   git rm 要删除的文件     git mv 老文件 新文件
   git  status             git  status
   git commit -m "msg"     git commit -m "msg"
   
### R(查询)
   git  status   :  查看工作目录中文件的状态(已跟踪(已提交 已暂存 已修改) 未跟踪)
   git  diff     :  查看未暂存的修改
   git  diff --cache : 查看未提交的暂存
   git  log --pretty=oneline  查看提交记录,简洁模式，切换之前的看不到
   git  log --oneline : 查看提交记录  更简洁模式   看不到完成的分支图
   git  log --oneline --decorate --graph --all : 查看整个项目的分支图 (包括切换之前，但看不到已删除的提交对象和没有分支指向的提交对象（用了reset第三部曲）)

   git reflog     :  查看提交记录，包括被删除的历史提交对象
   
### 分支
    分支的本质其实就是一个提交对象!!!（指向提交对象的可变的指针）
    HEAD: （指向分支的指针）
        是一个指针 它默认指向master分支 切换分支时其实就是让HEAD指向不同的分支
        每次有新的提交时 HEAD都会带着当前指向的分支 一起往前移动
    git branch : 查看分支列表
    git branch -v: 查看分支指向的最新的提交
    git branch name : 在当前提交对象上创建新的分支
    git branch name commithash: 在指定的提交对象上创建新的分支
    git checkout name :     切换分支
    git branch -d name : 删除空的分支 删除已经被合并的分支
    git branch -D name : 强制删除分支 
     
   
    配别名？？？
    git config --global alias.别名 原指令加双引号去掉git  配别名
   
     
   