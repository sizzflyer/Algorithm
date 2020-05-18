// 숭고한 알고리즘 캠프 퀴즈 타임이 시작되었다! PS 기초, 동적 계획법, 파라메트릭 서치, 욱제의 생일, 탐색, 그리디, 최단경로 알고리즘, 구데기컵, 서로소 집합, 최소 신장 트리, 최소 공통 조상, 세그먼트 트리, 코드포스에서 C++로 높은 수준의 난수를 생성하는 방법, 최대 유량, 볼록 껍질, 스타트링크 사무실에 있는 게임용 컴퓨터의 RAM의 총 용량 등등 수많은 주제를 총망라하고 있는 이 미니 대회는 수많은 참가자들의 도전으로 오늘도 빛나고 있고, 제출된 OX표의 개수는 셀 수 없을 정도이다.
// 운영진들은 이 OX 표들을 채점하고, 점수를 계산해낸 다음, 시상식을 진행하며 화기애애하게 행사를 마무리해야 한다. 숭고한 알고리즘 캠프 퀴즈 타임에서 OX 표의 점수는 다음과 같이 계산된다.
//  OX표에N개의 문제들이 있을 때,1번 문제,2번 문제,...,N번 문제 순으로 채점된다.
//  문제는 뒤로 갈수록 어려워지기 때문에,i번 문제의 기본 점수는i점이다.
// o 문제를 맞히면 그 문제의 기본 점수(즉i번 문제의 경우i점)를 획득하며, 틀리면 얻지 못한다.
//  기본 점수와 별개로, '보너스 점수'라는 값이 존재한다. 이는 처음에는 0 점이다.
// o 문제를 맞히면 그 때의 '보너스 점수'를 획득하고,'보너스 점수'의 값이 1점 증가한다.
// o 문제를 틀리면 '보너스 점수'를 얻지 못하고, '보너스 점수'의 값이 0 점으로 초기화된다.
// 민성이는 얼떨결에 숭고한 알고리즘 캠프 퀴즈 타임의 OX 표를 채점해야 하는 업무를 맡게 되었다. 수많은 OX 표를 볼 생각에 머리가 지끈거리는 민성이는 프로그램을 세워 이를 자동화하려고 한다. 시상식까지 4 시간밖에 남지 않은 민성이를 도와 점수를 계산해주자.
// 입력
// 첫 번째 줄에 OX표의 길이인 자연수N이 주어진다.(1 ≤N≤ 10,000)
// 두 번째 줄에 OX표를 의미하는 문자열S가 주어진다.S는O(알파벳 대문자 O,ASCII 코드
// 79)와 X(알파벳 대문자 X, ASCII 코드 88)로만 구성되어 있으며, 길이는 N 이다.
// 문자열S의i번째 글자가O이면 해당 참가자가i번째 문제를 맞혔음을 의미하고,X이면 틀렸음을 의미한다.
// 출력
// 첫 번째 줄에 입력으로 들어온 OX 표의 점수를 출력한다.

Function.prototype.method = function(name, func){
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
};

// algorithm
const UnisonAlgorithm = function(){
    this.ex5 = new Ex5();
}

// ex5
const Ex5 = function(){
    this.name = "Ex5";
};

// 순서도
// 1. 배열의 길이와 OX표의 점수를 배열로 입력 받는다.
// 2. 문제를 맞출경우 해당 index의 점수를 더한다.
// 3. 문제를 맞출경우 보너스 점수의 카운트는 1씩 증가하고, 하나라도 틀릴 경우 0으로 초기화
// 4. 점수의 합산을 출력
Ex5.method("getSolution", function(N, S){
    console.log("-----------------------" + this.name + "-----------------------");
    let total = 0;
    let bonusTotal = 0;
    // validation check
    if(N < 1 || N > 10000){
        console.log("1 <= N <= 10,000 범위의 \'N\'값을 입력하세요.");
        return;
    }
    for(let i=0; i<N; i++){
        if(S[i] != 'O' && S[i] != 'X'){
            console.log("S배열의 값은 \'O\'나 \'X\'여야 합니다.");
            return;
        }
    }

    // 2. 문제를 맞출경우 해당 index의 점수를 더한다.
    for(let i=0; i<N; i++){
        if('O' == S[i]){
            total += i + 1;
            total += bonusTotal;
            console.log((i+1) +'번 문제를 맞혔으므로 기본 점수 ' + (i+1) + '점과 보너스 점수 ' + bonusTotal+'점을 획득하며 보너스 점수가 '+(bonusTotal+1)+'점으로 증가한다.');
            console.log('(총 점수 ' + total + '점)');
            bonusTotal++;
        }else{  // 3. 문제를 맞출경우 보너스 점수의 카운트는 1씩 증가하고, 하나라도 틀릴 경우 0으로 초기화
            bonusTotal = 0;
        }
    }

    // 4. 점수의 합산을 출력
    console.log("총 점수는 " + total + "입니다.");
});

// create algorithm
const solution = new UnisonAlgorithm();

// test 1
const N1 = 8;
const S1 = ['X','O','O','O','X','O','O','X'];
solution.ex5.getSolution(N1, S1);

// test 2
const N2 = 8;
const S2 = ['X','X','X','X','X','O','O','X'];
solution.ex5.getSolution(N2, S2);

// test 3
const N3 = 8;
const S3 = ['X','X','O','O','X','O','O','O'];
solution.ex5.getSolution(N3, S3);

// test 4
const N4 = 8;
const S4 = ['O','O','O','O','O','O','O','O'];
solution.ex5.getSolution(N4, S4);

// test 5
const N5 = 8;
const S5 = ['X','X','X','X','X','X','X','X'];
solution.ex5.getSolution(N5, S5);