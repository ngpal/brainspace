# 16-1 Coin Changing Problem

## a. Greedy Algorithm for U.S. Coin Denominations

**Algorithm**:  
1. Start with the largest coin denomination (quarters = 25 cents) and use as many as possible without exceeding $n$.  
2. Move to the next largest denomination (dimes = 10 cents), and repeat.  
3. Continue with nickels (5 cents) and then pennies (1 cent).  
4. Stop when the total value equals $n$.  

**Proof of Optimality**:  
For U.S. coin denominations, the greedy algorithm is optimal because:  
1. The denominations are in a hierarchical structure where smaller denominations are multiples of larger ones.  
2. At each step, choosing the largest coin minimizes the remaining amount $n$.  
3. Any alternative solution would require either the same or more coins due to the hierarchy.  

**Example**:  
For $n = 41$ cents:  
- 1 quarter (25 cents) → Remaining = 16  
- 1 dime (10 cents) → Remaining = 6  
- 1 nickel (5 cents) → Remaining = 1  
- 1 penny (1 cent) → Total = 4 coins.  

No better solution exists, so the algorithm is optimal.

---

## b. Optimality for Denominations in Powers of $c$

**Given**: Denominations are powers of $c$: $c^0, c^1, \dots, c^k$.  
**Algorithm**: Use the same greedy approach as in part (a):  
1. Start with the largest denomination ($c^k$) and use as many as possible.  
2. Move to the next largest denomination ($c^{k-1}$) and repeat.  

**Proof of Optimality**:  
1. At any step, the greedy choice minimizes the remaining amount $n$.  
2. Let the current remainder be $r$, and suppose the algorithm uses $a_i$ coins of $c^i$ denomination. The remaining amount is $r - a_i \cdot c^i$.  
3. The remainder is always less than $c^i$, so smaller denominations can fully cover it.  
4. Any other solution would require more coins since the denominations are powers of $c$, ensuring no overlaps or gaps.  

---

## c. Counterexample Where Greedy Fails

**Set of Denominations**: $\{1, 3, 4\}$.  

**Example**: For $n = 6$:  
- Greedy algorithm:  
  - Take 1 coin of 4 → Remaining = 2  
  - Take 2 coins of 1 → Total = 3 coins.  

- Optimal solution:  
  - Take 2 coins of 3 → Total = 2 coins.  

**Explanation**:  
The greedy algorithm fails because it does not look ahead to consider combinations of smaller denominations that might minimize the total number of coins.

---

## d. Simple Algorithm for General Denominations

**Problem**: Given $k$ denominations $d_1, d_2, \dots, d_k$ (including $d_1 = 1$) and an amount $n$, find the minimum number of coins.  

**Algorithm**:  
1. Initialize a list `coinsUsed` to store the minimum number of coins for each amount from $0$ to $n$.  
   - Set `coinsUsed[0] = 0$ (0 coins to make 0 cents).  
   - For $i > 0$, set `coinsUsed[i] = \infty` initially.  
2. For each amount $i$ from $1$ to $n$:  
   - Loop through each coin denomination $d_j$.  
   - If $d_j \leq i$, calculate:  
     $$
	 \text{coinsUsed}[i] = \min(\text{coinsUsed}[i], \text{coinsUsed}[i - d_j] + 1).
	 $$  
3. After processing all amounts, `coinsUsed[n]` will hold the minimum number of coins needed.  

**Time Complexity**: $O(nk)$, where $n$ is the amount and $k$ is the number of denominations.  

**Example**:  
Denominations: $\{1, 3, 4\}$, $n = 6$:  
- Start with $coinsUsed = [0, \infty, \infty, \infty, \infty, \infty, \infty]$.  
- For $i = 1$:  
  - Check coins $d_j = 1$:  
    $$\text{coinsUsed}[1] = \text{coinsUsed}[0] + 1 = 1.$$  
- For $i = 2$:  
  - Check coins $d_j = 1$:  
    $$\text{coinsUsed}[2] = \text{coinsUsed}[1] + 1 = 2.$$  
- For $i = 3$:  
  - Check coins $d_j = 1$:  
    $$\text{coinsUsed}[3] = \text{coinsUsed}[2] + 1 = 3.$$  
  - Check coins $d_j = 3$:  
    $$\text{coinsUsed}[3] = \text{coinsUsed}[0] + 1 = 1.$$  
- Repeat until $i = 6$:  
  - $$\text{coinsUsed}[6] = 2$$ (2 coins of 3).  

**Output**: Minimum number of coins for $n = 6$ is $2$.  

This approach is simple to understand and can be implemented with basic loops and conditionals.

---
# 16-2 Scheduling to Minimize Average Completion Time

## a. Scheduling Tasks to Minimize Average Completion Time (Non-preemptive)

**Problem**:  
Given $n$ tasks $a_1, a_2, \dots, a_n$, where each task $a_i$ requires $p_i$ units of processing time, schedule the tasks non-preemptively to minimize the average completion time:  
$$\text{Average Completion Time} = \frac{1}{n} \sum_{i=1}^n c_i,$$  
where $c_i$ is the completion time of task $a_i$.

---

**Algorithm**:  
The optimal solution is to sort tasks in increasing order of their processing times ($p_i$). Execute tasks in this order.  

1. Sort the tasks such that $p_1 \leq p_2 \leq \dots \leq p_n$.  
2. Schedule tasks in this order.  

---

**Proof of Optimality** (Shortest Processing Time First - SPT Rule):  
1. Let $C_i$ represent the completion time of task $a_i$. If the tasks are scheduled in order of increasing $p_i$,  
   $$C_1 = p_1, \quad C_2 = p_1 + p_2, \quad \dots, \quad C_n = \sum_{j=1}^n p_j.$$  
2. The average completion time is:  
   $$\text{Average Completion Time} = \frac{1}{n} \sum_{i=1}^n C_i.$$  
3. Swapping any two tasks $a_i$ and $a_j$ where $p_i > p_j$ increases the average completion time because the smaller task finishes later, increasing the contribution of $p_i$ to the total sum of completion times.  

By scheduling tasks in non-decreasing order of $p_i$, we minimize the contribution of each task's processing time to the total completion time, thereby minimizing the average completion time.

---

**Time Complexity**:  
Sorting the tasks requires $O(n \log n)$, and scheduling them requires $O(n)$.  
Overall time complexity: **$O(n \log n)$**.

---

**Example**:  
Tasks: $a_1, a_2, a_3$ with $p_1 = 2$, $p_2 = 3$, $p_3 = 5$.  
1. Sort tasks by $p_i$: Order is $a_1, a_2, a_3$.  
2. Completion times:  
   - $C_1 = 2$, $C_2 = 2 + 3 = 5$, $C_3 = 2 + 3 + 5 = 10$.  
3. Average completion time:  
   $$\text{Average Completion Time} = \frac{1}{3} (2 + 5 + 10) = \frac{17}{3} \approx 5.67.$$

---

## b. Scheduling with Release Times and Preemption

**Problem**:  
Given $n$ tasks $a_1, a_2, \dots, a_n$, where each task $a_i$ has processing time $p_i$ and release time $r_i$, and preemption is allowed, schedule the tasks to minimize the average completion time.

---

**Algorithm**:  
The optimal strategy is to use a **Shortest Remaining Time First (SRTF)** algorithm:  
1. At any time $t$, consider only the tasks that have been released (i.e., $r_i \leq t$).  
2. Among these tasks, execute the one with the smallest remaining processing time.  
3. If a new task with a smaller remaining time becomes available, preempt the current task and switch to the new task.  

---

**Proof of Optimality**:  
1. At any time $t$, choosing the task with the shortest remaining time minimizes the time the current task contributes to the total completion time for other tasks.  
2. Switching to a newly released task with a smaller remaining time ensures that no time is wasted running a longer task, thus keeping the overall completion time as low as possible.  
3. By continuously prioritizing tasks with the shortest remaining time, we minimize the average completion time.

---

**Time Complexity**:  
1. Maintaining a priority queue of tasks based on remaining time takes $O(\log n)$ for insertion and extraction.  
2. Processing all tasks involves $O(n)$ insertions and extractions.  
Overall time complexity: **$O(n \log n)$**.

---

**Example**:  
Tasks: $a_1$, $a_2$, $a_3$ with:  
- $p_1 = 4$, $p_2 = 3$, $p_3 = 2$.  
- $r_1 = 0$, $r_2 = 1$, $r_3 = 2$.  

1. At $t = 0$, only $a_1$ is available → Start $a_1$.  
2. At $t = 1$, $a_2$ becomes available with smaller remaining time → Switch to $a_2$.  
3. At $t = 2$, $a_3$ becomes available with even smaller time → Switch to $a_3$.  
4. Finish $a_3$, then resume $a_2$, and finally finish $a_1$.  

Completion times:  
- $C_3 = 4$, $C_2 = 7$, $C_1 = 11$.  
Average completion time:  
$$\text{Average Completion Time} = \frac{1}{3} (4 + 7 + 11) = 7.$$

This preemptive strategy minimizes the average completion time.