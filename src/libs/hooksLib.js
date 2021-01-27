import { useState } from "react";

// name of hook = useFormFields
// init state is passed into hook
export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState); // set fields = initialState

  // return array with fields
  // and a callback function that sets the new state based on the field that is updated
  return [
    fields,
    function(event) {
      setValues({
        ...fields,  // return all other fields
        [event.target.id]: event.target.value,  // update the changed field in fields
      });
    }
  ];
}