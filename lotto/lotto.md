어떻게 문제를 풀 것인가?

1. 문제에 대한 이해

- 우리가 풀어야 할 문제는 무엇인가?

  - https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
  - 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다.
  - 일부 번호가 지워진 로또로 당첨이 가능했던 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하는 함수를 완성해 주세요.
  - 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.

- 주어진 자료는 무엇인가?

```
  순위   	당첨 내용
  1	      6개 번호가 모두 일치
  2	      5개 번호가 일치
  3	      4개 번호가 일치
  4         3개 번호가 일치
  5	      2개 번호가 일치
  6(낙첨)	그 외
```

- 조건은 무엇인가?

  - lottos는 길이 6인 정수 배열입니다.
  - lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
    - 0은 알아볼 수 없는 숫자를 의미합니다.
    - 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
    - lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
  - win_nums은 길이 6인 정수 배열입니다.
  - win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
    - win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.
    - win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.

입출력 예

```
lottos	                  win_nums	            result
[44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
[0, 0, 0, 0, 0, 0]	   [38, 19, 20, 40, 15, 25]	[1, 6]
[45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]
```

- 우리가 문제를 풀기 위해 주어진 자료가 충분한가?

- 숨겨진 조건이나 자료가 있는가? 그렇다면 그 것을 다른 방법으로 해석해보라.

2. 계획

   - 전에 비슷한 문제를 알고 있는가?

   - 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
     - array 메서드
   - 비슷한 문제를 풀어본 적이 있다면 그 것을 활용할 수 있는가?
   - 만약 문제를 풀 수 없다면 문제를 더 단순하게 하기 위해서 주어진 조건을 버려보아라
   - 주어진 자료로부터 유용한 것을 이끌어 낼 수 있는가?
   - 자료는 모두 사용했는가?
   - 조건을 모두 사용했는가?
   - 문제에 포함된 핵심적인 개념은 모두 고려했는가?

3. 실행
   풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

- [x] 0이 없는 경우를 먼저 풀자.
- [x] 0이 있는 경우

4. 반성
   - 문제를 다른 방식으로 해결할 수 있는가?
   - reduce를 이용해서 풀려 했는데 막혀서 다시 돌렸다.
   - 마지막에는 테스트 없이 코드를 진행했다.

- 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
- 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
- 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?

## Action Item

1. Array methods 숙련도 올리기 ( reduce를 공부하자 )
