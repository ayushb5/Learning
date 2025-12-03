Task 1- Update the values using useState to Increment and Decrement
![alt text](Task1_output.png)

Task 2- const increment = () => {
           setCount(counter + 1);
           setCount(counter + 1);
           setCount(counter + 1);
    }

    //  React will batch these updates in the same event cycle 
    // — meaning instead of increasing 3 times, the value will update only once.
    // So if counter = 0, after running this function, the final value will be 1, not 3.

//Correct Way to Increment Multiple Times

const increment = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};

Output-
![alt text](Task2_output.png)