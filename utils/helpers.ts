import {format} from "date-fns"
export const calcResultNo = (pagination: any, index: number) => {
  const resultNo = (pagination.currentPage - 1) * pagination.limit + index + 1;

  return resultNo;
};

export const dateFormated=(date:any)=>{
  return format(new Date(date), "dd-mm-yyyy")
}
