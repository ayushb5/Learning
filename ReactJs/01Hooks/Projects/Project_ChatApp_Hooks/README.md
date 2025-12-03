Main Logic-

```js
const sendMsg = () => {
  if (!msg.trim()) return;

  setChat((prev) => [...prev, msg]); //create new array including previous and new message
  setMsg("");
};
```

Output-
![alt text](output1.png)
![alt text](output2.png)
