Output

-useEffect() without dependencies

eg-

useEffect(()=>{
document.title=`${count}`
})

![alt text](src/assets/output1.png)

Output after click (increment counter)
![alt text](src/assets/output.png)

Output for useEffect with Variable

i.e

useEffect(() => {
document.title = `${otherCount}`
}, [otherCount])

![alt text](src/assets/varoutput.png)
