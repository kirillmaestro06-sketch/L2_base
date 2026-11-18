// Запуск: node tests.js
const assert = require('assert');
const s = require('./solutions');

assert.strictEqual(s.hasTwoCubeSums(1729), true);
assert.strictEqual(s.hasTwoCubeSums(4104), true);
assert.strictEqual(s.hasTwoCubeSums(42), false);
assert.strictEqual(s.hasTwoCubeSums(1000), false);

assert.deepStrictEqual(s.ipv4Parser('192.168.50.1', '255.255.255.0'), ['192.168.50.0', '0.0.0.1']);
assert.deepStrictEqual(s.ipv4Parser('192.168.50.129', '255.255.255.128'), ['192.168.50.128', '0.0.0.1']);

assert.strictEqual(s.whatCentury('1999'), '20th');
assert.strictEqual(s.whatCentury('2011'), '21st');
assert.strictEqual(s.whatCentury('2154'), '22nd');
assert.strictEqual(s.whatCentury('2259'), '23rd');
assert.strictEqual(s.whatCentury('1124'), '12th');
assert.strictEqual(s.whatCentury('2000'), '20th');

assert.strictEqual(s.findMissing([1, 3, 5, 9, 11]), 7);
assert.strictEqual(s.findMissing([1, 2, 3, 4, 6, 7, 8]), 5);

assert.strictEqual(s.primeFactors(86240), '(2**5)(5)(7**2)(11)');
assert.strictEqual(s.primeFactors(7775460), '(2**2)(3**3)(5)(7)(11**2)(17)');

assert.strictEqual(s.toWeirdCase('String'), 'StRiNg');
assert.strictEqual(s.toWeirdCase('Weird string case'), 'WeIrD StRiNg CaSe');

assert.deepStrictEqual(s.wave('hello'), ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
assert.deepStrictEqual(s.wave('two words'), ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']);
assert.deepStrictEqual(s.wave(''), []);

assert.strictEqual(s.expandedForm(12), '10 + 2');
assert.strictEqual(s.expandedForm(70304), '70000 + 300 + 4');

assert.deepStrictEqual(s.solution('abc'), ['ab', 'c_']);
assert.deepStrictEqual(s.solution('abcdef'), ['ab', 'cd', 'ef']);
assert.deepStrictEqual(s.solution(''), []);

assert.strictEqual(s.bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
assert.strictEqual(s.bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');

assert.strictEqual(s.domainName('http://github.com/carbonfive/raygun'), 'github');
assert.strictEqual(s.domainName('http://www.zombie-bites.com'), 'zombie-bites');
assert.strictEqual(s.domainName('https://www.cnet.com'), 'cnet');
assert.strictEqual(s.domainName('www.xakep.ru'), 'xakep');

assert.strictEqual(s.nthLongest(['aaa', 'bb', 'c'], 1), 'aaa');
assert.strictEqual(s.nthLongest(['aaa', 'bb', 'c'], 3), 'c');

assert.deepStrictEqual(s.hexStringToRGB('#FF9933'), { r: 255, g: 153, b: 51 });
assert.deepStrictEqual(s.hexStringToRGB('#beaded'), { r: 190, g: 173, b: 237 });

assert.strictEqual(s.isCircleSorted([2, 3, 4, 5, 0, 1]), true);
assert.strictEqual(s.isCircleSorted([4, 1, 2, 5]), false);
assert.strictEqual(s.isCircleSorted([1, 2, 3]), true);

const nums = [1, 2, 3, 4, 5];
assert.deepStrictEqual(nums.square(), [1, 4, 9, 16, 25]);
assert.deepStrictEqual(nums.cube(), [1, 8, 27, 64, 125]);
assert.strictEqual(nums.average(), 3);
assert.strictEqual(nums.sum(), 15);
assert.deepStrictEqual(nums.even(), [2, 4]);
assert.deepStrictEqual(nums.odd(), [1, 3, 5]);
assert.ok(Number.isNaN([].average()));
assert.strictEqual([].sum(), 0);

let calls = 0;
const slow = (a, b) => { calls++; return a + b; };
const fast = s.cache(slow);
assert.strictEqual(fast(1, 2), 3);
assert.strictEqual(fast(1, 2), 3);
assert.strictEqual(fast(2, 3), 5);
assert.strictEqual(calls, 2);

assert.strictEqual(s.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');

console.log('Все проверки пройдены ✅');
