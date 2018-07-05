cd -- 进入目录
pwd -- 查看当前目录
mkdir -- 新建目录
echo 'hello' >> a.txt -- 将文字写入文本文件a.txt

windows :
explorer . -- 打开当前文件夹
dir -- 查看当前目录

git操作：
git --version  -- 查看git版本
git --help   --查看git命令帮助
git init -- 初始化
git status -- 查看是否有改动
git add *  -- 添加所有文件  // git add a.txt
git commit -m 'first commit' -- 提交文件
git remote add origin https://github.com/1366169599/xiangyuan.git -- 关联远程项目
git push -u origin master -- 推送代码到远程仓库
git pull origin master  -- 拉取代码到远程仓库

//关联项目和分支后的简写
git push
git pull
[Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)