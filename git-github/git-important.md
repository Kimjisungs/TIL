## git - collaborate

branch는 분기점이다. 스파이더맨이란 하나의 캐릭터를 마블이 제작하느냐, 소니가제작하느냐, 시리즈가 뭐냐에 따라서 다른히스로티가 있다. 특정한 분기점에서 본 branch에 적용하는것.



### master Branch

개발이 이뤄지면 안되고 개발이 완료된것만 있어야한다.긴급한 수정(hot fix)이 이뤄질때 되어야한다.  

**branch**

브랜치는 작업단위로 따서 작업한다.





순서 [폴더에 접근해서]

모든명령어는 git flow로 해야한다. 

1. git flow init -> enter를 계속 친다 -> git branch 쳐서 확인 ->
    ex) git flow init을 하는 순간 git develop으로 체크아웃까지 해준다.

2. feature를 start하고 finish하는것 
   git flow feature start markup-init 입력 ->git checkout develop >  git branch -> git flow feature start style-init -> 끝날때 : git flow feature finish markup-init -> git checkout style-init -> (상위와 머지작업) git merge develop -> git mkdir style -> touch style.css -> 수정 후 git flow feature finish style-init



git 삭제 git branch -D feature/wrong-feature

file간 이동할때 git mv를 사용해야한다. 그냥 mv는 복사개념이다. git mv는 이동개념

3. 버전 하나가 나갈때 모두 끝날때 release를 해야한다.
   release : git flow release start v0.0.1.001930001
   v0.0.1  처음0은 큰버전, 두번째 기능추가, 세번째 작은수정 . 배포를 이 위에서 한다.
   -> 종료 : git flow release finish v0.0.1.00191030001
   -> commit메시지 작성



4. develop에서 push 
   -> git checkout branch, git checkout master둘다 푸시 해줘야함
   -> git push -u origin master



collaborator는 하지 않는게 좋다.





## Fork

fork -> 클론 한다음에 git flow init바로하면된다.

git flow init -> git pull origin develop

-> git flow feature start index-sementic ->  finish후 -> git flow push develop  

pull request 요청  develop에서 develop으로 create pull reqeust 누름, 메세지 남길 수 있음.  리퀘스트 보내기 버튼 추가



1. 팀장이 레포를 만들고. clone-> git flow init -> index.html -> add, commit, push on develop

2. 팀원이 fork를 한다.  fork한 레포를 clone -> git flow init -> git pull origin develop -> feature start -> feature finish -> push on develop

3. create pull request(your forked repo from github.com)

4. create pull reqeust, 팀장의 리뷰 후 merge(pm's repo from github.com)

5. ** 모든 팀원은 merge 발생시 pmorigin의 develop을 자신의 develop으로 pull하여 업데이트 한다.

6. 

7. git remote add pmorigin {팀장 레포 주소}

8. git remote쳐서 확인

9. git pull pmorigin develop

   

   

   

기능 개발 되기전에 issue텝이 있어야 한다. 

commit: solved: #2