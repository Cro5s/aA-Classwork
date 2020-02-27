export const signUp = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user}
  });
}

export const login = user => (
  $.ajax({
    url: `api/user/${user.id}`,
    method: 'GET',
    data: {user}
  })
)

