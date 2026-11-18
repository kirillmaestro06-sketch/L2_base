// Лабораторная 2 (JS). Решения kata с Codewars.
// В Codewars вставляй ТОЛЬКО нужную функцию (имя функции бери из шаблона на сайте!).

// 1. Two cube sums — 55fd4919ce2a1d7c0d0000f3
// Нужно проверить: n = a³ + b³ = c³ + d³ (a, b, c, d разные и > 0).
// Перебираем a, считаем остаток n - a³ и проверяем, что это точный куб b³ при b > a.
// Если нашлось >= 2 разных пар (a, b) — они автоматически не пересекаются.
function hasTwoCubeSums(n) {
  let pairs = 0;
  for (let a = 1; a ** 3 < n; a++) {
    const rest = n - a ** 3;
    const b = Math.round(Math.cbrt(rest));
    if (b > a && b ** 3 === rest) pairs++;
  }
  return pairs >= 2;
}

// 2. IPv4 Parser — 556d120c7c58dacb9100008b
// Сеть = адрес AND маска, хост = адрес AND (NOT маска). Считаем по каждому октету.
// Возвращаем две строки: [сеть, хост]. (Формат возврата сверь с шаблоном на Codewars.)
function ipv4Parser(addr, mask) {
  const a = addr.split('.').map(Number);
  const m = mask.split('.').map(Number);
  const network = a.map((x, i) => x & m[i]);
  const host = a.map((x, i) => x & (~m[i] & 255));
  return [network.join('.'), host.join('.')];
}

// 3. What century is it? — 52fb87703c1351ebd200081f
// Век = округление вверх (год / 100). Суффикс: 11,12,13 -> th; 1 -> st; 2 -> nd; 3 -> rd; иначе th.
function whatCentury(year) {
  const c = Math.ceil(Number(year) / 100);
  let suffix = 'th';
  if (c % 100 < 11 || c % 100 > 13) {
    suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[c % 10] || 'th';
  }
  return c + suffix;
}

// 4. Find the missing term in an Arithmetic Progression — 52de553ebb55d1fca3000371
// Шаг прогрессии = (последний - первый) / количество_элементов_в_списке
// (в полной прогрессии на 1 элемент больше, поэтому делим на длину списка).
// Ищем место, где разница соседних != шагу, — там пропущено число.
function findMissing(list) {
  const step = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== step) return list[i] + step;
  }
}

// 5. Primes in numbers — 54d512e62a5e54c96200019e
// Раскладываем n на простые множители, пробуя делители p = 2, 3, 4...
// Если после цикла n > 1 — остаток тоже простое число.
function primeFactors(n) {
  let res = '';
  for (let p = 2; p * p <= n; p++) {
    let k = 0;
    while (n % p === 0) {
      n /= p;
      k++;
    }
    if (k) res += k > 1 ? `(${p}**${k})` : `(${p})`;
  }
  if (n > 1) res += `(${n})`;
  return res;
}

// 6. WeIrD StRiNg CaSe — 52b757663a95b11b3d00062d
// Делим на слова, в каждом слове чётные индексы (0,2,4..) — в верхний регистр, нечётные — в нижний.
function toWeirdCase(string) {
  return string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join('')
    )
    .join(' ');
}

// 7. Mexican Wave — 58f5c63f1e26ecda7e000029
// Для каждой позиции i (кроме пробелов) делаем копию строки, где буква i — заглавная.
function wave(str) {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    res.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return res;
}

// 8. Write Number in Expanded Form — 5842df8ccbd22792a4000245
// 70304 -> "70000 + 300 + 4": каждая ненулевая цифра + нужное количество нулей.
function expandedForm(num) {
  const s = String(num);
  return s
    .split('')
    .map((d, i) => (d === '0' ? null : d + '0'.repeat(s.length - 1 - i)))
    .filter(Boolean)
    .join(' + ');
}

// 9. Split Strings — 515de9ae9dcfc28eb6000001
// Если длина нечётная — добавляем '_' в конец, затем режем на пары регуляркой /../g.
function solution(str) {
  if (str.length % 2) str += '_';
  return str.match(/../g) || [];
}

// 10. Lottery Ticket — 57f625992f4d53c24200070e
// ticket: массив [строка, число]. "Мини-победа", если в строке есть символ с кодом = число.
// Если мини-побед >= win -> 'Winner!', иначе 'Loser!'.
function bingo(ticket, win) {
  const mini = ticket.filter(([s, code]) => s.includes(String.fromCharCode(code))).length;
  return mini >= win ? 'Winner!' : 'Loser!';
}

// 11. Extract the domain name from a URL — 514a024011ea4fb54200004b
// Убираем протокол и www, берём всё до первой точки.
function domainName(url) {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

// 12. Find the Nth longest string in an Array — 5594c4599934000e1e00002e
// Сортируем копию массива по длине (по убыванию) и берём элемент n-1 (нумерация с 1).
// sort в современном Node стабильный: при равной длине раньше стоит тот, кто раньше в массиве.
// ВАЖНО: правило для равных длин сверь с описанием на Codewars; имя функции — из шаблона.
function longest(arr, n) {
  return arr
    .map((s, i) => [s, i])
    .sort((a, b) => b[0].length - a[0].length || a[1] - b[1])[n - 1][0];
}

// 13. Convert A Hex String To RGB — 5282b48bb70058e4c4000fa7
// "#FF9933" -> {r: 255, g: 153, b: 51}. parseInt(..., 16) переводит из шестнадцатеричной.
function hexStringToRGB(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

// 14. Circularly Sorted Array — 544975fc18f47481ba00107b
// Массив "циклически отсортирован", если по кругу есть не более одного места,
// где элемент больше следующего (последний сравниваем с первым).
function isCircleSorted(arr) {
  let drops = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) drops++;
  }
  return drops <= 1;
}

// 15. (57b06eb0bb9944d42c0001ab) — название не удалось определить, см. README.

// 16. Array Helpers — 525d50d2037b7acd6e000534
// Расширяем встроенный Array через prototype (this — это сам массив).
Array.prototype.square = function () {
  return this.map(x => x * x);
};
Array.prototype.cube = function () {
  return this.map(x => x * x * x);
};
Array.prototype.sum = function () {
  return this.reduce((acc, x) => acc + x, 0);
};
Array.prototype.average = function () {
  return this.sum() / this.length; // у пустого массива получится NaN — как требуется
};
Array.prototype.even = function () {
  return this.filter(x => x % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter(x => x % 2 !== 0);
};

// 17. Function Cache — 525481903700c1a1ff0000e1
// Обёртка: считаем результат один раз для набора аргументов и запоминаем в Map.
// Ключ — JSON-строка аргументов. Проверяем через has(), чтобы кэшировать и undefined.
function cache(func) {
  const store = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!store.has(key)) store.set(key, func.apply(this, args));
    return store.get(key);
  };
}

// 18. Create Phone Number — 525f50e3b73515a6db000b83
// [1,2,3,4,5,6,7,8,9,0] -> "(123) 456-7890"
function createPhoneNumber(numbers) {
  const s = numbers.join('');
  return `(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6)}`;
}

module.exports = {
  hasTwoCubeSums, ipv4Parser, whatCentury, findMissing, primeFactors, toWeirdCase,
  wave, expandedForm, solution, bingo, domainName, longest, hexStringToRGB,
  isCircleSorted, cache, createPhoneNumber,
};
