export const calcResultNo = (pagination: any, index: number) => {
  const resultNo = (pagination.currentPage - 1) * pagination.limit + index + 1;

  return resultNo;
};
