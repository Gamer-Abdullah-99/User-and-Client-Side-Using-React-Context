export let data = {
  snacks: "Rio",
  drink: "Coffee",
  authUser: {},
  users: [
    {
      userName: "haider",
      email: "haider@gmail.com",
      password: "123sss555",
      role: "trainer",
    },
    {
      userName: "akram",
      email: "akram@gmail.com",
      password: "xse3sss555",
      role: "student",
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SNACK": {
      return {
        ...state,
        snacks: action.payload,
      };
    }
    case "UPDATE_DRINK": {
      return {
        ...state,
        drink: action.payload,
      };
    }
    case "SIGNUP_USER": {
      console.log(state.users);
      // ...state,
      // users.concat(action.payload),
      let usersClone = state.users.slice(0);
      usersClone.push(action.payload);
      return {
        ...state,
        users: usersClone,
      };
    }
    case "LOGIN_USER": {
      console.log(state.authUser);
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "SIGNOUT_USER": {
      console.log(state.authUser);
      return {
        ...state,
        authUser: null,
      };
    }
    default:
      return state;
  }
}
