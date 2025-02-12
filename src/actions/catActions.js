export function fetchCats() {
   console.log("Hit fetchCats")
   return (dispatch) => {
      dispatch({type: "LOADING_CATS"})
      return fetch('http://localhost:4000/db')
         .then(resp => resp.json())
         .then(cats => {
            console.log("returning results")
            return dispatch({type: "FETCH_CATS", payload: cats.images})
         })
   }
}
