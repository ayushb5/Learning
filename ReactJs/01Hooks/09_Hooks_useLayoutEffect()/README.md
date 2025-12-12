useLayoutEffect-

1. It works exactly same as useEffect (with similar syntax)
2. useEffect runs after the DOM is painted on browser screen.
3. useLayoutEffect runs before the DOM is painted on browser screen.

Output-

div1 (useLayoutEffect) runs synchronously after React renders the DOM but before the browser paints it, so any DOM changes here are applied before the user sees them.

div2 (useEffect) updates after the DOM is painted, which can sometimes cause a small flicker.

https://github.com/user-attachments/assets/6866f08b-4858-46d4-a663-759a25f26b77
