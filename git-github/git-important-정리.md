## Master Branch

개발이 이뤄지면 안되고 개발이 완료된것만 있어야한다.긴급한 수정(hot fix)이 이뤄질때 되어야한다.  

**branch**

브랜치는 작업단위로 따서 작업한다.

![git](https://user-images.githubusercontent.com/33679192/67853206-5f38ee00-fb51-11e9-84d8-2ed739f0facd.jpg)

## GIT 순서, git flow

모든 명령은 git flow로 해야한다

1. repository에 repo를 생성 후 url을 clone한다.
2. clone한 해당 폴더 접근
3. **[git flow 설치]**  
   git flow init -> enter를 계속 치고 -> git branch를 쳐서 잘 깔렸나 확인  
   (git flow init을 하는 순간 git develop으로 체크아웃까지 해준다.)
4. **[feature branch START, FINISH]**  
   시작할때 명령어 : git flow feature start markup-init   
   코드 수정 : 코드 수정 후 add, commit  
   commit이 완료되고 완전히 종료했을때 : git flow feature finish markup-init  
   (다른곳의 작업상황과 합치려면 명령어 : git merge develop)
5. **[번외] **  
   branch 삭제 :  git branch -D feature/markup-init (finish하지 않았을때 가능)  
   file간 이동할때는 git mv를 사용해야 한다. 그냥 mv는 복사 개념이다. git me는 이동개념 
6. **[release] feature Finish 끝난 후**[버전 관리하기위해]  
   1) 시작 명령어 : git flow release start v0.0.1.0019300001
   2) 종료 명령어 : git flow release finish v0.0.1.0019300001  
   3) 종료 후 commit 메시지 작성
   - 작업을 완료하고 버전을 만들어 올릴때 release를 해야한다. release는 팀장이 보통한다.
   - v0.0.1 처음 0은 큰버전, 두번째는 기능추가, 세번째는 작은수정, 배포를 이 위에서 한다.

7. **[git에 올리는 작업]**
   1. git checkout develop -> git push -u origin develop
   2. git checkout master -> git push -u origin master
      (두곳 다해줘야 한다) 
8. etc : collaborator는 하지 않는게 좋다.



## Fork

협업 할 팀원이 하는 방법이다.

1. 팀장이 repo를 만들고 파일생성 및 commit, push를 develop에 한다
2. fork를 한 후 url을 clone한다.
3. clone한 해당 폴더 접근
4. **[git flow 설치]**  
   git flow init -> enter를 계속 치고 -> git branch를 쳐서 잘 깔렸나 확인  
   (git flow init을 하는 순간 git develop으로 체크아웃까지 해준다.)
5. **[feature branch START, FINISH]**  
   시작할때 명령어 : git flow feature start markup-init   
   코드 수정 : 코드 수정 후 add, commit  
   commit이 완료되고 완전히 종료했을때 : git flow feature finish markup-init  
   (다른곳의 작업상황과 합치려면 명령어 : git merge develop)
6. 4번까지는 위와 동일하다
7. **[팀장에게 pull request 요청]**  
   git에서 확인요청  
   여기서 develop -> develop 으로 하는지 확인해야 한다   
   master로 하면 안된다.
8. 팀장이 리뷰후 리젝 할것인지 머지할것인지 결정. 팀장이 완료했다면 내부에서 버전생성 develop,master push한다.
9. 팀원은 pull 받는다  
   1) git remote add pmorigin {팀장 레포 주소}
   2) git remote쳐서 확인
   3) git pull pmorigin develop

