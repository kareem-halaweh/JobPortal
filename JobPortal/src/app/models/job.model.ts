
export interface Job{
  id:number;
  job_title: string,
  company: string,
  location:string,
  about : string,
  responsibilities:string[],
  type:string,
  date: string,
  salary:string ,
  skills: string[],
  imageUrl: string,
  linkcompany:string,
  linkjob:string,
  category:'Graphic Design'|'IT'|'Marketing'|'Finance',
}
