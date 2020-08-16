const users = [];

const addUser = ({ id, name, party }) => {
  
  name = name.trim().toLowerCase();
  party = party.trim().toLowerCase();
  if(!name || !party) return { error: 'Username and party are required.' };
  const existingUser = users.find((user) => user.party === party && user.name === name);

  
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, party };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInParty = (party) => users.filter((user) => user.party === party);

module.exports = { addUser, removeUser, getUser, getUsersInParty };