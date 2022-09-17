export const currentTime = () => {
  const date = new Date();

  return `${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')} ${date
    .getMilliseconds()
    .toString()
    .padStart(3, '0')}`;
};

export const currentMilitaryTime = () => {
  const date = new Date();

  return `${date.getFullYear()}-${date
    .getMonth()
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
    .getSeconds()
    .toString()
    .padStart(2, '0')} ${date.getMilliseconds().toString().padStart(3, '0')}`;
};
