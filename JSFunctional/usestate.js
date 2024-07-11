function customUseState(initState) {
  // Local “free” variable that ends up within the closure
  let state = initState;
  const setState=(newState)=> {
    console.log("before : ",state);
      state=newState;
    console.log("After",state);
  }
  return [state, setState];
}

const [attr, setAttr] = customUseState('novice')
console.log(attr)
setAttr('expert')
console.log(attr)