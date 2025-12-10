useEffect with empty array

used mostly for fetch API

common logic-

~  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])~

  Output-
  ![alt text](src/assets/output.png)