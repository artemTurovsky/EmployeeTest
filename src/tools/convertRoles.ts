function convertRole(role: string): string {
  let roleName = '';

  switch (role) {
    case "waiter":
      roleName = 'Официант';
      break
    case "driver":
      roleName = 'Водитель';
      break
    case "cook":
      roleName = 'Повар';
      break
    default:
      break;
  }
  return roleName
}

export default convertRole
