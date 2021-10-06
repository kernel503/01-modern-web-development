const defaultOptions = { withNames: false, onlyActive: false };

const isActive = ({ isActive }) => isActive;

export const getEmails = (people, { withNames, onlyActive } = defaultOptions) => {
  if (onlyActive) people = people.filter(isActive);

  return people.map(({ name, email }) => (withNames ? `${name} <${email}>` : email)).join(', ');
};

export const getAddresses = (people, { onlyActive } = defaultOptions) => {
  if (onlyActive) people = people.filter(isActive);

  return people
    .map(({ name, address: { line1, line2, city, state } }) =>
      [name, line1, line2, `${city}, ${state}`].filter((e) => e).join('\n')
    )
    .join('\n\n');
};

export const getYoungest = (people) => {
  const [youngest, ...others] = people.sort((personA, personB) => personA.age - personB.age);
  return {
    youngest,
    others,
  };
};
