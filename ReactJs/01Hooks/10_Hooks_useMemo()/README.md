useMemo()

- It is used to apply Memoization in React
- Memoization is a technique for improving performance of code
- It avoids running expensive calculations on every render by reusing the previous result when dependencies have not changed.

Output before using useMemo - toggling is slow because expensive calculation runs every time.

https://github.com/user-attachments/assets/b88593cb-39ef-46a3-8127-f47f7d29f20c

Output after using useMemo- toggling is fast because expensive calculation runs only when needed.

https://github.com/user-attachments/assets/b7a0350d-05d1-4ac0-b37f-21ac42347b00
