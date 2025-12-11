- useContext allows you to share data across multiple components without passing props manually.
- It removes props-drilling
- Put a data in Provider, and any Component can read it directly using useContext.

Syntax

`<UserContext.Provider value="John">`
`const user = useContext(UserContext);`

Output:

![alt text](/assets/output.png)
