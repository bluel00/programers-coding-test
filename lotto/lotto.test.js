function getLottoRank(lottos, winNumbers) {
  return [getTopRank(lottos, winNumbers), getLowestRank(lottos, winNumbers)];
}

function getTopRank(lottos, winNumbers) {
  return getRankOfMatchingNumbers(
    getMatchNumbers(lottos, winNumbers) + getNumberOfZero(lottos)
  );
}

function getLowestRank(lottos, winNumbers) {
  return getRankOfMatchingNumbers(getMatchNumbers(lottos, winNumbers));
}

function getMatchNumbers(lottos, winNumbers) {
  return lottos.filter((lottoNumber) => winNumbers.includes(lottoNumber))
    .length;
}

function getRankOfMatchingNumbers(count) {
  return (
    {
      2: 5,
      3: 4,
      4: 3,
      5: 2,
      6: 1,
    }[count] || 6
  );
}

function getNumberOfZero(array) {
  return array.filter((item) => item === 0).length;
}

describe("getLottoRank", () => {
  it("숫자가 2개인 배열을 리턴한다.", () => {
    const lottos = [45, 4, 35, 20, 3, 9];
    const winNumbers = [20, 9, 3, 45, 4, 35];

    expect(getLottoRank(lottos, winNumbers)).toHaveLength(2);
  });

  it("로또 번호와 당첨번호를 입력하면 순위를 리턴한다", () => {
    const lottos = [45, 4, 35, 20, 3, 9];
    const winNumbers = [20, 9, 3, 45, 4, 35];

    expect(getLottoRank(lottos, winNumbers)).toEqual([1, 1]);
  });

  it.only("0이 6개면 [1,6] 을 리턴한다.", () => {
    const lottos = [0, 0, 0, 0, 0, 0];
    const winNumbers = [20, 9, 3, 45, 4, 35];

    expect(getLottoRank(lottos, winNumbers)).toEqual([1, 6]);
  });
});

describe("getNumberOfZero", () => {
  it("0의 개수를 리턴한다.", () => {
    const lottos = [0, 0, 0, 0, 0, 0];

    expect(getNumberOfZero(lottos)).toEqual(6);
  });
});

describe("getMatchNumbers", () => {
  it("0을 제외한 일치하는 번호의 개수를 리턴한다", () => {
    expect(getMatchNumbers([1, 2], [1, 2])).toBe(2);
    expect(getMatchNumbers([1, 2], [1, 3])).toBe(1);
  });
});

describe("getRankOfMatchingNumbers", () => {
  it("당첨 개수를 입력하면 순위를 리턴한다", () => {
    expect(getRankOfMatchingNumbers(0)).toBe(6);
    expect(getRankOfMatchingNumbers(1)).toBe(6);
    expect(getRankOfMatchingNumbers(2)).toBe(5);
    expect(getRankOfMatchingNumbers(3)).toBe(4);
    expect(getRankOfMatchingNumbers(4)).toBe(3);
    expect(getRankOfMatchingNumbers(5)).toBe(2);
    expect(getRankOfMatchingNumbers(6)).toBe(1);
  });
});
