- Uses one state object to store all student form values.
- Inputs are controlled components, meaning their values come from state.
- The spread operator (`...form`) keeps existing data while updating only one field.
- `e` is the event object triggered when the input changes.
- `e.target.value` gives the current typed value from the input.
- Updated values display instantly, showing real-time synced form handling in React.

