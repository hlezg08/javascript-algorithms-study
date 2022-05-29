/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function fibonacci(n) {
  const answer = [];
  for (let i = 0; i < n; i++){
    if (i < 2) answer.push(1);
    else answer.push(answer[i-2]+answer[i-1]); 
  }
  return answer;
}
