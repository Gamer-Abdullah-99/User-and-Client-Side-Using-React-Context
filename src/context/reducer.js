export let data = {
  snacks: "Rio",
  drink: "Coffee",
  authUser: {},
  studentsData: [],
  users: [
    {
      userName: "haider",
      email: "haider@gmail.com",
      password: "123sss555",
      role: "trainer",
    },
    {
      userName: "abdullah",
      email: "abdullah@gmail.com",
      password: "123456",
      role: "student",
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
    case "SIGNUP_USER": {
      console.log(state.users);
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
        authUser: {},
      };
    }
    case "ADD_STUDENTS": {
      console.log(state.studentsData);
      let studentsDataClone = state.studentsData.slice(0);
      studentsDataClone.push(action.payload);
      return {
        ...state,
        studentsData: studentsDataClone,
      };
    }
    default:
      return state;
  }
}
