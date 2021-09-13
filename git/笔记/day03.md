### 远程分支
### 远程跟踪分支    (保存远程分支，push和fetch生成)--------
### 本地分支
    正常的数据推送 和 拉取步骤
        1. 确保本地分支已经跟踪了远程跟踪分支
        2. 拉取数据 : git pull
        3. 上传数据: git push
        
    一个本地分支怎么去跟踪一个远程跟踪分支
        1. 当克隆的时候 会自动生成一个master本地分支(已经跟踪了对应的远程跟踪分支)
        2. 在新建其他分支时 可以指定想要跟踪的远程跟踪分支
                git checkout -b 本地分支名 远程跟踪分支名
                git checkout --track  远程跟踪分支名 
        3. 将一个已经存在的本地分支 改成 一个跟踪分支   
                git branch -u 远程跟踪分支名     
    

### 团队协作   （一台主机演示需要清理凭据）
    1. 项目经理初始化远程仓库
        一定要初始化一个空的仓库; 在github上操作（非必须）
    2. 项目经理创建本地仓库
        git remote add 别名 仓库地址(https) --------------
        git init ; 将源码复制进来

        修改用户名 修改邮箱
        git config --global user.name "damu"
        git config --global user.email damu@example.com    
        git config --list

        git add
        git commit 

    3. 项目经理推送本地仓库到远程仓库
        清理windows凭据---------------(查看提交对象的，如果是本机不需要清理)
        git push  别名 分支  (输入用户名 密码;推完之后会附带生成远程跟踪分支)------------------------

    4. 项目邀请成员 & 成员接受邀请 p23 29分钟讲解------------------
          在github上操作  
    
    5. 成员克隆远程仓库（下载）
        git clone  仓库地址 (在本地生成.git文件 默认为远程仓库配了别名 orgin)  
        可以修改远程仓库别名：git clone -o 别名 ------------

                    只有在克隆的时候 产生的本地分支master 和 远程跟踪分支别名/master有同步关系的--------
                                                  (本地分支跟踪远程跟踪分支)                   
        手动修改默认用户信息        ---------------
        删除username命令: git config --global --unset user.name[email]      -----------

    6. 成员做出贡献
        修改源码文件
        git add 
        git commit 
        清理windows凭据----------------
        git push  别名[orgin] 分支 (输入用户名 密码;推完之后会附带生成远程跟踪分支) ------------
                              !!!         
    7. 项目经理更新修改
        git fetch 别名 (自身同步远程跟踪分支上的修改)   麻烦可用git pull 的跟踪方法 ---------------
(非必须)git checkout 远程跟踪分支 (切换到远程跟踪分支上，出现头部分离，因为head不指向本地分支) ---------
        git merge 远程跟踪分支  (合并分支)               !!!!!!!!

### 冲突
    git本地操作会不会有冲突?
        典型合并的时候
    git远程协作的时候 会不会有冲突?
        push
        pull            
        
### pull request  p27    ------------------------（远程仓库与fork之后的仓库不同步）
    7分钟：创建赝品库
    13.44分钟：留言操作
    25分钟：重新打开赝品库

注意点：
    每次在发起新的 Pull Request 时 要去拉取最新的源仓库的代码
    而不是自己 fork 的那个仓库。也就是将最新代码拉取到fork的本地仓库
    git remote add 别名 url          -------------------- 本地添加新的仓库，可以删除之前clone的旧仓库
    git fetch  远程仓库名字
    git merge 

### 远程指令
    git remote –v        -----------------显示远程仓库使用的 Git 别名与其对应的 URL
    git branch -vv       -----------------查看设置的所有跟踪分支-----------------------
    git remote rename 原名 新名   -------- 重命名仓库       
    git remote rm 仓库别名   --------------删除仓库-------------------
    git remote show   --------------------查看某一个远程仓库的更多信息    

    git branch -u[upstream] 某个远程跟踪分支  --------本地的分支跟踪远程跟踪分支，可直接git push(pull) !!!!!!                                                                         上传数据  拉数据
    
    git checkout -b branchname origin/branchname   ------创建并切换分支并跟踪远程分支，与上条命令类似
    git checkout --track origin/branchname -遇上条类似，origin后的branchname做分支名，可以省略取分支名

### 删除远程分支
    git push origin --delete branchname    ----------删除远程分支，分支名为origin后的branchname
    git remote prune origin --dry-run      ---------列出仍在远程跟踪但是远程已被删除的无用分支
    git remote prune origin   ------------------清除上面命令列出来的远程跟踪分支